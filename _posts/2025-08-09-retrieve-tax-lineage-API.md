---
layout: post
title: "How to Retrieve full taxonomy lineage based on a certain rank from NCBI taxonomy database using Python API"
date: 2025-08-09
description: 
tags: taxonomy, microbiome, biopython, ncbi-api
categories: bioinformatics
giscus_comments: false
related_posts: false
pretty_table: true  # this will enable the pretty table feature for this post.
published: true
toc:
  sidebar: right
---


## **Problem**
---

In microbiome data analysis, taxonomy assignments—derived from marker genes or whole genomes—are essential for understanding microbial ecosystems when paired with abundance data. These assignments are not limited to single taxon names but are structured as hierarchical lineages across multiple taxonomic ranks, offering richer biological insights. However, researchers often only have partial taxonomy data (e.g., names at a single rank), which limits interpretability and analytical depth.

## **Solution**
---
To unlock the full potential of taxonomy-based insights, incomplete taxon names can be mapped to their complete hierarchical lineages by retrieving standardized taxonomy data from the NCBI database. This approach enriches the dataset and supports more robust biological interpretation.

## **Solution Implementation**
---
To retrieve full taxonomy lineages, one can use either the NCBI Taxonomy web browser or a programmatic method. The programmatic approach is highly efficient and advantageous, allowing automation of repetitive retrieval for multiple taxa at once. The NCBI E-utilities Python API enables access to the web server directly from Python scripts, integrating seamlessly with other steps in a microbiome data analysis pipeline.

This section includes two parts:

1. A reusable function to download and parse the full taxonomy lineage for a given taxon at a single rank.
2. An example demonstrating how to apply this function to multiple taxa, using a food fermentation microbiome dataset as a case study.

### Reusable Script

The customizable function below retrieves the full lineage using the Bio.Entrez.esearch(), Bio.Entrez.efetch(), and Bio.Entrez.read() functions from the **Bio.Entrez** submodule in the Biopython package.

The input is a taxon string at a given rank, and the output is a list of taxa from higher to lower ranks. You can use this function as is or adapt it for your specific needs.

```python
from Bio import Entrez
import pandas as pd
import os


def get_taxonomy_lineage(taxon_name: str, rank: str = "Genus") -> list | None:
    """Fetches complete taxonomy lineage based on the known taxonomic level (the highest resolution available) from the NCBI taxonomy database.

    Args:
        rank (str): The taxonomic rank to search for (default is "Genus"). "Family", "Order", "Class", "Phylum", or "Kingdom" can also be used.
        taxon_name (str): The name of the taxon to search for. If None, the function will not perform a search.

    Returns:
        list: A list containing the lineage of the taxon, or None if not found.
        The lineage includes domain, kingdom (or clade), phylum, class, order, and family.
        If the taxon is not found, it returns None.
        If the rank is invalid, it returns None with an error message.
        If the taxon_name is None, it returns None with an error message.
    """
    
    #--- Input validation ---
    # Check if taxon_name is provided
    if taxon_name is None:
        print("Taxon name is None. Please provide a valid taxon name.")
        return None
    # Check if rank is valid
    if rank not in ["Genus", "Family", "Order", "Class", "Phylum", "Kingdom"]:
        print(f"Invalid rank: {rank}. Please use one of the following ranks: Genus, Family, Order, Class, Phylum, Kingdom.")
        return None


    #--- Set the email for NCBI Entrez ---
    # This is required by NCBI to track usage and for contact in case of issues
    # Replace with your email address
    Entrez.email = os.getenv("NCBI_EMAIL")


    #--- Search for the genus in the NCBI taxonomy database ---
    # The search term is formatted to include the genus name followed by "[Genus]" to specify the search field
    # This ensures that the search is limited to the genus level in the taxonomy database
    handle = Entrez.esearch(db="taxonomy", term=f"{taxon_name}[{rank}]")
    record = Entrez.read(handle) # Read the search results
    handle.close() # Close the handle to free resources


    #--- Check if any IDs were found for the genus ---
    # If no IDs are found, print a message and return None
    # This is important to handle cases where the genus does not exist in the database
    if not record["IdList"]:
        print(f"No taxonomy ID found for {rank}: {taxon_name}") 
        return None


    #--- Fetch the taxonomy record using the first ID found ---
    # The first ID in the IdList is used to fetch the complete taxonomy record
    # This is because the search may return multiple IDs, but we are interested in the first one
    # The efetch function retrieves the record in XML format for easier parsing
    # The record contains detailed information about the taxonomy, including lineage
    # The lineage includes domain, kingdom (or clade), phylum, class, order, and family
    taxid = record["IdList"][0] # Get the first taxonomy ID from the search results
    handle = Entrez.efetch(db="taxonomy", id=taxid, retmode="xml") 
    records = Entrez.read(handle) # Read the fetched record
    handle.close() # Close the handle to free resources

    #--- Extract the lineage from the fetched record ---
    # The lineage is extracted from the first record in the list of records returned by efetch
    # The lineage is a string that includes the complete taxonomy hierarchy for the genus
    # It is formatted as "domain; kingdom; phylum; class; order; family"
    lineage = records[0]["Lineage"] # Extract the lineage from the record, including domain, kingdom (or clade), phylum, class, order, and family
    if not lineage == None:
        lineage_list = lineage.split("; ") # Split the lineage into a list
    
    return lineage_list
```

### Example
The example demonstrates applying the function to multiple bacterial taxa using loop iteration in Python, maximizing the efficiency of the Python API. You can adapt the code by replacing it with your own input data.

```python
# Define a list of target genera: Fermenting bacteria
genera = ['Acetobacter', 'Gluconacetobacter', 'Lentibacillus', 'Brevibacterium', 'Erwinia', 'Enterobacter', 'Pantoea', 
          'Kosakonia', 'Lactobacillus', 'Companilactobacillus', 'Schleiferilactobacillus', 'Ligilactobacillus', 
          'Lactiplantibacillus', 'Loigolactobacillus', 'Paucilactobacillus', 'Limosilactobacillus', 'Fructilactobacillus', 
          'Acetilactobacillus', 'Secundilactobacillus', 'Lentilactobacillus', 'Carnobacterium', 'Weissella', 'Oenococcus', 
          'Enterococcus', 'Tetragenococcus', 'Streptococcus', 'Lactococcus', 'Pediococcus', 'Periweissella', 'Leuconostoc', 
          'Marinilactobacillus', 'Alkalibacterium', 'Eggerthella', 'Propionibacterium', 'Staphylococcus', 'Kocuria']
```

```python
# Initialize an empty DataFrame to store all lineages
df_all_lineages = pd.DataFrame()

# Loop through each genus and get the taxonomy lineage
for genus in genera:
    print(f"Processing genus: {genus}")
    lineage = get_taxonomy_lineage(rank="Genus", taxon_name=genus)
    
    # Skip if lineage is None or does not belong to Bacteria
    if not lineage or lineage[1] != "Bacteria":
        print(f"Skipping genus: {genus} (No lineage or not Bacteria)")
        continue

    # Create a DataFrame for the current genus
    try:
        df_genus_lineage = pd.DataFrame([lineage[1:]], columns=['Domain', 'Kingdom', 'Phylum', 'Class', 'Order', 'Family'])
        df_genus_lineage['Genus'] = genus
        
        # Append to the main DataFrame
        df_all_lineages = pd.concat([df_all_lineages, df_genus_lineage], ignore_index=True)
    except Exception as e:
        print(f"Error processing genus {genus}: {e}")
```

The first rows of the output table is as below.

|   | Domain   | Kingdom         | Phylum           | Class                 | Order              | Family             | Genus              |
|---|----------|----------------|------------------|-----------------------|--------------------|--------------------|--------------------|
| 0 | Bacteria | Pseudomonadati | Pseudomonadota   | Alphaproteobacteria   | Acetobacterales    | Acetobacteraceae   | Acetobacter        |
| 1 | Bacteria | Pseudomonadati | Pseudomonadota   | Alphaproteobacteria   | Acetobacterales    | Acetobacteraceae   | Gluconacetobacter  |
| 2 | Bacteria | Bacillati      | Bacillota        | Bacilli               | Bacillales         | Bacillaceae        | Lentibacillus      |
| 3 | Bacteria | Bacillati      | Actinomycetota   | Actinomycetes         | Micrococcales      | Brevibacteriaceae  | Brevibacterium     |
| 4 | Bacteria | Pseudomonadati | Pseudomonadota   | Gammaproteobacteria   | Enterobacterales   | Erwiniaceae        | Erwinia            |



