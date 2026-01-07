---
layout: post
title: Worked Example for Reproducible Power Analysis in Python
date: 2026-01-05
description: Power analysis for alpha diversity differences in Crohn's disease microbiome studies
tags: power-analysis; Jupyter; Python; Evident
categories:
giscus_comments: false
related_posts: false
published: true
---

{::nomarkdown}
{% assign jupyter_path = "assets/jupyter/demo-power-analysis-evident.ipynb" | relative_url %}
{% capture notebook_exists %}{% file_exists assets/jupyter/power-analysis-sspa-case-study.ipynb %}{% endcapture %}
{% if notebook_exists == "true" %}
{% jupyter_notebook jupyter_path %}
{% else %}

{% endif %}
{:/nomarkdown}