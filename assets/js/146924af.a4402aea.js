"use strict";(self.webpackChunkcodety_docs=self.webpackChunkcodety_docs||[]).push([[348],{1912:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=n(4848),i=n(8453);const o={title:"Quickstart with GitHub Actions",tags:["codety"]},r=void 0,c={id:"quickstart/github-actions",title:"Quickstart with GitHub Actions",description:"Create GitHub Actions workflow referring below example:",source:"@site/docs/quickstart/01-github-actions.md",sourceDirName:"quickstart",slug:"/quickstart/github-actions",permalink:"/docs/quickstart/github-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/codetyio/codety-developer-hub/tree/main/docs/quickstart/01-github-actions.md",tags:[{inline:!0,label:"codety",permalink:"/docs/tags/codety"}],version:"current",sidebarPosition:1,frontMatter:{title:"Quickstart with GitHub Actions",tags:["codety"]},sidebar:"tutorialSidebar",previous:{title:"Codety Quickstart",permalink:"/docs/quickstart/index"},next:{title:"Quickstart with Harness CI",permalink:"/docs/quickstart/harness-ci"}},a={},u=[];function d(t){const e={code:"code",p:"p",pre:"pre",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Create GitHub Actions workflow referring below example:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:'# .github/workflows/codety.yaml\nname: Codety\non:\n  push:\n    branches: [ "main" ]\n  pull_request:\n    branches: [ "**" ]\njobs:\n  Codety_Static_Code_Analysis:\n    runs-on: ubuntu-latest\n    permissions:\n      pull-requests: write\n      contents: read\n    container:\n      image: codetyio/codety\n    steps:\n      - uses: actions/checkout@main\n      - run: codety\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"The Codety Analyzer will be triggered when there's a new pull request been created or updated."})]})}function l(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>c});var s=n(6540);const i={},o=s.createContext(i);function r(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);