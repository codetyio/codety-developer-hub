"use strict";(self.webpackChunkcodety_docs=self.webpackChunkcodety_docs||[]).push([[8482],{3637:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=i(4848),r=i(8453);const c={title:"Quickstart with GitLab CI",tags:["codety"]},s=void 0,o={id:"quickstart/gitlab-ci",title:"Quickstart with GitLab CI",description:"Create GitLab CI Workflow referring below example:",source:"@site/docs/quickstart/gitlab-ci.md",sourceDirName:"quickstart",slug:"/quickstart/gitlab-ci",permalink:"/docs/quickstart/gitlab-ci",draft:!1,unlisted:!1,editUrl:"https://github.com/codetyio/codety-developer-hub/tree/main/docs/quickstart/gitlab-ci.md",tags:[{inline:!0,label:"codety",permalink:"/docs/tags/codety"}],version:"current",frontMatter:{title:"Quickstart with GitLab CI",tags:["codety"]},sidebar:"tutorialSidebar",previous:{title:"Quickstart with GitHub Actions",permalink:"/docs/quickstart/github-actions"},next:{title:"Quickstart with Harness CI",permalink:"/docs/quickstart/harness-ci"}},a={},l=[];function d(t){const e={code:"code",p:"p",pre:"pre",...(0,r.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"Create GitLab CI Workflow referring below example:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-yaml",children:"# .gitlab-ci.yml\nstages:\n  - codety\n\njob_build:\n  stage: test\n  image:\n      name: codetyio/codety:latest\n  script:\n    - codety\n\n\n"})}),"\n",(0,n.jsx)(e.p,{children:"The Codety Analyzer will be triggered when there's a new pull request been created or updated."})]})}function u(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},8453:(t,e,i)=>{i.d(e,{R:()=>s,x:()=>o});var n=i(6540);const r={},c=n.createContext(r);function s(t){const e=n.useContext(c);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),n.createElement(c.Provider,{value:e},t.children)}}}]);