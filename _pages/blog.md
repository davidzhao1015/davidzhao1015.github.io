---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 1
pagination:
  enabled: false
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

<!-- Featured Posts Section (optional) -->
{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}
<br>
<h2 class="section-heading">Featured Posts</h2>
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

<!-- Category Overview Cards -->
<h2 class="section-heading">Explore by Category</h2>
<div class="container category-overview-cards">
  {% comment %}Get all unique categories from posts{% endcomment %}
  {% assign all_categories = site.posts | map: 'categories' | join: ',' | split: ',' | uniq | sort %}
  
  {% for category in all_categories %}
    {% if category != '' %}
      {% comment %}Get posts for this category{% endcomment %}
      {% assign category_posts = site.posts | where_exp: "post", "post.categories contains category" | sort: 'date' | reverse %}
      
      <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}" class="category-card-link">
        <div class="card category-overview-card hoverable mb-4">
          <div class="row g-0">
            <!-- Left side: Text content -->
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="category-card-title">
                  <i class="fa-solid fa-tag"></i> {{ category | capitalize }}
                  <span class="badge bg-secondary">{{ category_posts.size }} post{% if category_posts.size != 1 %}s{% endif %}</span>
                </h3>
                
                <p class="category-description">
                  {% if category_posts.size > 0 %}
                    Discover {{ category_posts.size }} article{% if category_posts.size != 1 %}s{% endif %} covering topics like 
                    {% assign recent_posts = category_posts | slice: 0, 3 %}
                    {% for post in recent_posts %}
                      <em>{{ post.title | truncate: 40 }}</em>{% if forloop.last %}.{% else %}, {% endif %}
                    {% endfor %}
                  {% else %}
                    Explore articles in this category.
                  {% endif %}
                </p>
                
                <div class="category-meta">
                  <span class="recent-update">
                    <i class="fa-solid fa-clock"></i> 
                    Latest: {{ category_posts.first.date | date: '%B %d, %Y' }}
                  </span>
                </div>
                
                <div class="view-category-btn">
                  <span>View all posts <i class="fa-solid fa-arrow-right"></i></span>
                </div>
              </div>
            </div>
            
            <!-- Right side: Image -->
            <div class="col-md-4">
              <div class="category-image-wrapper">
                {% comment %}Default placeholder image - can be customized per category{% endcomment %}
                <div class="category-placeholder-image">
                  <i class="fa-solid fa-layer-group fa-3x"></i>
                  <p class="category-label">{{ category | upcase }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    {% endif %}
  {% endfor %}
</div>

</div>