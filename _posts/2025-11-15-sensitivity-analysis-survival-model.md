---
layout: post
title: "Parametric Survival Fit & PSA for Age-at-Onset in Autoimmune Disease: Generalized Gamma Workflow"
date: 2025-11-15
description:
tags: epidemiology, health-economy, rare-disease
categories: bioinformatics
giscus_comments: false
related_posts: false
pretty_table: true
published: true
toc:
  sidebar: right
---

In rare disease epidemiology, researchers often face a familiar challenge: most published studies do not provide individual-level patient data. Instead, they report only high-level summary statistics such as quartiles, means, and total sample size. Yet for health economic modeling, burden of disease estimation, or natural history modeling, we still need to understand the **full age-at-onset distribution**—including its shape, skew, and uncertainty.

This article presents a practical workflow for reconstructing that distribution using **parametric survival models**, with a focus on the **generalized gamma distribution**. We will also show how to incorporate parameter uncertainty using **probabilistic sensitivity analysis (PSA)** and how to compute key outputs such as diagnosis probabilities within specific age bands.

This workflow is adapted from a full analysis [notebook](sen-analysis-Gamma-MVN-Cholesky.ipynb), and is intended to be immediately useful for epidemiologists, biostatisticians, and health economists working with sparse or aggregate-only datasets.


## 1. Why Parametric Survival Modeling Matters

When individual-level data are unavailable, modeling decisions become difficult:

- How do we estimate onset age distributions when we only know quartiles?
- How can downstream models quantify uncertainty?
- Can we still estimate age-specific probabilities, like onset before 12 or after 18?

The answer is *yes*. Well-chosen parametric models—fit using a quantile-matching method—allow us to approximate the underlying distribution closely enough for epidemiological and health economic purposes.

The approach also supports probabilistic uncertainty methods widely used in cost-effectiveness modeling.

## 2. Summary Data and Python Setup

### 2.1 Summary Statistics Used

The analysis uses the following literature-reported values.

| Statistic    | Value |
|--------------|-------|
| Min          | 19    |
| Q1           | 61    |
| Median       | 66    |
| Q3           | 72    |
| Max          | 88    |
| Mean         | 67    |
| Sample Size  | 111   |

These values provide a robust representation of the distribution’s central tendency and spread.

### 2.2 Software Environment

The full workflow uses:

- **NumPy** for numerical operations
- **pandas** for data structuring
- **SciPy** for probability distributions
- **statsmodels** for numerical Hessian estimation
- **matplotlib** for visualization

All version details are recorded to support reproducibility.

## 3. Fitting Parametric Models from Summary Data

### 3.1 Why Use Parametric Distributions?

Parametric survival distributions help us:

- interpolate and extrapolate beyond observed quartiles
- obtain smooth CDFs and PDFs
- compute probabilities within arbitrary age bands
- implement Monte Carlo–based uncertainty quantification

This is particularly valuable in rare disease research, where datasets are often small.

### 3.2 Quantile Matching: Reconstructing the Distribution

Because raw data are missing, we instead match:

$$(Q1, Median, Q3)_\text{model} \approx (Q1, Median, Q3)_\text{observed}$$

We define an objective function that penalizes deviations between model-predicted and observed quartiles, and we optimize the model’s parameters to minimize this squared error.

```py
q1, median, q3 = 61, 66, 72
empirical_q = [q1, median, q3]

def gengamma_objective(params):
    a, c, scale = params
    if a <= 0 or scale <= 0:
        return np.inf
    try:
        dist = gengamma(a=a, c=c, scale=scale)
        theo_q = dist.ppf([0.25, 0.5, 0.75])
        return np.sum((np.array(theo_q)- np.array(empirical_q))**2)
    except:
        return np.inf
```

This allows us to recover a plausible distribution consistent with the literature.

### 3.3 Why Generalized Gamma?

While lognormal and Weibull are widely used, the **generalized gamma** provides:

- high flexibility in skewness
- adjustable tail behavior
- ability to mimic many other survival distributions

After fitting the model via quantile matching, we obtain parameter estimates for shape (a), power (c), and scale (s). These values define the final onset-age distribution.

```py
initial_guess_gengamma = [2.0, 1.0, 10.0]
bounds_gengamma = [(0.01, None), (0.01, None), (0.01, None)]

result_gengamma = minimize(gengamma_objective, x0=initial_guess_gengamma, bounds=bounds_gengamma)

a_fit_gengamma, c_fit_gengamma, scale_fit_gengamma = result_gengamma.x
```

| Parameter | Value    |
|----------|----------|
| a        | 26.6110  |
| c        | 1.5835   |
| scale    | 8.4092   |

### 3.4 Diagnostic Checks

To validate the fit, we:

- simulate onset ages using the fitted parameters
- plot a histogram compared to the reported median
- overlay the fitted CDF against empirical quartile points

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/survival_model_diagnostic_check.png" class="img-fluid rounded z-depth-1" %}
</div>

This confirms that the generalized gamma model aligns well with both the median and quartile anchors.

## 4. Adding Uncertainty: Probabilistic Sensitivity Analysis (PSA)

### 4.1 Why PSA?

Health economic and epidemiological models require not only point estimates but also **credible intervals**, especially when clinical evidence is sparse.

Parameter uncertainty in the fitted model must therefore be propagated to all downstream quantities.

### 4.2 Building the Variance-Covariance Matrix

- We approximate the Hessian numerically at the parameter optimum.
- Inverting the Hessian yields the variance–covariance matrix of the parameter estimates.
- This matrix captures both individual parameter uncertainty and correlations among parameters.

```py
theta_hat = np.array([a_fit, c_fit, scale_fit])
H = approx_hess(theta_hat, gengamma_objective)
vcov = np.linalg.inv(H)
```

|    |       0 |       1 |       2 |
|---:|--------:|--------:|--------:|
|  0 | 595.1296 | -17.7608 | -315.0622 |
|  1 | -17.7608 |   0.5511 |    9.6338 |
|  2 | -315.0622 |   9.6338 | 169.3408 |

## 4.3 Multivariate Normal Sampling

Using Cholesky decomposition, we sample thousands of parameter sets from a multivariate normal distribution:

$$\theta^{(i)} \sim \text{MVN}(\hat{\theta},\, \Sigma)$$

For each sampled parameter set, we compute:

- a full onset-age CDF
- age-band probabilities

This forms the backbone of the PSA.

```py
rng = np.random.default_rng(123)
L = np.linalg.cholesky(vcov)
Z = rng.standard_normal((5000, 3))
theta_draws = theta_hat + Z @ L.T
```

## 5. Estimating Age-Band Probabilities

For many models, we need to know the probability that onset occurs within:

- **0–12 years**
- **12–18 years**
- **18+ years**

Using the CDF from each Monte Carlo draw, we compute:

$$P(a \leq \text{onset} < b) = F(b) - F(a)$$

This avoids slow individual-level simulation and supports rapid PSA.

A summary table (across ~5,000 draws) includes:

- mean probability
- standard deviation
- median
- 95% uncertainty interval (2.5–97.5th percentile)

Typical results show:

- ~95% of onsets occur after age 18
- 0–12 and 12–18 have wide uncertainty due to very low event frequency

| Age Band | Mean   | SD     | Median | CI Lower (2.5%) | CI Upper (97.5%) |
|----------|--------|--------|--------|------------------|-------------------|
| 0–12     | 2.67%  | 14.00% | 0.00%  | 0.00%           | 44.47%           |
| 12–18    | 1.95%  | 9.41%  | 0.00%  | 0.00%           | 23.81%           |
| 18+      | 95.38% | 18.45% | 100.00%| 9.54%           | 100.00%          |

This output can be plugged directly into disease models.

## 6. Visualizing Uncertainty: CDF Ensembles

One of the most insightful plots overlays:

- **light gray curves**—thousands of CDFs generated from sampled parameters
- **a blue line**—mean CDF across all Monte Carlo draws
- **red points**—empirical quartile anchors

<div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/psa_diag_check.png" class="img-fluid rounded z-depth-1" %}
</div>

This reveals:

- strong alignment near the median
- greatest uncertainty in the tails
- minimal probability mass before ~20 years
- a steep probability rise between 55–75 years

The ensemble plot illustrates not just the best-fit curve, but the *range of plausible distributions* given uncertainty in the literature.

## 7. Ensuring Reproducibility

At the end of the analysis, we record:

- Python version
- OS
- NumPy, pandas, SciPy, statsmodels, matplotlib versions

Reproducibility is essential for transparent modeling, peer review, and regulatory or client submissions.

## 8. Conclusion

Even when individual-level data are unavailable, we can still reconstruct a meaningful, validated age-at-onset distribution using parametric survival models. The **generalized gamma distribution** offers excellent flexibility, and the combination of:

- **quantile matching**,
- **diagnostic validation**, and
- **probabilistic sensitivity analysis (PSA)**

produces a robust and transparent modeling workflow.

This approach fits naturally into broader health economic and epidemiological frameworks, enabling:

- estimation of onset-age probabilities,
- sensitivity and uncertainty analyses,
- population-level burden and cost projections,
- and forecasting models informed by realistic evidence intervals.

As the next step, this method can be extended to multiple studies, enabling *meta-analytic* quantile fitting, and eventually integrated into automated data extraction and modeling pipelines.

