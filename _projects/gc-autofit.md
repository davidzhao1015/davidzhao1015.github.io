---
layout: page
title: "GC-AutoFit: Web Application Automating and Accelerating GC-MS Metabolomics"
description: 
img: assets/img/chemistry-computer.jpg
importance: 2
category: software
giscus_comments: false
---

GC-AutoFit is a user-friendly web tool designed to make processing and analyzing data from common GC-MS systems easy, even for those without deep chemistry knowledge. It quickly identifies compounds—sometimes in just 10 seconds—and generates detailed reports that can be used with other software for further analysis. From March to August 2024, I worked on developing the first version of GC-AutoFit alongside my colleagues. I focused on building key features using Ruby on Rails for the front-end and R for the back-end, including custom inputs for biofluids and internal standards. I also debugged R scripts to ensure the accuracy of output concentrations, making GC-AutoFit both accessible and reliable for users at all levels.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/snapshot-gc-autofit.png" title="GC-Autofit Snapshot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    GC-Autofit Snapshot
</div>
