(function(t){function e(e){for(var n,i,u=e[0],c=e[1],l=e[2],f=0,E=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&E.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);o&&o(e);while(E.length)E.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,u=1;u<a.length;u++){var c=a[u];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/poeauras/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var o=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"03d8":function(t,e,a){"use strict";a("12af")},"12af":function(t,e,a){},"3c2f":function(t,e,a){"use strict";a("e3fe")},4080:function(t,e,a){},"53cd":function(t,e,a){"use strict";a("af7b")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[t._m(0),a("TopNav"),a("div",{staticClass:"flex-container"},[a("div",{staticClass:"inputs"},[a("Home",{on:{"change-auraeffect":t.auraEffectUp}}),a("button",{on:{click:t.auraEffectUp}},[t._v("hi")])],1),a("div",{staticClass:"outputs"},[a("StatOutput")],1)])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("h1",[t._v("Nuk's PoE Aura stats calculator")]),a("p",[t._v("- Under Construction")])])}],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topnav"},[a("button",[t._v(" HARROO ")]),a("div",{staticClass:"divider"}),a("button",[t._v(" Asc ")])])}],c={},l=c,o=(a("03d8"),a("2877")),f=Object(o["a"])(l,i,u,!1,null,"014dd42f",null),E=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("button",{on:{click:t.changeAuraEffect}},[t._v(" Test in Home ")])])},v=[],d=(a("a9e3"),a("5530")),p=a("2f62"),A={name:"Home",props:{auraList:Array,auraEffect:Number},methods:Object(d["a"])(Object(d["a"])({},Object(p["b"])(["changeAuraEffect"])),{},{auraPlus:function(){this.auraEffect++,console.log(this.auraEffect)}})},_=A,g=(a("dd57"),Object(o["a"])(_,h,v,!1,null,"f2bf9828",null)),m=g.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"sticky"},[a("h1",[t._v("Aura ")]),a("p",[t._v("Aura Stats Output "+t._s(t.getAuraEffect)+"% Aura Effect")]),t._v(" "+t._s(t.log())+" "+t._s(t.print())+" ")]),t._l(t.getAuras,(function(e,n){return a("Aura",{key:n,attrs:{aura:e,auraEffect:t.getAuraEffect,auraData:t.matchingAuraData(e),auraKey:n}})}))],2)},b=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.aura.level>0?a("div",[a("li",{staticClass:"aura_name"},[t._v("~ "+t._s(t.aura.title)+" ~ "+t._s(t.auraEffect))]),t._l(t.auraData.levelStatLines.stats,(function(e,n){return a("li",{key:e,staticClass:"aura_stat"},[t._v(" "+t._s(t.printLevelStatLine(e,n))+" ")])})),0!=t.aura.altQuality&&t.aura.quality>0&&t.auraData.qualityStatLines.stats[t.aura.altQuality]?a("div",t._l(t.auraData.qualityStatLines.stats[t.aura.altQuality],(function(e,n){return a("li",{key:e,staticClass:"aura_stat"},[t._v(" "+t._s(t.printQualityStatLine(e,n))+" ")])})),0):t._e(),a("li",{staticClass:"aura_stat"},[t._v("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ")])],2):t._e()},T=[],L=(a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("ddb0"),{name:"Aura",props:{auraKey:Object,aura:Object,auraData:Object,auraEffect:Number},data:function(){return{generosityEffect:[[0],[0,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,49,50,50,51,51,52,52,53,53,54],[0,41,43,45,47,49,51,53,55,57,59,60,61,62,63,64,65,66,67,68,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69]],specificAuraEffect:100}},computed:Object(p["c"])(["getAuraEffect","getAuras","getAuraEffect","getClusters"]),methods:{printLevelStatLine:function(t,e){for(var a=this.auraData.levelStatLines.values[e][this.aura.level],n=0;n<a.length;n++)t=t.replace("{"+n+"}",this.calculateAfterAuraEffect(a[n]).toString());return this.calcAuraEffect(),t},printQualityStatLine:function(t,e){var a=this.auraData.qualityStatLines.values[e];console.log(a);for(var n=0;n<a.length;n++)t=t.replace("{"+n+"}",this.calculateAfterAuraEffect(a[n]).toString());return console.log(t,e),t},calculateAfterAuraEffect:function(t){var e=0;switch(console.log(this.auraKey),this.aura.generosityType){case 1:e+=this.generosityEffect[1][this.aura.generosityLevel];break;case 2:e+=this.generosityEffect[2][this.aura.generosityLevel];break;default:}var a=e/100+1;return Math.floor(t*a)},calcAuraEffect:function(){this.getClusters.auraEffect(this.auraKey)}}}),y=L,F=(a("3c2f"),Object(o["a"])(y,S,T,!1,null,"6b51ef91",null)),O=F.exports,R=a("8d82"),N={name:"StatOutput",components:{Aura:O},props:{},data:function(){return{auraData:R}},methods:{matchingAuraData:function(t){return R[t.title]},log:function(){console.log(this.getClusters)},print:function(){}},computed:Object(p["c"])(["getAuraEffect","getAuras","getAuraEffect","getClusters"])},I=N,w=(a("53cd"),Object(o["a"])(I,C,b,!1,null,"2a67189c",null)),P=w.exports,D={name:"App",components:{Home:m,TopNav:E,StatOutput:P},data:function(){return{}},methods:{log:function(t){console.log(t)},auraEffectUp:function(){this.auraEffect++}}},M=D,G=(a("034f"),Object(o["a"])(M,r,s,!1,null,null,null)),j=G.exports,H=a("d4ec"),k=function t(e,a){Object(H["a"])(this,t),this.key=e,this.title=a,this.level=5,this.altQuality=1,this.quality=5,this.generosityType=2,this.generosityLevel=10},x={ANGER:new k("ANGER","Anger"),HATRED:new k("HATRED","Hatred"),WRATH:new k("WRATH","Wrath")},U=x,q=(a("caad"),a("2532"),{SMALL_EFFECT:3,SMALL_INC_EFFECT:4,FIRST_AMONG_EFFECT:8,REPLENISHING_EFFECT:[8,1],VENGEFUL_EFFECT:20,STALWART_EFFECT:20,PURE_EFFECT:[10,30],PRECISE_EFFECT:[!1,25,10]}),W=function t(e,a,n,r,s){Object(H["a"])(this,t),this.title=e,this.amount=2,this.affects=a,this.auraEffect=n,this.special=r||!1,this.effect=s||function(){return null}},$={SMALL:new W("Small: ".concat(q.SMALL_EFFECT,"%Aura Effect"),!0,q.SMALL_EFFECT),SMALL_INC:new W("Small: ".concat(q.SMALL_INC_EFFECT,"% Aura Effect"),!0,q.SMALL_INC_EFFECT),FIRST_AMONG:new W("First Among Equals",!0,q.FIRST_AMONG_EFFECT),REPLENISHING:new W("Replenishing Presence",!0,q.REPLENISHING_EFFECT,!0,(function(){return["Regenerate ".concat(this.amount*q.REPLENISHING_EFFECT[1],"% of Life per second")]})),VENGEFUL:new W("Vengeful Commander",["ANGER","HATRED","WRATH"],q.VENGEFUL_EFFECT),STALLWART:new W("Stalwart Commander",["GRACE","DISCIPLINE","DETERMINATION"],q.STALWART_EFFECT),PURE_COMMANDER:new W("Pure Commander",[["PURITY_ICE","PURITY_FIRE","PURITY_LIGHTNING"],["PURITY_ELEMENTS"]],q.PURE_EFFECT),PRECISE_COMMANDER:new W("Precise Commander",!1,q.PRECISE_EFFECT[0],!0,(function(){return["".concat(q.PRECISE_EFFECT[1]*this.amount,"% increased Critical Strike Chance"),"+".concat(q.PRECISE_EFFECT[2]*this.amount,"% to Critical Strike Multiplier")]})),auraEffect:function(t){var e=[0,0];for(var a in this)a.amount>0&&!1!==a.affects&&(!0===a.affects?e[0]+=a.auraEffect*a.amount:a.affects.includes(t)&&(e[1]+=a.auraEffect*a.amount))},updateGlobalAuraEffect:function(){var t=0;for(var e in this)!0===e.affects&&(t+=e.auraEffect*e.amount);return t},isAffected:function(t){return t}},Q=$,V=function t(e){Object(H["a"])(this,t),this.value=e,this.isActive=!1},Y=function t(e,a,n,r){Object(H["a"])(this,t),this.title=e,this.notable={value:a,isActive:!1},this.smallnodes=n,this.motMeek={possible:r,isActive:!1}},K={SOVEREIGNTY:new Y("Sovereignty",10,[new V(6)],!1),LEADERSHIP:new Y("Leadership",6,[new V(6)],!0),INFLUENCE:new Y("Influence",14,[new V(6)],!0),CHARISMA:new Y("Charisma",6,[],!0),CHAMPION:new Y("Champion of the Cause",6,[new V(6)],!0),DEVOTION:new Y("Devotion",3,[],!1),POTENCY:new Y("Conqueror's Potency",3,[],!1),auraEffect:function(){var t=0;for(var e in this)if(e.motMeek.isActive)for(var a in e.smallnodes)a.isActive&&(t+=1.5*a.value);else for(var n in e.notable.isActive&&(t+=e.notable.value),e.smallnodes)n.isActive&&(t+=n.value);return t}},J=K,z={auraEffect:{ascGlobal:0,treeGlobal:0,clusterGlobal:0,gearGlobal:{helmet:0,shield:0,body:30,get:function(){return this.helmet+this.shield+this.body}},get:function(){return this.ascGlobal+this.treeGlobal+this.clusterGlobal+this.gearGlobal.get()}},clusters:Q,passiveTree:J,auras:U},B={getAuraEffect:function(t){return t.auraEffect.get()},getClusters:function(t){return t.clusters},getPassiveTre:function(t){return t.passiveTree},getAuras:function(t){return t.auras}},X={changeAuraEffect:function(t){var e=t.commit;e("incAuraEffect",2)}},Z={incAuraEffect:function(t,e){return t.auraEffect+=e}},tt={state:z,getters:B,actions:X,mutations:Z};n["a"].use(p["a"]);var et=new p["a"].Store({modules:[tt]});n["a"].config.productionTip=!1,new n["a"]({store:et,render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,e,a){},"8d82":function(t){t.exports=JSON.parse('{"Anger":{"title":"Anger","levelStatLines":{"stats":["Adds {0} to {1} Fire Damage to Attacks","Adds {0} to {1} Fire Damage to Spells"],"values":[[[0,0],[16,23],[19,27],[22,31],[25,36],[29,41],[33,47],[37,53],[42,60],[48,68],[52,74],[56,80],[60,86],[65,93],[70,100],[76,108],[82,116],[88,125],[94,135],[101,145],[109,155],[117,167],[125,179],[134,191],[143,205],[154,219],[164,235],[176,251],[188,268],[201,287],[214,306],[221,316],[229,327],[236,337],[244,349],[252,360],[260,372],[269,384],[278,397],[287,409],[296,423]],[[0,0],[15,21],[17,24],[20,28],[23,32],[26,37],[30,42],[34,48],[39,54],[44,61],[47,66],[51,72],[55,78],[60,84],[64,90],[69,97],[75,105],[80,113],[86,121],[93,130],[99,140],[107,150],[114,161],[122,172],[131,184],[140,197],[150,211],[161,226],[172,241],[183,258],[196,275],[202,285],[209,294],[216,304],[223,314],[230,324],[238,335],[246,346],[254,357],[262,368],[270,380]]]},"qualityStatLines":{"stats":[false,["{0}% increased Burning Damage"],["{0}% increased Movement Speed"]],"values":[[0],[0.25],[0.05]]},"special":false,"buff":false},"Hatred":{"title":"Hatred","levelStatLines":{"stats":["Gain {0} of Physical Damage as Extra Cold Damage","{0}% more Cold Damage"],"values":[[[0],[16],[16],[17],[17],[18],[18],[19],[19],[20],[20],[21],[21],[22],[22],[23],[23],[24],[24],[25],[25],[26],[26],[27],[27],[28],[28],[29],[29],[30],[30],[30],[31],[31],[31],[31],[32],[32],[32],[32],[33]],[[0],[14],[14],[14],[14],[15],[15],[15],[15],[16],[16],[16],[16],[17],[17],[17],[17],[18],[18],[18],[18],[19],[19],[19],[19],[20],[20],[20],[20],[21],[21],[21],[21],[21],[21],[21],[22],[22],[22],[22],[22]]]},"qualityStatLines":{"stats":[false,["{0}% increased Chill and Freeze Duration"],["{0}% increased Movement Speed while on Chilled Ground"]],"values":[[0],[0.5],[0.5]]},"special":false,"buff":false},"Wrath":{"title":"Wrath","levelStatLines":{"stats":["Adds {0} to {1} Lightning Damage to Attacks","{0}% more Lightning Damage with Spells"],"values":[[[0,0],[2,37],[3,43],[3,50],[4,57],[4,66],[5,75],[5,85],[6,97],[7,109],[7,118],[8,128],[9,138],[9,149],[10,161],[11,173],[12,186],[13,200],[13,215],[14,231],[16,248],[17,267],[18,286],[19,306],[20,328],[22,351],[23,375],[25,401],[27,429],[29,458],[31,490],[32,506],[33,523],[34,540],[35,558],[36,576],[37,595],[38,614],[40,634],[41,655],[42,676]],[[0],[15],[15],[15],[16],[16],[16],[17],[17],[17],[18],[18],[18],[19],[19],[19],[20],[20],[20],[21],[21],[21],[22],[22],[22],[23],[23],[23],[24],[24],[24],[24],[25],[25],[25],[25],[25],[25],[26],[26],[26]]]},"qualityStatLines":{"stats":[false,["{0}% increased effect of Aura"],false],"values":[[0],[0.25],[0]]},"special":false,"buff":false}}')},af7b:function(t,e,a){},dd57:function(t,e,a){"use strict";a("4080")},e3fe:function(t,e,a){}});
//# sourceMappingURL=app.f5676f3a.js.map