(function(o,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],n):(o=typeof globalThis!="undefined"?globalThis:o||self,n(o.MyComponentLibrary={},o.React))})(this,function(o,n){"use strict";function _(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var c=_(n),d={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=c.default,y=Symbol.for("react.element"),x=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,b=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,p){var r,f={},i=null,l=null;p!==void 0&&(i=""+p),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)m.call(t,r)&&!v.hasOwnProperty(r)&&(f[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)f[r]===void 0&&(f[r]=t[r]);return{$$typeof:y,type:e,key:i,ref:l,props:f,_owner:b.current}}u.Fragment=x,u.jsx=s,u.jsxs=s,d.exports=u;const j=d.exports.jsx,O=({text:e,onClick:t})=>j("button",{style:{backgroundColor:"#099",padding:"10px 20px",borderRadius:"5px",border:"none",color:"#fff"},onClick:t,children:e});o.Button=O,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
