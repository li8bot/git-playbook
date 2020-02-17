webpackJsonp([2],{100:function(e,t){e.exports={appName:"MonkAI",headerNavigation:[{name:"v1",path:"/home"}],landingPage:"/home",topics:["news"],pages:[{route:"/home",name:"Home",description:"This is the documentation for MonkAI",icon:"address-book",children:[{route:"/whatsNew",name:"Whats new?",description:"recent announcements, news, latest and greatest",icon:"bullhorn",topics:["news"],markdown:"/static/markdown/Current.md"},{route:"/demos",name:"Demos",description:"Examples and Projects built using MonkAI",icon:"bullhorn",topics:["demos"],markdown:"/static/markdown/Demos.md"},{route:"/codingstandards",name:"Coding Standards",description:"",topics:[],icon:"question-circle",markdown:"/static/markdown/codingstandards.md"},{route:"/contrib",name:"Contribution Guidelines",description:"",topics:[],icon:"question-circle",markdown:"/static/markdown/contrib.md"},{route:"/classification",name:"Image Classification",description:"Documentation for Image Classification algorithms",icon:"project-diagram",topics:["process"],children:[{route:"/tutorials",name:"Tutorials",description:"Blog Post, Jupyter Notebook, Reference Links.",icon:"project-diagram",topics:["Image Classification","Computer Vision","Deep Learning"],markdown:"/static/markdown/classification/Tutorials.md"},{route:"/pipelines",name:"Features",description:"Key Features within MonkAI",icon:"file-alt",topics:["process"],children:[{route:"/resume",name:"Resume Training",description:"temp",icon:"file-alt",topics:["Image CLassification","Computer Vision","Deep Learning"],markdown:"/static/markdown/classification/Documentation.md"},{route:"/copy",name:"Copy Experiment",description:"temp",icon:"file-alt",topics:["process"],markdown:"/static/markdown/classification/Documentation.md"}]},{route:"/modules",name:"Modules",description:"Implementation blocks for Image Classification",icon:"file-alt",topics:["process"],markdown:"/static/markdown/detection/Modules.md"}]},{route:"/detection",name:"Object Detection",description:"Low-code Object Detection pipelines",icon:"project-diagram",topics:["process"],children:[{route:"/tutorials",name:"Tutorials",description:"Ready to deploy use cases of Object Detection",icon:"project-diagram",topics:["Object Detection","Computer Vision","Deep Learning"],markdown:"/static/markdown/detection/Tutorials.md"},{route:"/pipelines",name:"Pipelines",description:"Available pipelines for Object Detection",icon:"file-alt",topics:["pipelines"],children:[{route:"/gluonfinetune",name:"GluonCV Finetune",description:"temp",icon:"file-alt",topics:["Object Detection","Computer Vision","Deep Learning"],markdown:"/static/markdown/detection/pipelines/gluonfinetune.md"},{route:"/pytorchapi",name:"Pytorch Finetune",description:"temp",icon:"file-alt",topics:["Object Detection","Computer Vision","Deep Learning"],markdown:"/static/markdown/detection/pipelines/pytorchfinetune.md"},{route:"/mxrcnn",name:"MXRCNN",description:"temp",icon:"file-alt",topics:["process"],markdown:"/static/markdown/detection/pipelines/mxrcnn.md"},{route:"/efficientdet",name:"Efficient Detection",description:"temp",icon:"file-alt",topics:["Object Detection","Computer Vision","Deep Learning"],markdown:"/static/markdown/detection/pipelines/efficientdet.md"},{route:"/retinanet",name:"RetinaNet-Pytorch",description:"temp",icon:"file-alt",topics:["Object Detection","Computer Vision","Deep Learning"],markdown:"/static/markdown/detection/pipelines/retinanet.md"},{route:"/cornernet",name:"CornerNet-Lite",description:"temp",icon:"file-alt",topics:["Object Detection","Computer Vision","Deep Learning"],markdown:"/static/markdown/detection/pipelines/cornernet.md"},{route:"/yolov3",name:"YOLOv3",description:"temp",icon:"file-alt",topics:["Object Detection","Computer Vision","Deep Learning"],markdown:"/static/markdown/detection/pipelines/yolov3.md"}]},{route:"/modules",name:"Modules",description:"Implementation blocks for Object Detection",icon:"file-alt",topics:["process"],markdown:"/static/markdown/detection/Modules.md"}]},{route:"/custom",name:"Custom Network Creator",description:"Documentation for Custom Neural Network Creator",icon:"project-diagram",topics:["process"],markdown:"/static/markdown/process/networkbuilder.md"},{route:"/studio",name:"MonkAI Studio",description:"Documentation for MonkAI Studio",icon:"project-diagram",topics:["process"],children:[{route:"/demos",name:"Demos",description:"Walkthroughs of Studio",icon:"project-diagram",topics:["process"],markdown:"/static/markdown/studio/demos.md"},{route:"/setup",name:"Setup",description:"How to setup Studio locally",icon:"project-diagram",topics:["process"],markdown:"/static/markdown/studio/setup.md"}]},{route:"/gsoc2020",name:"GSoC 2020",description:"Information, Ideas List, Projects, Mentors, Requirements and more.",icon:"project-diagram",topics:["process"],children:[{route:"/getstarted",name:"Getting Started",description:"",icon:"project-diagram",topics:["process"],markdown:"/static/markdown/GettingStarted.md"},{route:"/ideaslist",name:"Ideas List",description:"List of Project Ideas",icon:"project-diagram",topics:["process"],markdown:"/static/markdown/ideas.md"},{route:"/howtoapply",name:"How to Apply",description:"Information for Applicants",icon:"project-diagram",topics:["process"],markdown:"/static/markdown/howtoapply.md"},{route:"/getintouch",name:"Get in Touch",description:"",icon:"project-diagram",topics:["process"],markdown:"/static/markdown/getintouch.md"},{route:"/codingstandards",name:"Coding Standards",description:"",topics:[],icon:"question-circle",markdown:"/static/markdown/codingstandards.md"},{route:"/contrib",name:"Contribution Guidelines",description:"",topics:[],icon:"question-circle",markdown:"/static/markdown/contrib.md"}]}]}]}},119:function(e,t,n){"use strict";var i=n(51),o=n(120),s=n(26),a=s(i.a,o.a,!1,null,null,null);t.a=a.exports},120:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__brand"},[n("svg",{ref:"nav__open",staticClass:"header__hamburger",attrs:{tabindex:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.openNavigation(t):null},click:e.openNavigation}},[n("path",{attrs:{d:"M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z"}})]),e._v(" "),n("span",{staticClass:"header__name"},[e._v(e._s(e.name)+" "),n("b",[e._v("Playbook")])])]),e._v(" "),e.isVisible||e.isDesktop?n("nav",{staticClass:"nav"},[n("svg",{ref:"nav__close",staticClass:"nav__icon nav__icon--close",attrs:{tabindex:"0",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.closeNavigation(t):null},click:e.closeNavigation}},[n("path",{attrs:{d:"M77.6 21.1l-28 28.1-28.1-28.1-1.9 1.9 28 28.1-28 28.1 1.9 1.9L49.6 53l28 28.1 2-1.9-28.1-28.1L79.6 23z"}})]),e._v(" "),n("ul",{staticClass:"nav__list"},e._l(e.list,function(t){return n("router-link",{key:t.path,staticClass:"nav__item",attrs:{to:t.path}},[e._v(" "+e._s(t.name)+"\n        ")])}))]):e._e()])},o=[],s={render:i,staticRenderFns:o};t.a=s},121:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{on:{toggleMenu:e.toggleMenu}}),e._v(" "),n("main",[n("nav",{staticClass:"main__nav",class:{active:e.isNavOpen}},[n("div",{staticClass:"nav__search"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeywords,expression:"searchKeywords"}],staticClass:"nav__search-input",attrs:{placeholder:"Type to search"},domProps:{value:e.searchKeywords},on:{keyup:e.search,input:function(t){t.target.composing||(e.searchKeywords=t.target.value)}}}),e._v(" "),e.searchResultsVisible?n("svg",{staticClass:"nav__search-icon",attrs:{tabindex:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},on:{click:e.reset,keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.reset(t):null}}},[n("path",{attrs:{d:"M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"}}),n("path",{attrs:{d:"M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"}})]):e._e()]),e._v(" "),n("vue-tree-navigation",{attrs:{items:e.tocItems,defaultOpenLevel:1}})],1),e._v(" "),e.searchResultsVisible?n("div",{staticClass:"container"},[e.searchResults.length?n("h1",{staticClass:"results__heading"},[e._v(e._s(e.searchResults.length)+' results matching "'+e._s(e.searchKeywords)+'"')]):n("h1",{staticClass:"results__heading"},[e._v('No results matching "'+e._s(e.searchKeywords)+'"')]),e._v(" "),n("ul",{staticClass:"results__search"},e._l(e.searchResults,function(t,i){return n("li",{key:i,staticClass:"result"},[n("header",{staticClass:"result__header"},[n("router-link",{attrs:{to:t.path}},[n("h2",{staticClass:"result__title"},[e._v(e._s(t.name))])]),e._v(" "),e._l(t.topics,function(t,i){return n("span",{key:i,staticClass:"tag",attrs:{tabindex:"0"},on:{keyup:function(n){if(!("button"in n)&&e._k(n.keyCode,"enter",13,n.key,"Enter"))return null;e.searchTopic(t)},click:function(n){e.searchTopic(t)}}},[e._v(e._s(t))])})],2),e._v(" "),n("p",[e._v(e._s(e._f("truncate")(t.text,300,"...")))])])}))]):n("router-view")],1)],1)},o=[],s={render:i,staticRenderFns:o};t.a=s},122:function(e,t,n){"use strict";var i=n(29),o=n(123),s=n(16);i.a.use(o.a),t.a=new o.a({routes:s.a.getRoutingConfig()})},16:function(e,t,n){"use strict";function i(e,t){e.path=e.route,e.breadCrumb=t?JSON.parse(c()(t.breadCrumb)):[];var n=null!=t?t.path+e.route:"/";e.breadCrumb.push({name:e.name,path:n}),e.component=m,null!=t&&(e.path=t.path+e.route);var o=[];if(e.children)for(var s in e.children){var a=e.children[s];o.push({name:a.name,description:a.description,path:e.path+a.route,icon:a.icon,bgColor:a.bgColor,owner:a.owner,topics:a.topics}),i(a,e)}e.meta={tiles:o.length>0?o:null,name:e.name,description:e.description,markdown:e.markdown,icon:e.icon,bgColor:e.bgColor,owner:e.owner,topics:e.topics,breadCrumb:e.breadCrumb},h[e.path]=e.meta}function o(e){var t=JSON.parse(c()(e.pages));for(var n in t){i(t[n],null)}return t.push({path:"/",redirect:e.landingPage}),t}var s=n(74),a=n.n(s),r=n(98),c=n.n(r),d=n(100),u=n.n(d),p=n(57),l=n.n(p),m=function(){return n.e(0).then(n.bind(null,129))},h={};t.a={getMetaById:function(e){return h[e]},getRoutingConfig:function(){return o(this.getBaseConfig())},getBaseConfig:function(){return u.a},getPages:function(){return this.getBaseConfig().pages},getStatus:function(){return new a.a(function(e,t){var n=window.location.pathname,i=n.substring(0,n.length-1)+"/static/content.json";l.a.get(i).then(function(t){e(t.data)}).catch(function(e){return t(e)})})}}},31:function(e,t,n){"use strict";var i=n(53),o=n.n(i),s=n(16),a=n(119);t.a={name:"app",data:function(){return{baseUrl:"https://pages.github.ibm.com/merlin/playbook/#",isNavOpen:!1,tocItems:s.a.getPages(),content:[],searchResultsVisible:!1,searchResults:null,searchKeywords:null}},components:{Header:a.a},created:function(){var e=this;s.a.getStatus().then(function(t){void 0!==t&&(e.content=t)}).catch(function(e){console.log("error",e)})},methods:{toggleMenu:function(){this.isNavOpen=!this.isNavOpen},search:function(e){var t=this;if(this.searchKeywords){var n=o()({},this.$route.query,{search:this.searchKeywords});this.$router.push({query:n}),this.searchResultsVisible=!0;this.searchKeywords.indexOf("topic:")>-1?this.searchResults=this.content.filter(function(e){for(var n=(e.topics||[]).map(function(e){return e.toLowerCase()}),i=!1,o=0;o<n.length;o++)n[o].indexOf(t.searchKeywords.toLowerCase().replace("topic:",""))>-1&&(i=!0);return i}):this.searchResults=this.content.filter(function(e){return(e.text||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1||(e.name||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1})}else{var i=this.$route.query;delete i.search,this.$router.push({query:i}),this.reset()}},searchTopic:function(e){var t="topic:"+e,n=o()({},this.$route.query,{search:t});this.searchKeywords=t,this.search(),this.$router.push({query:n})},reset:function(){this.searchResultsVisible=!1,this.searchKeywords="",this.searchResults=[]}},watch:{$route:{immediate:!0,handler:function(e,t){var n=window.location.href;if(n.indexOf("?")>-1){var i=n.substring(n.indexOf("?")+1),o=JSON.parse('{"'+decodeURIComponent(i.replace(/&/g,'","').replace(/=/g,'": "'))+'"}');o&&o.search&&(this.searchKeywords=o.search,this.search())}else this.searchKeywords="",this.searchResultsVisible=!1}}}}},51:function(e,t,n){"use strict";var i=n(16);t.a={name:"header-component",data:function(){return{isVisible:!1,isDesktop:!1,name:i.a.getBaseConfig().appName,list:i.a.getBaseConfig().headerNavigation}},created:function(){window.innerWidth>=780&&(this.isDesktop=!0),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(e){e.currentTarget.innerWidth>=780?this.isDesktop=!0:this.isDesktop=!1},openNavigation:function(){this.$emit("toggleMenu")},closeNavigation:function(e){this.$emit("toggleMenu")}}}},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(29),o=n(61),s=n(122),a=n(124),r=n.n(a),c=n(52),d=n(125),u=(n.n(d),n(126));i.a.use(r.a),c.library.add(u.l,u._23,u._8,u.W,u._7,u._28,u.L,u.G,u.H,u._12,u.U,u._14,u._27,u.C,u.B,u._22,u._19,u.O,u.A,u._11,u.Y,u.v,u.T,u._4,u.j,u._25,u._1,u.c,u.q,u.P,u._26,u.R,u.E,u.s,u._15,u.f,u.F,u._18,u.w,u.a,u.e,u.z,u.n,u.y,u._9,u.Q,u._30,u.t,u._0,u.D,u.S,u._21,u._20,u._2,u.V,u.g,u._10,u._17,u.x,u._3,u._13,u.p,u.I,u._6,u.X,u.h,u._24,u.d,u.k,u.u,u.m,u.N,u.i,u.J,u.b,u.M,u._5,u._16,u.Z,u._29,u.r,u.o,u.K);var p=function(e,t,n){n=n||"...";var i=document.createElement("div");i.innerHTML=e;var o=i.textContent;return o.length>t?o.slice(0,t)+n:o};i.a.filter("truncate",p),i.a.component("font-awesome-icon",d.FontAwesomeIcon),i.a.config.productionTip=!1,new i.a({el:"#app",router:s.a,render:function(e){return e(o.a)}})},61:function(e,t,n){"use strict";function i(e){n(62)}var o=n(31),s=n(121),a=n(26),r=i,c=a(o.a,s.a,!1,r,null,null);t.a=c.exports},62:function(e,t){}},[58]);
//# sourceMappingURL=app.7f71122e4069bd165208.js.map