---
layout: post
title: 'How to Import Excel Files in Python' 
date: 2024-12-24 
description: 
tags: python; spreadsheet; data-analysis 
categories: statistics
giscus_comments: false
related_posts: false
published: true
pretty_table: true  # this will enable the pretty table feature for this post. 
toc:
  sidebar: left
---

## Purpose
Ever struggled to import Excel data into Python for analysis? This post will guide you step-by-step on how to use **Pandas** to handle Excel files effortlessly, even for complex datasets.

---

## Excel Data Essentials
Excel is a go-to tool for managing and analyzing data. Let's refresh some key terms to ensure smooth communication:

- **Workbook**: The entire Excel file.
- **Worksheet**: Individual sheets (or tabs) within the workbook.
- **Header**: Labels at the top defining columns (e.g., A, B, C).
- **Cells**: Data units located at row-column intersections, like A1.

If these terms feel familiar, great! If not, think of them as the building blocks for working with Excel in Python.

---

## Everyday Functionality: Importing Excel Files in Pandas

### Real-World Scenario: Metabolomics Data
Imagine you're analyzing LC/MS metabolomics data from animal samples, with additional metadata. This was my experience at the metabolomics research center, where I worked with a dataset containing:

1. **Biomarker Assay Worksheet**: Measurements for over 100 metabolites.
<div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/snapshot_biomarker_worksheet.png" class="img-fluid rounded z-depth-1" %}
</div>

2. **Metadata Worksheet**: Sample information.
<div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/snapshot_metadata_worksheet.png" class="img-fluid rounded z-depth-1" %}
</div>

---

## Step-by-Step Guide

### 1. Import Multiple Worksheets
Start by loading a specific worksheet while skipping descriptive rows:
```python
import pandas as pd 

df_biomarker_assay = pd.read_excel(
    'example-biomarker-assay.xlsx',
    sheet_name='Biomarker assay',
    skiprows=11
)
```

```
>>> df_biomarker_assay.head()
  Sample ID  Creatinine    Glycine     Alanine     Serine Histamine  ...  C16:1OH     C16OH     C18:2     C18:1       C18   C18:1OH
0  LODs(uM)    0.443131   0.859107    0.340909   0.042433  0.013605  ...  0.04906  0.042617  0.058089  0.041081  0.023651  0.056784
1         1   14.600000  51.600000  264.000000  65.100000     < LOD  ...    < LOD     < LOD     < LOD     < LOD     < LOD     < LOD
2         2   14.000000  98.100000  338.000000  87.000000     < LOD  ...    < LOD     < LOD     < LOD     < LOD     < LOD     < LOD
3         3   11.200000  92.000000  329.000000  74.500000     < LOD  ...    < LOD     < LOD     < LOD  0.045089     < LOD     < LOD
4         4   11.600000  77.500000  200.000000  62.400000     < LOD  ...    < LOD     < LOD     < LOD   0.04134   0.02505     < LOD

[5 rows x 144 columns]
```

### 2. Select Specific Rows and Columns
To limit the data to a manageable range:
```python
df_biomarker_assay_selected = pd.read_excel(
    'example-biomarker-assay.xlsx',
    sheet_name='Biomarker assay',
    skiprows=11,
    usecols='A:EN',
    nrows=31
)
```

### 3. Verify Non-Empty Rows and Columns
Check for completeness in the imported data:
```python
nonempty_rows = df_biomarker_assay_selected.dropna(how='all').index.tolist()
count_rows = len(nonempty_rows)

nonempty_cols = df_biomarker_assay_selected.dropna(how='all', axis=1).columns.tolist()
count_cols = len(nonempty_cols)
```

### 4. Validate Data Import
Inspect the first and last rows of your dataset to verify that the import matches the source.

---

## Special Use Cases with Pandas

### 1. Formula-Generated Data
Excel formulas, like those generating the column in the **Metadata** worksheet, retain their calculated values when imported:
```python
df_metadata = pd.read_excel('example-biomarker-assay.xlsx', sheet_name='Metadata')
```

### 2. Filtered Data
Filtered tables (e.g., showing only filtered rows in Excel) are fully imported, including the hidden rows.

### 3. Binary Workbook Files (.xlsb)
For `.xlsb` files, use the `pyxlsb` library to read the data.

---

## Best Practices for Importing Excel Files
To streamline your workflow, follow these tips:
- Use `skiprows` to ignore unnecessary content.
- Specify `usecols` and `nrows` for better performance.
- Confirm data integrity by checking non-empty rows and columns.
- Choose the correct engine for specialized file formats (e.g., `.xlsb`).

By following these steps, you'll efficiently prepare your data for analysis, no matter the complexity of the Excel files.

---

## Final Thoughts
Importing Excel files in Python doesn't have to be daunting. With a clear process, even the most complex datasets become manageable. Try these steps on your own files, and let me know how it goes!

For any questions or advanced use cases, feel free to drop a comment or reach out. Happy coding! 

---

## References
- [Excel file format](https://support.microsoft.com/en-us/office/file-formats-that-are-supported-in-excel-0943ff2c-6014-4e8d-aaea-b83d51d46247)
- [Overview of Excel table](https://support.microsoft.com/en-us/office/overview-of-excel-tables-7ab0bb7d-3a9e-4b56-a3c9-6c94334e492c)
- [Pandas API doc](https://pandas.pydata.org/docs/reference/api/pandas.read_excel.html)