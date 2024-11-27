---
layout: page
title: "Exploring Ames Housing Prices: A Data-Driven Analysis" 
description: Exploratory data analysis for house price prediction, a Kaggle competition
img: assets/img/house-property-copy.png
redirect: 
importance: 3
category: data analysis 
---

<style>
        table {
            border-collapse: collapse;
            width: 100%;
            font-family: Arial, sans-serif;
        }
        th, td {
            border: 1px solid grey;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
</style>


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
      <th>Feature</th>
      <th>Eta_squared</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Neighborhood</td>
      <td>0.57</td>
      <td>Physical locations within Ames city limits</td>
    </tr>
    <tr>
      <td>ExterQual</td>
      <td>0.49</td>
      <td>Evaluates the quality of the material on the exterior</td>
    </tr>
    <tr>
      <td>BsmtQual</td>
      <td>0.48</td>
      <td>Evaluates the height of the basement</td>
    </tr>
    <tr>
      <td>KitchenQual</td>
      <td>0.46</td>
      <td>Kitchen quality</td>
    </tr>
    <tr>
      <td>GarageFinish</td>
      <td>0.33</td>
      <td>Interior finish of the garage</td>
    </tr>
    <tr>
      <td>Foundation</td>
      <td>0.30</td>
      <td>Type of foundation</td>
    </tr>
    <tr>
      <td>HeatingQC</td>
      <td>0.21</td>
      <td>Heating quality and condition</td>
    </tr>
  </tbody>
</table>

Table 2: Top Predictors (numeric variables) by Spearman Correlation Estimate 
<table id="table">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Correlation</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>OverallQual</td>
      <td>0.81</td>
      <td>Rates the overall material and finish of the house</td>
    </tr>
    <tr>
      <td>GrLivArea</td>
      <td>0.72</td>
      <td>Above grade (ground) living area square feet</td>
    </tr>
    <tr>
      <td>GarageCars</td>
      <td>0.68</td>
      <td>Size of garage in car capacity</td>
    </tr>
    <tr>
      <td>YearBuilt</td>
      <td>0.67</td>
      <td>Original construction date</td>
    </tr>
    <tr>
      <td>GarageArea</td>
      <td>0.64</td>
      <td>Size of garage in square feet</td>
    </tr>
    <tr>
      <td>FullBath</td>
      <td>0.63</td>
      <td>Full bathrooms above grade</td>
    </tr>
    <tr>
      <td>TotalBsmtSF</td>
      <td>0.59</td>
      <td>Total square feet of basement area</td>
    </tr>
    <tr>
      <td>YearRemodAdd</td>
      <td>0.58</td>
      <td>Remodel date (same as construction date if no remodeling)</td>
    </tr>
    <tr>
      <td>GarageYrBlt</td>
      <td>0.57</td>
      <td>Year garage was built</td>
    </tr>
    <tr>
      <td>1stFlrSF</td>
      <td>0.56</td>
      <td>First Floor square feet</td>
    </tr>
    <tr>
      <td>TotRmsAbvGrd</td>
      <td>0.51</td>
      <td>Total rooms above grade (does not include bathrooms)</td>
    </tr>
    <tr>
      <td>Fireplaces</td>
      <td>0.51</td>
      <td>Number of fireplaces</td>
    </tr>
  </tbody>
</table>

## Applications: Real-World Impacts 
This project showcases how data-driven insights can guide property investments, urban development, and market strategies. By understanding what drives house prices, stakeholders can make better decisions that align with buyer preferences and market demands. 

## Next Steps: Where Do We Go from Here? 
Building on these exploratory insights, the next phase involves predictive modeling. By leveraging identified patterns and preprocessing strategies, we aim to develop models that accurately forecast house prices. 
