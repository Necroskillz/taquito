(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(9),i=(r(0),r(161)),a={title:"TezBridge Signer",author:"Simon Boissonneault-Robert"},c={id:"tezbridge_signer",title:"TezBridge Signer",description:"Usage",source:"@site/../docs/tezbridge_signer.md",permalink:"/docs/tezbridge_signer",sidebar:"docs",previous:{title:"In Memory Signer",permalink:"/docs/inmemory_signer"},next:{title:"Working with contracts having complex storage/parameters",permalink:"/docs/complex_parameters"}},p=[{value:"Usage",id:"usage",children:[]}],u={rightToc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"You first need to include ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.tezbridge.com/plugin.js"}),"https://www.tezbridge.com/plugin.js")," in your application to use this signer"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { TezBridgeSigner } from '@taquito/tezbridge-signer'\nimport { Tezos } from '@taquito/taquito'\n\nTezos.setProvider({signer: new TezBridgeSigner()})\n")),Object(i.b)("p",null,"For more information on how to use TezBridge see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.tezbridge.com/"}),"https://docs.tezbridge.com/")))}s.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,g=l["".concat(a,".").concat(d)]||l[d]||b[d]||i;return r?o.a.createElement(g,c(c({ref:t},u),{},{components:r})):o.a.createElement(g,c({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);