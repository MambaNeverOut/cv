parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),a="\n/* 你好，我在学习饥人谷的前端课程\n * 快来和我一起学吧！\n * 先来画一个八卦图\n * 首先准备一个div\n**/\n#bagua {\n  border: 1px solid green;\n  width: 200px;\n  height: 200px;\n}\n/* 然后把div变成一个圆\n**/\n#bagua {\n  border-radius: 50%;\n  box-shadow: 0 0 3px rgba(0,0,0,0.5);\n  border: none;\n}\n/* 八卦是阴阳形成的\n * 一黑一白\n**/\n#bagua {\n  background: linear-gradient(90deg, rgba(255,255,255,1)\n  0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,\n  0,0,1) 100%);\n}\n/* 加两个魔丸 */\n#bagua::before {\n  width: 100px;\n  height: 100px;\n  top: 0;\n  left: 50%;\n  background: #000;\n  transform: translateX(-50%);\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%,\n  rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#bagua::after {\n  width: 100px;\n  height: 100px;\n  bottom: 0;\n  left: 50%;\n  background: #fff;\n  transform: translateX(-50%);\n  border-radius: 50%;\n  background: radial-gradient(circle, rgba(0,0,0,1) 0%,\n  rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n",e="",b=0,g=function g(){setTimeout(function(){"\n"===a[b]?e+="<br>":" "===a[b]?e+="&nbsp;":e+=a[b],n.innerHTML=e,r.innerHTML=a.substring(0,b),window.scrollTo(0,99999),b<a.length-1&&(b+=1,g())},50)};g();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.a82059eb.js.map