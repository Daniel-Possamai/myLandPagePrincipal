(()=>{"use strict";const e=window.wp.blocks,t=window.wp.element,r=window.wp.components,n=window.wp.blockEditor,a=window.React;function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const s=function(e){var t=Object.create(null);return function(e){return void 0===t[e]&&(t[e]=(r=e,o.test(r)||111===r.charCodeAt(0)&&110===r.charCodeAt(1)&&r.charCodeAt(2)<91)),t[e];var r}}();var c=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}(),l=Math.abs,u=String.fromCharCode,d=Object.assign;function p(e){return e.trim()}function f(e,t,r){return e.replace(t,r)}function h(e,t){return e.indexOf(t)}function m(e,t){return 0|e.charCodeAt(t)}function g(e,t,r){return e.slice(t,r)}function v(e){return e.length}function y(e){return e.length}function b(e,t){return t.push(e),e}var x=1,k=1,w=0,C=0,A=0,S="";function _(e,t,r,n,a,i,o){return{value:e,root:t,parent:r,type:n,props:a,children:i,line:x,column:k,length:o,return:""}}function E(e,t){return d(_("",null,null,"",null,null,0),e,{length:-e.length},t)}function P(){return A=C>0?m(S,--C):0,k--,10===A&&(k=1,x--),A}function $(){return A=C<w?m(S,C++):0,k++,10===A&&(k=1,x++),A}function O(){return m(S,C)}function T(){return C}function R(e,t){return g(S,e,t)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function M(e){return x=k=1,w=v(S=e),C=0,[]}function I(e){return S="",e}function L(e){return p(R(C-1,F(91===e?e+2:40===e?e+1:e)))}function j(e){for(;(A=O())&&A<33;)$();return z(e)>2||z(A)>3?"":" "}function N(e,t){for(;--t&&$()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return R(e,T()+(t<6&&32==O()&&32==$()))}function F(e){for(;$();)switch(A){case e:return C;case 34:case 39:34!==e&&39!==e&&F(A);break;case 40:41===e&&F(e);break;case 92:$()}return C}function H(e,t){for(;$()&&e+A!==57&&(e+A!==84||47!==O()););return"/*"+R(t,C-1)+"*"+u(47===e?e:$())}function q(e){for(;!z(O());)$();return R(e,C)}var B="-ms-",D="-moz-",G="-webkit-",U="comm",W="rule",X="decl",V="@keyframes";function Y(e,t){for(var r="",n=y(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function K(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case X:return e.return=e.return||e.value;case U:return"";case V:return e.return=e.value+"{"+Y(e.children,n)+"}";case W:e.value=e.props.join(",")}return v(r=Y(e.children,n))?e.return=e.value+"{"+r+"}":""}function Z(e){return I(J("",null,null,null,[""],e=M(e),0,[0],e))}function J(e,t,r,n,a,i,o,s,c){for(var l=0,d=0,p=o,g=0,y=0,x=0,k=1,w=1,C=1,A=0,S="",_=a,E=i,R=n,z=S;w;)switch(x=A,A=$()){case 40:if(108!=x&&58==m(z,p-1)){-1!=h(z+=f(L(A),"&","&\f"),"&\f")&&(C=-1);break}case 34:case 39:case 91:z+=L(A);break;case 9:case 10:case 13:case 32:z+=j(x);break;case 92:z+=N(T()-1,7);continue;case 47:switch(O()){case 42:case 47:b(ee(H($(),T()),t,r),c);break;default:z+="/"}break;case 123*k:s[l++]=v(z)*C;case 125*k:case 59:case 0:switch(A){case 0:case 125:w=0;case 59+d:-1==C&&(z=f(z,/\f/g,"")),y>0&&v(z)-p&&b(y>32?te(z+";",n,r,p-1):te(f(z," ","")+";",n,r,p-2),c);break;case 59:z+=";";default:if(b(R=Q(z,t,r,l,d,a,s,S,_=[],E=[],p),i),123===A)if(0===d)J(z,t,R,R,_,i,p,s,E);else switch(99===g&&110===m(z,3)?100:g){case 100:case 108:case 109:case 115:J(e,R,R,n&&b(Q(e,R,R,0,0,a,s,S,a,_=[],p),E),a,E,p,s,n?_:E);break;default:J(z,R,R,R,[""],E,0,s,E)}}l=d=y=0,k=C=1,S=z="",p=o;break;case 58:p=1+v(z),y=x;default:if(k<1)if(123==A)--k;else if(125==A&&0==k++&&125==P())continue;switch(z+=u(A),A*k){case 38:C=d>0?1:(z+="\f",-1);break;case 44:s[l++]=(v(z)-1)*C,C=1;break;case 64:45===O()&&(z+=L($())),g=O(),d=p=v(S=z+=q(T())),A++;break;case 45:45===x&&2==v(z)&&(k=0)}}return i}function Q(e,t,r,n,a,i,o,s,c,u,d){for(var h=a-1,m=0===a?i:[""],v=y(m),b=0,x=0,k=0;b<n;++b)for(var w=0,C=g(e,h+1,h=l(x=o[b])),A=e;w<v;++w)(A=p(x>0?m[w]+" "+C:f(C,/&\f/g,m[w])))&&(c[k++]=A);return _(e,t,r,0===a?W:s,c,u,d)}function ee(e,t,r){return _(e,t,r,U,u(A),g(e,2,-2),0)}function te(e,t,r,n){return _(e,t,r,X,g(e,0,n),g(e,n+1,-1),n)}var re=function(e,t,r){for(var n=0,a=0;n=a,a=O(),38===n&&12===a&&(t[r]=1),!z(a);)$();return R(e,C)},ne=new WeakMap,ae=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ne.get(r))&&!n){ne.set(e,!0);for(var a=[],i=function(e,t){return I(function(e,t){var r=-1,n=44;do{switch(z(n)){case 0:38===n&&12===O()&&(t[r]=1),e[r]+=re(C-1,t,r);break;case 2:e[r]+=L(n);break;case 4:if(44===n){e[++r]=58===O()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=u(n)}}while(n=$());return e}(M(e),t))}(t,a),o=r.props,s=0,c=0;s<i.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=a[s]?i[s].replace(/&\f/g,o[l]):o[l]+" "+i[s]}}},ie=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function oe(e,t){switch(function(e,t){return 45^m(e,0)?(((t<<2^m(e,0))<<2^m(e,1))<<2^m(e,2))<<2^m(e,3):0}(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+D+e+B+e+e;case 6828:case 4268:return G+e+B+e+e;case 6165:return G+e+B+"flex-"+e+e;case 5187:return G+e+f(e,/(\w+).+(:[^]+)/,G+"box-$1$2"+B+"flex-$1$2")+e;case 5443:return G+e+B+"flex-item-"+f(e,/flex-|-self/,"")+e;case 4675:return G+e+B+"flex-line-pack"+f(e,/align-content|flex-|-self/,"")+e;case 5548:return G+e+B+f(e,"shrink","negative")+e;case 5292:return G+e+B+f(e,"basis","preferred-size")+e;case 6060:return G+"box-"+f(e,"-grow","")+G+e+B+f(e,"grow","positive")+e;case 4554:return G+f(e,/([^-])(transform)/g,"$1"+G+"$2")+e;case 6187:return f(f(f(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return f(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return f(f(e,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+B+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4095:case 3583:case 4068:case 2532:return f(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(v(e)-1-t>6)switch(m(e,t+1)){case 109:if(45!==m(e,t+4))break;case 102:return f(e,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+D+(108==m(e,t+3)?"$3":"$2-$3"))+e;case 115:return~h(e,"stretch")?oe(f(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==m(e,t+1))break;case 6444:switch(m(e,v(e)-3-(~h(e,"!important")&&10))){case 107:return f(e,":",":"+G)+e;case 101:return f(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+G+(45===m(e,14)?"inline-":"")+"box$3$1"+G+"$2$3$1"+B+"$2box$3")+e}break;case 5936:switch(m(e,t+11)){case 114:return G+e+B+f(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+B+f(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+B+f(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return G+e+B+e+e}return e}var se=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case X:e.return=oe(e.value,e.length);break;case V:return Y([E(e,{value:f(e.value,"@","@"+G)})],n);case W:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return Y([E(e,{props:[f(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return Y([E(e,{props:[f(t,/:(plac\w+)/,":"+G+"input-$1")]}),E(e,{props:[f(t,/:(plac\w+)/,":-moz-$1")]}),E(e,{props:[f(t,/:(plac\w+)/,B+"input-$1")]})],n)}return""}))}}],ce=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n,a,i=e.stylisPlugins||se,o={},s=[];n=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)o[t[r]]=!0;s.push(e)}));var l,u,d,p,f=[K,(p=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&p(e)})],h=(u=[ae,ie].concat(i,f),d=y(u),function(e,t,r,n){for(var a="",i=0;i<d;i++)a+=u[i](e,t,r,n)||"";return a});a=function(e,t,r,n){l=r,Y(Z(e?e+"{"+t.styles+"}":t.styles),h),n&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new c({key:t,container:n,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:a};return m.sheet.hydrate(s),m},le={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ue(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var de=/[A-Z]|^ms/g,pe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,fe=function(e){return 45===e.charCodeAt(1)},he=function(e){return null!=e&&"boolean"!=typeof e},me=ue((function(e){return fe(e)?e:e.replace(de,"-$&").toLowerCase()})),ge=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(pe,(function(e,t,r){return ye={name:t,styles:r,next:ye},t}))}return 1===le[e]||fe(e)||"number"!=typeof t||0===t?t:t+"px"};function ve(e,t,r){if(null==r)return"";var n=r;if(void 0!==n.__emotion_styles)return n;switch(typeof r){case"boolean":return"";case"object":var a=r;if(1===a.anim)return ye={name:a.name,styles:a.styles,next:ye},a.name;var i=r;if(void 0!==i.styles){var o=i.next;if(void 0!==o)for(;void 0!==o;)ye={name:o.name,styles:o.styles,next:ye},o=o.next;return i.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=ve(e,t,r[a])+";";else for(var i in r){var o=r[i];if("object"!=typeof o){var s=o;null!=t&&void 0!==t[s]?n+=i+"{"+t[s]+"}":he(s)&&(n+=me(i)+":"+ge(i,s)+";")}else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var c=ve(e,t,o);switch(i){case"animation":case"animationName":n+=me(i)+":"+c+";";break;default:n+=i+"{"+c+"}"}}else for(var l=0;l<o.length;l++)he(o[l])&&(n+=me(i)+":"+ge(i,o[l])+";")}return n}(e,t,r);case"function":if(void 0!==e){var s=ye,c=r(e);return ye=s,ve(e,t,c)}}var l=r;if(null==t)return l;var u=t[l];return void 0!==u?u:l}var ye,be=/label:\s*([^\s;\n{]+)\s*(;|$)/g;function xe(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";ye=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,a+=ve(r,t,i)):a+=i[0];for(var o=1;o<e.length;o++)a+=ve(r,t,e[o]),n&&(a+=i[o]);be.lastIndex=0;for(var s,c="";null!==(s=be.exec(a));)c+="-"+s[1];var l=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+c;return{name:l,styles:a,next:ye}}var ke=!!a.useInsertionEffect&&a.useInsertionEffect,we=ke||function(e){return e()},Ce=(ke||a.useLayoutEffect,a.createContext("undefined"!=typeof HTMLElement?ce({key:"css"}):null)),Ae=(Ce.Provider,function(e){return(0,a.forwardRef)((function(t,r){var n=(0,a.useContext)(Ce);return e(t,n,r)}))}),Se=a.createContext({});function _e(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var Ee=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},Pe=s,$e=function(e){return"theme"!==e},Oe=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?Pe:$e},Te=function(e,t,r){var n;if(t){var a=t.shouldForwardProp;n=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},Re=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return Ee(t,r,n),we((function(){return function(e,t,r){Ee(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}(t,r,n)})),null};var ze=function e(t,r){var n,o,s=t.__emotion_real===t,c=s&&t.__emotion_base||t;void 0!==r&&(n=r.label,o=r.target);var l=Te(t,r,s),u=l||Oe(c),d=!u("as");return function(){var p=arguments,f=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&f.push("label:"+n+";"),null==p[0]||void 0===p[0].raw)f.push.apply(f,p);else{f.push(p[0][0]);for(var h=p.length,m=1;m<h;m++)f.push(p[m],p[0][m])}var g=Ae((function(e,t,r){var n=d&&e.as||c,i="",s=[],p=e;if(null==e.theme){for(var h in p={},e)p[h]=e[h];p.theme=(0,a.useContext)(Se)}"string"==typeof e.className?i=_e(t.registered,s,e.className):null!=e.className&&(i=e.className+" ");var m=xe(f.concat(s),t.registered,p);i+=t.key+"-"+m.name,void 0!==o&&(i+=" "+o);var g=d&&void 0===l?Oe(n):u,v={};for(var y in e)d&&"as"===y||g(y)&&(v[y]=e[y]);return v.className=i,v.ref=r,(0,a.createElement)(a.Fragment,null,(0,a.createElement)(Re,{cache:t,serialized:m,isStringTag:"string"==typeof n}),(0,a.createElement)(n,v))}));return g.displayName=void 0!==n?n:"Styled("+("string"==typeof c?c:c.displayName||c.name||"Component")+")",g.defaultProps=t.defaultProps,g.__emotion_real=g,g.__emotion_base=c,g.__emotion_styles=f,g.__emotion_forwardProp=l,Object.defineProperty(g,"toString",{value:function(){return"."+o}}),g.withComponent=function(t,n){return e(t,i({},r,n,{shouldForwardProp:Te(g,n,!0)})).apply(void 0,f)},g}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){ze[e]=ze(e)}));const Me=ze,Ie=JSON.parse('{"u2":"latepoint/customer-login"}');(0,e.registerBlockType)(Ie.u2,{edit:function(e){let{attributes:a,setAttributes:i}=e;const o=(0,n.useBlockProps)(),s=Me.div`
        box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.1);
        border-radius: 4px;
        border: 1px solid #ddd;
        border-bottom-color: #bbb;
        background-color: #fff;
        padding: 20px;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,c=Me.div`
        font-weight: 500;
        margin-bottom: 10px;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
    `,l=Me.div`
        padding: 10px;
        border-radius: 4px;
        background-color: #eee;
        margin-bottom: 5px;
        width: 40%;
    `,u=Me.div`
        height: 10px;
        border-radius: 4px;
        background-color: #eee;
        width: 30%;
    `,d=Me.div`
        padding: 15px;
        border-radius: 4px;
        background-color: #f8f8f8;
    `,p=Me.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        padding-top: 10px;
    `,f=Me.div`
      padding: 15px;
      width: 30%;  
      background-color: #b4c6f5;
      border-radius: 4px;
    `;return(0,t.createElement)("div",o,(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(r.Panel,null,(0,t.createElement)(r.PanelBody,{title:"Login Form Settings"},(0,t.createElement)(r.TextControl,{label:"Caption",value:a.caption||"",onChange:e=>i({caption:e})})))),(0,t.createElement)("div",null,(0,t.createElement)(c,null,a.caption),(0,t.createElement)(s,null,(0,t.createElement)(l,null),(0,t.createElement)(d,null),(0,t.createElement)(d,null),(0,t.createElement)(p,null,(0,t.createElement)(f,null),(0,t.createElement)(u,null)))))},save:function(e){let{attributes:r}=e;const a=n.useBlockProps.save();return(0,t.createElement)("div",a,r.caption)}})})();