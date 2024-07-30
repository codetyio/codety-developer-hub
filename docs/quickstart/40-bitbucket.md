---
title: Quickstart with Bitbucket
tags: [codety]
---

Create Bitbucket Workflow referring below example:
```yaml
# bitbucket-pipelines.yml
image: codetyio/codety:latest

pipelines:
  pull-requests:
    '**':
      - step:
          clone:
            enabled: true
          script:
            - codety


```
The Codety Analyzer will be triggered when there's a new pull request been created or updated. 
