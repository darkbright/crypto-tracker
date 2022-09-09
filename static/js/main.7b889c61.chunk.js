(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{72:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(26),o=t.n(r),a=t(15),s=t(6),l=t(8),d=t(18),j=t(7),b=t(27),h="https://api.coinpaprika.com/v1";function u(){return fetch("".concat(h,"/coins")).then((function(n){return n.json()}))}var p=t(43),x=t.n(p),f=t(1);var O=function(n){var e=n.coinId,t=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){return Math.floor(Date.now()/1e3),fetch("https://ohlcv-api.nomadcoders.workers.dev?coinId=".concat(n)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),c=t.isLoading,i=t.data;return Object(f.jsx)("div",{children:c?"Loading chart...":Object(f.jsx)(x.a,{type:"line",series:[{name:"Price",data:null===i||void 0===i?void 0:i.map((function(n){return n.close}))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===i||void 0===i?void 0:i.map((function(n){return n.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}})})};var m,g,v,y,k,w,C,I,L,q=function(){return Object(f.jsx)("h1",{children:"Price"})},S=s.c.h1(m||(m=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),P=s.c.span(g||(g=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),Q=s.c.div(v||(v=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),z=s.c.header(y||(y=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),M=s.c.div(k||(k=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),T=s.c.div(w||(w=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),F=s.c.p(C||(C=Object(l.a)(["\n  margin: 20px 0px;\n"]))),A=s.c.div(I||(I=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),D=s.c.span(L||(L=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var $,_,B,H,J,R,E,U=function(){var n=Object(j.g)().coinId,e=Object(j.f)().state,t=Object(j.h)("/:coinId/price"),c=Object(j.h)("/:coinId/chart"),i=Object(a.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(h,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),r=i.isLoading,o=i.data,s=Object(a.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(h,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:5e3}),l=s.isLoading,u=s.data,p=r||l;return Object(f.jsxs)(Q,{children:[Object(f.jsx)(b.a,{children:Object(f.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:p?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(f.jsx)(z,{children:Object(f.jsx)(S,{children:(null===e||void 0===e?void 0:e.name)?e.name:p?"Loading...":null===o||void 0===o?void 0:o.name})}),p?Object(f.jsx)(P,{children:"Loading..."}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(M,{children:[Object(f.jsxs)(T,{children:[Object(f.jsx)("span",{children:"Rank:"}),Object(f.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(f.jsxs)(T,{children:[Object(f.jsx)("span",{children:"Symbol:"}),Object(f.jsxs)("span",{children:["$",null===o||void 0===o?void 0:o.symbol]})]}),Object(f.jsxs)(T,{children:[Object(f.jsx)("span",{children:"Price:"}),Object(f.jsxs)("span",{children:["$",null===u||void 0===u?void 0:u.quotes.USD.price.toFixed(3)]})]})]}),Object(f.jsx)(F,{children:null===o||void 0===o?void 0:o.description}),Object(f.jsxs)(M,{children:[Object(f.jsxs)(T,{children:[Object(f.jsx)("span",{children:"Total Suply:"}),Object(f.jsx)("span",{children:null===u||void 0===u?void 0:u.total_supply})]}),Object(f.jsxs)(T,{children:[Object(f.jsx)("span",{children:"Max Supply:"}),Object(f.jsx)("span",{children:null===u||void 0===u?void 0:u.max_supply})]})]}),Object(f.jsxs)(A,{children:[Object(f.jsx)(D,{isActive:null!==c,children:Object(f.jsx)(d.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(f.jsx)(D,{isActive:null!==t,children:Object(f.jsx)(d.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{path:"/:coinId/price",children:Object(f.jsx)(q,{})}),Object(f.jsx)(j.a,{path:"/:coinId/chart",children:Object(f.jsx)(O,{coinId:n})})]})]})]})},G=s.c.div($||($=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),K=s.c.header(_||(_=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),N=s.c.ul(B||(B=Object(l.a)([""]))),V=s.c.li(H||(H=Object(l.a)(["\n  background-color: white;\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),W=s.c.h1(J||(J=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),X=s.c.span(R||(R=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),Y=s.c.img(E||(E=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var Z=function(){var n=Object(a.useQuery)("allCoins",u),e=n.isLoading,t=n.data;return Object(f.jsxs)(G,{children:[Object(f.jsx)(b.a,{children:Object(f.jsx)("title",{children:"\ucf54\uc778"})}),Object(f.jsx)(K,{children:Object(f.jsx)(W,{children:"\ucf54\uc778"})}),e?Object(f.jsx)(X,{children:"Loading..."}):Object(f.jsx)(N,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(f.jsx)(V,{children:Object(f.jsxs)(d.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(f.jsx)(Y,{src:"https://coinicons-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var nn,en=function(){return Object(f.jsx)(d.a,{basename:"/crypto-tracker",children:Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{path:"/:coinId",children:Object(f.jsx)(U,{})}),Object(f.jsx)(j.a,{path:"/",children:Object(f.jsx)(Z,{})})]})})},tn=t(48),cn=Object(s.b)(nn||(nn=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var rn=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(cn,{}),Object(f.jsx)(en,{}),Object(f.jsx)(tn.ReactQueryDevtools,{initialIsOpen:!0})]})},on=new a.QueryClient;o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(a.QueryClientProvider,{client:on,children:Object(f.jsx)(s.a,{theme:{bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#9c88ff"},children:Object(f.jsx)(rn,{})})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.7b889c61.chunk.js.map