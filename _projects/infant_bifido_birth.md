---
layout: page
title: Impact of Birth Factors on Infant Gut Health, Insights from a Microbiota Study
description: 
img: assets/img/hospital-baby.jpg
importance: 3
category: data analysis
giscus_comments: false
---

## Introduction 
--- 
Establishing a healthy gut microbiota early in life is critical for an infant’s long-term health. This study examines how birth factors, such as Caesarean sections and intrapartum antibiotic prophylaxis (IAP), affect the gut microbiota of infants during their first few months—a period that is clinically significant.

IAP is given during labor to prevent infections in the baby, but it may also affect the baby's gut by reducing beneficial bacteria like *Bifidobacterium*. These bacteria are important for setting up a healthy gut. Understanding how IAP and delivery methods influence *Bifidobacterium* and the overall gut microbiota is key for improving infant health and guiding medical practices.

Our study aims to fill a gap in knowledge about the long-term effects of IAP and delivery mode on gut microbiota. While we know IAP can disrupt the gut microbiota right after birth, less is known about its lasting impact and how it compares to other factors, like infant diet.

To address this, we used various statistical methods. We applied linear and logistic models to see how birth factors impact *Bifidobacterium* levels, considering other factors like maternal BMI and breastfeeding. We also used multivariate analysis to study the overall diversity of the gut microbiota. This approach helps us understand how birth-related factors and diet shape early gut microbiota.

The results of this study could improve clinical practices. By showing how birth factors and feeding practices affect the gut microbiota, our findings may lead to better guidelines for antibiotic use and delivery methods, enhancing infant health and preventing future health issues.


## Data 
--- 
- **Data Sources**:
    - **Study Population**: 1654 infants enrolled in the Canadian Healthy Infant Longitudinal Development (CHILD) Study between 2009 and 2012.
    - **Study Website**: [www.childstudy.ca](http://www.childstudy.ca/), accessed on 1 May 2021.
    - **Recruitment Criteria**: Mothers recruited in their second or third trimester; newborns included if they were singleton live births at ≥35 weeks gestation with a birth weight ≥2500 g. In vitro fertilized births were excluded.
- **Hospital Birth Records**: Provided information on infant sex, mode of delivery (vaginal, elective, and emergency caesarean), duration of labour stages, and maternal intrapartum antibiotic prophylaxis (IAP).
- **Standardized Questionnaires**: Collected data on maternal characteristics (ethnicity, age, education, prenatal smoking) and infant characteristics (gestational age, breastfeeding status, antibiotic use before 3 months).
- **Fecal Microbiota**: Collected at 3 months, analyzed by 16S rRNA sequencing and targeted qPCR for *Bifidobacterium* species.


## Analysis 
--- 
**Highlights of the Analysis:**

•	**Cohort Utilization**: Leveraged the well-characterized CHILD cohort for an in-depth investigation into how intrapartum antibiotic prophylaxis (IAP) and birth mode impact infant gut microbiota.

•	**Sample Size and Confounders**: Utilized a robust sample size to adjust for key confounders, such as breastfeeding, thereby enhancing the validity of the study’s findings.

•	**Enhanced Detection Methods**: Employed genus- and species-specific primers for *Bifidobacterium* and *B. longum* subsp. *infantis* to improve detection of bifidobacteria, addressing under-representation issues in standard 16S rRNA gene sequencing.

**Objective 1: Assess the Impact of Maternal IAP and Delivery Mode on Infant Gut Microbiota Diversity**

**Statistical Methods**:

•	**Alpha-Diversity**: Measured using Shannon diversity index and observed Operational Taxonomic Units (OTUs). Statistical significance was assessed with Kruskal-Wallis tests, incorporating adjustments for multiple comparisons to control for Type I error.

•	**Beta-Diversity**: Evaluated using PERMANOVA (Permutational Multivariate Analysis of Variance) based on Bray-Curtis dissimilarity to assess differences in community composition between groups. The significance of group differences was determined through permutation-based tests.

**Objective 2: Identify Microbial Biomarkers for Birth Scenarios**

**Statistical Methods**:

•	**LEfSe Analysis**: Conducted Linear discriminant analysis Effect Size (LEfSe) to identify microbial biomarkers linked to different birth scenarios (defined by delivery mode and antibiotic use). Biomarkers were determined by a Linear Discriminant Analysis (LDA) score > 2 and p-value < 0.05. Analyses were stratified by breastfeeding status to adjust for its potential impact on microbiota composition.

**Objective 3: Evaluate the Impact of Delivery Mode on Bifidobacterium Species**

**Statistical Methods**:

•	**Linear Regression**: Applied to examine the relationship between delivery mode and levels of *Bifidobacterium*. This method allowed for controlling continuous covariates and assessing the strength of associations.

•	**Logistic Regression**: Used to evaluate the probability of colonization by *B. longum* subsp. *infantis*, providing insights into the likelihood of colonization as influenced by delivery mode.

**Objective 4: Explore Interactions Between Bifidobacterium and Other Gut Bacteria**

**Statistical Methods**:

•	**Spearman’s Rank Correlation**: Employed to explore associations between *Bifidobacterium* and other microbial genera. Correlations were assessed for statistical significance with False Discovery Rate (FDR) correction applied to p-values to control for multiple testing issues, using a threshold of p < 0.1.


## Results
--- 
Imagine you’re a clinician advising a new mom, or a mother-to-be planning for your baby’s arrival. A major concern is how birth and early feeding choices impact your baby’s gut health. Our analysis offers some important insights:

1.	**Impact of Antibiotics During Delivery**: When antibiotics are given during delivery (IAP), they reduce beneficial bifidobacteria in the gut of breastfed infants, but not in non-breastfed ones. This suggests that breastfeeding, particularly with its rich supply of human milk oligosaccharides (HMOs) that act as prebiotics, helps counter the negative effects of antibiotics. Notably, exclusively breastfed infants born vaginally have the highest levels of bifidobacteria, highlighting how breastfeeding and natural delivery work together to support a healthier gut microbiome in newborns.

2.	**Role of Delivery Method**: For babies born through vaginal delivery and exposed to antibiotics, bifidobacteria were less common, particularly in those who were breastfed. This highlights the dual role that both birth method and antibiotic exposure play in shaping a baby’s gut health.

3.	**Presence of Beneficial Strains**: We found that only a small number of infants had the beneficial strain *B. longum* subsp. *infantis*, regardless of how they were born. This shows that other factors, like the mother’s health, might be at play in determining which good bacteria settle in the baby’s gut.

4.	**Complex Interactions in the Gut**: In exclusively breastfed infants, bifidobacteria were positively linked to beneficial bacteria like *Lactobacillus* and *Streptococcus*, and negatively associated with potentially harmful ones like *Clostridium*. These patterns held true across various birth methods, except in cases where labor didn’t occur before a C-section (i.e., planned C-section). This underscores the complex ecosystem within your baby’s gut, shaped by both birth and feeding practices.

In simpler terms, these findings emphasize the importance of considering how birth and feeding choices interact to influence your baby’s gut health, potentially guiding better decisions for infant care.


## Conclusion
--- 
Our study reveals how birth mode and antibiotic exposure during delivery can shape the gut microbiota of infants, specifically impacting the levels of bifidobacteria, a crucial group of beneficial bacteria.

For example, infants born vaginally but exposed to antibiotics during delivery had notably lower levels of bifidobacteria, even if they were breastfed. Similarly, those delivered via cesarean section (CS) also showed reduced bifidobacterial levels, regardless of whether they were exposed to antibiotics.

Understanding these effects is important for clinicians and expectant mothers alike. If you’re a clinician, consider discussing birth modes and antibiotic use with expecting parents to better prepare them for potential impacts on their baby’s gut health. For expectant mothers, this information could help you make informed decisions about delivery and care options.

Your baby’s gut health is foundational for their overall well-being. By being aware of these factors, you can take proactive steps to support a healthy start in life.

**Call to Action:** If you’re interested in learning more about how microbiome data analysis can help in understanding and improving infant gut health, don’t hesitate to reach out. Let’s work together to ensure the best start for your baby’s health.


## Contribution
--- 
- Professor Dr. Anita Kozryskyj from the Department of Pediatrics at the University of Alberta supervised the study.
- Dr. Yuanyao Chen, a senior biostatistician in the Department of Pediatrics at the University of Alberta, contributed to this collective project.