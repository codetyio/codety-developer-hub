---
sidebar_position: 10
---

# Predefined Variables

:::info Info

* Pre-defined variables are the settings can be passed into Codety Scanner container compute environment.

:::


#### CODETY_TOKEN
The token that gets generated by Codety users from the Codety Console.

####  CODETY_HOST
e.g. http://localhost:8081/



####  CODETY_REPORT_ALL_ISSUES
Control whether to report all issues within the repo, or only report the changed code.

Type: boolean

Value: false | true




#### GITHUB_TOKEN
The token will be used for posting pull request review comments, below GitHub permissions are needed within the Codety Scanner runtime scope:
* `pull-requests: write`
* `contents: read`

#### SLACK_OAUTH_TOKEN
The token will be used for Slack notification integration.  
Below Slack permissions are needed:
* `chat:write`

#### SLACK_CONVERSATION_ID
This id will be used for Slack notification integration, check Slack's PAI document to learn how to get Slack conversation ID: https://api.slack.com/messaging/sending#conversations


####  CODETY_RUNNER_DEBUG
For troubleshooting purposes only.