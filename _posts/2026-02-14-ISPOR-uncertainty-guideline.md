---
layout: post
title: "How the ISPOR Uncertainty Guideline Changed My Modeling Practice"
date: 2026-02-14
giscus_comments: true
description: Translating principles into real-world HEOR implementation
tags: 
categories: [HEOR & Decision Modeling]
related_posts: false
pretty_table: true
published: true
author: Xin (David) Zhao
toc:
  sidebar: right
---

## Introduction

I recently read ISPOR’s guidance article on uncertainty analysis in health economic modeling. The article clearly explains why, what, and how to conduct uncertainty analysis.

The principles and best practices described matched my experiences with uncertainty analysis when modeling the cost-effectiveness of gene therapies.

I especially valued how the article connects methods with real-world applications. 

Concrete examples helped me identify and avoid common pitfalls in modeling, where uncertainty analysis can be shallow or routine.

To apply these principles, I developed several practical guides and reusable tools. 

My goal is to help make these principles more impactful and raise the scientific rigor of real-world modeling.

## Summary of the paper

The ISPOR guide provides comprehensive coverage of uncertainty analysis in CE modeling. 

It spans,

* foundational concepts and terminology
* parameter estimation and uncertainty characterization
* calibration approaches
* structural uncertainty
* best-practice reporting standards

Although the article is extensive, it presents topic-specific best practices in a concise and well-structured format. The content is organized to be both rigorous and scan-friendly, allowing readers to grasp key principles without sacrificing methodological depth.

For readers interested in exploring the full guidance, I recommend accessing the original [article](https://pubmed.ncbi.nlm.nih.gov/22990087/) to supplement this overview.

## My reflection

Here, I focus on the aspects of the guide most useful to analysts, which I organize into two core questions that structure the reflection.

### What did I learn about uncertainty from working on a real-world CE modeling project?

The guide article begins with a simple but powerful reminder: health economic modeling exists to support evidence-based decision-making.

In practice, working on the CE modeling project for a gene therapy made this message tangible. Decision makers never ask for “the number” alone. They ask:

* How confident are we in this estimate?
* What assumptions drive the result?
* What happens if reality unfolds differently?

Point estimates are necessary, but insufficient.

When we explored treatment effects and long-term projections for this innovative therapy, uncertainty was not a technical appendix to the model; it was central to the discussion and decision-making process. 

Applying hazard ratios to baseline survival curves, projecting potential disease modification, and estimating downstream health-state distributions all required explicit acknowledgment of parameter uncertainty and structural assumptions.

Without quantified uncertainty, a cost-effectiveness result can appear overly precise. 

In reality, particularly for rare disorders, clinical evidence may be limited, follow-up duration may be short, and long-term extrapolation may be unavoidable. Presenting a single ICER without its uncertainty can create false confidence, especially when decisions have a significant budget impact and affect lifelong patient outcomes.

In CE modeling, probabilistic sensitivity analysis (PSA) and deterministic sensitivity analysis (DSA) are not merely health technology assessment (HTA) “check-box” requirements. In this project context, they became tools for insight:

* PSA helped quantify the probability that the therapy remains cost-effective under joint uncertainty in parameters.
* DSA revealed which assumptions most strongly drive results, and therefore where additional evidence generation would have the greatest value.

For HTA bodies, the question is not simply whether an intervention is cost-effective at a threshold. It is a question of whether allocating scarce healthcare resources to this therapy is justified, given the uncertainty surrounding long-term outcomes.

Integrating uncertainty into model outcomes not only satisfies methodological guidance; it also improves transparency, strengthens credibility with stakeholders, and reframes the model from a forecasting device into a structured decision-support tool.

If I distill one lesson from this gene therapy modeling work, it is this: Uncertainty does not weaken a model; ignoring it does. This theme informs every stage of practice.

### What common analyst mistakes does this guideline help address?

There are many technical resources explaining how to run uncertainty analysis, but far fewer address the more important question: how to make principled decisions about uncertainty.

In practice, uncertainty analysis is not just about running PSA or DSA. It requires judgment. And this is where common mistakes often occur.

The guideline is particularly valuable because it highlights several recurring pitfalls, which I outline as follows:

#### Pitfall 1: Inappropriately excluding influential parameters

Analysts may limit uncertainty analysis to a subset of “key” parameters for convenience, unintentionally omitting drivers that materially affect results. This creates a false sense of robustness.

#### Pitfall 2: Selecting probability distributions without methodological justification

Choosing distributions based on convention (e.g., beta for probabilities, gamma for costs) without verifying whether they reflect the underlying data or estimation method can undermine credibility. Distributional assumptions should align with parameter derivation and statistical properties.

#### Pitfall 3: Ignoring parameters with limited or imperfect evidence

When data are sparse, there is a temptation to treat parameters as fixed. In reality, limited evidence increases uncertainty; it does not eliminate it. The responsible approach is to characterize that uncertainty transparently, even if wide ranges are required.

#### Pitfall 4: Failing to account for the correlation between fitted parameters

Parameters estimated jointly (e.g., from regression models or survival fits) are often correlated. Treating them as independent in PSA can distort variability and bias results. Accounting for correlation structures is methodologically important but frequently overlooked.

What makes these issues particularly important is that they are rarely software problems; instead, they stem from modeling judgment and decision-making.

The guideline reinforces a deeper principle: uncertainty analysis is not a mechanical exercise; it is a structured way of expressing what we know, what we do not know, and how much those unknowns matter for decisions.

### Principle-driven solutions

Great principles make little difference unless they are translated into practice, which is why I focus on implementation.

Reading the ISPOR guidance strengthened my thinking, but implementation is where rigor truly shows, making this transition essential. 

To help my future self (and fellow modelers who share a principle-driven mindset), I have been developing practical, reusable tools and step-by-step guides that align closely with these best-practice standards.

Below are a few resources I’ve built and shared:

#### Solution 1: Probability distribution inventory ([blog article](https://davidzhao1015.github.io/blog/2025/psa-tools/))

A small yet practical reference tool with two core functions:

* To guide the selection of appropriate probability distributions aligned with statistical standards.
* To document clear parameterization formulas for implementation.

This helps move distribution choice from convention to justification.

#### Solution 2: Step-by-step guide to implement PSA for fitted parameters in survival models ([blog article](https://davidzhao1015.github.io/blog/2025/sensitivity-analysis-survival-model/))

An end-to-end Python workflow for conducting PSA on survival models. The guide translates advanced statistical concepts, such as multivariate normal sampling and Cholesky decomposition, into accessible explanations and reproducible code.

My goal was to bridge the gap between statistical theory and the practical execution of modeling.

#### Solution 3: Reusable tornado chart template in Excel ([blog article](https://www.linkedin.com/pulse/how-create-tornado-chart-sensitivity-analysis-excel-practical-zhao-o1qaf/?trackingId=8gIUtuKLSJqBf6eWyyidHg%3D%3D))

A structured, automation-friendly template for generating DSA tornado diagrams. Designed for clarity, reproducibility, and easy adaptation across projects.

#### Solution 4: Developing reusable architecture for epidemiology modeling

This is my current focus: building a modular model engine that automates PSA and DSA workflows in epidemiological models. The aim is not just efficiency but methodological consistency, traceability, and scalability across projects.

These tools reflect a simple belief:

Methodological rigor should not depend on memory or manual effort but should be embedded into the modeling workflow itself, making consistent best practice achievable.

For me, that is how principles move from guidance documents into daily modeling practice, ensuring long-term change.

### Conclusion

The ISPOR guidance on uncertainty analysis is a paper I have saved in my digital library for regular reference, serving not just as a methodological document but as a reminder of why we do this work.

Keeping decision-makers in mind from the outset is one of the most important principles for implementing uncertainty analysis, linking every modeling decision to real-world needs. 

That perspective shapes how I select parameters, justify distributions, structure PSA, interpret DSA, and, ultimately, communicate results in practice.

As I continue refining reusable guides and modeling tools, my intention is clear: embed stronger scientific rigor into everyday practice and consciously avoid common pitfalls in real-world industry projects, consistently applying the guiding principles.

Uncertainty analysis is not a technical add-on; it is the foundation of credible decision modeling, linking rigor directly to decision quality.