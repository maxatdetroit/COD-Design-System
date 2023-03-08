/*! For license information please see vendors.dompurify.js.LICENSE.txt */
(self.webpackChunk_cityofdetroit_cod_design_system=self.webpackChunk_cityofdetroit_cod_design_system||[]).push([[91],{856:function(e){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},r.apply(null,arguments)}function o(e,t){return l(e)||u(e,t)||s(e,t)||p()}function a(e){return i(e)||c(e)||s(e)||f()}function i(e){if(Array.isArray(e))return m(e)}function l(e){if(Array.isArray(e))return e}function c(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function u(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=s(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}var h=Object.entries,y=Object.setPrototypeOf,g=Object.isFrozen,b=Object.getPrototypeOf,v=Object.getOwnPropertyDescriptor,N=Object.freeze,T=Object.seal,A=Object.create,E="undefined"!==typeof Reflect&&Reflect,w=E.apply,_=E.construct;w||(w=function(e,t,n){return e.apply(t,n)}),N||(N=function(e){return e}),T||(T=function(e){return e}),_||(_=function(e,t){return r(e,a(t))});var S=F(Array.prototype.forEach),x=F(Array.prototype.pop),k=F(Array.prototype.push),O=F(String.prototype.toLowerCase),C=F(String.prototype.toString),D=F(String.prototype.match),R=F(String.prototype.replace),L=F(String.prototype.indexOf),M=F(String.prototype.trim),I=F(RegExp.prototype.test),U=z(TypeError);function F(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return w(e,t,r)}}function z(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _(e,n)}}function H(e,t,n){n=n||O,y&&y(e,null);for(var r=t.length;r--;){var o=t[r];if("string"===typeof o){var a=n(o);a!==o&&(g(t)||(t[r]=a),o=a)}e[o]=!0}return e}function j(e){var t,n=A(null),r=d(h(e));try{for(r.s();!(t=r.n()).done;){var a=o(t.value,2),i=a[0],l=a[1];n[i]=l}}catch(c){r.e(c)}finally{r.f()}return n}function B(e,t){for(;null!==e;){var n=v(e,t);if(n){if(n.get)return F(n.get);if("function"===typeof n.value)return F(n.value)}e=b(e)}function r(e){return console.warn("fallback value for",e),null}return r}var P=N(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),G=N(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),W=N(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),q=N(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Y=N(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),$=N(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),K=N(["#text"]),V=N(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),X=N(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Z=N(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),J=N(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Q=T(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ee=T(/<%[\w\W]*|[\w\W]*%>/gm),te=T(/\${[\w\W]*}/gm),ne=T(/^data-[\-\w.\u00B7-\uFFFF]/),re=T(/^aria-[\-\w]+$/),oe=T(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ae=T(/^(?:\w+script|data):/i),ie=T(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),le=T(/^html$/i),ce=function(){return"undefined"===typeof window?null:window},ue=function(t,n){if("object"!==e(t)||"function"!==typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(i){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function se(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce(),n=function(e){return se(e)};if(n.version="3.0.1",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,i=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,u=t.Element,s=t.NodeFilter,m=t.NamedNodeMap,f=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,p=t.HTMLFormElement,d=t.DOMParser,y=t.trustedTypes,g=u.prototype,b=B(g,"cloneNode"),v=B(g,"nextSibling"),T=B(g,"childNodes"),A=B(g,"parentNode");if("function"===typeof l){var E=o.createElement("template");E.content&&E.content.ownerDocument&&(o=E.content.ownerDocument)}var w=ue(y,r),_=w?w.createHTML(""):"",F=o,z=F.implementation,me=F.createNodeIterator,fe=F.createDocumentFragment,pe=F.getElementsByTagName,de=r.importNode,he={};n.isSupported="function"===typeof h&&"function"===typeof A&&z&&"undefined"!==typeof z.createHTMLDocument;var ye,ge,be=Q,ve=ee,Ne=te,Te=ne,Ae=re,Ee=ae,we=ie,_e=oe,Se=null,xe=H({},[].concat(a(P),a(G),a(W),a(Y),a(K))),ke=null,Oe=H({},[].concat(a(V),a(X),a(Z),a(J))),Ce=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,Re=null,Le=!0,Me=!0,Ie=!1,Ue=!0,Fe=!1,ze=!1,He=!1,je=!1,Be=!1,Pe=!1,Ge=!1,We=!0,qe=!1,Ye="user-content-",$e=!0,Ke=!1,Ve={},Xe=null,Ze=H({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Je=null,Qe=H({},["audio","video","img","source","image","track"]),et=null,tt=H({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),nt="http://www.w3.org/1998/Math/MathML",rt="http://www.w3.org/2000/svg",ot="http://www.w3.org/1999/xhtml",at=ot,it=!1,lt=null,ct=H({},[nt,rt,ot],C),ut=["application/xhtml+xml","text/html"],st="text/html",mt=null,ft=o.createElement("form"),pt=function(e){return e instanceof RegExp||e instanceof Function},dt=function(t){mt&&mt===t||(t&&"object"===e(t)||(t={}),t=j(t),ye=ye=-1===ut.indexOf(t.PARSER_MEDIA_TYPE)?st:t.PARSER_MEDIA_TYPE,ge="application/xhtml+xml"===ye?C:O,Se="ALLOWED_TAGS"in t?H({},t.ALLOWED_TAGS,ge):xe,ke="ALLOWED_ATTR"in t?H({},t.ALLOWED_ATTR,ge):Oe,lt="ALLOWED_NAMESPACES"in t?H({},t.ALLOWED_NAMESPACES,C):ct,et="ADD_URI_SAFE_ATTR"in t?H(j(tt),t.ADD_URI_SAFE_ATTR,ge):tt,Je="ADD_DATA_URI_TAGS"in t?H(j(Qe),t.ADD_DATA_URI_TAGS,ge):Qe,Xe="FORBID_CONTENTS"in t?H({},t.FORBID_CONTENTS,ge):Ze,De="FORBID_TAGS"in t?H({},t.FORBID_TAGS,ge):{},Re="FORBID_ATTR"in t?H({},t.FORBID_ATTR,ge):{},Ve="USE_PROFILES"in t&&t.USE_PROFILES,Le=!1!==t.ALLOW_ARIA_ATTR,Me=!1!==t.ALLOW_DATA_ATTR,Ie=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Ue=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Fe=t.SAFE_FOR_TEMPLATES||!1,ze=t.WHOLE_DOCUMENT||!1,Be=t.RETURN_DOM||!1,Pe=t.RETURN_DOM_FRAGMENT||!1,Ge=t.RETURN_TRUSTED_TYPE||!1,je=t.FORCE_BODY||!1,We=!1!==t.SANITIZE_DOM,qe=t.SANITIZE_NAMED_PROPS||!1,$e=!1!==t.KEEP_CONTENT,Ke=t.IN_PLACE||!1,_e=t.ALLOWED_URI_REGEXP||_e,at=t.NAMESPACE||ot,Ce=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&pt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Ce.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&pt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Ce.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"===typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Ce.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Fe&&(Me=!1),Pe&&(Be=!0),Ve&&(Se=H({},a(K)),ke=[],!0===Ve.html&&(H(Se,P),H(ke,V)),!0===Ve.svg&&(H(Se,G),H(ke,X),H(ke,J)),!0===Ve.svgFilters&&(H(Se,W),H(ke,X),H(ke,J)),!0===Ve.mathMl&&(H(Se,Y),H(ke,Z),H(ke,J))),t.ADD_TAGS&&(Se===xe&&(Se=j(Se)),H(Se,t.ADD_TAGS,ge)),t.ADD_ATTR&&(ke===Oe&&(ke=j(ke)),H(ke,t.ADD_ATTR,ge)),t.ADD_URI_SAFE_ATTR&&H(et,t.ADD_URI_SAFE_ATTR,ge),t.FORBID_CONTENTS&&(Xe===Ze&&(Xe=j(Xe)),H(Xe,t.FORBID_CONTENTS,ge)),$e&&(Se["#text"]=!0),ze&&H(Se,["html","head","body"]),Se.table&&(H(Se,["tbody"]),delete De.tbody),N&&N(t),mt=t)},ht=H({},["mi","mo","mn","ms","mtext"]),yt=H({},["foreignobject","desc","title","annotation-xml"]),gt=H({},["title","style","font","a","script"]),bt=H({},G);H(bt,W),H(bt,q);var vt=H({},Y);H(vt,$);var Nt=function(e){var t=A(e);t&&t.tagName||(t={namespaceURI:at,tagName:"template"});var n=O(e.tagName),r=O(t.tagName);return!!lt[e.namespaceURI]&&(e.namespaceURI===rt?t.namespaceURI===ot?"svg"===n:t.namespaceURI===nt?"svg"===n&&("annotation-xml"===r||ht[r]):Boolean(bt[n]):e.namespaceURI===nt?t.namespaceURI===ot?"math"===n:t.namespaceURI===rt?"math"===n&&yt[r]:Boolean(vt[n]):e.namespaceURI===ot?!(t.namespaceURI===rt&&!yt[r])&&!(t.namespaceURI===nt&&!ht[r])&&!vt[n]&&(gt[n]||!bt[n]):!("application/xhtml+xml"!==ye||!lt[e.namespaceURI]))},Tt=function(e){k(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){e.remove()}},At=function(e,t){try{k(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(r){k(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ke[e])if(Be||Pe)try{Tt(t)}catch(r){}else try{t.setAttribute(e,"")}catch(r){}},Et=function(e){var t,n;if(je)e="<remove></remove>"+e;else{var r=D(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ye&&at===ot&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var a=w?w.createHTML(e):e;if(at===ot)try{t=(new d).parseFromString(a,ye)}catch(l){}if(!t||!t.documentElement){t=z.createDocument(at,"template",null);try{t.documentElement.innerHTML=it?_:a}catch(l){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(o.createTextNode(n),i.childNodes[0]||null),at===ot?pe.call(t,ze?"html":"body")[0]:ze?t.documentElement:i},wt=function(e){return me.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT,null,!1)},_t=function(e){return e instanceof p&&("string"!==typeof e.nodeName||"string"!==typeof e.textContent||"function"!==typeof e.removeChild||!(e.attributes instanceof f)||"function"!==typeof e.removeAttribute||"function"!==typeof e.setAttribute||"string"!==typeof e.namespaceURI||"function"!==typeof e.insertBefore||"function"!==typeof e.hasChildNodes)},St=function(t){return"object"===e(c)?t instanceof c:t&&"object"===e(t)&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName},xt=function(e,t,r){he[e]&&S(he[e],(function(e){e.call(n,t,r,mt)}))},kt=function(e){var t;if(xt("beforeSanitizeElements",e,null),_t(e))return Tt(e),!0;var r=ge(e.nodeName);if(xt("uponSanitizeElement",e,{tagName:r,allowedTags:Se}),e.hasChildNodes()&&!St(e.firstElementChild)&&(!St(e.content)||!St(e.content.firstElementChild))&&I(/<[/\w]/g,e.innerHTML)&&I(/<[/\w]/g,e.textContent))return Tt(e),!0;if(!Se[r]||De[r]){if(!De[r]&&Ct(r)){if(Ce.tagNameCheck instanceof RegExp&&I(Ce.tagNameCheck,r))return!1;if(Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(r))return!1}if($e&&!Xe[r]){var o=A(e)||e.parentNode,a=T(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(b(a[i],!0),v(e))}return Tt(e),!0}return e instanceof u&&!Nt(e)?(Tt(e),!0):"noscript"!==r&&"noembed"!==r||!I(/<\/no(script|embed)/i,e.innerHTML)?(Fe&&3===e.nodeType&&(t=e.textContent,t=R(t,be," "),t=R(t,ve," "),t=R(t,Ne," "),e.textContent!==t&&(k(n.removed,{element:e.cloneNode()}),e.textContent=t)),xt("afterSanitizeElements",e,null),!1):(Tt(e),!0)},Ot=function(e,t,n){if(We&&("id"===t||"name"===t)&&(n in o||n in ft))return!1;if(Me&&!Re[t]&&I(Te,t));else if(Le&&I(Ae,t));else if(!ke[t]||Re[t]){if(!(Ct(e)&&(Ce.tagNameCheck instanceof RegExp&&I(Ce.tagNameCheck,e)||Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(e))&&(Ce.attributeNameCheck instanceof RegExp&&I(Ce.attributeNameCheck,t)||Ce.attributeNameCheck instanceof Function&&Ce.attributeNameCheck(t))||"is"===t&&Ce.allowCustomizedBuiltInElements&&(Ce.tagNameCheck instanceof RegExp&&I(Ce.tagNameCheck,n)||Ce.tagNameCheck instanceof Function&&Ce.tagNameCheck(n))))return!1}else if(et[t]);else if(I(_e,R(n,we,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==L(n,"data:")||!Je[e])if(Ie&&!I(Ee,R(n,we,"")));else if(n)return!1;return!0},Ct=function(e){return e.indexOf("-")>0},Dt=function(t){var r,o,a,i;xt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ke};for(i=l.length;i--;){var u=r=l[i],s=u.name,m=u.namespaceURI;if(o="value"===s?r.value:M(r.value),a=ge(s),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,xt("uponSanitizeAttribute",t,c),o=c.attrValue,!c.forceKeepAttr&&(At(s,t),c.keepAttr))if(Ue||!I(/\/>/i,o)){Fe&&(o=R(o,be," "),o=R(o,ve," "),o=R(o,Ne," "));var f=ge(t.nodeName);if(Ot(f,a,o)){if(!qe||"id"!==a&&"name"!==a||(At(s,t),o=Ye+o),w&&"object"===e(y)&&"function"===typeof y.getAttributeType)if(m);else switch(y.getAttributeType(f,a)){case"TrustedHTML":o=w.createHTML(o);break;case"TrustedScriptURL":o=w.createScriptURL(o)}try{m?t.setAttributeNS(m,s,o):t.setAttribute(s,o),x(n.removed)}catch(p){}}}else At(s,t)}xt("afterSanitizeAttributes",t,null)}},Rt=function e(t){var n,r=wt(t);for(xt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)xt("uponSanitizeShadowNode",n,null),kt(n)||(n.content instanceof i&&e(n.content),Dt(n));xt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e){var t,o,a,l,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((it=!e)&&(e="\x3c!--\x3e"),"string"!==typeof e&&!St(e)){if("function"!==typeof e.toString)throw U("toString is not a function");if("string"!==typeof(e=e.toString()))throw U("dirty is not a string, aborting")}if(!n.isSupported)return e;if(He||dt(u),n.removed=[],"string"===typeof e&&(Ke=!1),Ke){if(e.nodeName){var s=ge(e.nodeName);if(!Se[s]||De[s])throw U("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof c)1===(o=(t=Et("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===o.nodeName||"HTML"===o.nodeName?t=o:t.appendChild(o);else{if(!Be&&!Fe&&!ze&&-1===e.indexOf("<"))return w&&Ge?w.createHTML(e):e;if(!(t=Et(e)))return Be?null:Ge?_:""}t&&je&&Tt(t.firstChild);for(var m=wt(Ke?e:t);a=m.nextNode();)kt(a)||(a.content instanceof i&&Rt(a.content),Dt(a));if(Ke)return e;if(Be){if(Pe)for(l=fe.call(t.ownerDocument);t.firstChild;)l.appendChild(t.firstChild);else l=t;return(ke.shadowroot||ke.shadowrootmod)&&(l=de.call(r,l,!0)),l}var f=ze?t.outerHTML:t.innerHTML;return ze&&Se["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&I(le,t.ownerDocument.doctype.name)&&(f="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+f),Fe&&(f=R(f,be," "),f=R(f,ve," "),f=R(f,Ne," ")),w&&Ge?w.createHTML(f):f},n.setConfig=function(e){dt(e),He=!0},n.clearConfig=function(){mt=null,He=!1},n.isValidAttribute=function(e,t,n){mt||dt({});var r=ge(e),o=ge(t);return Ot(r,o,n)},n.addHook=function(e,t){"function"===typeof t&&(he[e]=he[e]||[],k(he[e],t))},n.removeHook=function(e){if(he[e])return x(he[e])},n.removeHooks=function(e){he[e]&&(he[e]=[])},n.removeAllHooks=function(){he={}},n}return se()}()}}]);