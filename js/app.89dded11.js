(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],m=0,u=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/marcelo-ai-ml-portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"09fb":function(e,t,a){},"27d8":function(e,t,a){},"2b87":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=(a("a481"),{install:function(e){e.mixin({methods:{publicPath:function(e){return"/marcelo-ai-ml-portfolio/"+e.replace(/^\/+/g,"")}}})}}),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("dark-template-container")],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"dark-template"}},[a("v-fade-transition",{attrs:{mode:"out-in",type:"animation"}},[a("v-content",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("github-ribbon"),a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{md10:"",sm12:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{md4:""}},[a("sidebar-container",{staticClass:"fill-height"})],1),a("v-flex",{attrs:{md8:""}},[a("content-container",{staticClass:"fill-height"})],1)],1),a("v-layout",[a("v-flex",{attrs:{md12:""}},[a("timeline-primary")],1)],1)],1)],1)],1)],1)],1)],1)},l=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"grey darken-3",dark:""}},[a("v-card-text",[a("avatar"),a("div",{staticClass:"text-sm-center mb-4 mt-3"},[a("h1",[e._v("\n        Marcelo "),a("span",{staticClass:"light-blue--text text--lighten-3"},[e._v("Mendonca")])]),a("span",[e._v("\n        Data Science, Artificial Intelligence and Machine Learning\n      ")])]),a("sidebar-section",{attrs:{options:e.sections.info}}),a("sidebar-section",{attrs:{options:e.sections.socials}}),a("sidebar-section",{attrs:{options:e.sections.hobbies},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[a("v-chip",[a("v-avatar",[a("v-icon",[e._v("\n              "+e._s(n.icon)+"\n            ")])],1),e._v("\n          "+e._s(n.text)+"\n        ")],1)]}}])}),a("sidebar-section",{attrs:{options:e.sections.languages},scopedSlots:e._u([{key:"items",fn:function(t){var n=t.items;return[a("v-container",{attrs:{"pa-0":""}},[a("v-layout",{staticClass:"text-xs-center",attrs:{wrap:""}},[e._l(n,(function(t,n){return[a("v-flex",{key:n,attrs:{md3:"",sm4:"",xs6:""}},[a("v-progress-circular",{staticClass:"ma-2",attrs:{rotate:"360",size:"85",width:"4",value:t.value,color:"white"}},[e._v("\n                  "+e._s(t.text)+"\n                ")])],1)]}))],2)],1)]}}])})],1)],1)},d=[],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-md-center"},[a("v-avatar",{attrs:{color:"grey lighten-4",size:"120"}},[a("img",{attrs:{src:e.publicPath("/img/avatar.jpg"),alt:"Marcelo Mendonca"}})])],1)},u=[],p={name:"Avatar"},h=p,g=a("2877"),b=a("6544"),f=a.n(b),v=a("8212"),y=Object(g["a"])(h,m,u,!1,null,"a0a75266",null),w=y.exports;f()(y,{VAvatar:v["a"]});var x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-4"},[a("div",{staticClass:"title mb-3"},[e._v("\n    "+e._s(e.options.title)+"\n  ")]),e.$slots.default?e._t("default"):e.$scopedSlots.items?[e._t("items",null,{items:e.options.items})]:e.$scopedSlots.item?[e._l(e.options.items,(function(t){return e._t("item",null,{item:t})}))]:e._l(e.options.items,(function(e,t){return a("sidebar-section-item",{key:t,attrs:{item:e}})}))],2)},_=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[e.hasIcon?a("v-flex",{attrs:{xs2:""}},[a("v-icon",[e._v("\n      "+e._s(e.item.icon)+"\n    ")])],1):e._e(),a("v-flex",{attrs:{xs10:e.hasIcon,xs12:!e.hasIcon}},[a("div",[e._v("\n      "+e._s(e.item.name)+"\n    ")]),a("p",[e.item.link?a("a",{staticClass:"grey--text",attrs:{href:e.item.link,target:"_blank"}},[e._v("\n        "+e._s(e.item.text)+"\n      ")]):a("span",{staticClass:"grey--text"},[e._v("\n        "+e._s(e.item.text)+"\n      ")])])])],1)},C=[],I={name:"SidebarSectionItem",props:{item:{type:Object,default:function(){}}},computed:{hasIcon:function(){return!!this.item.icon}}},S=I,T=a("0e8f"),A=a("132d"),V=a("a722"),O=Object(g["a"])(S,k,C,!1,null,"78122c3a",null),j=O.exports;f()(O,{VFlex:T["a"],VIcon:A["a"],VLayout:V["a"]});var B={name:"SidebarSection",components:{SidebarSectionItem:j},props:{options:{type:Object,default:function(){}}}},D=B,P=(a("9075"),Object(g["a"])(D,x,_,!1,null,"0f2cfb4d",null)),M=P.exports,F={name:"Sidebar",components:{SidebarSection:M,Avatar:w},data:function(){return{sections:{info:{title:"INFO",items:[{name:"Email",icon:"mdi-email",text:"marcelomendonca84@gmail.com"},{name:"Website",icon:"mdi-web",text:"Marcelo's Portfolio",link:"https://marcelomendonca84.github.io/marcelo-ai-ml-portfolio/"},{name:"Birth Date",icon:"mdi-cake-variant",text:"Feb 2, 1984"},{name:"Home",icon:"mdi-map-marker",text:"Austin, TX"}]},socials:{title:"SOCIALS",items:[{icon:"mdi-github-circle",text:"https://github.com/Marcelo-R-Mendonca",link:"https://github.com/marcelomendonca84/marcelo-ai-ml-portfolio"},{icon:"mdi-linkedin-box",text:"linkedin.com/in/marcelo-mendonca-data-analytics",link:"https://www.linkedin.com/in/marcelo-mendonca-data-analytics/"}]},hobbies:{title:"HOBBIES",items:[{icon:"mdi-bullseye",text:"Getting out of Safe Zone"},{icon:"mdi-biohazard",text:"Challenges"},{icon:"mdi-bike",text:"Cycling"},{icon:"mdi-image-filter-hdr",text:"Nature"},{icon:"mdi-auto-fix",text:"Hacking Stuffs"},{icon:"mdi-teach",text:"Teaching"},{icon:"mdi-android-debug-bridge",text:"Tickling Bugs!"}]},languages:{title:"LANGUAGES",items:[{text:"English",value:100},{text:"Portuguese",value:100},{text:"Spanish",value:30}]}}}}},L=F,E=(a("a779"),a("b0af")),z=a("99d9"),N=a("cc20"),$=a("a523"),R=a("490a"),H=Object(g["a"])(L,c,d,!1,null,"72a57e47",null),W=H.exports;f()(H,{VAvatar:v["a"],VCard:E["a"],VCardText:z["a"],VChip:N["a"],VContainer:$["a"],VFlex:T["a"],VIcon:A["a"],VLayout:V["a"],VProgressCircular:R["a"]});var G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"grey lighten-4",light:""}},[a("v-card-text",[a("content-section",{attrs:{title:"Who am I?"}},[e._v("\n      Experienced data analytics/data science professional with 21+ years of extensive international experience obtained from several positions within Australia/Asia, South America and North America.\n    ")]),e.prouds?a("content-section",{attrs:{title:"What am I proud of?"}},e._l(e.prouds,(function(t,n){return a("v-layout",{key:n},[a("v-flex",{attrs:{md1:"",xs3:""}},[a("v-icon",{attrs:{right:""}},[e._v("\n            "+e._s(t.icon)+"\n          ")])],1),a("v-flex",{attrs:{md11:"",xs9:""}},[a("p",[a("strong",[e._v(e._s(t.text))]),a("br"),a("small",[e._v(e._s(t.source))])])])],1)})),1):e._e(),e.educations?a("content-section",{attrs:{title:"Education"}},e._l(e.educations,(function(t,n){return a("v-layout",{key:n},[a("v-flex",{attrs:{md4:""}},[e._v("\n          "+e._s(t.from)+" - "+e._s(t.to)+"\n        ")]),a("v-flex",{attrs:{md8:""}},[t.title?a("strong",[e._v(e._s(t.title))]):e._e(),t.location?a("div",[a("i",[e._v(e._s(t.location))])]):e._e(),t.description?a("div",[e._v("\n            "+e._s(t.description)+"\n          ")]):e._e()])],1)})),1):e._e(),e.skills?a("content-section",{attrs:{id:"to-timeline",title:"Skills"}},[a("template",{slot:"actions"},[e._v("\n        (% are relative not absolute)\n      ")]),a("v-layout",{attrs:{wrap:""}},[e._l(e.skills,(function(t,n){return[t.divider?a("v-flex",{key:n,attrs:{md12:"",xs12:"","mb-4":""}}):a("v-flex",{key:n,attrs:{md6:"",xs12:""}},[a("div",{staticClass:"mr-2 ml-2"},[a("div",{staticClass:"align-center"},[a("v-icon",{attrs:{small:""}},[e._v("\n                  "+e._s(t.icon)+"\n                ")]),e._v("\n                "+e._s(t.title)+"\n              ")],1),a("v-progress-linear",{staticClass:"progress",attrs:{color:"secondary",height:"3",value:t.value}})],1)])]}))],2)],2):e._e()],1)],1)},U=[],q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h3",{staticClass:"title font-weight-light mb-1"},[e._v("\n      "+e._s(e.title)+"\n    ")]),a("v-spacer"),e._t("actions")],2),a("v-card-text",[e._t("default")],2)],1)},J=[],Z={name:"ContentSection",components:{},props:{title:{type:String,default:""}}},K=Z,X=(a("767a"),a("12b2")),Y=a("9910"),Q=Object(g["a"])(K,q,J,!1,null,"949f5c28",null),ee=Q.exports;f()(Q,{VCard:E["a"],VCardText:z["a"],VCardTitle:X["a"],VSpacer:Y["a"]});var te={name:"MainContent",components:{ContentSection:ee},data:function(){return{prouds:[{icon:"mdi-help-rhombus-outline",text:"Answered 10M+ questions!",source:"(Bytegate.ir post views)"},{icon:"mdi-library-music",text:"Made people enjoy and learn a new language for equivalent of 29+ years (older than myself!)",source:"(Bobet.ir and its channel downloads)"},{icon:"mdi-timer-sand",text:"Saved +110 days of time of students, writers and etc!",source:"(Delix.ir service usages)"},{icon:"mdi-account-multiple",text:"Tried to cover small part of 7 people expenses.",source:"(My awesome colleagues)"}],educations:[{from:"2015",to:"2019 (not finished yet)",title:"Bachelor's degree, Information Technology",location:"Seraj University",description:"Became a member of University Academic Association of Computer Science"}],skills:[{title:"PHP",icon:"mdi-language-php",value:95},{title:"JavaScript",icon:"mdi-language-javascript",value:80},{title:"Laravel Framework",icon:"mdi-laravel",value:90},{title:"Vue.js Framework",icon:"mdi-vuejs",value:90},{divider:!0},{title:"Ubuntu Server",icon:"mdi-ubuntu",value:70},{title:"CentOS Server",icon:"mdi-linux",value:47},{title:"Web Application Security",icon:"mdi-shield-lock",value:80},{title:"Test Driven Development",icon:"mdi-test-tube",value:26},{title:"Continuous Integration / Continuous Delivery",icon:"mdi-truck-fast",value:35},{title:"Git",icon:"mdi-git",value:67},{divider:!0},{title:"Hardware Development",icon:"mdi-chip",value:29},{title:"C/C++",icon:"mdi-language-cpp",value:38},{divider:!0},{title:"Leadership",icon:"mdi-account-group",value:68},{title:"Content Marketing (+340 articles)",icon:"mdi-text",value:96}]}}},ae=te,ne=(a("cc26"),a("8e36")),ie=Object(g["a"])(ae,G,U,!1,null,"e52837a2",null),re=ie.exports;f()(ie,{VCard:E["a"],VCardText:z["a"],VFlex:T["a"],VIcon:A["a"],VLayout:V["a"],VProgressLinear:ne["a"]});var oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"grey lighten-4",light:""}},[a("v-card-text",[a("content-section",{attrs:{id:"timeline",title:e.detailed?"My Life in a Nutshell":"My Experiences"}},[a("template",{slot:"actions"},[a("div",[a("v-switch",{attrs:{label:e.detailed?"Detailed":"Summary"},model:{value:e.detailed,callback:function(t){e.detailed=t},expression:"detailed"}})],1)]),a("v-timeline",{attrs:{dense:""}},e._l(e.orderedItems,(function(t,n){return a("v-timeline-item",{key:n,class:{transparent:t.transparent},attrs:{icon:t.icon||"",large:""},scopedSlots:e._u([t.iconImage?{key:"icon",fn:function(){return[a("v-avatar",[a("img",{attrs:{src:e.publicPath(t.iconImage)}})])]},proxy:!0}:null,{key:"opposite",fn:function(){},proxy:!0}],null,!0)},[a("v-layout",[e.$vuetify.breakpoint.smAndUp?a("v-flex",{attrs:{md1:"",sm2:"","align-self-center":""}},[a("span",[e._v(e._s(t.year))])]):e._e(),a("v-flex",{attrs:{md11:"",sm10:"",xs12:""}},[a("v-card",{staticClass:"elevation-1"},[a("v-card-title",{staticClass:"pb-0"},[a("div",[e.$vuetify.breakpoint.xsOnly?a("p",[e._v("\n                      "+e._s(t.year)+"\n                    ")]):e._e(),a("h3",[e._v(e._s(t.title))])])]),a("v-card-text",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{md7:!!t.image,md12:!t.image,xs12:""}},[a("div",{staticClass:"mr-1"},[t.text?a("span",{staticClass:"pre"},[e._v(e._s(t.text))]):t.html?a("div",{domProps:{innerHTML:e._s(t.html)}}):e._e()])]),t.image?a("v-flex",{attrs:{md5:"",xs12:""}},[a("div",{staticClass:"mt-2"},[Array.isArray(t.image)?a("v-carousel",{attrs:{"show-arrows":!1,height:325}},e._l(t.image,(function(t,n){return a("v-carousel-item",{key:n,attrs:{src:e.publicPath(t)}})})),1):a("v-img",{attrs:{"max-height":t.imageHeight?t.imageHeight:"",src:e.publicPath(t.image)}})],1)]):e._e()],1)],1)],1)],1)],1)],1)})),1)],2)],1)],1)},se=[],le=a("2909"),ce={name:"Timeline",components:{ContentSection:ee},data:function(){return{detailed:!0,items:[{detailed:!0,transparent:!0,year:"1996",title:"Born on Dec 7, 1996",html:"With a chance of %0.00000000000512.<br>I'm completely aware of value of the life!",icon:"mdi-cake-variant"},{detailed:!0,transparent:!0,year:"2003",title:"Touched a Mouse",html:'ME: "Woooow!"<br><i>... Of course got slapped later!</i>',icon:"mdi-mouse-variant"},{detailed:!0,year:"2009",transparent:!0,title:"Started an7.mahblog.com",html:'\n                <p>\n                    I\'m still emotional about this one. It was August 9, 2009 that I decided to start blogging so <a target="_blank" href="https://web.archive.org/web/20090819185659/http://an7.mahblog.com/">an7.mahblog.com</a> has just showed up! Years later, Mahblog.com got censored in Iran and my blog disappeared. <a target="_blank" href="https://web.archive.org/web/20120626234739/http://www.an7.mahblog.com/">Last archived page</a> was on June 26, 2012.\n                </p>\n                <p>\n                    Back then, my blog used to get more than 500 visitors/day and its Page Rank has reached to level 2 which was actually great! Rest In Peace an7 ...\n                </p>\n                <p>\n                    During 2009 - 2011, many other blogs has been created too. For example:\n                    <ul>\n                        <li>\n                            <a href="https://web.archive.org/web/20100926063748/http://bro2gifs.mihanblog.com/post/5">bro2gifs.mihanblog.com</a> - we were receiving banner designing orders there!\n                        </li>\n                        <li>\n                            <a href="https://web.archive.org/web/20101203082548/http://kdabs.mihanblog.com/">kdabs.mihanblog.com</a> - we were publishing audio books there\n                        </li>\n                        <li>\n                            <a href="http://web.archive.org/web/20100909150338/http://best1shops.mihanblog.com/">best1shops.mihanblog.com</a> - it was our first online shop and we got our first income from there. The feeling of that moment was awesome!\n                        </li>\n                        <li>\n                            And many other blogs I can\'t really remember!\n                        </li>\n                    </ul>\n                </p>\n        ',image:"img/timeline/an7.mahblog.com.png",imageHeight:200,icon:"mdi-web"},{detailed:!0,year:"2009",transparent:!0,title:"Created Almas-Khor Game",html:'A simple (yet almost unbeatable!) game made with Game Maker. It\'s still available for <a target="_blank" href="https://download.tebyan.net/2687/%D8%A8%D8%A7%D8%B2%DB%8C-%D8%A7%D9%84%D9%85%D8%A7%D8%B3-%D8%AE%D9%88%D8%B1">download here</a>!<br>The reason this game is pretty important for me is that it was my first published program!',image:"img/timeline/almas-khor.jpg",iconImage:"img/timeline/almas-khor-icon.png"},{detailed:!0,year:"2011",transparent:!0,title:"Fished Mobsters!",html:'\n          <p>\n            Oh shouldn\'t I include this one?! whatever ...<br>\n            It was 2011 and I\'d been addicted to a game called Street Mobsters. On its IR server, which is still available on <a target="_blank" href="https://web.archive.org/web/20111005204247/https://mobgangs.com/">mobgangs.com</a>, I decided to perform a phishing attack and harvest credentials of in-game wealthy people.\n          </p>\n          <p>\n            I hosted a page similar to this one and published it inside the game via various mediums. To be honest, I didn\'t expect any result but about 40 people had given me their username and passwords! among them, I selected wealthiest ones and ... you know rest of the story just add a Robin Hood at the end!\n          </p>\n          <p>\n            This was the moment I realized how it is easy to actually get misused especially on the net.\n          </p>\n        ',image:"img/timeline/street-mobsters.jpg",iconImage:"img/timeline/street-mobsters-icon.png"},{detailed:!0,year:"2012",transparent:!0,title:"Created a Botnet",html:"\n                <p>\n                    A VB6-based (yes you read it correctly! Visual Basic 6) botnet with dynamic C&Cs on Blogfa.com and many zombies. Just kidding, there were 3 infected PCs only!\n                </p>\n                <p>\n                    It was initially created to perform fraud clicks on one of PPC ads on one of my old blogs. It was designed in a way that the advertiser would not be able to detect the fraud easily.\n                </p>\n                ",icon:"mdi-desktop-classic"},{year:"2013",title:"Founded Bytegate.ir",html:'\n                    <p>\n                        Current status: <span class="green--text accent-4">Active</span>,\n                        Team: <span class="">1-5 person(s) (variable)</span>\n                    </p>\n                    <p>\n                        The main goal of <a target="_blank" href="https://bytegate.ir/?utm_source=portiflo&utm_medium=link&utm_content=timeline&utm_campaign=bytegate">Bytegate.ir</a> is to extend IT-related articles in Persian web with pretty easy-to-understand and picture-driven articles.\n                    </p>\n                    <p>\n                        The reason I founded Bytegate.ir was because of a dispute about computer stuffs back in school. Soon, I realized that I know NOTHING about computers! Bytegate.ir is the place I\'ve started learning amazing things.\n                    </p>\n                    <p>\n                        Currently there are 600+ articles on the website which helps 4000+ people each day. It\'s been helping 4 people to cover small part of their expenses.\n                   </p>',image:"img/timeline/bytegate.ir.jpg",iconImage:"img/timeline/bytegate.ir-icon.png"},{detailed:!0,year:"2014-15",transparent:!0,title:"Created a Captcha Solving Farm",html:'\n                <p>\n                    I was inspired by a blog post about captcha solving techniques and made my own captcha solving farm and built some basic APIs for <span style="background-color: #d1d1d1;">/(bad)?/g</span> guys to use it.\n                </p>\n                <p>\n                    It was initially created to make me millionaire (!) however, it was never even published since I couldn\'t find a way to receive money from outside of Iran. It was a stupid attempt in fact! 🤦‍♂️\n                </p>\n                ',icon:"mdi-worker"},{year:"2015",transparent:!0,title:"Created WifiShield",html:'\n          <p>\n              Current status: <span class="red--text darken-3">Failed</span>,\n              Team: <span class="">1</span>\n          </p>\n          <p>\n            WifiShield supposed to be a network security application to find vulnerabilities in Wi-Fi networks and fix them by manipulating through their actual configuration user interface.          </p>\n          <p>\n            It was basically a web crawler which is designed to go to default gateway (192.168.1.1 or whatever it was configured) page and interact with its user interfec following predefined action sets.\n          </p>\n          <p>\n            <span class="red--text darken-3">Failing Reason</span>:\n             The main problem with this application was that, I wasn\'t able to gather all possible firmware/emulators of devices of even a single brand. And of course, every version of a specific models may come in a different firmware version and thus different UI. I\'ve only defined action sets for my own access points and left it as is.\n          </p>\n        ',image:"img/timeline/wifi-shield.png",iconImage:"img/timeline/wifi-shield-icon.png"},{year:"2016",title:"Founded Bobet.ir",html:'\n          <p>\n              Current status: <span class="orange--text lighten-1">Taking last breaths</span>,\n              Team: <span class="">1-6 person(s) (variable)</span>\n          </p>\n          <p>\n              The purpose of <a target="_blank" href="http://bobet.ir/?utm_source=portiflo&utm_medium=link&utm_content=timeline&utm_campaign=bobet">Bobet.ir</a> is to let people learn English and Turkish languages in a different way by listening to musics with their lyrics, Persian translations and pronunciations of the actual lyric in Persian letters. The website reached 9000 visits/day. More than 270+ musics with contents are published there.\n          </p>\n          <p>\n              The reason behind founding Bobet.ir was pretty simple: testing Google SEO patterns related to musics. But suddenly, it grew up so fast we decided to pivot and work on it as a real project.\n          </p>\n          <p>\n            <span class="orange--text lighten-1">Failing Reason</span>:\n             A year later, it got censored in Iran (since women voice in musics are illegal here!) and the stats dropped suddenly. Before then, it had helped 5 people to cover some pieces of their expenses and had helped <a target="_blank" href="https://mahak-charity.org/main/index.php/fa/">Mahak Charity</a> to receive some donations by promoting it.\n          </p>\n        ',image:"img/timeline/bobet.ir.jpg",iconImage:"img/timeline/bobet.ir-icon.png"},{year:"2017",transparent:!0,title:"Founded Telepad",html:'\n          <p>\n              Current status: <span class="red--text darken-3">Failed</span>,\n              Team: <span class="">1</span>\n          </p>\n          <p>\n            <a target="_blank" href="http://t.me/Telepad_Bot">Telepad</a> was a Telegram assistant bot which helped channel owners to manage their posts easily by scheduling posts, instant editing, ready-to-be-published post suggestions and administrators\' role management.\n          </p>\n          <p>\n            The reason behind founding it was personal usage. It was initially created to make Bobet.ir publishing process easier but I decided to let others use it too.\n          </p>\n          <p>\n            <span class="red--text darken-3">Failing Reason</span>:\n             Well, I was alone and couldn\'t handle its development since I\'d been working on other projects too.<br />\n             Starting from there, slowly, I understood the actual value of having a team and focusing on a specific business.\n          </p>\n        ',image:"img/timeline/telepad.png",iconImage:"img/timeline/telepad-icon.png"},{year:"2017",title:"Founded Delix.ir",html:'\n          <p>\n              Current status: <span class="green--text accent-4">Active</span>,\n              Team: <span class="">1</span>\n          </p>\n          <p>\n            <a target="_blank" href="http://delix.ir/?utm_source=portiflo&utm_medium=link&utm_content=timeline&utm_campaign=delix">Delix.ir</a> is an online image text extractor (OCR) and PDF to Word converter which is built to support Persian language especially. The service also provides APIs to implement its OCR engines into customers\' own applications.\n          </p>\n          <p>\n            The reason I founded Delix.ir (<u>D</u>ocument <u>ELIXIR</u>) was because back in school, I found out that there is an unsolved need for this kind of services especially needed by teachers. However, it wasn\'t developed since 2017.\n          </p>\n          <p>\n            Currently, 3330+ people are using the service. It\'s still under development and we\'re going to change the strategy to support B2B market soon.\n          </p>\n        ',image:"img/timeline/delix.ir.png",iconImage:"img/timeline/delix.ir-icon.png"},{detailed:!0,transparent:!0,year:"2018",title:"A Turning Point",html:"\n          <p>\n          It looks like that 2018 is missing from my CV isn't it? <strong>NOT AT ALL!</strong>\n          </p>\n          <p>\n          This awesome year was a turning point in my life. I found out the reason why my businesses are not growing; what I'm doing wrong; what I've supposed to do and plenty of other thoughts.\n          </p>\n          <p>\n          Technically, I got familiar with and tried to be best (not yet of course!) at the following technologies:\n          <ul>\n          <li>git</li>\n          <li>Laravel</li>\n          <li>Vue.js</li>\n          <li>Arduino</li>\n          <li>Ubuntu</li>\n          <li>TTD and CI/CD</li>\n          <li>Development best practices</li>\n          <li>And more ...</li>\n          </ul>\n          </p>\n          <p>\n          So please don't underestimate this card by its height in pixels. It's worth a lot to me.\n          </p>\n\n        ",icon:"mdi-cake-variant"},{year:"2019",title:"Open Sourced Telegram Web Bridge",html:'\n          <p>\n              Current status: <span class="light-blue--text lighten-3">Open Sourced</span><br>Available on: <a target="_blank" href="https://github.com/AmirrezaNasiri/telegram-web-bridge">AmirrezaNasiri/telegram-web-bridge</a>\n          </p>\n          <p>\n            Telegram Web Bridge is a bidirectional, web-based, proxy-like application which can act as a middleman for Telegram Bot API requests (from your actual application to Telegram) and Webhooks (from Telegram to your actual application).\n          </p>\n          <p>\n            It was initially developed because of Telegram censorship in Iran and the need for it in a storage management software we\'ve built. I decided to publish the codes so anyone with the same problem will be able to handle it.\n          </p>\n        ',image:"img/timeline/telegram-web-bridge.png",icon:"mdi-github-circle"},{year:"2019",title:"Open Sourced USB Keystroke Injector",html:'\n          <p>\n            Current status: <span class="light-blue--text lighten-3">Open Sourced</span><br>Available on: <a target="_blank" href="https://github.com/AmirrezaNasiri/usb-keystroke-injector">AmirrezaNasiri/usb-keystroke-injector</a>\n          </p>\n          <p>\n            An Arduino-based keyboard emulator which injects (i.e. types) a sequence of letters received via Bluetooth protocol or read from predefined SD card payloads. Demo GIF is available on the GitHub page.\n          </p>\n          <p>\n            It was initially a university project, made at 2018 but I decided to extend it a little bit and publish it on my GitHub.\n          </p>\n        ',image:"img/timeline/usb-keystroke-injector.png",icon:"mdi-github-circle"},{year:"2019",title:"Co-Founded Smo.li",html:'\n          <p>\n              Current status: <span class="green--text accent-4">Active</span>,\n              Team: <span class="">2</span>\n          </p>\n          <p>\n            <a target="_blank" href="https://smo.li/?utm_source=portiflo&utm_medium=link&utm_content=timeline&utm_campaign=smoli">Smoli</a> is a URL shortener and link tracking platform that also allows you to add eye-catching and branded call-to-actions to any page on the web. See a demo of Forbes campaign on Business News Daily: <a target="_blank" href="http://smo.li/+demo-forbes">smo.li/+demo-forbes</a>.\n          </p>\n          <p>\n            The service has been founded by <a target="_blank" href="https://www.linkedin.com/in/saeidhabibpour/">Saeid Habibpour</a> (CEO) and me (CTO). Currently, the MVP is ready and we\'re researching the market.\n          </p>\n        ',image:"img/timeline/smo.li.png",iconImage:"img/timeline/smo.li-icon.png"},{year:"2019",title:"Open Sourced This Resume",html:'\n          <p>\n              Current status: <span class="light-blue--text lighten-3">Open Sourced</span><br>Available on: <a target="_blank" href="https://github.com/AmirrezaNasiri/vue-modern-resume">AmirrezaNasiri/vue-modern-resume</a>\n          </p>\n          <p>\n            A Vue.js-based and powered-by-Vuetify (material UI kit) resume template which you\'re seeing right now!\n          </p>\n        ',image:"img/timeline/vue-modern-resume.png",icon:"mdi-github-circle"},{year:"2019",title:"Published Vue Registrar Package",html:'\n          <p>\n              Current status: <span class="light-blue--text lighten-3">Published</span><br>Available on: <a target="_blank" href="https://github.com/AmirrezaNasiri/vue-registrar">AmirrezaNasiri/vue-registrar</a>\n          </p>\n          <p>\n            A Vue.js package that makes developers\' code a lot cleaner and much more understandable. It\'s consisted of two features that:\n            <ul>\n                <li>Registers all your common and frequently used components globally and ends the need for importing them manually;</li>\n                <li>Assembles all your vuex modules in a nested manner.</li>\n            </ul>\n          </p>\n        ',image:"img/timeline/vue-registrar-demo.png",iconImage:"img/timeline/vue-registrar-logo.png"},{year:"So far ...",title:"Written 340+ Unique Articles!",html:'I\'m the guy who loves teaching! So far, I\'ve written 340+ unique articles which most of them are computer-related. You can access them here:\n                    <ul><li><a target="_blank" href="https://bytegate.ir/author/amirrezanasiri/">My posts on Bytegate.ir</a> (260+ Computer-related)</li><li><a target="_blank" href="http://bobet.ir/author/amirrezanasiri/">My posts on Bobet.ir</a> (80+ translations)</li></ul>',icon:"mdi-fountain-pen-tip"}]}},computed:{orderedItems:function(){var e=Object(le["a"])(this.items).reverse();return this.detailed?e:e.filter((function(e){return!e.detailed}))}}},de=ce,me=(a("f9fb"),a("5e66")),ue=a("3e35"),pe=a("adda"),he=a("b73d"),ge=a("8414"),be=a("1e06"),fe=Object(g["a"])(de,oe,se,!1,null,"65ad3220",null),ve=fe.exports;f()(fe,{VAvatar:v["a"],VCard:E["a"],VCardText:z["a"],VCardTitle:X["a"],VCarousel:me["a"],VCarouselItem:ue["a"],VFlex:T["a"],VImg:pe["a"],VLayout:V["a"],VSwitch:he["a"],VTimeline:ge["a"],VTimelineItem:be["a"]});var ye=a("e2dd"),we=a.n(ye),xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"github-corner",attrs:{href:e.url,target:"_blank","aria-label":"View source on GitHub"}},[a("svg",{staticStyle:{fill:"#70B7FD",color:"#fff",position:"absolute",top:"0",border:"0",right:"0","z-index":"100"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},_e=[],ke={name:"GithubRibbon",data:function(){return{url:"https://github.com/marcelomendonca84/marcelo-ai-ml-portfolio"}}},Ce=ke,Ie=(a("6b7a"),Object(g["a"])(Ce,xe,_e,!1,null,"3ee1023e",null)),Se=Ie.exports,Te={name:"DarkTemplateContainer",components:{GithubRibbon:Se,TimelinePrimary:ve,ContentContainer:re,SidebarContainer:W},mounted:function(){new we.a(document.getElementById("to-timeline"),document.getElementById("timeline"),{size:2,color:this.$vuetify.theme.primary,startLabel:we.a.captionLabel("To the Journey ...")})}},Ae=Te,Ve=(a("5f2f"),a("7496")),Oe=a("549c"),je=a("0789"),Be=Object(g["a"])(Ae,s,l,!1,null,"06383aa6",null),De=Be.exports;f()(Be,{VApp:Ve["a"],VContainer:$["a"],VContent:Oe["a"],VFadeTransition:je["b"],VFlex:T["a"],VLayout:V["a"]});var Pe={name:"App",components:{DarkTemplateContainer:De},data:function(){return{}}},Me=Pe,Fe=Object(g["a"])(Me,r,o,!1,null,null,null),Le=Fe.exports;f()(Fe,{VApp:Ve["a"],VContent:Oe["a"]});var Ee=a("bb71");a("da64");n["a"].use(Ee["a"],{iconfont:"mdi"});a("ac6a");var ze=a("8103"),Ne=a.n(ze),$e=a("bba4"),Re=a.n($e),He=a("ffe0");He.keys().forEach((function(e){var t=He(e),a=Ne()(Re()(e.replace(/^\.\//,"").replace(/\.\w+$/,"")));a="".concat(a),n["a"].component(a,t.default||t)})),n["a"].config.productionTip=!1,n["a"].use(i),new n["a"]({render:function(e){return e(Le)}}).$mount("#app")},"5f2f":function(e,t,a){"use strict";var n=a("e34d"),i=a.n(n);i.a},"6b7a":function(e,t,a){"use strict";var n=a("09fb"),i=a.n(n);i.a},"767a":function(e,t,a){"use strict";var n=a("a96f"),i=a.n(n);i.a},9075:function(e,t,a){"use strict";var n=a("27d8"),i=a.n(n);i.a},"9ebb":function(e,t,a){},a779:function(e,t,a){"use strict";var n=a("a887"),i=a.n(n);i.a},a887:function(e,t,a){},a96f:function(e,t,a){},cc26:function(e,t,a){"use strict";var n=a("9ebb"),i=a.n(n);i.a},e34d:function(e,t,a){},f9fb:function(e,t,a){"use strict";var n=a("2b87"),i=a.n(n);i.a},ffe0:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id="ffe0"}});
//# sourceMappingURL=app.89dded11.js.map