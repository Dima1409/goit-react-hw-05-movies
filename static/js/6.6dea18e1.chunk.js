"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{647:function(n,t,e){e.d(t,{Z:function(){return g}});var r,o,i,a,s=e(731),u=e(689),c=e(552),l=e(168),p=e(444),d=p.ZP.ul(r||(r=(0,l.Z)(["\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    grid-gap: 20px;\n    margin-top: 0;\n    margin-bottom: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n"]))),x=p.ZP.img(o||(o=(0,l.Z)(["\n    box-shadow: 0 0 5px #000;\n    border-radius: 6px;\n"]))),h=p.ZP.h2(i||(i=(0,l.Z)(["\n    color: #000;\n\n"]))),m=p.ZP.li(a||(a=(0,l.Z)(["\ntransition: all 0.3s;\n    &:hover {\n        transform: scale(1.005);\n    }\n"]))),f=e(184),g=function(n){var t=n.movies,e=(0,u.TH)();return(0,f.jsx)(c.W,{children:(0,f.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.title,o=n.poster_path;return(0,f.jsxs)(m,{children:[(0,f.jsx)(s.rU,{to:"/movies/".concat(t),state:{from:e},children:(0,f.jsx)(x,{src:o?"".concat("https://image.tmdb.org/t/p/w500").concat(o):"https://t4.ftcdn.net/jpg/04/70/29/97/240_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",alt:r,width:"500"})}),(0,f.jsx)(h,{children:r})]},t)}))})})}},6:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,o,i,a=e(861),s=e(885),u=e(757),c=e.n(u),l=e(206),p=e(791),d=e(731),x=e(552),h=e(168),m=e(444),f=m.ZP.form(r||(r=(0,h.Z)(["\nmargin-bottom: 10px;\nbackground-color: teal;\npadding: 20px;\nbox-shadow: 0 2px 2px #000;\n"]))),g=m.ZP.input(o||(o=(0,h.Z)(["\npadding: 10px;\nmargin-right: 10px;\noutline: none;\nborder: none;\nfont-size: 18px;\nborder-radius: 4px;\n"]))),b=m.ZP.button(i||(i=(0,h.Z)(["\nborder: none;\nborder-radius: 4px;\nbackground-color: #28718d;\npadding: 10px;\nfont-size: 18px;\ntransition: all 0.3s;\n\n&:hover, \n&:focus {\n    box-shadow: 0 0 5px #000;\n    cursor: pointer;\n}\n"]))),v=e(184),Z=function(n){var t=n.onSubmit,e=(0,p.useState)(""),r=(0,s.Z)(e,2),o=r[0],i=r[1],a=(0,p.useRef)();console.log(a);return(0,v.jsx)(x.W,{children:(0,v.jsxs)(f,{onSubmit:function(n){n.preventDefault(),""!==o.trim()?(t(o),i(""),a.current.disabled=!0):a.current.disabled=!0},children:[(0,v.jsx)(g,{type:"text",name:"value",value:o,onChange:function(n){i(n.target.value.toLowerCase())},placeholder:"enter movies name"}),(0,v.jsx)(b,{type:"submit",ref:a,children:"Search"})]})})},j=e(647),w=function(){var n,t=(0,d.lr)(),e=(0,s.Z)(t,2),r=e[0],o=e[1],i=null!==(n=r.get("query"))&&void 0!==n?n:"",u=(0,p.useState)([]),h=(0,s.Z)(u,2),m=h[0],f=h[1];(0,p.useEffect)((function(){function n(){return(n=(0,a.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.Mc)(i);case 2:t=n.sent,e=t.map((function(n){return{id:n.id,title:n.title,poster_path:n.poster_path}})),f(e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}""!==i&&function(){n.apply(this,arguments)}()}),[i]);var g=function(n){o(""!==n?{query:n}:{})};return(0,v.jsxs)("main",{children:[(0,v.jsx)(Z,{onSubmit:function(n){o(""),g(n)}}),m&&(0,v.jsx)(j.Z,{movies:m}),0===m.length&&(0,v.jsx)(x.W,{children:(0,v.jsx)("h2",{children:"No results, try again"})})]})}}}]);
//# sourceMappingURL=6.6dea18e1.chunk.js.map