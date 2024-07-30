---
title: Quickstart with Harness CI
tags: [codety]
---

Create Harness CI Workflow with below settings:
```yaml
# bitbucket-pipelines.yml
- stage:
    name: CodetyStage
    identifier: CodetyAnalyzerStage
    description: ""
    type: CI
    spec:
      cloneCodebase: true
      platform:
        os: Linux
        arch: Amd64
      runtime:
        type: Cloud
        spec: {}
      execution:
        steps:
          - step:
              type: Run
              name: Codety Analyzer
              identifier: CodetyAnalyzer
              spec:
                connectorRef: account.harnessImage
                image: codetyio/codety
                shell: Sh
                imagePullPolicy: Always

```
The Codety Analyzer will be triggered when there's a new pull request been created or updated. 
