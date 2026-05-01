---
layout: post
title: "Synthesizing Symptom Data in Rare Diseases: Pitfalls, Pragmatic Solutions, and Good Practices"
date: 2026-05-01
description: Practical lessons and methodological considerations for synthesizing symptom data in rare diseases.
tags: symptom-data, evidence-synthesis, rare-diseases, meta-analysis, data-harmonization
categories:
giscus_comments: false
related_posts: false
pretty_table: true
published: true
author: Xin (David) Zhao
toc:
  sidebar: right
---


## Background

Synthesizing symptom evidence in rare diseases sounds straightforward in theory: collect studies, extract data, and pool the results.

In practice, however, symptom data are often fragmented, inconsistently reported, and difficult to harmonize across studies.

Synthesizing symptom evidence in rare diseases sounds straightforward in theory: collect studies, extract data, and pool the results.

In practice, however, symptom data are often fragmented, inconsistently reported, and difficult to harmonize across studies.

Evidence synthesis plays an important role in comprehensively characterizing the burden of symptoms associated with a rare disease. By systematically integrating evidence from published literature, grey literature, and real-world data, researchers can obtain a clearer picture of how diseases manifest across patient populations.

In several recent projects, I conducted extensive data collection and evidence synthesis on clinical manifestations and relapse patterns across multiple rare diseases. Through this work, I gained first-hand experience with the data challenges that frequently arise in rare disease research, as well as pragmatic strategies to address these pitfalls.

While many publications discuss evidence synthesis in rare diseases broadly, relatively few focus specifically on the synthesis of symptom-level epidemiological evidence. In this post, I share several practical lessons and methodological considerations from these experiences, with the goal of supporting analysts and modelers in the HEOR field when making evidence synthesis decisions.

In this post, I summarize several common pitfalls and practical solutions encountered when synthesizing symptom data in rare diseases. 

These methodological considerations are particularly relevant when synthesized evidence is later used as inputs for disease burden estimation, health economic models, or natural history analyses.

## Common Pitfalls

Here, *pitfalls* refer to factors that, whether included or excluded in quantitative synthesis (e.g., meta-analysis), can substantially affect pooled estimates. In other cases, these factors may prevent meaningful pooling of literature data due to inconsistent or non-standardized reporting.

Through sensitivity analyses and subgroup analyses conducted during meta-analysis, several such factors emerged as potential pitfalls that can materially influence evidence synthesis results.

### Heterogeneity of symptoms

The rare disease literature often exhibits high heterogeneity in symptom reporting, for a variety of reasons.

#### Symptom coding

Symptom coding and naming are often used inconsistently across studies. For example, I encountered at least ten variations or synonyms for what may represent a single symptom domain of cognitive dysfunction, including terms such as dementia, cognitive decline, and cognitive impairment, cognitive difficulty, cognitive disturbance, cognitive problems.

Such inconsistent terminology across studies makes data pooling inefficient and error-prone. If these variations are unintentionally treated as distinct symptoms, pooled estimates may become substantially biased. Sensitivity analyses conducted during real-world synthesis exercises confirmed that symptom coding differences can materially affect pooled outcomes.

Identifying and harmonizing these inconsistencies can be challenging. It often requires domain familiarity with clinical terminology and symptom manifestations, as well as careful review of study context to determine whether different terms represent the same underlying clinical phenomenon.

#### Symptom timing

Similar to symptom coding, symptom timing is also highly inconsistent across the literature, which may bias pooled estimates if not carefully addressed during data extraction and analysis.

Based on my literature review experience, this inconsistency arises from two main situations. 

In some cases, symptom timing is unavoidably diverse and complex because of the heterogeneous clinical manifestations and disease trajectories of rare diseases. Symptoms may emerge at different stages of disease progression and therefore be reported at different timepoints across studies.

In other cases, however, variation in symptom timing is avoidable and arises from a lack of standardized reporting or inconsistent writing practices across studies. For example, studies may report symptoms at diagnosis, during hospitalization, or at unspecified timepoints without clearly defining the temporal context.

If these differences are not carefully examined and harmonized, they can introduce substantial bias into pooled estimates during quantitative synthesis.

### Population characteristics and follow-up duration

To ensure that synthesized evidence is applicable to a specific patient population, it is generally considered good practice to carefully examine participant age groups and follow-up duration, as recommended in standard methodological guidance for systematic reviews of clinical studies.

However, in observational studies of rare and genetic diseases, age subgroups and follow-up durations are often reported inconsistently and vaguely across the literature.

#### Age subgroups

In many studies of rare diseases, even within specific disease subtypes, patient cohorts frequently include mixed age populations, combining both pediatric and adult patients. For some rare genetic diseases, pediatric and adult patients may experience distinct disease progression patterns and clinical manifestations.

Therefore, when synthesizing evidence, it is often preferable to analyze these age groups separately, rather than unintentionally mixing them in pooled estimates.

In practice, data analysts may feel tempted to combine data from pediatric-only, adult-only, and mixed cohorts in order to achieve a sufficiently large sample size for quantitative analysis. While this approach may increase statistical power, it also risks introducing population heterogeneity and potential bias into the pooled results.

#### Follow-up duration

Similarly, observational studies, particularly prospective cohort studies, often report substantial variation in follow-up duration. In many cases, follow-up time is reported only as aggregate statistics (e.g., mean or median follow-up) for the entire cohort, rather than at the individual patient level. This limitation is especially common in rare disease research.

However, the frequency and pattern of clinical manifestations in rare diseases may differ substantially across acute, chronic, and long-term stages of the disease. Therefore, in principle, follow-up duration should be carefully considered when deciding whether studies are sufficiently comparable for pooling.

Nevertheless, given the limited number of available studies, analysts may sometimes choose to pool data across studies with heterogeneous follow-up durations in order to increase the sample size. While understandable in practice, this approach can introduce potential bias if differences in follow-up time are not carefully evaluated or addressed.

### Denominator ambiguity

The denominator used to calculate prevalence or symptom proportions can influence the estimated weights in pooled analyses.

In the literature, denominators are not always consistent. In some studies, prevalence or symptom proportions are calculated using the entire study cohort, whereas in others they are based only on a subset of participants with available follow-up data.

As a result, inconsistencies in denominators across studies are common. If these differences are ignored during pooling, they can bias both the study weights and the estimated proportions, potentially underestimating the true frequency of symptoms.

## Pragmatic solutions

While the above pitfalls are very challenging in evidence synthesis of symptom data, and likely there is no perfect cures, a few pragmatic solutions in different stages of evidence synthesis can effectively reduce risks of potential bias, from data extraction to data harmonization and to evidence synthesis. 

### Data extraction template

A thoughtfully designed data extraction template can help ensure that all relevant study- and cohort-level factors, often referred to as *metadata* in data science, are systematically captured. These factors may include variables such as age subgroup, follow-up duration, study design, and cohort characteristics, which are critical for interpreting and synthesizing evidence.

For issues such as inconsistent symptom coding and symptom timing, it can be helpful to capture the verbatim terms reported in the literature during the initial extraction stage. A separate column in the extraction template can then be used to store standardized terminology, derived either from an ontology database or from an internally governed dictionary. This approach helps maintain traceability to the original source while enabling harmonized analysis.

With respect to denominators, adding a dedicated notes column to record sufficient contextual information from the literature is a robust way to minimize errors. In many cases, assuming that the reported sample size represents the denominator may be incorrect, and documenting the relevant context can help avoid misinterpretation during quantitative synthesis.

To support analysts and researchers in developing a robust and practical data extraction template, I plan to write a follow-up blog article introducing a proven template that has been applied in my own projects.

### Data harmonization and standardization

Data harmonization is a critically important step in minimizing inconsistencies and fragmentation in initially extracted data.

For symptom coding, several high-quality ontology databases are available, including those specifically designed for phenotypic and symptom data, such as the Human Phenotype Ontology (HPO). These resources provide standardized terminology that can support consistent classification of symptoms across studies. In previous work, I also published an article describing an automated workflow in Python to process inconsistent symptom data and map them to standardized terms.

For symptom timing, the harmonization process can be more complex. In practice, analysts may benefit from developing a mini dictionary of commonly reported timing categories, such as prodromal phase, disease onset, acute phase, or chronic stage. These standardized timing categories can then be mapped to the verbatim timing descriptions initially extracted from the literature, enabling more consistent synthesis while preserving traceability to the original reports.

### Alternative approaches to meta-analysis

While meta-analysis is a powerful statistical method for synthesizing quantitative evidence, alternative approaches should also be considered depending on the availability, quality, and nature of the collected literature data.

Several commonly used alternatives include:

- Narrative synthesis
This approach summarizes quantitative or qualitative findings in a structured narrative format. It is particularly useful when the available data are sparse, inconsistently reported, or not suitable for formal statistical pooling.
- Structured evidence mapping
This method provides a systematic overview of available evidence, typically presenting information such as number of studies, cohort sample sizes, and summary statistics (e.g., medians and ranges) in a tabular format. Structured evidence mapping is useful when literature data are highly heterogeneous and cannot be synthesized through meta-analysis.
- Subgroup synthesis
This approach involves conducting meta-analysis within predefined subgroups, rather than across all studies. By restricting pooling to more comparable populations or study conditions, subgroup synthesis can help reduce the impact of heterogeneity and potential confounding factors.

## Good practices learned from experience

Based on these work experiences, several good practices emerged when synthesizing symptom evidence in rare diseases:

- **Use a well-designed data extraction template** to ensure comprehensive capture of relevant metadata across studies.
- **Preserve verbatim terminology reported in the literature** when extracting symptom data, which helps maintain traceability and avoids misinterpretation during later harmonization.
- **Document contextual information for key variables**, particularly denominators and follow-up duration, as these factors often vary across studies and strongly influence reported frequencies.
- **Consult clinicians or domain experts when interpreting inconsistent variables**, helping reach consensus on symptom definitions or disease stages that may be reported differently across studies.

As rare disease research increasingly relies on integrated evidence from literature, registries, and real-world data, robust symptom evidence synthesis will become an increasingly important capability for epidemiologists, data scientists, and HEOR modelers.

## Reference

- Atalaia A, Thompson R, Corvo A, et al (2020) A guide to writing systematic reviews of rare disease treatments to generate FAIR-compliant datasets: building a Treatabolome. Orphanet J Rare Dis. 2020 Aug 12;15(1):206.
- Movsisyan A, Asres Ioab K, Himmels JW, et al (2026) Conducting evidence synthesis and developing evidence-based advice in public health and beyond: A scoping review and map of methods guidance. Res Synth Methods. 2026 Mar; 17(2):240-264.