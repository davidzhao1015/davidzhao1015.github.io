---
layout: post
title: "What the ISPOR Uncertainty Guideline Changed in My Modeling Practice"
date: 2026-02-14
giscus_comments: true
description: Translating principles into real-world HEOR implementation
tags: 
categories:
related_posts: false
pretty_table: true
published: true
author: Xin (David) Zhao
toc:
  sidebar: right
---

## Introduction

Recently, I read ISPOR’s guidance article on uncertainty analysis, which clearly outlines the *why*, *what*, and *how* of conducting uncertainty analysis in health economic modeling.

Almost every principle and best practice described resonated with my experience implementing uncertainty analysis for a gene therapy candidate in neuromuscular disease.

What I particularly appreciated was how the article connects methodological principles with practical application. Through concrete examples, it helped me re-examine common pitfalls in health economic modeling, areas where uncertainty analysis can unintentionally become superficial or mechanically executed.

To move beyond theory, I also share several practical guides and reusable tools that I have developed. My goal is to help translate these principles into impactful modeling practice, and to inject stronger scientific rigor into real-world industry projects.

## Summary of the paper

The ISPOR guide provides comprehensive coverage of uncertainty analysis in cost-effectiveness modeling. It spans foundational concepts and terminology, parameter estimation and uncertainty characterization, calibration approaches, structural uncertainty, and best-practice reporting standards.

Although the article is extensive, it presents topic-specific best practices in a concise and well-structured format. The content is organized in a way that makes it both rigorous and scan-friendly, allowing readers to grasp key principles without losing methodological depth.

For readers interested in exploring the full guidance, I encourage you to access the original [article](https://pubmed.ncbi.nlm.nih.gov/22990087/) directly.

## My reflection

Here, I focus on the aspects of the guide that are most practically useful for analysts, organized into three core questions.

### What I learned about uncertainty from working on a gene therapy candidate in neuromuscular disease

The guide article begins with a simple but powerful reminder: health economic modeling exists to support evidence-based decision-making.

In practice, working on a gene therapy candidate in neuromuscular disease made this message tangible. Decision makers never ask for “the number” alone. They ask:

- *How confident are we in this estimate?*
- *What assumptions drive the result?*
- *What happens if reality unfolds differently?*

Point estimates are necessary, but insufficient.

When we explored treatment effects and long-term projections for this innovative therapy, it became clear that uncertainty was not a technical appendix to the model. It was central to the discussion. Applying hazard ratios to baseline survival curves, projecting potential disease modification, and estimating downstream health-state distributions all required explicit acknowledgment of parameter uncertainty and structural assumptions.

Without quantified uncertainty, a cost-effectiveness result can appear overly precise. In reality, particularly for rare neuromuscular conditions, clinical evidence may be limited, follow-up duration short, and long-term extrapolation unavoidable. Presenting a single ICER without its uncertainty risks creating false confidence, especially when decisions involve significant budget impact and lifelong patient outcomes.

In cost-effectiveness (CE) modeling, **probabilistic sensitivity analysis (PSA)** and **deterministic sensitivity analysis (DSA)** are not merely health technology assessment (HTA) “check-box” requirements. In this project context, they became tools for insight:

- PSA helped quantify the probability that the therapy remains cost-effective under joint parameter uncertainty.
- DSA revealed which assumptions most strongly drive results, and therefore where additional evidence generation would have the greatest value.

For HTA bodies, the question is not simply whether an intervention is cost-effective at a threshold. It is whether allocating scarce healthcare resources to this therapy is justified given the uncertainty surrounding long-term outcomes.

Integrating uncertainty into model outcomes does more than satisfy methodological guidance. It improves transparency, strengthens credibility with stakeholders, and reframes the model from a forecasting device into a structured decision-support tool.

If I distill one lesson from this gene therapy modeling work, it is this: **Uncertainty does not weaken a model. Ignoring it does.**

### What common analyst mistakes does this guideline help address?

There are many technical resources explaining *how* to run uncertainty analysis. Far fewer address the more important question: *how to make principled decisions about uncertainty.*

In practice, uncertainty analysis is not just about running PSA or DSA. It requires judgment. And this is where common mistakes often occur.

The guideline is particularly valuable because it highlights several recurring pitfalls:

- **Inappropriately excluding influential parameters**
    
    Analysts may limit uncertainty analysis to a subset of “key” parameters for convenience, unintentionally omitting drivers that materially affect results. This creates a false sense of robustness.
    
- **Selecting probability distributions without methodological justification**
    
    Choosing distributions based on convention (e.g., beta for probabilities, gamma for costs) without verifying whether they reflect the underlying data or estimation method can undermine credibility. Distributional assumptions should align with parameter derivation and statistical properties.
    
- **Ignoring parameters with limited or imperfect evidence**
    
    When data are sparse, there is a temptation to treat parameters as fixed. In reality, limited evidence increases uncertainty, it does not eliminate it. The responsible approach is to characterize that uncertainty transparently, even if wide ranges are required.
    
- **Failing to account for correlation between fitted parameters**
    
    Parameters estimated jointly (e.g., from regression models or survival fits) are often correlated. Treating them as independent in PSA can distort variability and bias results. Accounting for correlation structures is methodologically important but frequently overlooked.
    

What makes these issues particularly important is that they are rarely software problems, they are modeling judgment problems.

The guideline reinforces a deeper principle: uncertainty analysis is not a mechanical exercise. It is a structured way of expressing what we know, what we do not know, and how much those unknowns matter for decisions.

### How do these best-practice principles translate into CE modeling?

Great principles make little difference unless they are translated into practice.

Reading ISPOR guidance strengthened my thinking—but implementation is where rigor truly shows. To help my future self (and fellow modelers who share a principle-driven mindset), I began developing practical, reusable tools and step-by-step guides aligned with these best-practice standards.

Below are a few resources I’ve built and shared:

- **Probability distribution inventory ([blog article](https://davidzhao1015.github.io/blog/2025/psa-tools/))**
    
    A small yet practical reference tool with two core functions:
    
    1. To guide the selection of appropriate probability distributions aligned with statistical standards.
    2. To document clear parameterization formulas for implementation.
        
        This helps move distribution choice from convention to justification.
        
- **Step-by-step guide to implement PSA for fitted parameters in survival models ([blog article](https://davidzhao1015.github.io/blog/2025/sensitivity-analysis-survival-model/))**
    
    An end-to-end Python workflow for conducting PSA on survival models. The guide translates advanced statistical concepts—such as multivariate normal sampling and Cholesky decomposition—into accessible explanations and reproducible code.
    
    My goal was to bridge the gap between statistical theory and practical modeling execution.
    
- **Reusable tornado chart template in Excel ([blog article](https://www.linkedin.com/pulse/how-create-tornado-chart-sensitivity-analysis-excel-practical-zhao-o1qaf/?trackingId=2WeniTIiRDqAaPwxUeQNrQ%3D%3D))**
    
    A structured, automation-friendly template for generating DSA tornado diagrams. Designed for clarity, reproducibility, and easy adaptation across projects.
    
- **Developing reusable architecture for epidemiology modeling**
    
    This is my current focus: building a modular model engine that automates PSA and DSA workflows in epidemiological models. The aim is not just efficiency—but methodological consistency, traceability, and scalability across projects.

These tools reflect a simple belief:

Methodological rigor should not depend on memory or manual effort. It should be embedded into the modeling workflow itself.

For me, that is how principles move from guidance documents into daily modeling practice.

## Conclusion

The ISPOR guidance on uncertainty analysis is a paper I have saved in my digital library for regular reference. It is not just a methodological document—it is a reminder of why we do this work.

Keeping decision makers in mind from the outset is one of the most important principles when implementing uncertainty analysis. That perspective shapes how I select parameters, justify distributions, structure PSA, interpret DSA, and ultimately communicate results.

As I continue refining reusable guides and modeling tools, my intention is clear: to embed stronger scientific rigor into everyday practice and to consciously avoid common pitfalls in real-world industry projects.

Uncertainty analysis is not a technical add-on. It is the foundation of credible decision modeling.