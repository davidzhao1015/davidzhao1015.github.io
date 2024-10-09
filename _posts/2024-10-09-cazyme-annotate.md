---
layout: post
title: a post with jupyter notebook
date: 2023-07-04 08:57:00-0400
description: an example of a blog post with jupyter notebook
tags: formatting jupyter
categories: sample-posts
giscus_comments: true
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