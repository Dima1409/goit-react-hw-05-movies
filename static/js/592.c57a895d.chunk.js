"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[592],{47:function(t,n,e){e.d(n,{Z:function(){return x}});var r,a,i,s,o=e(731),c=e(689),u=e(552),l=e(168),p=e(444),m=p.ZP.ul(r||(r=(0,l.Z)(["\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n"]))),d=p.ZP.img(a||(a=(0,l.Z)(["\n    box-shadow: 0 0 5px #000;\n    border-radius: 6px;\n"]))),f=p.ZP.h2(i||(i=(0,l.Z)(["\n    color: #000;\n\n"]))),h=p.ZP.li(s||(s=(0,l.Z)(["\ntransition: all 0.3s;\n    &:hover {\n        transform: scale(1.01);\n    }\n"]))),v=e(184),x=function(t){var n=t.movies,e=(0,c.TH)();return(0,v.jsx)(u.W,{children:(0,v.jsx)(m,{children:n.map((function(t){var n=t.id,r=t.title,a=t.poster_path;return(0,v.jsxs)(h,{children:[(0,v.jsx)(o.rU,{to:"/movies/".concat(n),state:{from:e},children:(0,v.jsx)(d,{src:a?"".concat("https://image.tmdb.org/t/p/w500").concat(a):"https://t4.ftcdn.net/jpg/04/70/29/97/240_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",alt:r})}),(0,v.jsx)(f,{children:r})]},n)}))})})}},592:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(885),a=e(861),i=e(757),s=e.n(i),o=e(791),c=e(731),u=e(206),l=e(184),p=function(t){var n,e=t.setMovies,i=(0,c.lr)(),p=(0,r.Z)(i,2),m=p[0],d=p[1],f=null!==(n=m.get("value"))&&void 0!==n?n:"";(0,o.useEffect)((function(){function t(){return(t=(0,a.Z)(s().mark((function t(){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Mc)(f);case 2:n=t.sent,r=n.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})),e(r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}""!==f&&function(){t.apply(this,arguments)}()}),[e,f]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.currentTarget;d({value:n.elements.value.value}),n.reset()},children:[(0,l.jsx)("input",{type:"text",name:"value",placeholder:"enter movies name"}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})})},m=e(47),d=function(){var t=(0,o.useState)([]),n=(0,r.Z)(t,2),e=n[0],a=n[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(p,{setMovies:a}),e&&(0,l.jsx)(m.Z,{movies:e})]})}}}]);
//# sourceMappingURL=592.c57a895d.chunk.js.map