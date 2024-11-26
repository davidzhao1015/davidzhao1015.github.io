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

Table 1: Top Predictors (categorical variables) by Effect Size and Correlation 
<table>
  <thead>
    <tr>
      <th style="text-align:left;">Feature</th>
      <th style="text-align:center;">Eta_squared</th>
      <th style="text-align:right;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left;">Neighborhood</td>
      <td style="text-align:center;">0.568543</td>
      <td style="text-align:right;">Physical locations within Ames city limits</td>
    </tr>
    <tr>
      <td style="text-align:left;">ExterQual</td>
      <td style="text-align:center;">0.493060</td>
      <td style="text-align:right;">Evaluates the quality of the material on the exterior</td>
    </tr>
    <tr>
      <td style="text-align:left;">BsmtQual</td>
      <td style="text-align:center;">0.481337</td>
      <td style="text-align:right;">Evaluates the height of the basement</td>
    </tr>
    <tr>
      <td style="text-align:left;">KitchenQual</td>
      <td style="text-align:center;">0.462710</td>
      <td style="text-align:right;">Kitchen quality</td>
    </tr>
    <tr>
      <td style="text-align:left;">GarageFinish</td>
      <td style="text-align:center;">0.327065</td>
      <td style="text-align:right;">Interior finish of the garage</td>
    </tr>
    <tr>
      <td style="text-align:left;">Foundation</td>
      <td style="text-align:center;">0.295928</td>
      <td style="text-align:right;">Type of foundation</td>
    </tr>
    <tr>
      <td style="text-align:left;">HeatingQC</td>
      <td style="text-align:center;">0.214752</td>
      <td style="text-align:right;">Heating quality and condition</td>
    </tr>
  </tbody>
</table>


Table 2: Top Predictors (numeric variables) by Spearman Correlation Estimate 

<table>
  <thead>
    <tr>
      <th style="text-align:left;">Feature</th>
      <th style="text-align:right;">Correlation</th>
      <th style="text-align:left;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left;">OverallQual</td>
      <td style="text-align:right;">0.8075842966430010</td>
      <td style="text-align:left;">Rates the overall material and finish of the house</td>
    </tr>
    <tr>
      <td style="text-align:left;">GrLivArea</td>
      <td style="text-align:right;">0.719779223011482</td>
      <td style="text-align:left;">Above grade (ground) living area square feet</td>
    </tr>
    <tr>
      <td style="text-align:left;">GarageCars</td>
      <td style="text-align:right;">0.684793385198476</td>
      <td style="text-align:left;">Size of garage in car capacity</td>
    </tr>
    <tr>
      <td style="text-align:left;">YearBuilt</td>
      <td style="text-align:right;">0.6682631183907660</td>
      <td style="text-align:left;">Original construction date</td>
    </tr>
    <tr>
      <td style="text-align:left;">GarageArea</td>
      <td style="text-align:right;">0.6409778025977150</td>
      <td style="text-align:left;">Size of garage in square feet</td>
    </tr>
    <tr>
      <td style="text-align:left;">FullBath</td>
      <td style="text-align:right;">0.6302125596519220</td>
      <td style="text-align:left;">Full bathrooms above grade</td>
    </tr>
    <tr>
      <td style="text-align:left;">TotalBsmtSF</td>
      <td style="text-align:right;">0.5891822102922280</td>
      <td style="text-align:left;">Total square feet of basement area</td>
    </tr>
    <tr>
      <td style="text-align:left;">YearRemodAdd</td>
      <td style="text-align:right;">0.5780832939615990</td>
      <td style="text-align:left;">Remodel date (same as construction date if no remodeling)</td>
    </tr>
    <tr>
      <td style="text-align:left;">GarageYrBlt</td>
      <td style="text-align:right;">0.5691447435703280</td>
      <td style="text-align:left;">Year garage was built</td>
    </tr>
    <tr>
      <td style="text-align:left;">1stFlrSF</td>
      <td style="text-align:right;">0.555504895937001</td>
      <td style="text-align:left;">First Floor square feet</td>
    </tr>
    <tr>
      <td style="text-align:left;">TotRmsAbvGrd</td>
      <td style="text-align:right;">0.51420629865103</td>
      <td style="text-align:left;">Total rooms above grade (does not include bathrooms)</td>
    </tr>
    <tr>
      <td style="text-align:left;">Fireplaces</td>
      <td style="text-align:right;">0.5070275921113580</td>
      <td style="text-align:left;">Number of fireplaces</td>
    </tr>
  </tbody>
</table>

## Applications: Real-World Impacts 
This project showcases how data-driven insights can guide property investments, urban development, and market strategies. By understanding what drives house prices, stakeholders can make better decisions that align with buyer preferences and market demands. 

## Next Steps: Where Do We Go from Here? 
Building on these exploratory insights, the next phase involves predictive modeling. By leveraging identified patterns and preprocessing strategies, we aim to develop models that accurately forecast house prices. 
