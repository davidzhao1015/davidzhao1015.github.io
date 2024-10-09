---
layout: post
title: Annotating Carbohydrate-Active Enzymes in Bacterial Genomes with Python
date: 2024-10-09 
description: 
tags: 
categories: genomics-analysis
giscus_comments: false
related_posts: false
---

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/annotate-bacteria-genomes.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/annotate-bacteria-genomes.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

{% endif %}
{:/nomarkdown}