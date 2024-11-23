---
layout: page
title: "Exploring Ames Housing Prices: A Data-Driven Analysis" 
description: Exploratory Data Analysis for House Price Prediction, a Kaggle competition
img: assets/img/house-property-copy.png
redirect: 
importance: 3
category: data analysis 
---


## Introductory 

Welcome to our interactive project page on Ames Housing Prices. Using cutting-edge data analysis techniques, we delve into key factors driving home values. Explore the relationships between property features, neighborhood characteristics, and sale prices to uncover actionable insights for buyers, sellers, and industry professionals. 

<div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/eda-house-price-distribution.png" class="img-fluid rounded z-depth-1 w-50 d-block mx-auto" zoomable=true %}
</div>
<div class="caption">
Figure 1: The histogram showing the distribution of SalePrice, labeled to showcase skewness and the need for transformations.
</div>


## Exploratory Insights: Understanding the Data 

This section offers an overview of the data we explored. The Ames dataset includes 79 variables detailing physical property features, construction quality, and more. By visualizing patterns, we aim to extract meaningful insights that support predictive modeling. 

<div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/eda-spearman-house.png" class="img-fluid rounded z-depth-1 w-60 d-block mx-auto" zoomable=true %}
</div>
<div class="caption">
Figure 2: Correlation heatmaps (Spearman correlations) for numeric variables against SalePrice.
</div>


## Data Cleaning and Preprocessing: Preparing the Data for Analysis 
Accurate results require clean data. In this phase, we handled missing values, normalized skewed distributions, and removed significant outliers. These steps enhanced the dataset’s reliability for model training and prediction. 

<div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/eda-outlier-pca.png" class="img-fluid rounded z-depth-1 w-80 d-block mx-auto" zoomable=true %}
</div>
<div class="caption">
Figure 3: MDS plot illustrating multivariate distribution before and after outlier removal. 
</div>

## Key Findings: What Influences House Prices the Most? 
Our analysis identifies several critical factors influencing house prices in Ames. Variables like construction quality (OverallQual), above-ground living area (GrLivArea), and garage capacity (GarageCars) are top predictors, alongside categorical variables like Neighborhood and KitchenQual.”

Key Visuals:
- The combined effect size and correlation rankings for top predictors (categorical and numeric) visualized as a ranked bar plot.
- A scatter plot or box plot illustrating the impact of OverallQual on SalePrice.

## Applications: Real-World Impacts 
This project showcases how data-driven insights can guide property investments, urban development, and market strategies. By understanding what drives house prices, stakeholders can make better decisions that align with buyer preferences and market demands. 

Key Visuals:
- Example plots showing differences in house prices across neighborhoods.
- Heatmaps of categorical feature impacts.

## Next Steps: Where Do We Go from Here? 
Building on these exploratory insights, the next phase involves predictive modeling. By leveraging identified patterns and preprocessing strategies, we aim to develop models that accurately forecast house prices. 

Key Visuals:
- A flowchart of the data analysis and modeling pipeline.
- Placeholder visuals hinting at the future integration of machine learning models.
