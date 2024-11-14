---
layout: post
title: 'How to Run R Code in Jupyter Notebook within VS Code: A Step-by-Step Guide'
date: 2024-11-14
description: 
tags: 
categories: 
giscus_comments: false
related_posts: false
published: true
toc:
  sidebar: left
---

## Introduction

Jupyter Notebook is an invaluable tool for data scientists, researchers, and developers, enabling them to create and share computational documents seamlessly. With the added power of an integrated development environment (IDE) like Visual Studio Code (VS Code), you can run Jupyter Notebook locally and access an array of helpful extensions that enhance your workflow.

However, despite Jupyter Notebook’s broad support for programming languages like Python, it doesn’t natively support R—something I quickly discovered while trying to use it for a blogging project. Determined to make it work, I embarked on a journey that involved scouring solutions online, seeking advice from the programming community, and leveraging the power of ChatGPT 4.0. Through a mix of trial, error, and persistence, I finally uncovered a method to run R code in Jupyter Notebook within VS Code.

In this blog post, I’m excited to share a step-by-step guide that will help others in the same situation. I’ll also walk you through the troubleshooting process that eventually led to my solution, so you can learn from my experience and avoid the roadblocks I encountered.

## Step-by-Step Guide to Install R Kernel in Jupyter Notebook

### 1. Verify R Installation
Ensure R is installed by checking its version:

```bash
R --version
```

### 2. Verify Jupyter Notebook Installation
Make sure Python is installed and accessible in your PATH. Then, check for Jupyter:

```bash
python --version
```

```bash
jupyter --version
```

To confirm Jupyter Notebook is working, run:

```bash
jupyter notebook
```

This should open a Jupyter Notebook in your web browser. If there are issues, install Jupyter using:

```bash
pip install jupyter
```

### 3. Check if Jupyter Directory is in PATH
Ensure the Jupyter directory is included in your PATH:

```bash
echo $PATH
```

The PATH environment variable tells the system where to find executable files when you run a command.

### 4. Install `IRkernel` Package in R
Install the `IRkernel` package in R:

```r
install.packages('IRkernel')
```

### 5. Register R Kernel with Jupyter
Run the following command in your R terminal (not the interactive R console):

```r
IRkernel::installspec(user = FALSE)
```

Setting `user = FALSE` makes the kernel available for all users. Use `user = TRUE` if you prefer a user-specific installation.

#### Common Error and Solution
If you encounter this error:

```
Error in IRkernel::installspec(user = FALSE) :
jupyter-client has to be installed but “jupyter kernelspec --version” exited with code 127.
In addition: Warning message:
In system2("jupyter", c("kernelspec", "--version"), FALSE, FALSE) :
error in running command
```

Run the command in the R terminal instead of the R console to resolve it.

### 6. Create a New Jupyter Notebook in VS Code
Restart VS Code and create a new Jupyter Notebook. Select the R kernel to start coding in R within Jupyter Notebook.

## Additional Tips

- Install R Packages in Jupyter: You can install R packages directly in a Jupyter cell by using install.packages("package_name").
- Switch Between Python and R Kernels: If you want to mix Python and R code in a Jupyter Notebook, you can use rpy2, a package that allows for inter-language compatibility. Alternatively, you can use Jupyter Lab with extensions that allow cell-specific kernel selection.

This setup allows you to use Jupyter Notebooks with R code, which can be particularly useful for data analysis, visualization, and sharing work with others who use Python or Jupyter Notebooks.