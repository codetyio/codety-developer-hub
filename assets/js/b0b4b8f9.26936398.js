"use strict";(self.webpackChunkcodety_docs=self.webpackChunkcodety_docs||[]).push([[4894],{3748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(4848),i=n(8453);const r={title:"Quickstart with Harness CI",tags:["codety"]},c=void 0,o={id:"quickstart/harness-ci",title:"Quickstart with Harness CI",description:"Create Harness CI Workflow with below settings:",source:"@site/docs/quickstart/10-harness-ci.md",sourceDirName:"quickstart",slug:"/quickstart/harness-ci",permalink:"/docs/quickstart/harness-ci",draft:!1,unlisted:!1,editUrl:"https://github.com/codetyio/codety-developer-hub/tree/main/docs/quickstart/10-harness-ci.md",tags:[{inline:!0,label:"codety",permalink:"/docs/tags/codety"}],version:"current",sidebarPosition:10,frontMatter:{title:"Quickstart with Harness CI",tags:["codety"]},sidebar:"tutorialSidebar",previous:{title:"Quickstart with GitHub Actions",permalink:"/docs/quickstart/github-actions"},next:{title:"Quickstart with GitLab CI",permalink:"/docs/quickstart/gitlab-ci"}},a={},d=[];function l(e){const t={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Create Harness CI Workflow with below settings:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'# bitbucket-pipelines.yml\n- stage:\n    name: CodetyStage\n    identifier: CodetyAnalyzerStage\n    description: ""\n    type: CI\n    spec:\n      cloneCodebase: true\n      platform:\n        os: Linux\n        arch: Amd64\n      runtime:\n        type: Cloud\n        spec: {}\n      execution:\n        steps:\n          - step:\n              type: Run\n              name: Codety Analyzer\n              identifier: CodetyAnalyzer\n              spec:\n                connectorRef: account.harnessImage\n                image: codetyio/codety\n                shell: Sh\n                imagePullPolicy: Always\n\n'})}),"\n",(0,s.jsx)(t.p,{children:"The Codety Analyzer will be triggered when there's a new pull request been created or updated."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var s=n(6540);const i={},r=s.createContext(i);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);