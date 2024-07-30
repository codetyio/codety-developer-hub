---
title: Quickstart with CircleCI
tags: [codety]
---

Create GitLab CI Workflow referring below example:
```yaml
# .circleci/config.yml
version: 2.1
jobs:
  codety-runner:
    docker:
      - image: codetyio/codety
    steps:
      - checkout
      - run:
          command: codety

workflows:
  build-and-test:
    jobs:
      - codety-runner


```
The Codety Analyzer will be triggered when there's a new pull request been created or updated. 
