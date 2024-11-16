---
layout: page
title: Exploratory Data Analysis for House Price Prediction, a Kaggle competition
description: "Jupyter notebook for exploratory data analysis (EDA) on the House Prices: Advanced Regression Techniques dataset from Kaggle."
img: assets/img/house-property.jpg
redirect: 
importance: 3
category: data analysis 
---

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/house-price-EDA.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/house-price-EDA.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

{% endif %}
{:/nomarkdown}