---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}
  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2 class="blog-subtitle">{{ site.blog_subtitle }}</h2>
    <p class="blog-description">{{ site.blog_intro }}</p>
  </div>
{% endif %}

{% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site.display_categories.size > 0 %}
  <div class="tag-category-list">
    <ul class="p-0 m-0">
      {% for tag in site.display_tags %}
        <li>
          <i class="fa-solid fa-hashtag fa-sm"></i> <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
      {% if site.display_categories.size > 0 and site.display_tags.size > 0 %}
        <p>&bull;</p>
      {% endif %}
      {% for category in site.display_categories %}
        <li>
          <i class="fa-solid fa-tag fa-sm"></i> <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
{% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
<br>
<div class="container featured-posts">
  {% assign is_even = featured_posts.size | modulo: 2 %}
  <div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
    {% for post in featured_posts %}
    <div class="col mb-4">
      <a href="{{ post.url | relative_url }}">
        <div class="card hoverable">
          <div class="row g-0">
            <div class="col-md-12">
              <div class="card-body">
                <div class="float-right">
                  <i class="fa-solid fa-thumbtack fa-xs"></i>
                </div>
                <h3 class="card-title text-lowercase">{{ post.title }}</h3>
                <p class="card-text">{{ post.description }}</p>

                {% if post.external_source == blank %}
                  {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                {% else %}
                  {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                {% endif %}
                {% assign year = post.date | date: "%Y" %}

                <p class="post-meta">
                  {{ read_time }} min read &nbsp; &middot; &nbsp;
                  <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
                    <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
</div>
<hr>
{% endif %}

<!-- Category Cards with Post Lists -->
<div class="container category-cards">
  <div class="row">
    {% comment %}Get all unique categories from posts{% endcomment %}
    {% assign all_categories = site.posts | map: 'categories' | join: ',' | split: ',' | uniq | sort %}
    
    {% for category in all_categories %}
      {% if category != '' %}
        {% comment %}Get posts for this category{% endcomment %}
        {% assign category_posts = site.posts | where_exp: "post", "post.categories contains category" | sort: 'date' | reverse %}
        
        <div class="col-12 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title category-title">
                <i class="fa-solid fa-tag"></i> {{ category | capitalize }}
                <span class="badge bg-secondary">{{ category_posts.size }}</span>
              </h2>
              
              <!-- Post list within card -->
              <ul class="post-list-in-card">
                {% for post in category_posts limit: 10 %}
                  <li>
                    <div class="post-item">
                      <h4>
                        {% if post.redirect == blank %}
                          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                        {% elsif post.redirect contains '://' %}
                          <a href="{{ post.redirect }}" target="_blank">
                            {{ post.title }}
                            <i class="fa-solid fa-external-link-alt fa-xs"></i>
                          </a>
                        {% else %}
                          <a href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
                        {% endif %}
                      </h4>
                      
                      {% if post.description %}
                        <p class="post-description">{{ post.description }}</p>
                      {% endif %}
                      
                      <p class="post-meta">
                        {% if post.external_source == blank %}
                          {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                        {% else %}
                          {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                        {% endif %}
                        
                        <i class="fa-solid fa-clock"></i> {{ read_time }} min read
                        &nbsp;&middot;&nbsp;
                        <i class="fa-solid fa-calendar"></i> {{ post.date | date: '%B %d, %Y' }}
                        
                        {% if post.tags.size > 0 %}
                          &nbsp;&middot;&nbsp;
                          {% for tag in post.tags limit:3 %}
                            <i class="fa-solid fa-hashtag"></i>{{ tag }}{% unless forloop.last %}, {% endunless %}
                          {% endfor %}
                        {% endif %}
                      </p>
                    </div>
                  </li>
                {% endfor %}
                
                {% if category_posts.size > 10 %}
                  <li class="view-all">
                    <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
                      <i class="fa-solid fa-arrow-right"></i> View all {{ category_posts.size }} posts in {{ category }}
                    </a>
                  </li>
                {% endif %}
              </ul>
            </div>
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>

</div>