"use strict";(self.webpackChunkcodety_docs=self.webpackChunkcodety_docs||[]).push([[2217],{7755:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=c(4848),r=c(8453);const i={title:"Quickstart with CircleCI",tags:["codety"]},o=void 0,s={id:"quickstart/circleci",title:"Quickstart with CircleCI",description:"Create GitLab CI Workflow referring below example:",source:"@site/docs/quickstart/circleci.md",sourceDirName:"quickstart",slug:"/quickstart/circleci",permalink:"/docs/quickstart/circleci",draft:!1,unlisted:!1,editUrl:"https://github.com/codetyio/codety-developer-hub/tree/main/docs/quickstart/circleci.md",tags:[{inline:!0,label:"codety",permalink:"/docs/tags/codety"}],version:"current",frontMatter:{title:"Quickstart with CircleCI",tags:["codety"]},sidebar:"tutorialSidebar",previous:{title:"Quickstart with Bitbucket",permalink:"/docs/quickstart/bitbucket"},next:{title:"Quickstart with GitHub Actions",permalink:"/docs/quickstart/github-actions"}},a={},l=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Create GitLab CI Workflow referring below example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"# .circleci/config.yml\nversion: 2.1\njobs:\n  codety-runner:\n    docker:\n      - image: codetyio/codety\n    steps:\n      - checkout\n      - run:\n          command: codety\n\nworkflows:\n  build-and-test:\n    jobs:\n      - codety-runner\n\n\n"})}),"\n",(0,n.jsx)(t.p,{children:"The Codety Analyzer will be triggered when there's a new pull request been created or updated."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,c)=>{c.d(t,{R:()=>o,x:()=>s});var n=c(6540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);