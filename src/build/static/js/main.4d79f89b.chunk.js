(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{20:function(e,t,n){e.exports=n(34)},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);n(21);var a=n(0),i=n.n(a),u=n(17),s=n.n(u),r=(n(26),n(5)),l=n(7),c=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Hello! I'm the About Page."))},o=n(6),m=n.n(o),d=n(9),p=n(11),v=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Welcome! Today we're going to be talking about the fastest way to\n            learn React. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"learn-node",title:"How to Build a Node Server in 10 Minutes",content:["In this article, we're going to be talking looking at a very quick way\n            to set up a Node.js server. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"my-thoughts-on-resumes",title:"My Thoughts on Resumes",content:["Today is the day I talk about something which scares most people: resumes.\n            In reality, I'm not sure why people have such a hard time with proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]}],f=function(e){var t=e.articleName,n=e.comments,u=(e.setArticleInfo,Object(a.useState)("")),s=Object(p.a)(u,2),r=s[0],l=s[1],c=Object(a.useState)(""),o=Object(p.a)(c,2),v=o[0],f=o[1],h=function(){var e=Object(d.a)(m.a.mark((function e(){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({comment:{postedBy:r,text:v}}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,{body:a},l(""),f("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Comments:"),i.a.createElement("div",{id:"add-comment-form"},i.a.createElement("h3",null,"Add a Comment"),i.a.createElement("label",null,"Name:",i.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}})),i.a.createElement("label",null,"Comment:",i.a.createElement("textarea",{rows:"4",cols:"50",value:v,onChange:function(e){return f(e.target.value)}})),i.a.createElement("button",{onClick:function(){return h()}},"Add Comment")),n.map((function(e,t){return i.a.createElement("div",{className:"comment",key:t},i.a.createElement("h4",null,e.postedBy),i.a.createElement("p",null,"comment.text"))})))},h=function(e){var t=e.upvotes,n=e.articleName,a=e.setArticleInfo,u=function(){var e=Object(d.a)(m.a.mark((function e(){var t,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(n,"/upvote"),{method:"post"});case 2:return t=e.sent,e.next=5,t.json();case 5:i=e.sent,a(i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement("div",{id:"upvotes-section"},i.a.createElement("button",{onClick:function(){return u()}}," Add Upvote "),i.a.createElement("p",null,"This article has ",t," upvotes"))},g=function(){var e=Object(a.useState)({upvotes:0,comments:[]}),t=Object(p.a)(e,2),n=t[0],u=t[1],s=Object(l.f)().name;Object(a.useEffect)((function(){(function(){var e=Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,u(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]);var r=v.find((function(e){return e.name===s}));return r?i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,r.title),i.a.createElement(h,{upvotes:n.upvotes,articleName:r.name,setArticleInfo:u}),r.content.map((function(e,t){return i.a.createElement("p",{key:t},e)})),i.a.createElement(f,{comments:n.comments})):i.a.createElement("h1",null," Article doesn't exist!")},b=function(e){var t=e.articles;return i.a.createElement(i.a.Fragment,null,t.map((function(e,t){return i.a.createElement(r.b,{to:"/articles/".concat(e.name),className:"article-list-item",key:t},i.a.createElement("h3",null,e.title),i.a.createElement("p",null,e.content[0].substring(0,150),"..."))})))},E=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Articles"),i.a.createElement(b,{articles:v}))},q=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null," Hello, Welcome to my blog"),i.a.createElement("p",null,"This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test. This is a test."))},N=function(){return i.a.createElement("nav",null,i.a.createElement(r.b,{to:"/"},"Home"),i.a.createElement(r.b,{to:"/about"},"About"),i.a.createElement(r.b,{to:"/articles"},"Articles"))},y=function(){return i.a.createElement("h1",null,"404: Page not found.")};n(33);var w=function(){return i.a.createElement(r.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(N,null),i.a.createElement("div",{id:"page-body"},i.a.createElement(l.c,null,i.a.createElement(l.a,{path:"/",component:q,exact:!0}),i.a.createElement(l.a,{path:"/about",component:c}),i.a.createElement(l.a,{path:"/articles/:name",component:g}),i.a.createElement(l.a,{path:"/articles",component:E,exact:!0}),i.a.createElement(l.a,{component:y})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.4d79f89b.chunk.js.map