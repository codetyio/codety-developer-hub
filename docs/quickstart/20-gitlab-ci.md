---
title: Quickstart with GitLab CI
tags: [codety]
---

Create GitLab CI Workflow referring below example:
```yaml
# .gitlab-ci.yml
stages:
  - codety

job_build:
  stage: test
  image:
      name: codetyio/codety:latest
  script:
    - codety


```
The Codety Analyzer will be triggered when there's a new pull request been created or updated. 
