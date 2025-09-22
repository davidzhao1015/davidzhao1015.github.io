---
layout: post
title: "Turning Messy Symptom Text into Structured Insights"
date: 2025-09-19
description:
tags: epi, meta-analysis, ontology, rare-disease
categories: bioinformatics
giscus_comments: false
related_posts: false
pretty_table: true
published: true
toc:
  sidebar: right
---

## The Challenge

In rare disease research, clinical symptoms are often reported in free text, words like “droopy eyelid”, “muscle weakness”, or “difficulty feeding.” While these descriptions are clinically meaningful, their lack of standardization makes it nearly impossible to merge, compare, or analyze across studies.

This inconsistency is a major barrier for literature reviews, meta-analyses, and evidence synthesis. Without a common language, symptoms that mean the same thing may be counted differently, and downstream models risk being biased or incomplete.<br><br>

## A Structured Solution with HPO

The Human Phenotype Ontology (HPO) provides a standardized vocabulary for phenotypic abnormalities, widely used in genomics, clinical genetics, and rare disease studies. If free-text symptoms can be reliably mapped to HPO terms, researchers gain:

- Consistency: every symptom linked to a unique ID.
- Context: ontology hierarchy shows how terms relate.
- Richness: access to synonyms, definitions, and metadata.

To tackle this, I built a Python pipeline that takes reported symptoms as input and outputs a structured table of standardized HPO terms, IDs, and lineage paths.<br><br>

## How the Workflow Works

The pipeline combines API lookups, fuzzy string matching, and ontology metadata into a step-by-step process:

1. Search the HPO API with the reported symptom to retrieve candidate terms.
2. Fuzzy match validation: compute similarity between the input text and candidate term names.
3. Synonym and definition lookup from the official HPO ontology file.
4. Ontology lineage extraction: trace each matched term back to the root concept, showing context.
5. Decision rule: accept if the fuzzy score is ≥80, or if the input matches an official synonym.

This hybrid approach ensures both precision and recall, handling common synonyms and spelling variations gracefully.<br><br>

## A Peek Under the Hood

The implementation uses a few key Python tools:

- `rapidfuzz` → fast, permissive fuzzy string matching library.
- `obonet` → parses ontology files like hp.obo into a traversable network.
- `functools.lru_cache` → caches ontology queries for speed.
- `requests` → queries the JAX HPO API with retries for robustness.

Together, they form a lightweight but powerful pipeline that scales across hundreds of symptoms.<br><br>

## Demonstration

Here’s an example with three symptoms:

<table>
  <thead>
    <tr>
      <th>reported_symptom</th>
      <th>hpo_term</th>
      <th>hpo_id</th>
      <th>fuzzy_score</th>
      <th>status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ptosis</td>
      <td>Ptosis</td>
      <td>HP:0000508</td>
      <td>83.3</td>
      <td>matched</td>
    </tr>
    <tr>
      <td>weak suck</td>
      <td>Weak cry</td>
      <td>HP:0001612</td>
      <td>58.8</td>
      <td>not matched</td>
    </tr>
    <tr>
      <td>exercise intolerance</td>
      <td>Exercise intolerance</td>
      <td>HP:0003546</td>
      <td>95.0</td>
      <td>matched</td>
    </tr>
  </tbody>
</table>

- “ptosis” maps cleanly.
- “weak suck” is ambiguous (flagged as not matched).
- “exercise intolerance” matches perfectly.

This table is the end product: a structured, machine-readable mapping that can feed into larger data workflows.<br><br>

## Applications in Rare Disease Research

This pipeline is directly applicable to:

- Systematic reviews & evidence synthesis → harmonize symptom data across dozens of studies.
- Registry curation → align patient-reported outcomes with controlled vocabularies.
- Epidemiology & modeling → enable symptom-based stratification, subgroup analysis, or disease trajectory modeling.

By reducing noise from free text, it supports more reliable cross-study comparisons and integration.<br><br>

## Limitations & Future Work

Like any tool, there’s room for improvement:

- API availability and response speed.
- Lineage extraction currently follows only the first parent (simplified).
- Fuzzy thresholds may need tuning per dataset.

Future directions include:

- Integrating semantic embeddings for deeper understanding of symptom phrases.
- Linking to other vocabularies (MeSH, UMLS) for interoperability.<br><br>

## Conclusion

This pipeline addresses a real-world pain point in rare disease research: the challenge of inconsistent symptom reporting. By turning free text into structured HPO terms, it creates a reproducible foundation for evidence synthesis, registry development, and computational modeling.

And the best part? Its design is generalizable, the same workflow could be extended to other areas of biomedical text mining, from electronic health records to clinical trial reports.<br><br>

## Try It Yourself

The full notebook and code are available on [Github](https://github.com/davidzhao1015/map-hpo-symptom/blob/main/HPO-symptom-standardize.ipynb).

This article is meant for the rare disease research community. But on my portfolio site, I’ll showcase the technical implementation in detail for potential collaborators.