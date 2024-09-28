---
sidebar_position: 1
---

# Codety Scanner Quickstart

Let's discover Codety in less than 5 minutes.

### Overview
![diagram](./intro-diagram.png)

:::tip tips

* It is recommended to integrate Codety Scanner with your pull request events for getting quick and relevant code review feedback and ensuring code quality is maintained.
* 
:::

Based on the above diagram, your CI/CD pipeline will be:
1. Preparing the analysis environment
   * Checking out source code from git server
   * Pulling Codety analyzer image from container registries(e.g. Docker Hub)
   * Pulling configurations and settings from Codety server (default setting will be applied if you don't set Codety Access Token)
1. Conducting static code analysis according to the custom ruleset settings
1. Assembling and distributing the result, below is an example for GitHub:
   ![screenshot](./github-1.png)


### Start using it
* [Quickstart with GitHub Actions](github-actions)
* [Quickstart with GitLab CI](gitlab-ci)
* [Quickstart with Harness CI](harness-ci)
* [Quickstart with Circle CI](circleci)
* [Quickstart with Bitbucket CI](bitbucket)

### Next step

You can start exploring Codety Cloud-Hosted or Self-Hosted solution for having fine-tuned code analysis settings along with more features.
