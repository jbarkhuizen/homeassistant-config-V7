function e(e,t,i,s){var n,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class o{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new o(i,e,s)},a=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,s))(t)})(e):e;var l;const d=window,c=d.trustedTypes,h=c?c.emptyScript:"",u=d.reactiveElementPolyfillSupport,m={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},p=(e,t)=>t!==e&&(t==t||e==e),_={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:p},g="finalized";class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const s=this._$Ep(i,t);void 0!==s&&(this._$Ev.set(s,i),e.push(s))})),e}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const n=this[e];this[t]=s,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||_}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{i?e.adoptedStyleSheets=s.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=_){var s;const n=this.constructor._$Ep(e,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:m).toAttribute(t,i.type);this._$El=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,n=s._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=s.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:m;this._$El=n,this[n]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||p)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var f;v[g]=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:v}),(null!==(l=d.reactiveElementVersions)&&void 0!==l?l:d.reactiveElementVersions=[]).push("1.6.3");const y=window,b=y.trustedTypes,w=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,$="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,S="?"+x,A=`<${S}>`,C=document,E=()=>C.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,k=Array.isArray,N=e=>k(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),M="[ \t\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,L=/>/g,O=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,U=/"/g,z=/^(?:script|style|textarea|title)$/i,I=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),R=I(1),j=I(2),D=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),B=new WeakMap,F=C.createTreeWalker(C,129,null,!1);function W(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,s=[];let n,o=2===t?"<svg>":"",r=V;for(let t=0;t<i;t++){const i=e[t];let a,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===V?"!--"===l[1]?r=T:void 0!==l[1]?r=L:void 0!==l[2]?(z.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=null!=n?n:V,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?O:'"'===l[3]?U:H):r===U||r===H?r=O:r===T||r===L?r=V:(r=O,n=void 0);const h=r===O&&e[t+1].startsWith("/>")?" ":"";o+=r===V?i+A:d>=0?(s.push(a),i.slice(0,d)+$+i.slice(d)+x+h):i+x+(-2===d?(s.push(void 0),t):h)}return[W(e,o+(e[i]||"<?>")+(2===t?"</svg>":"")),s]};class Z{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const r=e.length-1,a=this.parts,[l,d]=J(e,t);if(this.el=Z.createElement(l,i),F.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=F.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith($)||t.startsWith(x)){const i=d[o++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+$).split(x),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?Y:"?"===t[1]?te:"@"===t[1]?ie:Q})}else a.push({type:6,index:n})}for(const t of e)s.removeAttribute(t)}if(z.test(s.tagName)){const e=s.textContent.split(x),t=e.length-1;if(t>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],E()),F.nextNode(),a.push({type:2,index:++n});s.append(e[t],E())}}}else if(8===s.nodeType)if(s.data===S)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(x,e+1));)a.push({type:7,index:n}),e+=x.length-1}n++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function G(e,t,i=e,s){var n,o,r,a;if(t===D)return t;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const d=P(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(t=G(e,l._$AS(e,t.values),l,s)),t}class K{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:C).importNode(i,!0);F.currentNode=n;let o=F.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new X(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new se(o,this,e)),this._$AV.push(t),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=F.nextNode(),r++)}return F.currentNode=C,n}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{constructor(e,t,i,s){var n;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),P(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==D&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):N(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==q&&P(this._$AH)?this._$AA.nextSibling.data=e:this.$(C.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,n="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=Z.createElement(W(s.h,s.h[0]),this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.v(i);else{const e=new K(n,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new Z(e)),t}T(e){k(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new X(this.k(E()),this.k(E()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Q{constructor(e,t,i,s,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(void 0===n)e=G(this,e,t,0),o=!P(e)||e!==this._$AH&&e!==D,o&&(this._$AH=e);else{const s=e;let r,a;for(e=n[0],r=0;r<n.length-1;r++)a=G(this,s[i+r],t,r),a===D&&(a=this._$AH[r]),o||(o=!P(a)||a!==this._$AH[r]),a===q?e=q:e!==q&&(e+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Y extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}const ee=b?b.emptyScript:"";class te extends Q{constructor(){super(...arguments),this.type=4}j(e){e&&e!==q?this.element.setAttribute(this.name,ee):this.element.removeAttribute(this.name)}}class ie extends Q{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=G(this,e,t,0))&&void 0!==i?i:q)===D)return;const s=this._$AH,n=e===q&&s!==q||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==q&&(s===q||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const ne={O:$,P:x,A:S,C:1,M:J,L:K,R:N,D:G,I:X,V:Q,H:te,N:ie,U:Y,F:se},oe=y.litHtmlPolyfillSupport;var re,ae;null==oe||oe(Z,X),(null!==(f=y.litHtmlVersions)&&void 0!==f?f:y.litHtmlVersions=[]).push("2.8.0");class le extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let r=o._$litPart$;if(void 0===r){const e=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new X(t.insertBefore(E(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return D}}le.finalized=!0,le._$litElement$=!0,null===(re=globalThis.litElementHydrateSupport)||void 0===re||re.call(globalThis,{LitElement:le});const de=globalThis.litElementPolyfillSupport;null==de||de({LitElement:le}),(null!==(ae=globalThis.litElementVersions)&&void 0!==ae?ae:globalThis.litElementVersions=[]).push("3.3.3");const ce=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){customElements.define(e,t)}}})(e,t),he=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function ue(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):he(e,t)}var me;null===(me=window.HTMLSlotElement)||void 0===me||me.prototype.assignedElements;const pe=r`
  :host {
    --mdc-icon-size: 24px;
    --clickable-cursor: default;
  }

  ha-card {
    height: 100%;
    overflow: hidden;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
}

  .card-content-container 
  {
    width: 100%;
  }

  .card-header
  {
    line-height: normal;
    padding: 0;
  }
`,_e=e=>e?"#".concat(e.map((e=>e.toString(16).padStart(2,"0"))).join("")):"",ge=e=>{if((e=e.trim()).startsWith("rgb")){const t=e.match(/rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)/);if(t)return[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)]}else if(e.startsWith("#")){if(7===e.length)return[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)];if(4===e.length)return[parseInt(e.charAt(1)+e.charAt(1),16),parseInt(e.charAt(2)+e.charAt(2),16),parseInt(e.charAt(3)+e.charAt(3),16)]}return null},ve=e=>(...t)=>({_$litDirective$:e,values:t});class fe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ye="important",be=" !"+ye,we=ve(class extends fe{constructor(e){var t;if(super(e),1!==e.type||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const s=e[i];return null==s?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ht){this.ht=new Set;for(const e in t)this.ht.add(e);return this.render(t)}this.ht.forEach((e=>{null==t[e]&&(this.ht.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")}));for(const e in t){const s=t[e];if(null!=s){this.ht.add(e);const t="string"==typeof s&&s.endsWith(be);e.includes("-")||t?i.setProperty(e,t?s.slice(0,-11):s,t?ye:""):i[e]=s}}return D}}),$e=(e,t,i={})=>{if("string"==typeof e)return"";const s=void 0!==i.decimalPlaces?i.decimalPlaces:0;let n=i.decimalSeparator;null==n&&(n=new Intl.NumberFormat(t.language).format(1.1).charAt(1));const o=void 0!==i.thousandSeparator?i.thousandSeparator:"";let[r,a=""]=e.toFixed(s).split(".");if(void 0!==o){const e=r.startsWith("-");e&&(r=r.substring(1));const t=/\B(?=(\d{3})+(?!\d))/g;r=r.replace(t,o),e&&(r="-"+r)}return s>0?`${r}${n}${a}`:r},xe="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Se=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},Ae=`{{lit-${String(Math.random()).slice(2)}}}`,Ce=`\x3c!--${Ae}--\x3e`,Ee=new RegExp(`${Ae}|${Ce}`),Pe="$lit$";class ke{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],n=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:d}}=e;for(;a<d;){const e=n.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)Ne(t[e].name,Pe)&&s++;for(;s-- >0;){const t=l[a],i=Te.exec(t)[2],s=i.toLowerCase()+Pe,n=e.getAttribute(s);e.removeAttribute(s);const o=n.split(Ee);this.parts.push({type:"attribute",index:r,name:i,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(Ae)>=0){const s=e.parentNode,n=t.split(Ee),o=n.length-1;for(let t=0;t<o;t++){let i,o=n[t];if(""===o)i=Ve();else{const e=Te.exec(o);null!==e&&Ne(e[2],Pe)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-5)+e[3]),i=document.createTextNode(o)}s.insertBefore(i,e),this.parts.push({type:"node",index:++r})}""===n[o]?(s.insertBefore(Ve(),e),i.push(e)):e.data=n[o],a+=o}}else if(8===e.nodeType)if(e.data===Ae){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(Ve(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(i.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(Ae,t+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const Ne=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},Me=e=>-1!==e.index,Ve=()=>document.createComment(""),Te=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Le(e,t){const{element:{content:i},parts:s}=e,n=document.createTreeWalker(i,133,null,!1);let o=He(s),r=s[o],a=-1,l=0;const d=[];let c=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==r&&r.index===a;)r.index=null!==c?-1:r.index-l,o=He(s,o),r=s[o]}d.forEach((e=>e.parentNode.removeChild(e)))}const Oe=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},He=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(Me(t))return i}return-1},Ue=new WeakMap,ze=e=>"function"==typeof e&&Ue.has(e),Ie={},Re={};class je{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=xe?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let n,o=0,r=0,a=s.nextNode();for(;o<i.length;)if(n=i[o],Me(n)){for(;r<n.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=t.pop(),a=s.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return xe&&(document.adoptNode(e),customElements.upgrade(e)),e}}const De=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),qe=` ${Ae} `;class Be{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let s=0;s<e;s++){const e=this.strings[s],n=e.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===e.indexOf("--\x3e",n+1);const o=Te.exec(e);t+=null===o?e+(i?qe:Ce):e.substr(0,o.index)+o[1]+o[2]+Pe+o[3]+Ae}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==De&&(t=De.createHTML(t)),e.innerHTML=t,e}}class Fe{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Ve()),this.endNode=e.appendChild(Ve())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Ve()),e.__insert(this.endNode=Ve())}insertAfterPart(e){e.__insert(this.startNode=Ve()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;ze(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Ie,e(this)}const e=this.__pendingValue;e!==Ie&&((e=>null===e||!("object"==typeof e||"function"==typeof e))(e)?e!==this.value&&this.__commitText(e):e instanceof Be?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):(e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]))(e)?this.__commitIterable(e):e===Re?(this.value=Re,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof je&&this.value.template===t)this.value.update(e.values);else{const i=new je(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const n of e)i=t[s],void 0===i&&(i=new Fe(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(n),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){Se(this.startNode.parentNode,e.nextSibling,this.endNode)}}let We=!1;function Je(e){let t=Ze.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Ze.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(Ae);return i=t.keyString.get(s),void 0===i&&(i=new ke(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}(()=>{try{const e={get capture(){return We=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();const Ze=new Map,Ge=new WeakMap;"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const Ke=(e,t)=>`${e}--${t}`;let Xe=!0;void 0===window.ShadyCSS?Xe=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Xe=!1);const Qe=e=>t=>{const i=Ke(t.type,e);let s=Ze.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},Ze.set(i,s));let n=s.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(Ae);if(n=s.keyString.get(o),void 0===n){const i=t.getTemplateElement();Xe&&window.ShadyCSS.prepareTemplateDom(i,e),n=new ke(t,i),s.keyString.set(o,n)}return s.stringsArray.set(t.strings,n),n},Ye=["html","svg"],et=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const tt={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},it=(e,t)=>t!==e&&(t==t||e==e),st={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:it},nt="finalized";class ot extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=st){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const n=this[e];this[t]=s,this.requestUpdateInternal(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||st}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(nt)||e.finalize(),this[nt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=it){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||tt,n="function"==typeof s?s:s.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||tt.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=st){const s=this.constructor,n=s._attributeNameForProperty(e,i);if(void 0!==n){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let s=!0;if(void 0!==e){const n=this.constructor;i=i||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}ot[nt]=!0;const rt=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function at(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):rt(e,t)}const lt=e=>function(e){return at({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}(e),dt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol();class ht{constructor(e,t){if(t!==ct)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(dt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const ut={};class mt extends ot{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight(((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e)),i),i=t(e,new Set),s=[];i.forEach((e=>s.unshift(e))),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!dt){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new ht(String(t),ct)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?dt?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ut&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return ut}}mt.finalized=!0,mt.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,n=Ge.has(t),o=Xe&&11===t.nodeType&&!!t.host,r=o&&!et.has(s),a=r?document.createDocumentFragment():t;if(((e,t,i)=>{let s=Ge.get(t);void 0===s&&(Se(t,t.firstChild),Ge.set(t,s=new Fe(Object.assign({templateFactory:Je},i))),s.appendInto(t)),s.setValue(e),s.commit()})(e,a,Object.assign({templateFactory:Qe(s)},i)),r){const e=Ge.get(a);Ge.delete(a);((e,t,i)=>{et.add(e);const s=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,e);const r=document.createElement("style");for(let e=0;e<o;e++){const t=n[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{Ye.forEach((t=>{const i=Ze.get(Ke(t,e));void 0!==i&&i.keyString.forEach((e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{i.add(e)})),Le(e,i)}))}))})(e);const a=s.content;i?function(e,t,i=null){const{element:{content:s},parts:n}=e;if(null==i)return void s.appendChild(t);const o=document.createTreeWalker(s,133,null,!1);let r=He(n),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(a=Oe(t),i.parentNode.insertBefore(t,i));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=He(n,r);return}r=He(n,r)}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(r,a.firstChild);const e=new Set;e.add(r),Le(i,e)}})(s,a,e.value instanceof je?e.value.template:void 0),Se(t,t.firstChild),t.appendChild(a),Ge.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)},mt.shadowRootOptions={mode:"open"};const pt={timerId:null,demoValue:50,callbacks:new Set,startTimer(){null===this.timerId&&(this.timerId=window.setInterval((()=>{this.callbacks.forEach((e=>e()))}),5e3))},stopTimer(){null!==this.timerId&&(window.clearInterval(this.timerId),this.timerId=null)},registerCallback(e){this.callbacks.has(e)||(this.callbacks.add(e),this.startTimer())},unregisterCallback(e){this.callbacks.has(e)&&this.callbacks.delete(e),0===this.callbacks.size&&this.stopTimer()}};class _t extends le{constructor(){super(...arguments),this.min=0,this.max=100,this.showMinMax=!0,this.value=0,this.unitOfMeasure="",this.gaugeBackgroundColor="var(--primary-background-color)",this.gaugeInfoColor="var(--secondary-text-color)",this.showNeedle=!1,this.animation=!0,this.showSegmentLabels=!0,this._valueAngle=0,this._updated=!1,this._segment_value_replacement="",this._normalizeValue=(e,t,i)=>isNaN(e)||isNaN(t)||isNaN(i)?0:e>i?i:e<t?t:e,this._getValueInPercentage=(e,t,i)=>100*(e-t)/(i-t),this._getAngle=(e,t,i)=>180*this._getValueInPercentage(this._normalizeValue(e,t,i),t,i)/100,this._getLowerAngle=(e,t,i)=>(isNaN(e)&&(e=t),this._getAngle(e,t,i)),this._getUpperAngle=(e,t,i)=>(isNaN(e)&&(e=i),this._getAngle(e,t,i))}connectedCallback(){super.connectedCallback(),this._valueAngle=this._getAngle(this.value,this.min,this.max)}_normalizeSegments(){if(this.segments)for(let e of this.segments)isNaN(e.lower)&&(e.lower=this.min),isNaN(e.upper)&&(e.upper=this.max),e.lower>e.upper&&(e.lower=e.upper)}updated(e){super.updated(e),(e.has("value")||e.has("valueText")||e.has("unit_of_measure")||e.has("_segment_value_replacement"))&&(this._valueAngle=this._getAngle(this.value,this.min,this.max),this._segment_value_replacement=this._getSegmentValueReplacement(),this._rescaleSvgText("text"))}_rescaleSvgText(e){const t=this.shadowRoot.querySelector(`.${e}`),i=t.querySelector("text").getBBox();t.setAttribute("viewBox",`${i.x} ${i.y} ${i.width} ${i.height}`)}_getSegmentValueReplacement(){if(this.segments)for(let e=this.segments.length-1;e>=0;e--){if(this.value>=this.segments[e].lower&&this.value<=this.segments[e].upper&&null!=this.segments[e].valueReplacement)return this.segments[e].valueReplacement;if((this.value<this.segments[e].lower||this.value>this.segments[e].upper)&&null!=this.segments[e].valueReplacementOutOfRange)return this.segments[e].valueReplacementOutOfRange}return""}render(){this._normalizeSegments();const e=Object.assign({},this.formatOptions);e.thousandSeparator="";let t=this.gaugeInfoColor;return this.segments&&!this.showNeedle&&this.segments.sort(((e,t)=>e.lower-t.lower)).map((e=>{this.value>=e.lower&&this.value<=e.upper&&(t=e.color)})),R`
      <div class="gauge-container">
      <svg viewBox="-50 -50 130 55" class="gauge">
      <g transform="translate(15 5)">
        <path 
          style =${we({stroke:`${this.segments&&this.showNeedle?this.gaugeInfoColor:this.gaugeBackgroundColor}`})}
          class="dial"
          d="M -40 0 A 40 40 0 0 1 40 0">
        </path>
        ${this.segments&&this.showNeedle?this.segments.sort(((e,t)=>e.lower-t.lower)).map((e=>{const t=this._getLowerAngle(e.lower,this.min,this.max),i=this._getUpperAngle(e.upper,this.min,this.max);return j`
                  <path
                      stroke="${e.color}"
                      class="segment"
                      d="M
                        ${0-40*Math.cos(t*Math.PI/180)}
                        ${0-40*Math.sin(t*Math.PI/180)}
                       A 40 40 0 0 1 
                        ${0-40*Math.cos(i*Math.PI/180)}
                        ${0-40*Math.sin(i*Math.PI/180)}
                       ">
                  </path>
                  `})):j`<path
                class="dial ${this._updated&&this.animation?"animation":""}"
                style =${we({stroke:`${t}`,transform:`rotate(${this._valueAngle-180}deg)`})}
                d="M -40 0 A 40 40 0 0 1 40 0">
            </path>
            `}
          ${this.showNeedle?j`
            <path
                class="needle ${this._updated&&this.animation?"animation":""}"
                d="M -25 -2.5 L -47.5 0 L -25 2.5 z"
                style=${we({transform:`rotate(${this._valueAngle}deg)`})}>
            </path>`:""}
      ${this._updated=!0}
      </svg>
      </g>
      <svg class="text">
        <text class="center">
          <tspan class="value-text">
            ${this._segment_value_replacement?this._segment_value_replacement:this.valueText||$e(this.value,this.locale,this.formatOptions)}
          </tspan>
          <tspan class="unit-text">
          ${this._segment_value_replacement?"":` ${this.unitOfMeasure}`}
          </tspan>
      </svg>
      ${this.showMinMax?j`
          <svg class="min-container">
            <text x="50%" class="center top">
              <tspan class="min-max-text">
                ${$e(this.min,this.locale,e)}
                </tapsn>
            </text>
          </svg>
          <svg class="max-container">
            <text x="50%" class="center top">
              <tspan class="min-max-text">
                ${$e(this.max,this.locale,e)}
                </tapsn>
            </text>
          </svg>
        `:""}
        ${this.segments&&this.showSegmentLabels?this.segments.map((t=>{const i=this._getLowerAngle(t.lower,this.min,this.max),s=this._getUpperAngle(t.upper,this.min,this.max);return R`
                  ${null!=t.lower?R`
                    <div class = "segment-label" style=${we({color:`${t.color}`,left:50-39*Math.cos(i*Math.PI/180)+"%",top:`calc(${100-92*Math.sin(i*Math.PI/180)}% - 0.8rem)`,transform:`translateX(${100*(i-180)/180}%)`})}>
                      ${$e(t.lower,this.locale,e)}
                    </div>`:""}
                  ${null!=t.upper?R`
                    <div class = "segment-label" style=${we({color:`${t.color}`,left:50-39*Math.cos(s*Math.PI/180)+"%",top:`calc(${100-92*Math.sin(s*Math.PI/180)}% - 0.8rem)`,transform:`translateX(${100*(s-180)/180}%)`})}>
                      ${$e(t.upper,this.locale,e)}
                    </div>`:""}
                  `})):""}
  </div>
  <div class="label-container">
      <div class="label">
            ${this.valueLabel||""}
      </div>
  </div>
`}}_t.styles=r`
    :host 
    {
      position: relative;
    }

    .dial 
    {
      fill: none;
      stroke-width: 14.7;
    }


    .needle 
    {
      fill: var(--primary-text-color);
    }

    .needle.animation,
    .dial.animation
    {
      transition: all 1s ease 0s;
    }

    .segment 
    {
      fill: none;
      stroke-width: 15;
      opacity: 0.8;
    }

    .gauge-container
    {
      position: relative;
    }

    .gauge 
    {
      display: block;
    }

    .text 
    {
      position: absolute;
      max-height: 25%;
      max-width: 55%;
      left: 50%;
      bottom: -6%;
      transform: translate(-50%, 0%);
    }

    .center
    {
      text-anchor: middle;
      direction: ltr;
    }


    .top
    {
      dominant-baseline: hanging;
    }


    .text .value-text 
    {
      font-size: 45px;
      fill: var(--primary-text-color);
    }


    .text .unit-text
    {
      font-size: 30px;
      fill: var(--secondary-text-color);    
    }


    .label-container
    {
      display: flex;
      align-items: center;
      position: relative;
      padding-top: 10px;
    }


    .label
    {
      font-size: 0.9rem;
      color: var(--primary-text-color);    
      margin: auto;
    }


    .min-container
    {
      position: absolute;
      max-height: 15%;
      max-width: 11%;
      left: 19.5%;
      bottom: -18%;
      transform: translate(-50%, 0%);
      overflow: visible;
    }


    .max-container
    {
      position: absolute;
      max-height: 15%;
      max-width: 11%;
      right: 19.5%;
      bottom: -18%;
      transform: translate(50%, 0%);
      overflow: visible;
    }


    .min-max-text 
    {
      font-size: 0.8rem;
      fill: var(--primary-text-color);
    }


    .segment-label 
    {
      position: absolute;
      font-size: 0.8rem;
      fill: var(--primary-text-color);
    }

  `,e([at({type:Number})],_t.prototype,"min",void 0),e([at({type:Number})],_t.prototype,"max",void 0),e([at({type:Boolean})],_t.prototype,"showMinMax",void 0),e([at({type:Number})],_t.prototype,"value",void 0),e([at()],_t.prototype,"unitOfMeasure",void 0),e([at({type:String})],_t.prototype,"valueLabel",void 0),e([at({type:String})],_t.prototype,"gaugeBackgroundColor",void 0),e([at({type:String})],_t.prototype,"gaugeInfoColor",void 0),e([at({attribute:!1})],_t.prototype,"formatOptions",void 0),e([at({attribute:!1,type:String})],_t.prototype,"valueText",void 0),e([at({attribute:!1})],_t.prototype,"locale",void 0),e([at({type:Boolean})],_t.prototype,"showNeedle",void 0),e([at({type:Boolean})],_t.prototype,"animation",void 0),e([at({type:Array})],_t.prototype,"segments",void 0),e([at({type:Boolean})],_t.prototype,"showSegmentLabels",void 0),e([lt()],_t.prototype,"_valueAngle",void 0),e([lt()],_t.prototype,"_updated",void 0),e([lt()],_t.prototype,"_segment_value_replacement",void 0),customElements.get("microteq-extended-gauge")||customElements.define("microteq-extended-gauge",_t),function(){const e=window;e.customCards=e.customCards||[],e.customCards.push(Object.assign(Object.assign({},{type:"extended-gauge-card",name:"Extended Gauge",description:"Extended Gauge Card with multiple segments."}),{preview:!0,documentationURL:"https://github.com/microteq/extended-gauge"}))}();let gt=class extends le{constructor(){super(...arguments),this._config={type:"custom:extended-gauge-card"},this._minValue=0,this._maxValue=0,this._updateDemoValue=()=>{pt.demoValue=this._minValue+Math.round((this._maxValue-this._minValue)*Math.random()),this.requestUpdate()}}connectedCallback(){var e;super.connectedCallback();const t=this._getValue();null!=this._getValue()?(this._minValue=1/0,this._maxValue=-1/0):(this._setMinValue(t),this._setMaxValue(t)),null==(null===(e=this._config.entity)||void 0===e?void 0:e.entity)&&pt.registerCallback(this._updateDemoValue)}disconnectedCallback(){super.disconnectedCallback(),pt.unregisterCallback(this._updateDemoValue)}getGridOptions(){return{max_columns:33}}getCardSize(){return 3}setConfig(e){this._config=Object.assign({},e)}static async getConfigElement(){return await Promise.resolve().then((function(){return pi})),document.createElement("extended-gauge-ui-editor")}static getStubConfig(e){return function(){const e=getComputedStyle(document.documentElement),t=ge(e.getPropertyValue("--secondary-text-color")),i=ge(e.getPropertyValue("--primary-background-color")),s={type:"custom:extended-gauge-card"};return s.main={color_value:t,color_background:i,show_needle:!0,show_entity_name:!0,show_min_max_values:!0,show_segment_labels:!0},s}()}updated(e){super.updated(e),this._config&&this.hass}shouldUpdate(){return!0}_setMinValue(e){var t,i;null==(null===(t=this._config.main)||void 0===t?void 0:t.min_value)?e&&(this._minValue=Math.min(e,this._minValue)):this._minValue=null===(i=this._config.main)||void 0===i?void 0:i.min_value}_setMaxValue(e){var t,i;null==(null===(t=this._config.main)||void 0===t?void 0:t.max_value)?e&&(this._maxValue=Math.max(e+1e-6,this._maxValue)):this._maxValue=null===(i=this._config.main)||void 0===i?void 0:i.max_value}_getValue(){var e,t,i,s,n,o,r,a,l;let d;if((null===(e=this._config.entity)||void 0===e?void 0:e.entity)&&(null===(t=this.hass)||void 0===t?void 0:t.states[null===(i=this._config.entity)||void 0===i?void 0:i.entity])&&(d=null===(s=this.hass)||void 0===s?void 0:s.states[null===(n=this._config.entity)||void 0===n?void 0:n.entity]),!d)return;const c=d.state;return"unavailable"!=c&&"timestamp"!==d.attributes.device_class?null==(null===(r=null===(o=this._config.entity)||void 0===o?void 0:o.settings)||void 0===r?void 0:r.conversion_factor)?parseFloat(c):parseFloat(c)/(null===(l=null===(a=this._config.entity)||void 0===a?void 0:a.settings)||void 0===l?void 0:l.conversion_factor):void 0}_convertSegments(e){var t,i,s,n;const o=[];if(e.segment_list)for(const r of e.segment_list)o.push({lower:null===(t=r.settings)||void 0===t?void 0:t.segment_lower,upper:null===(i=r.settings)||void 0===i?void 0:i.segment_upper,color:_e(null===(s=r.settings)||void 0===s?void 0:s.segment_color),valueReplacement:null===(n=r.settings)||void 0===n?void 0:n.segment_value_replacement});return o}_getDemoData(){var e,t,i,s,n,o,r,a,l,d,c,h,u,m,p,_,g,v,f,y,b,w,$,x,S,A,C,E,P,k,N,M,V,T,L,O,H,U,z,I,R,j,D,q,B,F,W,J,Z,G,K,X,Q,Y,ee,te,ie,se,ne,oe,re,ae,le,de,ce,he,ue,me,pe,_e,ve,fe,ye,be,we,$e,xe,Se,Ae,Ce,Ee,Pe,ke,Ne,Me,Ve;const Te=Object.assign({},this._config);null!=(null===(e=this._config.main)||void 0===e?void 0:e.min_value)?this._minValue=null===(t=this._config.main)||void 0===t?void 0:t.min_value:this._minValue=0,null!=(null===(i=this._config.main)||void 0===i?void 0:i.max_value)?this._maxValue=null===(s=this._config.main)||void 0===s?void 0:s.max_value:this._maxValue=null==(null===(o=null===(n=this._config.entity)||void 0===n?void 0:n.settings)||void 0===o?void 0:o.conversion_factor)?100:100/(null===(a=null===(r=this._config.entity)||void 0===r?void 0:r.settings)||void 0===a?void 0:a.conversion_factor),this._maxValue<=this._minValue&&(this._maxValue=this._minValue+(null==(null===(d=null===(l=this._config.entity)||void 0===l?void 0:l.settings)||void 0===d?void 0:d.conversion_factor)?100:100/(null===(h=null===(c=this._config.entity)||void 0===c?void 0:c.settings)||void 0===h?void 0:h.conversion_factor)));const Le=getComputedStyle(document.documentElement),Oe=[],He={segment_lower:(null===(_=null===(p=null===(m=null===(u=this._config)||void 0===u?void 0:u.segment_list)||void 0===m?void 0:m[0])||void 0===p?void 0:p.settings)||void 0===_?void 0:_.segment_lower)||(null===(y=null===(f=null===(v=null===(g=this._config)||void 0===g?void 0:g.segment_list)||void 0===v?void 0:v[0])||void 0===f?void 0:f.settings)||void 0===y?void 0:y.segment_upper)?null===(x=null===($=null===(w=null===(b=this._config)||void 0===b?void 0:b.segment_list)||void 0===w?void 0:w[0])||void 0===$?void 0:$.settings)||void 0===x?void 0:x.segment_lower:this._minValue,segment_upper:(null===(E=null===(C=null===(A=null===(S=this._config)||void 0===S?void 0:S.segment_list)||void 0===A?void 0:A[0])||void 0===C?void 0:C.settings)||void 0===E?void 0:E.segment_lower)||(null===(M=null===(N=null===(k=null===(P=this._config)||void 0===P?void 0:P.segment_list)||void 0===k?void 0:k[0])||void 0===N?void 0:N.settings)||void 0===M?void 0:M.segment_upper)?null===(O=null===(L=null===(T=null===(V=this._config)||void 0===V?void 0:V.segment_list)||void 0===T?void 0:T[0])||void 0===L?void 0:L.settings)||void 0===O?void 0:O.segment_upper:this._minValue+(this._maxValue-this._minValue)/3,segment_color:(null===(I=null===(z=null===(U=null===(H=this._config)||void 0===H?void 0:H.segment_list)||void 0===U?void 0:U[0])||void 0===z?void 0:z.settings)||void 0===I?void 0:I.segment_color)?null===(R=this._config.segment_list[0].settings)||void 0===R?void 0:R.segment_color:ge(Le.getPropertyValue("--primary-color")),segment_value_replacement:(null===(B=null===(q=null===(D=null===(j=this._config)||void 0===j?void 0:j.segment_list)||void 0===D?void 0:D[0])||void 0===q?void 0:q.settings)||void 0===B?void 0:B.segment_value_replacement)?null===(Z=null===(J=null===(W=null===(F=this._config)||void 0===F?void 0:F.segment_list)||void 0===W?void 0:W[0])||void 0===J?void 0:J.settings)||void 0===Z?void 0:Z.segment_value_replacement:void 0};Oe.push({id:0,settings:He});const Ue={segment_lower:(null===(Q=null===(X=null===(K=null===(G=this._config)||void 0===G?void 0:G.segment_list)||void 0===K?void 0:K[1])||void 0===X?void 0:X.settings)||void 0===Q?void 0:Q.segment_lower)||(null===(ie=null===(te=null===(ee=null===(Y=this._config)||void 0===Y?void 0:Y.segment_list)||void 0===ee?void 0:ee[1])||void 0===te?void 0:te.settings)||void 0===ie?void 0:ie.segment_upper)?null===(re=null===(oe=null===(ne=null===(se=this._config)||void 0===se?void 0:se.segment_list)||void 0===ne?void 0:ne[1])||void 0===oe?void 0:oe.settings)||void 0===re?void 0:re.segment_lower:this._minValue+.7*(this._maxValue-this._minValue),segment_upper:(null===(ce=null===(de=null===(le=null===(ae=this._config)||void 0===ae?void 0:ae.segment_list)||void 0===le?void 0:le[1])||void 0===de?void 0:de.settings)||void 0===ce?void 0:ce.segment_lower)||(null===(pe=null===(me=null===(ue=null===(he=this._config)||void 0===he?void 0:he.segment_list)||void 0===ue?void 0:ue[1])||void 0===me?void 0:me.settings)||void 0===pe?void 0:pe.segment_upper)?null===(ye=null===(fe=null===(ve=null===(_e=this._config)||void 0===_e?void 0:_e.segment_list)||void 0===ve?void 0:ve[1])||void 0===fe?void 0:fe.settings)||void 0===ye?void 0:ye.segment_upper:this._minValue+.85*(this._maxValue-this._minValue),segment_color:(null===(xe=null===($e=null===(we=null===(be=this._config)||void 0===be?void 0:be.segment_list)||void 0===we?void 0:we[1])||void 0===$e?void 0:$e.settings)||void 0===xe?void 0:xe.segment_color)?null===(Se=this._config.segment_list[1].settings)||void 0===Se?void 0:Se.segment_color:ge(Le.getPropertyValue("--accent-color")),segment_value_replacement:(null===(Pe=null===(Ee=null===(Ce=null===(Ae=this._config)||void 0===Ae?void 0:Ae.segment_list)||void 0===Ce?void 0:Ce[1])||void 0===Ee?void 0:Ee.settings)||void 0===Pe?void 0:Pe.segment_value_replacement)?null===(Ve=null===(Me=null===(Ne=null===(ke=this._config)||void 0===ke?void 0:ke.segment_list)||void 0===Ne?void 0:Ne[1])||void 0===Me?void 0:Me.settings)||void 0===Ve?void 0:Ve.segment_value_replacement:void 0};return Oe.push({id:1,settings:Ue}),Te.segment_list=Oe,Te}render(){var e,t,i,s,n,o,r,a,l,d,c,h,u,m,p,_,g,v,f,y,b,w,$,x;if(!this._config||!this.hass)return R``;let S,A;return this.style.setProperty("--clickable-cursor",this._config.manual_control?"pointer":"default"),null==(null===(e=this._config.entity)||void 0===e?void 0:e.entity)||null==this.hass.states[null===(t=this._config.entity)||void 0===t?void 0:t.entity]?(S=this._getDemoData(),A=pt.demoValue):(S=this._config,A=this._getValue(),this._setMinValue(A),this._setMaxValue(A)),R`
      <ha-card style="text-align: center !important;">
        <h1 class="card-header">${null===(i=S.title)||void 0===i?void 0:i.title}</h1>
        <div class="card-content-container">
          <microteq-extended-gauge
              .locale=${this.hass.locale}
              min=${this._minValue==1/0?-999999999:this._minValue}
              max=${this._maxValue==-1/0?999999999:this._maxValue}
              .value=${null==A?"":A}
              .valueLabel = "${(null===(s=S.main)||void 0===s?void 0:s.show_entity_name)?(null===(n=S.entity)||void 0===n?void 0:n.settings)&&(null===(r=null===(o=S.entity)||void 0===o?void 0:o.settings)||void 0===r?void 0:r.name)?null===(l=null===(a=S.entity)||void 0===a?void 0:a.settings)||void 0===l?void 0:l.name:null===(d=S.entity)||void 0===d?void 0:d.entity:void 0}"
              .unitOfMeasure = ${null!==(u=null===(h=null===(c=S.entity)||void 0===c?void 0:c.settings)||void 0===h?void 0:h.unit_of_measurement)&&void 0!==u?u:""}
              .showNeedle=${null===(m=S.main)||void 0===m?void 0:m.show_needle}
              .gaugeInfoColor=${_e(null===(p=S.main)||void 0===p?void 0:p.color_value)}
              .gaugeBackgroundColor=${_e(null===(_=S.main)||void 0===_?void 0:_.color_background)}
              .segments=${this._convertSegments(S)}
              .showSegmentLabels=${null===(g=S.main)||void 0===g?void 0:g.show_segment_labels}
              .showMinMax = ${null===(v=S.main)||void 0===v?void 0:v.show_min_max_values}
              .formatOptions=${{decimalPlaces:null===(y=null===(f=S.entity)||void 0===f?void 0:f.settings)||void 0===y?void 0:y.decimals,decimalSeparator:null===(w=null===(b=null==S?void 0:S.entity)||void 0===b?void 0:b.settings)||void 0===w?void 0:w.decimal_separator,thousandSeparator:null===(x=null===($=null==S?void 0:S.entity)||void 0===$?void 0:$.settings)||void 0===x?void 0:x.thousand_separator}}>
          </microteq-extended-gauge>
        </div>        
      </ha-card>
    `}};var vt,ft;gt.styles=r`
    ${pe}
  `,e([ue({attribute:!1})],gt.prototype,"hass",void 0),e([ue({state:!0})],gt.prototype,"_config",void 0),gt=e([ce("extended-gauge-card")],gt),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(vt||(vt={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ft||(ft={}));var yt=function(e,t,i,s){s=s||{},i=null==i?{}:i;var n=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,e.dispatchEvent(n),n},bt="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";class wt extends le{constructor(){super(...arguments),this.outlined=!1,this.icon="mdi:format-list-bulleted-type"}render(){return R`
      <div
        class="menu-entry"
        @click=${this._menuClicked}
        @keydown=${this._menuClicked}
        @focus=${this._focusChanged}
        @blur=${this._focusChanged}
        role="button">
        <ha-icon icon=${this.icon} class="summary-icon">
        </ha-icon>
        <slot name="header">
          <div class="header">
            ${this.header}
            <slot class="secondary" name="secondary">${this.secondary}</slot>
          </div>
        </slot>
        <ha-icon-button style="pointer-events: none;"
          .path=${"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}
          class="summary-icon-right">
          </ha-icon-button>
      </div>
    `}_focusChanged(e){this.shadowRoot.querySelector(".top").classList.toggle("focused","focus"===e.type)}_menuClicked(){yt(this,"microteq-menu-click")}static get styles(){return r`
      :host 
      {
        display: block;
      }

      :host([outlined]) 
      {
        box-shadow: none;
        border-width: 1px;
        border-style: solid;
        border-color: var(
          --ha-card-border-color,
          var(--divider-color, #e0e0e0)
        );
        border-radius: var(--ha-card-border-radius, 12px);
      }

      .menu-entry 
      {
        width: 100%;
        display: flex;
        gap: 1rem;
        padding: var(--expansion-panel-summary-padding, 0 8px);
        min-height: 48px;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
        font-weight: 500;
        outline: none;
        user-select: none;
      }

      .summary-icon 
      {
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
        direction: var(--direction);
        color: var(--secondary-text-color);
      }

      .header,
      ::slotted([slot="header"]) 
      {
        flex: 1;
      }

      .secondary 
      {
        display: block;
        color: var(--secondary-text-color);
        font-size: 12px;
      }
    `}}e([at({type:String})],wt.prototype,"path",void 0),e([at({type:Boolean,reflect:!0})],wt.prototype,"outlined",void 0),e([at({type:String})],wt.prototype,"icon",void 0),e([at()],wt.prototype,"header",void 0),e([at()],wt.prototype,"secondary",void 0),customElements.get("microteq-menu-entry")||customElements.define("microteq-menu-entry",wt);class $t extends le{_goBack(){yt(this,"microteq-go-back")}render(){return R`
      <div class="header">
        <div class="back-title">
          <ha-icon-button
            .label=${"Go Back"}
            .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
            @click=${this._goBack}>
          </ha-icon-button>
          <span>${this.pageTitle}</span>
        </div>
      </div>
    `}static get styles(){return r`
      .header 
      {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        user-select: none;
      }

      .back-title 
      {
        display: flex;
        align-items: center;
        font-size: 18px;
      }
    `}}e([at({type:String})],$t.prototype,"pageTitle",void 0),customElements.get("microteq-page-header")||customElements.define("microteq-page-header",$t);const{I:xt}=ne,St=()=>document.createComment(""),At=(e,t,i)=>{var s;const n=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=n.insertBefore(St(),o),s=n.insertBefore(St(),o);i=new xt(t,s,e,e.options)}else{const t=i._$AB.nextSibling,r=i._$AM,a=r!==e;if(a){let t;null===(s=i._$AQ)||void 0===s||s.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==o||a){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;n.insertBefore(e,o),e=t}}}return i},Ct=(e,t,i=e)=>(e._$AI(t,i),e),Et={},Pt=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let i=e._$AA;const s=e._$AB.nextSibling;for(;i!==s;){const e=i.nextSibling;i.remove(),i=e}},kt=(e,t,i)=>{const s=new Map;for(let n=t;n<=i;n++)s.set(e[n],n);return s},Nt=ve(class extends fe{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}ct(e,t,i){let s;void 0===i?i=t:void 0!==t&&(s=t);const n=[],o=[];let r=0;for(const t of e)n[r]=s?s(t,r):r,o[r]=i(t,r),r++;return{values:o,keys:n}}render(e,t,i){return this.ct(e,t,i).values}update(e,[t,i,s]){var n;const o=(e=>e._$AH)(e),{values:r,keys:a}=this.ct(t,i,s);if(!Array.isArray(o))return this.ut=a,r;const l=null!==(n=this.ut)&&void 0!==n?n:this.ut=[],d=[];let c,h,u=0,m=o.length-1,p=0,_=r.length-1;for(;u<=m&&p<=_;)if(null===o[u])u++;else if(null===o[m])m--;else if(l[u]===a[p])d[p]=Ct(o[u],r[p]),u++,p++;else if(l[m]===a[_])d[_]=Ct(o[m],r[_]),m--,_--;else if(l[u]===a[_])d[_]=Ct(o[u],r[_]),At(e,d[_+1],o[u]),u++,_--;else if(l[m]===a[p])d[p]=Ct(o[m],r[p]),At(e,o[u],o[m]),m--,p++;else if(void 0===c&&(c=kt(a,p,_),h=kt(l,u,m)),c.has(l[u]))if(c.has(l[m])){const t=h.get(a[p]),i=void 0!==t?o[t]:null;if(null===i){const t=At(e,o[u]);Ct(t,r[p]),d[p]=t}else d[p]=Ct(i,r[p]),At(e,o[u],i),o[t]=null;p++}else Pt(o[m]),m--;else Pt(o[u]),u++;for(;p<=_;){const t=At(e,d[_+1]);Ct(t,r[p]),d[p++]=t}for(;u<=m;){const e=o[u++];null!==e&&Pt(e)}return this.ut=a,((e,t=Et)=>{e._$AH=t})(e,d),D}});class Mt extends le{constructor(){super(...arguments),this.sortable=!1}_elementListChanged(e,t,i){yt(this,"microteq-element-list-changed",{elementList:e,index:t,change:i})}_findNewElementId(e){if(0==e.length)return 0;const t=[...e].sort(((e,t)=>e.id-t.id)),i=t.find(((e,t,i)=>t>0&&e.id!==i[t-1].id+1));return i?i.id-1:t[t.length-1].id+1}async _addRow(){this.elementList||(this.elementList=[]);const e={id:this._findNewElementId(this.elementList)},t=this.elementList.concat(e);this._elementListChanged(t,t.length-1,"add")}async _editRow(e){this._elementListChanged(this.elementList,e,"edit")}_removeRow(e){if(!this.elementList)return;let t=this.elementList.concat();t.splice(e,1),this._elementListChanged(t,e,"remove")}_rowMoved(e){if(e.detail.oldIndex===e.detail.newIndex)return;const t=this.elementList.concat();t.splice(e.detail.newIndex,0,t.splice(e.detail.oldIndex,1)[0]),this._elementListChanged(t,0,"move")}render(){var e,t;let i=!1;return this.elementList&&this.elementList.length>1&&(i=this.sortable),R`
        <div class="title">
          ${this.elementList&&this.elementList.length>0?this.listTitle:this.listEmptyText}
        </div>
        <ha-sortable 
          .hass="${this.hass}" 
          @item-moved=${this._rowMoved}
          draggable-selector=".draggable"
          handle-selector="ha-svg-icon">
          <mwc-list>
           ${Nt(this.elementList,(e=>null==e?void 0:e.id),((e,t)=>{var s;return R`
            <div class="${i?"draggable":""} row-container row">
            ${i?R`
              <ha-svg-icon
                class="handle"
                .path=${"M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"}
                slot="graphic">
              </ha-svg-icon>
              `:""}
              <div class="row-text">
                ${null===(s=null==e?void 0:e.title)||void 0===s?void 0:s.title}
              </div>
              <ha-icon-button
                .label=${this.hass.localize("ui.components.entity.entity-picker.clear")}
                .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                class="remove-icon"
                .index=${t}
                @click=${()=>this._removeRow(t)}>
              </ha-icon-button>
              <ha-icon-button 
                .label=${this.hass.localize("ui.components.entity.entity-picker.edit")}
                .path=${bt}
                class="edit-icon"
                .index=${t}
                @click=${()=>this._editRow(t)}>
              </ha-icon-button>
            </div>
            `}))}
            ${this.elementList.length>0&&""==(null!==(t=null===(e=this.elementList[this.elementList.length-1].title)||void 0===e?void 0:e.title)&&void 0!==t?t:"").trim()?R``:R`
            <div class="row-container">
              <div class="new-row"
                @click=${this._addRow}>
                ${this.addNewText}
              </div>
              <ha-icon-button
                .label=${this.hass.localize("ui.components.entity.entity-picker.add")}
                .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}
                class="add-icon"
                @click=${this._addRow}>
                </ha-icon-button>
              </div>
            </div>
            `}
          </mwc-list>
        </ha-sortable>
  `}static get styles(){return r`
      .title
      {
        color: var(--mdc-theme-primary,#6200ee);
        pointer-events: none;
        user-select: none;
      }

      .row-container
      {
        display: flex;
        align-items: center;
        user-select: none;
      }

      .row-container.row
      {
        padding-top: 5px;
        padding-bottom: 5px;
      }

      .row-container.row .row-text
      {
        flex-grow: 1;
        display: flex;
        align-items: center;
        color: var(--primary-text-color);
        padding: var(--text-field-padding, 0px 16px);
        background-color: var(--mdc-text-field-fill-color, #f5f5f5);
        height: 56px;
        pointer-events: none;
      }

      .row-container .new-row
      {
        flex-grow: 1;
        cursor: pointer;
      }

      .remove-icon,
      .edit-icon,
      .add-icon
      {
        --mdc-icon-button-size: 36px;
        color: var(--secondary-text-color);
      }


     .handle {
          cursor: move; /* fallback if grab cursor is unsupported */
          cursor: grab;
        }

            ha-list-item {
          --mdc-list-side-padding: 12px;
          overflow: visible;
        }
    `}}e([at({attribute:!1})],Mt.prototype,"elementList",void 0),e([at({type:Boolean,reflect:!0})],Mt.prototype,"sortable",void 0),e([at({type:String})],Mt.prototype,"listTitle",void 0),e([at({type:String})],Mt.prototype,"listEmptyText",void 0),e([at({type:String})],Mt.prototype,"addNewText",void 0),customElements.get("microteq-element-list")||customElements.define("microteq-element-list",Mt);class Vt extends le{constructor(e){super(),this._siteHistory=[],this._previousSectionConfigData=void 0,this.computeLabelCallback=e=>(null==e?void 0:e.label)?null==e?void 0:e.label:this.hass.localize(`ui.panel.lovelace.editor.card.generic.${null==e?void 0:e.name}`)||this.localizeText(null==e?void 0:e.name),this.computeErrorCallback=e=>this.localizeError(e),this._mainPage=e}async connectedCallback(){super.connectedCallback();try{this._eventSubscription&&this._eventSubscription.unsubscribe(),this._eventSubscription=await this.hass.connection.subscribeEvents((async e=>{"lovelace_updated"===e.event_type&&await this.configSaved()}),"lovelace_updated")}catch(e){console.error("Error while subscribing to the lovelace_updated event:",e)}}disconnectedCallback(){super.disconnectedCallback(),this._eventSubscription&&this._eventSubscription()}async setConfig(e){0==this._siteHistory.length&&this._mainPage&&(this._mainPage._configData=e,this._siteHistory=[this._mainPage]),this.requestUpdate()}async configSaved(){}valueChanged(e,t,i,s,n){}listElementAdded(e,t){}listElementRemoving(e,t){return!0}validateForm(e,t,i){return!1}renderCustom(e,t){}setCurrentPage(e,t=void 0,i=void 0){const s=this._getCurrentPage();s._sectionName=e.name;const n=e.link;n._isAdd=void 0===t?void 0:i,null!=s._rowIndex?n._configData=s._configData[s._rowIndex][e.name]:n._configData=s._configData[e.name],n._rowIndex=t,this._siteHistory.push(n),this.requestUpdate()}updateFormValues(e,t,i){var s;if(!(null===(s=this._mainPage)||void 0===s?void 0:s._configData)||!this.hass)return;let n,o,r=i.detail.value;const a=this._getCurrentPage();null!=a._rowIndex?(o=[...a._configData],n=Object.assign({},o[a._rowIndex])):(o=Object.assign({},a._configData),n=o),n[t.name]||(n[t.name]={}),this._previousSectionConfigData=n[t.name],n[t.name]=Object.assign({},r),this.validateForm(e,t,r)&&(n=this.valueChanged(e,n,t.name,r,this._previousSectionConfigData)),null!=a._rowIndex?o[a._rowIndex]=n:o=n,a._configData=o;const l=this._updateSectionConfigData(void 0,o);yt(this,"config-changed",{config:l})}localizeText(e){}localizeError(e){}_goBack(){this._siteHistory.pop(),this.requestUpdate()}_getCurrentPage(){return this._siteHistory[this._siteHistory.length-1]}_updateSectionConfigData(e,t){let i=t,s=this._siteHistory.length-1;null==e&&(s-=1);for(let t=s;t>=0;t--){let s,n,o=this._siteHistory[t],r=o._configData,a=t==this._siteHistory.length-1?e:o._sectionName;null!=o._rowIndex?(s=[...r],n=Object.assign({},s[o._rowIndex]),n[a]=i,s[o._rowIndex]=n):(s=Object.assign({},r),s[a]=i),i=s,o._configData=s}return i}_getSectionConfigData(e){const t=this._getCurrentPage();if(t._configData)return null!=t._rowIndex?t._configData[t._rowIndex][e.name]:t._configData[e.name]}_elementListChanged(e,t){const i=e.detail.elementList,s=e.detail.index;let n;switch(e.detail.change){case"add":i[s]=this.listElementAdded(t.name,i[s]),n=this._updateSectionConfigData(t.name,i),yt(this,"config-changed",{config:n}),this.setCurrentPage(t,s,!0);break;case"edit":this.setCurrentPage(t,s,!1);break;case"remove":this.listElementRemoving(t.name,i[s])&&(n=this._updateSectionConfigData(t.name,i),yt(this,"config-changed",{config:n}));break;case"move":n=this._updateSectionConfigData(t.name,i),yt(this,"config-changed",{config:n})}}_renderPageHeader(e){return null!=e&&null!=e.title&&""!=e.title.trim()?R`
      <microteq-page-header
        @microteq-go-back=${this._goBack}
        pageTitle = ${this.localizeText(`${null!=e._isAdd&&e._isAdd?e.alternative_title:e.title}`)}>
      </microteq-page-header>
    `:R``}_renderMenuEntry(e){var t;const i=null!==(t=e.icon)&&void 0!==t?t:"mdi:dots-horizontal-circle-outline",s=e.title?e.title:e.name;return R`
      <microteq-menu-entry
        path=${e.title}
        header="${this.localizeText(`${s}`)}"
        @microteq-menu-click=${()=>this.setCurrentPage(e)}
        icon=${i}>
      </microteq-menu-entry>
    `}_renderEditableEntity(e,t){const i=this._getSectionConfigData(t);return R`
    <div style="display: flex;">
      <ha-form
        .hass=${this.hass}
        .schema=${t.conditionalSchemaField?t.schema(i?i[t.conditionalSchemaField]:""):t.schema}
        .data = ${i}
        .computeLabel=${this.computeLabelCallback}
        .error=${t._errors}
        .computeError=${this.computeErrorCallback}
        @value-changed=${i=>this.updateFormValues(e,t,i)}>
      </ha-form>
      <ha-icon-button 
        .label=${this.hass.localize("ui.components.entity.entity-picker.edit")}
        .path=${bt}
        class="edit-icon"
        @click=${()=>this.setCurrentPage(t)}>
      </ha-icon-button>
    </div>
  `}_renderForm(e,t){const i=this._getSectionConfigData(t);return this.validateForm(e,t,i),R`
    <ha-form
      .hass=${this.hass}
      .schema=${t.conditionalSchemaField?t.schema(i?i[t.conditionalSchemaField]:""):t.schema}
      .data = ${i}
      .computeLabel=${this.computeLabelCallback}
      .error=${t._errors}
      .computeError=${this.computeErrorCallback}
      @value-changed=${i=>this.updateFormValues(e,t,i)}>
    </ha-form>
  `}_renderElementList(e){var t;const i=this._getSectionConfigData(e)||[],s=e.title?e.title:e.name;return R`
      <microteq-element-list
        .hass = ${this.hass}
        .elementList = ${i}
        .sortable = ${e.sortable}
        .listTitle = ${this.localizeText(`${null!=s?s:""}`)}
        .listEmptyText = ${this.localizeText(`${null!==(t=e.alternative_title)&&void 0!==t?t:""}`)}
        .addNewText = ${this.localizeText(`${e.link.alternative_title}`)}
        @microteq-element-list-changed=${t=>this._elementListChanged(t,e)}>
      </microteq-element-list>
    `}_renderCustom(e,t){const i=this._getSectionConfigData(t);return this.validateForm(e,t,i),this.renderCustom(t,i)}_renderSection(e){var t;let i;switch(i=1==this._siteHistory.length?"":null!==(t=this._siteHistory[this._siteHistory.length-2]._sectionName)&&void 0!==t?t:"",e.type){case"menu":return this._renderMenuEntry(e);case"entity":return this._renderEditableEntity(i,e);case"form":return this._renderForm(i,e);case"element_list":return this._renderElementList(e);case"custom":return this._renderCustom(i,e)}return R``}render(){var e;const t=this._getCurrentPage();return this.hass&&(null===(e=this._mainPage)||void 0===e?void 0:e._configData)&&t?R`
      <div class="card-config">
        ${this._renderPageHeader(t)}
        ${t.sections.map((e=>this._renderSection(e)))}
      </div>
      `:q}static get styles(){return r`
      ha-form 
      {
        width: 100%;
      }

      ha-icon-button {
        align-self: end;
        padding-bottom: 6px;
      }


      .card-config {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 10px;
      }
    
    `}}e([at({attribute:!1})],Vt.prototype,"hass",void 0);var Tt={entity_settings:"Edit entity settings",name:"Name",unit_of_measurement:"Unit of measurement",conversion_factor:"Conversion factor",decimals:"Number of decimals",thousand_separator:"Thousands separator",decimal_separator:"Decimal separator",min_value:"Minimum displayed value",max_value:"Maximum displayed value",color_value:"Color for value display",color_background:"Background color (no value)",show_needle:"Show needle",show_entity_name:"Show entity name",show_min_max_values:"Show min / max values",show_segment_labels:"Show segment thresholds",add_segment:"Add segment",edit_segment:"Edit segment",segment_list:"Segments",segment_list_empty:"No segments defined",segment_lower:"Lower bound",segment_upper:"Upper bound",segment_color:"Segment color",segment_value_replacement:"Override value"},Lt={range_lower_greater_than_upper:"Lower range bound is greater than the upper bound.",value_lower_greater_than_upper:"Minimum displayed value is greater than the maximum value."},Ot={editor:Tt,error:Lt},Ht={entity_settings:"Einstellungen der Entität bearbeiten",name:"Name",unit_of_measurement:"Masseinheit",conversion_factor:"Umrechnungsfaktor",decimals:"Anzahl Kommastellen",thousand_separator:"Tausendertrennzeichen",decimal_separator:"Dezimaltrennzeichen",min_value:"Minimaler angezeigter Wert",max_value:"Maximaler angezeigter Wert",color_value:"Farbe für die Anzeige des Wertes",color_background:"Hintergrundfarbe (kein Wert)",show_needle:"Nadel anzeigen",show_entity_name:"Name der Entität anzeigen",show_min_max_values:"Min. / Max. Werte anzeigen",show_segment_labels:"Segmentgrenzwerte anzeigen",add_segment:"Segment hinzufügen",edit_segment:"Segment bearbeiten",segment_list:"Segmente",segment_list_empty:"Keine Segmente definiert",segment_lower:"Untere Grenze",segment_upper:"Obere Grenze",segment_color:"Farbe de Segments",segment_value_replacement:"Wert überschreiben"},Ut={range_lower_greater_than_upper:"Die untere Bereichsgrenze ist grösser als die obere.",value_lower_greater_than_upper:"Der angezeigte Minimalwert ist grösser als der Maximalwert."},zt={editor:Ht,error:Ut},It={entity_settings:"Modifier les paramètres de l'entité",name:"Nom",unit_of_measurement:"Unité de mesure",conversion_factor:"Facteur de conversion",decimals:"Nombre de décimales",thousand_separator:"Séparateur de milliers",decimal_separator:"Séparateur décimal",min_value:"Valeur minimale affichée",max_value:"Valeur maximale affichée",color_value:"Couleur de la valeur",color_background:"Couleur de fond (pas de valeur)",show_needle:"Afficher l'aiguille",show_entity_name:"Afficher le nom de l'entité",show_min_max_values:"Afficher les valeurs min / max",show_segment_labels:"Afficher les limites des segments",add_segment:"Ajouter un segment",edit_segment:"Modifier le segment",segment_list:"Segments",segment_list_empty:"Aucun segment défini",segment_lower:"Limite inférieure",segment_upper:"Limite supérieure",segment_color:"Couleur du segment",segment_value_replacement:"Remplacer la valeur"},Rt={range_lower_greater_than_upper:"La limite inférieure est supérieure à la limite supérieure.",value_lower_greater_than_upper:"La valeur minimale affichée est supérieure à la valeur maximale."},jt={editor:It,error:Rt},Dt={entity_settings:"Modifica impostazioni entità",name:"Nome",unit_of_measurement:"Unità di misura",conversion_factor:"Fattore di conversione",decimals:"Numero di decimali",thousand_separator:"Separatore delle migliaia",decimal_separator:"Separatore decimale",min_value:"Valore minimo visualizzato",max_value:"Valore massimo visualizzato",color_value:"Colore del valore",color_background:"Colore di sfondo (nessun valore)",show_needle:"Mostra l'indicatore",show_entity_name:"Mostra il nome dell'entità",show_min_max_values:"Mostra valori min / max",show_segment_labels:"Mostra i limiti dei segmenti",add_segment:"Aggiungi segmento",edit_segment:"Modifica segmento",segment_list:"Segmenti",segment_list_empty:"Nessun segmento definito",segment_lower:"Limite inferiore",segment_upper:"Limite superiore",segment_color:"Colore del segmento",segment_value_replacement:"Sostituisci valore"},qt={range_lower_greater_than_upper:"Il limite inferiore è maggiore del limite superiore.",value_lower_greater_than_upper:"Il valore minimo visualizzato è maggiore del valore massimo."},Bt={editor:Dt,error:qt},Ft={entity_settings:"Editar configuración de la entidad",name:"Nombre",unit_of_measurement:"Unidad de medida",conversion_factor:"Factor de conversión",decimals:"Número de decimales",thousand_separator:"Separador de miles",decimal_separator:"Separador decimal",min_value:"Valor mínimo mostrado",max_value:"Valor máximo mostrado",color_value:"Color para mostrar el valor",color_background:"Color de fondo (sin valor)",show_needle:"Mostrar aguja",show_entity_name:"Mostrar nombre de la entidad",show_min_max_values:"Mostrar valores mín. / máx.",show_segment_labels:"Mostrar límites de segmentos",add_segment:"Agregar segmento",edit_segment:"Editar segmento",segment_list:"Segmentos",segment_list_empty:"No hay segmentos definidos",segment_lower:"Límite inferior",segment_upper:"Límite superior",segment_color:"Color del segmento",segment_value_replacement:"Sobrescribir valor"},Wt={range_lower_greater_than_upper:"El límite inferior es mayor que el límite superior.",value_lower_greater_than_upper:"El valor mínimo mostrado es mayor que el valor máximo."},Jt={editor:Ft,error:Wt};const Zt={en:Object.freeze({__proto__:null,editor:Tt,error:Lt,default:Ot}),de:Object.freeze({__proto__:null,editor:Ht,error:Ut,default:zt}),fr:Object.freeze({__proto__:null,editor:It,error:Rt,default:jt}),it:Object.freeze({__proto__:null,editor:Dt,error:qt,default:Bt}),es:Object.freeze({__proto__:null,editor:Ft,error:Wt,default:Jt})};function Gt(e,t){try{return e.split(".").reduce(((e,t)=>e[t]),Zt[t])}catch(e){return}}function Kt(e){let t=Gt(e,(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_"));return t||(t=Gt(e,"en")),null!=t?t:e}class Xt extends TypeError{constructor(e,t){let i;const{message:s,explanation:n,...o}=e,{path:r}=e,a=0===r.length?s:`At path: ${r.join(".")} -- ${s}`;super(n??a),null!=n&&(this.cause=a),Object.assign(this,o),this.name=this.constructor.name,this.failures=()=>i??(i=[e,...t()])}}function Qt(e){return"object"==typeof e&&null!=e}function Yt(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function ei(e,t,i,s){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:n,branch:o}=t,{type:r}=i,{refinement:a,message:l=`Expected a value of type \`${r}\`${a?` with refinement \`${a}\``:""}, but received: \`${Yt(s)}\``}=e;return{value:s,type:r,refinement:a,key:n[n.length-1],path:n,branch:o,...e,message:l}}function*ti(e,t,i,s){(function(e){return Qt(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const n of e){const e=ei(n,t,i,s);e&&(yield e)}}function*ii(e,t,i={}){const{path:s=[],branch:n=[e],coerce:o=!1,mask:r=!1}=i,a={path:s,branch:n};if(o&&(e=t.coercer(e,a),r&&"type"!==t.type&&Qt(t.schema)&&Qt(e)&&!Array.isArray(e)))for(const i in e)void 0===t.schema[i]&&delete e[i];let l="valid";for(const s of t.validator(e,a))s.explanation=i.message,l="not_valid",yield[s,void 0];for(let[d,c,h]of t.entries(e,a)){const t=ii(c,h,{path:void 0===d?s:[...s,d],branch:void 0===d?n:[...n,c],coerce:o,mask:r,message:i.message});for(const i of t)i[0]?(l=null!=i[0].refinement?"not_refined":"not_valid",yield[i[0],void 0]):o&&(c=i[1],void 0===d?e=c:e instanceof Map?e.set(d,c):e instanceof Set?e.add(c):Qt(e)&&(void 0!==c||d in e)&&(e[d]=c))}if("not_valid"!==l)for(const s of t.refiner(e,a))s.explanation=i.message,l="not_refined",yield[s,void 0];"valid"===l&&(yield[void 0,e])}class si{constructor(e){const{type:t,schema:i,validator:s,refiner:n,coercer:o=e=>e,entries:r=function*(){}}=e;this.type=t,this.schema=i,this.entries=r,this.coercer=o,this.validator=s?(e,t)=>ti(s(e,t),t,this,e):()=>[],this.refiner=n?(e,t)=>ti(n(e,t),t,this,e):()=>[]}assert(e,t){return function(e,t,i){const s=ni(e,t,{message:i});if(s[0])throw s[0]}(e,this,t)}create(e,t){return function(e,t,i){const s=ni(e,t,{coerce:!0,message:i});if(s[0])throw s[0];return s[1]}(e,this,t)}is(e){return function(e,t){return!ni(e,t)[0]}(e,this)}mask(e,t){return function(e,t,i){const s=ni(e,t,{coerce:!0,mask:!0,message:i});if(s[0])throw s[0];return s[1]}(e,this,t)}validate(e,t={}){return ni(e,this,t)}}function ni(e,t,i={}){const s=ii(e,t,i),n=function(e){const{done:t,value:i}=e.next();return t?void 0:i}(s);if(n[0]){return[new Xt(n[0],(function*(){for(const e of s)e[0]&&(yield e[0])})),void 0]}return[void 0,n[1]]}function oi(e,t){return new si({type:e,schema:null,validator:t})}function ri(){return oi("any",(()=>!0))}function ai(){return oi("number",(e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${Yt(e)}`))}function li(e){const t=e?Object.keys(e):[],i=oi("never",(()=>!1));return new si({type:"object",schema:e||null,*entries(s){if(e&&Qt(s)){const n=new Set(Object.keys(s));for(const i of t)n.delete(i),yield[i,s[i],e[i]];for(const e of n)yield[e,s[e],i]}},validator:e=>Qt(e)||`Expected an object, but received: ${Yt(e)}`,coercer:e=>Qt(e)?{...e}:e})}function di(e){return new si({...e,validator:(t,i)=>void 0===t||e.validator(t,i),refiner:(t,i)=>void 0===t||e.refiner(t,i)})}function ci(){return oi("string",(e=>"string"==typeof e||`Expected a string, but received: ${Yt(e)}`))}!function(...e){const t="type"===e[0].type,i=e.map((e=>e.schema)),s=Object.assign({},...i);t?function(e){const t=Object.keys(e);new si({type:"type",schema:e,*entries(i){if(Qt(i))for(const s of t)yield[s,i[s],e[s]]},validator:e=>Qt(e)||`Expected an object, but received: ${Yt(e)}`,coercer:e=>Qt(e)?{...e}:e})}(s):li(s)}(li({type:ci(),view_layout:ri()}),li({main:li({title:di(ci()),sensor:di(ci()),min_value:di(ai()),max_value:di(ai()),segment_list:di(ri())})}));const hi=[{name:"title",selector:{text:{}}}],ui={sections:[{name:"title",type:"form",schema:hi},{name:"entity",type:"entity",schema:[{name:"entity",selector:{entity:{filter:{domain:["sensor","number","input_number"]}}}}],link:{title:"entity_settings",sections:[{name:"settings",type:"form",schema:[{type:"grid",column_min_width:"200px",schema:[{name:"name",selector:{text:{}}},{name:"unit_of_measurement",selector:{text:{}}},{name:"conversion_factor",selector:{number:{mode:"box",min:-1e6,max:1e6,step:.01}}},{name:"decimals",selector:{number:{mode:"box",min:-1e6,max:1e6,step:.01}}},{name:"thousand_separator",selector:{text:{}}},{name:"decimal_separator",selector:{text:{}}}]}]}]}},{name:"main",type:"form",schema:[{type:"grid",column_min_width:"200px",schema:[{name:"min_value",selector:{number:{mode:"box",min:-1e6,max:1e6,step:.01}}},{name:"max_value",selector:{number:{mode:"box",min:-1e6,max:1e6,step:.01}}},{name:"color_value",selector:{color_rgb:{}}},{name:"color_background",selector:{color_rgb:{}}},{name:"show_needle",selector:{boolean:{}}},{name:"show_entity_name",selector:{boolean:{}}},{name:"show_min_max_values",selector:{boolean:{}}},{name:"show_segment_labels",selector:{boolean:{}}}]}]},{name:"segment_list",type:"element_list",title:"segment_list",alternative_title:"segment_list_empty",sortable:!0,link:{title:"edit_segment",alternative_title:"add_segment",sections:[{name:"title",type:"form",schema:hi},{name:"settings",type:"form",schema:[{type:"grid",column_min_width:"200px",schema:[{name:"segment_lower",selector:{number:{mode:"box",min:-1e6,max:1e6,step:.01}}},{name:"segment_upper",selector:{number:{mode:"box",min:-1e6,max:1e6,step:.01}}},{name:"segment_color",selector:{color_rgb:{}}},{name:"segment_value_replacement",selector:{text:{}}}]}]}]}}]};let mi=class extends Vt{constructor(){super(ui),this.localizeText=e=>Kt(`editor.${e}`),this.localizeError=e=>Kt(`error.${e}`)}valueChanged(e,t,i,s){var n;if(""===e&&"entity"===i){const e=null==s?void 0:s.entity;if(e){const t=this.hass.states[e];if(t){const e=t.attributes.unit_of_measurement;s.settings?s.settings=Object.assign({},s.settings):s.settings={},e?s.settings.unit_of_measurement=e:delete s.settings.unit_of_measurement}}else null!=(null===(n=null==s?void 0:s.settings)||void 0===n?void 0:n.unit_of_measurement)&&(s.settings=Object.assign({},s.settings),delete s.settings.unit_of_measurement);t[i]=s}return t}listElementAdded(e,t){let i=t;if("segment_list"===e&&(null==t.settings||null==t.segment_color)){const e=getComputedStyle(this).getPropertyValue("--accent-color").trim();i=Object.assign({},t),i.settings?i.settings=Object.assign({},i.settings):i.settings={},i.settings.segment_color=ge(e)}return i}validateForm(e,t,i){switch(t._errors={},e){case"":if("main"===t.name&&(null==i?void 0:i.min_value)>(null==i?void 0:i.max_value))return t._errors={base:"value_lower_greater_than_upper"},!1;break;case"segment_list":if("settings"===t.name&&(null==i?void 0:i.segment_lower)>(null==i?void 0:i.segment_upper))return t._errors={base:"range_lower_greater_than_upper"},!1}return!0}};mi=e([ce("extended-gauge-ui-editor")],mi);var pi=Object.freeze({__proto__:null,get ExtendedGaugeUiEditor(){return mi}});export{gt as ExtendedGaugeCard};
//# sourceMappingURL=extended-gauge.js.map
