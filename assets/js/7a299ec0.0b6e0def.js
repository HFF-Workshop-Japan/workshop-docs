(self.webpackChunkworkshop_docs=self.webpackChunkworkshop_docs||[]).push([[59],{5585:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return n},metadata:function(){return a},toc:function(){return i},default:function(){return u}});var l=r(2122),s=r(9756),o=(r(7294),r(3905)),n={sidebar_position:3},a={unversionedId:"tutorial-levels/create-level",id:"tutorial-levels/create-level",isDocsHomePage:!1,title:"\u30ec\u30d9\u30eb\u306e\u4f5c\u6210",description:"\u3055\u3066\u3001\u6e96\u5099\u304c\u6574\u3063\u305f\u3068\u3053\u308d\u3067\u30ec\u30d9\u30eb\u306e\u4f5c\u6210\u3092\u59cb\u3081\u307e\u3059\u3002",source:"@site/docs/tutorial-levels/create-level.md",sourceDirName:"tutorial-levels",slug:"/tutorial-levels/create-level",permalink:"/workshop-docs/docs/tutorial-levels/create-level",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial-levels/create-level.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Unity\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",permalink:"/workshop-docs/docs/tutorial-levels/create-project"},next:{title:"\u30ec\u30d9\u30eb\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",permalink:"/workshop-docs/docs/tutorial-levels/export-level"}},i=[],p={toc:i};function u(e){var t=e.components,r=(0,s.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u3055\u3066\u3001\u6e96\u5099\u304c\u6574\u3063\u305f\u3068\u3053\u308d\u3067\u30ec\u30d9\u30eb\u306e\u4f5c\u6210\u3092\u59cb\u3081\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u4f5c\u3063\u305f\u3070\u304b\u308a\u306eProject\u306f\u3001\u4e0d\u8981\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u914d\u7f6e\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3053\u308c\u3092\u524a\u9664\u3057\u307e\u3059\u3002\n\u6b21\u306b\u3001Assets > Workshop > Prefabs\u3092\u9078\u629e\u3057\u3001 Level\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u76f4\u4e0b\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Level: HFF\u306e\u30ec\u30d9\u30eb\u306b\u306f\u3001\u3053\u306e\u30ec\u30d9\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"FailTrigger: \u843d\u4e0b\u691c\u77e5\u30dc\u30c3\u30af\u30b9\u3002\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u3053\u306e\u30dc\u30c3\u30af\u30b9\u306b\u89e6\u308c\u308b\u3068\u3001\u30ea\u30b9\u30dd\u30fc\u30f3\u3055\u308c\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"PassTrigger: \u30b4\u30fc\u30eb\u691c\u77e5\u30dc\u30c3\u30af\u30b9\u3002\u30ec\u30d9\u30eb\u306e\u30b4\u30fc\u30eb\u306b\u914d\u7f6e\u3057\u3066\u3001\u30b4\u30fc\u30eb\u5224\u5b9a\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002"),(0,o.kt)("li",{parentName:"ul"},"Directional Light: \u5149\u6e90\u3002")),(0,o.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u60f3\u50cf\u3067\u304d\u308b\u3088\u3046\u306b\u30ec\u30d9\u30eb\u306b\u5fc5\u8981\u306a\u8981\u7d20\u3067\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u843d\u4e0b\u3057\u305f\u30d7\u30ec\u30a4\u30e4\u30fc\u3092\u30ea\u30b9\u30dd\u30fc\u30f3\u3055\u305b\u308b\u305f\u3081\u306eFailTrigger\u3001\u30b4\u30fc\u30eb\u3055\u305b\u308b\u305f\u3081\u306e PassTrigger\u306f\u3001\u4e3b\u8981\u306a\u8981\u7d20\u3067\u3059\u3002  "),(0,o.kt)("h1",{id:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u914d\u7f6e"},"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u914d\u7f6e"),(0,o.kt)("p",null,"Assets > Workshop > Prefabs\u306b\u3042\u308b\u591a\u6570\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u305d\u306e\u307e\u307eScene\u30a6\u30a4\u30f3\u30c9\u30a6\u306b\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u3053\u3068\u30673D\u7a7a\u9593\u4e0a\u306b\u914d\u7f6e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Prefabs\u304c\u9752\u3044\u30dc\u30c3\u30af\u30b9\u306b\u306a\u308a3D\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u5834\u5408\u3001Reinport All\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3067\u3053\u306e\u554f\u984c\u3092\u4fee\u6b63\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u8cb4\u65b9\u304c\u30ec\u30d9\u30eb\u4f5c\u6210\u521d\u5fc3\u8005\u306e\u5834\u5408\u3001\u3053\u308c\u3089Prefabs\u3067\u7528\u610f\u3055\u308c\u305f3D\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u30ec\u30d9\u30eb\u3092\u4f5c\u6210\u3057\u3066\u3044\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u3053\u3053\u3067\u306f\u3001\u30b7\u30f3\u30d7\u30eb\u306a\u30ec\u30d9\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("p",null,"\u3044\u304f\u3064\u304b\u306ePrefabs\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u30b9\u30c6\u30fc\u30b8\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u30b9\u30bf\u30fc\u30c8\u5730\u70b9\u306bInitialSpawnPoint\u3092\u914d\u7f6e\u3057\u3001\u30b2\u30fc\u30c8\u306e\u5965\u306bPassTrigger\u3092\u914d\u7f6e\u3057\u307e\u3057\u305f\u3002"),(0,o.kt)("h1",{id:"unity\u4e0a\u3067\u30d7\u30ec\u30a4"},"Unity\u4e0a\u3067\u30d7\u30ec\u30a4"),(0,o.kt)("p",null,"\u753b\u9762\u4e2d\u592e\u306e\u30d7\u30ec\u30a4\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001Game\u30bf\u30d6\u3067\u30d7\u30ec\u30a4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u3061\u3087\u3063\u3068\u3057\u305f\u52d5\u4f5c\u691c\u8a3c\u306a\u3069\u3092Unity\u4e0a\u3067\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"\u307e\u305f\u3001\u3053\u306e\u6642\u30ab\u30fc\u30bd\u30eb\u304c\u8868\u793a\u3055\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u304c\u3001Workshop\u6d77\u5916\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30e1\u30f3\u30d0\u30fc\u306b\u3088\u308aDiscord\u4e0a\u3067\u30ab\u30fc\u30bd\u30eb\u3092\u975e\u8868\u793a\u306b\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u914d\u5e03\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/channels/547081451003314178/547378453826109441/565197272443387905"},"https://discord.com/channels/547081451003314178/547378453826109441/565197272443387905")),(0,o.kt)("p",null,"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u5f8c\u3001Assets\u306b\u30c9\u30e9\u30c3\u30b0&\u30c9\u30ed\u30c3\u30d7\u3057\u305f\u5f8c\u3001Level\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30c9\u30e9\u30c3\u30b0&\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u3053\u3068\u3067\u9069\u7528\u3055\u308c\u307e\u3059\u3002\n\u4ee5\u964d\u3001\u30d7\u30ec\u30a4\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u305f\u3068\u304d\u306b\u30ab\u30fc\u30bd\u30eb\u304c\u8868\u793a\u3055\u308c\u306a\u304f\u306a\u308a\u307e\u3059\u3002\u30ab\u30fc\u30bd\u30eb\u3092\u518d\u5ea6\u8868\u793a\u3059\u308b\u306b\u306f\u30ad\u30fc\u30dc\u30fc\u30c9\u306e","[L]","\u3092\u62bc\u3057\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);