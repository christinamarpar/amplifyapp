(this.webpackJsonpamplifyapp=this.webpackJsonpamplifyapp||[]).push([[11],{177:function(r,t,i){"use strict";i.r(t),i.d(t,"amplify_button",(function(){return n})),i.d(t,"amplify_loading_spinner",(function(){return a})),i.d(t,"amplify_section",(function(){return l}));var e=i(9),o=(i(18),i(5),i(11),i(48)),n=function(){function r(r){var t=this;Object(e.k)(this,r),this.type="button",this.variant="button",this.disabled=!1,this.handleClick=function(r){if(t.handleButtonClick)t.handleButtonClick(r);else if(Object(o.e)(t.el)&&"submit"==t.type){var i=t.el.closest("form");if(!i){var e=t.el.closest("amplify-form-section");i=e&&e.shadowRoot.querySelector("form")}if(i){r.preventDefault();var n=document.createElement("button");n.type=t.type,n.style.display="none",i.appendChild(n),n.click(),n.remove()}}}}return r.prototype.render=function(){var r;return Object(e.i)("button",{class:(r={},r[this.variant]=!0,r),type:this.type,disabled:this.disabled,onClick:this.handleClick},Object(e.i)("slot",null))},Object.defineProperty(r.prototype,"el",{get:function(){return Object(e.h)(this)},enumerable:!1,configurable:!0}),r}();n.style=":host{--background-color:var(--amplify-primary-color);--background-color-active:var(--amplify-primary-shade);--background-color-disable:var(--amplify-primary-tint);--color:var(--amplify-primary-contrast);--border-width:0;--border-color:initial;--border-style:initial;--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade);--text-transform:uppercase;width:100%;text-align:center}@media (min-width: 672px){:host{width:inherit}}.button{width:100%;min-width:153px;display:inline-block;margin-bottom:0;font-size:var(--amplify-text-sm);font-family:var(--amplify-font-family);font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;color:var(--color);padding:1rem;letter-spacing:0.75px;text-transform:var(--text-transform);background-color:var(--background-color);border-width:var(--border-width);border-color:var(--border-color);border-style:var(--border-style)}.button:active{opacity:1;background-color:var(--background-color-active)}.button:hover{opacity:0.8}.button:disabled{opacity:0.65;cursor:auto;background-color:var(--background-color-disable)}.anchor{color:var(--link-color);background-color:inherit;padding:0;border:none;font:inherit;cursor:pointer}.anchor:link{color:var(--link-color);text-decoration:none}.anchor:hover{color:var(--link-hover);text-decoration:underline}.anchor:active{color:var(--link-active);text-decoration:underline}";var a=function(){function r(r){Object(e.k)(this,r)}return r.prototype.render=function(){return Object(e.i)("amplify-icon",{class:"loading-spinner",name:"loading"})},r}();a.style=":host{--spinner-circle-fill:var(--amplify-smoke-white);--spinner-bar-fill:var(--amplify-primary-color);--width:0.875rem;--height:0.875rem}.loading-spinner svg{-webkit-animation:loading-spinner 1s linear infinite;animation:loading-spinner 1s linear infinite;width:var(--width);height:var(--height)}.loading-spinner svg #spinner-circle{fill:var(--spinner-circle-fill)}.loading-spinner svg #spinner-bar{fill:var(--spinner-bar-fill)}@-webkit-keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";var l=function(){function r(r){Object(e.k)(this,r),this.role="application"}return r.prototype.render=function(){return Object(e.i)("section",{class:"section",role:this.role},Object(e.i)("slot",null))},Object.defineProperty(r.prototype,"el",{get:function(){return Object(e.h)(this)},enumerable:!1,configurable:!0}),r}();l.style=":host{--font-family:var(--amplify-font-family)}.section{position:relative;margin-bottom:20px;background-color:var(--background-color);padding:35px 40px;text-align:left;display:inline-block;border-radius:6px;-webkit-box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family);width:100%;min-width:320px}@media (min-width: 672px){.section{width:auto;min-width:460px}}"}}]);
//# sourceMappingURL=11.ac16532c.chunk.js.map