(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{149:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);var a,c=n(0),i=n.n(c),r=n(12),s=n.n(r),o=n(22),l=n(100),d=n(206),j=n(101),u=n(14),b=n(50),p=n(18),h=n.n(p),m=n(31),x=n(7),O=n(94),g=n.n(O),f=function(){var e=Object(m.a)(h.a.mark((function e(){var t,n,a,c=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:0,e.prev=2,e.next=5,g.a.get("https://itunes.apple.com/search/?term=".concat(t,"&offset=").concat(n,"&limit=10"));case 5:return a=e.sent,e.abrupt("return",a.data.results);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),v=n(190),y=n(192),w=n(193),k=n(213),N=n(95),I=n.n(N),C=n.p+"static/media/logo.23622aed.png",S=Object(o.b)({key:"songs",default:null}),P=Object(o.b)({key:"songFilter",default:""}),D=(Object(o.c)({key:"songsSelector",get:function(e){return(0,e.get)(S)}}),Object(o.c)({key:"songsFilterSelector",get:function(e){return(0,e.get)(P)}})),R=n(188),T=n(16),L=Object(R.a)((function(e){return{logo:{width:50,marginTop:10,marginRight:20,[e.breakpoints.down("md")]:{width:40}},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{},search:{position:"relative",borderRadius:e.shape.borderRadius,marginRight:e.spacing(2),marginLeft:0,[e.breakpoints.up("sm")]:{marginLeft:e.spacing(3)},[e.breakpoints.down("md")]:{marginRight:-20}},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),[e.breakpoints.up("md")]:{width:"80ch"},[e.breakpoints.down("md")]:{width:"20ch"},backgroundColor:Object(T.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(T.b)(e.palette.common.white,.25)}},sectionDesktop:{display:"none",[e.breakpoints.up("md")]:{display:"flex"}},sectionMobile:{display:"flex",[e.breakpoints.up("md")]:{display:"none"}}}})),E=n(194),U=n(102),B=n(214),F=n(195),z=n(2),H=function(){var e=L(),t=Object(o.d)(S),n=Object(x.a)(t,2),c=(n[0],n[1]),r=Object(o.d)(P),s=Object(x.a)(r,2),l=(s[0],s[1]),d=i.a.useState(null),j=Object(x.a)(d,2),b=j[0],p=j[1],O=Boolean(b),g=Object(u.f)(),N=function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(t),e.next=3,f(t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsx)("div",{className:e.grow,children:Object(z.jsx)(v.a,{position:"fixed",color:"secondary",children:Object(z.jsxs)(y.a,{children:[Object(z.jsx)(w.a,{className:e.title,variant:"h6",noWrap:!0,children:Object(z.jsx)("img",{src:C,className:e.logo})}),Object(z.jsx)("div",{style:{flex:1},children:Object(z.jsxs)("div",{className:e.search,children:[Object(z.jsx)("div",{className:e.searchIcon,children:Object(z.jsx)(I.a,{})}),Object(z.jsx)(k.a,{placeholder:"Search\u2026",onChange:function(e){var t=e.target.value;a&&clearTimeout(a),a=setTimeout((function(){return N(t||"kk")}),1e3)},classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})}),Object(z.jsxs)("div",{children:[Object(z.jsx)(E.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit",children:Object(z.jsx)(F.a,{})}),Object(z.jsxs)(U.a,{id:"menu-appbar",anchorEl:b,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:O,onClose:function(){p(null)},children:[Object(z.jsx)(B.a,{children:"Profile"}),Object(z.jsx)(B.a,{onClick:function(){return g.push("/")},children:"Logout"})]})]})]})})})},M=n(204),W=n(196),q=n(198),A=n(197),J=n(80),Y=n.n(J),G=n(67),V=n.n(G),K=n(79),Q=n.n(K),X=n(19),Z=Object(R.a)((function(e){return{root:{display:"flex",height:450,cursor:"pointer"},details:{display:"flex",width:"100%",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"100%",height:200},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1),justifyContent:"center"},playIcon:{height:38,width:38}}})),$=n(199);function _(e){var t=e.song,n=e.onSongPlay,a=e.isPlaying,i=Object(c.useState)(!1),r=Object(x.a)(i,2),s=r[0],o=r[1],l=Z(),d=Object(X.a)();Object(c.useEffect)((function(){o(a)}),[a]);return Object(z.jsx)(W.a,{className:l.root,children:Object(z.jsxs)("div",{className:l.details,children:[Object(z.jsx)(A.a,{className:l.cover,image:t.artworkUrl100,title:"Live from space album cover"}),Object(z.jsxs)(q.a,{className:l.content,children:[Object(z.jsx)(w.a,{component:"h5",variant:"h5",children:t.collectionName}),Object(z.jsx)(w.a,{variant:"subtitle1",color:"textSecondary",children:t.artistName})]}),Object(z.jsxs)("div",{className:l.controls,children:[Object(z.jsx)(E.a,{"aria-label":"previous",children:"rtl"===d.direction?Object(z.jsx)(Q.a,{}):Object(z.jsx)(Y.a,{})}),Object(z.jsx)(E.a,{"aria-label":"play/pause",onClick:function(e){e.stopPropagation(),n(t,!s),o(!s)},children:s?Object(z.jsx)($.a,{className:l.playIcon}):Object(z.jsx)(V.a,{className:l.playIcon})}),Object(z.jsx)(E.a,{"aria-label":"next",children:"rtl"===d.direction?Object(z.jsx)(Y.a,{}):Object(z.jsx)(Q.a,{})})]})]})})}var ee=n(11),te=n(211),ne=n(99),ae=n.n(ne),ce=n(200),ie=Object(R.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},modalRoot:{overflow:"hidden"},details:{display:"flex",width:"100%",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"100%",height:200},songImg:{width:800,height:"100%"},controlPanel:{display:"flex",flexDirection:"column",width:"100%"},controls:{display:"flex",width:"100%",flexDirection:"column",backgroundColor:e.palette.primary.main,padding:10},playIcon:{height:38,width:38,color:"white"},songDetails:{color:"white",padding:20,display:"flex",flexDirection:"column"},songDesc:{flex:1,padding:20,display:"flex",flexDirection:"column"},imgcls:{width:250,height:250,margin:20},detailCont:{display:"flex",maxHeight:"93vh",height:"93vh",overflow:"hidden"}}})),re=n(215),se=i.a.forwardRef((function(e,t){return Object(z.jsx)(ce.a,Object(ee.a)({direction:"up",ref:t},e))}));function oe(e){var t,n=e.open,a=e.song,i=void 0===a?{}:a,r=e.onClose,s=e.onSongPlay,o=e.songPosition,l=e.onSongPositionChange,d=e.minMax,j=Object(c.useState)(!0),u=Object(x.a)(j,2),b=u[0],p=u[1],h=ie(),m=(Object(X.a)(),function(){r()});Object(c.useEffect)((function(){o&&o===d.max&&(p(!1),l(0))}),[o,d]);return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(te.a,{className:h.modalRoot,fullScreen:!0,open:n,onClose:m,TransitionComponent:se,children:[Object(z.jsx)(v.a,{color:"secondary",className:h.appBar,children:Object(z.jsxs)(y.a,{children:[Object(z.jsx)(w.a,{variant:"h6",className:h.title,children:null===i||void 0===i?void 0:i.collectionName}),Object(z.jsx)(E.a,{edge:"start",color:"inherit",onClick:m,"aria-label":"close",children:Object(z.jsx)(ae.a,{})})]})}),Object(z.jsxs)("div",{className:h.detailCont,children:[Object(z.jsx)("img",{className:h.songImg,src:i.artworkUrl100}),Object(z.jsxs)("div",{className:h.controlPanel,children:[Object(z.jsxs)("div",{className:h.songDesc,children:[Object(z.jsx)("h2",{children:null===i||void 0===i?void 0:i.collectionName}),Object(z.jsx)("span",{children:null===i||void 0===i||null===(t=i.shortDescription)||void 0===t?void 0:t.trim()}),Object(z.jsxs)("div",{style:{display:"flex",marginTop:10},children:[Object(z.jsx)("img",{className:h.imgcls,src:i.artworkUrl60}),Object(z.jsx)("img",{className:h.imgcls,src:i.artworkUrl100}),Object(z.jsx)("img",{className:h.imgcls,src:i.artworkUrl30})]})]}),Object(z.jsxs)("div",{className:h.controls,children:[Object(z.jsxs)("div",{style:{display:"flex"},children:[Object(z.jsx)(E.a,{"aria-label":"play/pause",onClick:function(){s(i,!b),p(!b)},children:b?Object(z.jsx)($.a,{className:h.playIcon}):Object(z.jsx)(V.a,{className:h.playIcon})}),Object(z.jsxs)("div",{className:h.songDetails,children:[Object(z.jsx)("span",{children:null===i||void 0===i?void 0:i.trackCensoredName}),Object(z.jsx)("span",{children:null===i||void 0===i?void 0:i.artistName})]})]}),Object(z.jsx)(re.a,{size:"small","aria-label":"Small",color:"white",style:{color:"white",margin:10,marginRight:10,width:"70%"},min:d.min,max:d.max,value:o,onChange:function(e,t){l(t)}})]})]})]})]})})}var le=n(201),de=n(202),je=n(203);var ue=function(e){return Object(z.jsx)(le.a,{style:{justifyContent:"center",display:"flex",height:500},children:Object(z.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:e.showLoader?Object(z.jsx)(de.a,{}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(je.a,{style:{fontSize:100}}),Object(z.jsx)(w.a,{style:{fontSize:24},children:"No Results Found"})]})})})},be=function(e){var t,n=e.songs,a=void 0===n?null:n,i=Object(c.useState)(null),r=Object(x.a)(i,2),s=r[0],o=r[1],l=Object(c.useState)(null),d=Object(x.a)(l,2),j=d[0],u=d[1],b=Object(c.useState)(null),p=Object(x.a)(b,2),h=p[0],m=p[1],O=Object(c.useState)(0),g=Object(x.a)(O,2),f=g[0],v=g[1],y=Object(c.useState)({min:0,max:100}),w=Object(x.a)(y,2),k=w[0],N=w[1],I=Object(c.useState)(!1),C=Object(x.a)(I,2);C[0],C[1];Object(c.useRef)(f).current=f,Object(c.useEffect)((function(){return h&&!(null===h||void 0===h?void 0:h.paused)?t=setInterval((function(){v((function(e){return h.currentTime})),h.direction===f&&D()}),1e3):clearInterval(t),function(){return clearInterval(t)}}),[h,null===h||void 0===h?void 0:h.paused,f]);var S=function(e){v(0),o(e),P(e,!!e)},P=function(e,t){if(h&&(h.pause(),h.remove()),t){var n=new Audio(e.previewUrl);n.load(),n.play(),setTimeout((function(){N({min:0,max:n.duration}),m(n),u(e)}),1e3)}else D()},D=function(){h&&(h.pause(),h.remove())};return Object(z.jsxs)("div",{style:{marginTop:80},children:[(null===a||void 0===a?void 0:a.length)?Object(z.jsx)(M.a,{container:!0,direction:"row",justify:"center",children:null===a||void 0===a?void 0:a.map((function(e){return Object(z.jsx)(M.a,{onClick:function(){S(e)},item:!0,xs:12,md:2,style:{margin:20},children:Object(z.jsx)(_,{isPlaying:(null===j||void 0===j?void 0:j.previewUrl)===(null===e||void 0===e?void 0:e.previewUrl),onSongPlay:P,song:e})},e.trackId)}))}):Object(z.jsx)(ue,{showLoader:null===a}),s&&Object(z.jsx)(oe,{open:s,song:s,onClose:function(){S(null),h.pause(),h.remove(),m(null),u(null)},onSongPlay:P,onSongPositionChange:function(e){h.currentTime=e,v(e)},songPosition:f,minMax:k})]})},pe=function(){var e=Object(o.d)(S),t=Object(x.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),r=Object(x.a)(i,2),s=r[0],l=r[1],d=Object(c.useState)(!1),j=Object(x.a)(d,2),u=j[0],p=j[1],O=Object(o.e)(D);Object(c.useEffect)((function(){Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(O||"kk");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);var g=function(){var e=Object(m.a)(h.a.mark((function e(t){var c,i,r,o,d,j,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.target.scrollHeight,i=t.target.scrollTop,r=t.target.clientHeight,o=parseInt(parseInt(c)-parseInt(i))===parseInt(r),d=parseInt(parseInt(c)-parseInt(i)+1)===parseInt(r),j=parseInt(parseInt(c)-parseInt(i)-1)===parseInt(r),!(o||d||j)){e.next=15;break}return p(!0),e.next=11,f(O||"kk",s+1);case 11:u=e.sent,l(s+1),a([].concat(Object(b.a)(n),Object(b.a)(u))),p(!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)("div",{children:[Object(z.jsx)(H,{}),Object(z.jsxs)("div",{onScroll:g,style:{overflowY:"auto",maxHeight:"100vh"},children:[Object(z.jsx)(be,{songs:n}),u&&Object(z.jsx)("center",{style:{marginBottom:20,height:50},children:Object(z.jsx)(de.a,{color:"secondary"})})]})]})},he=n(205),me=n(207),xe=n(212),Oe=n(210),ge=Object(R.a)((function(e){return{container:{display:"flex",alignItems:"start",height:"100vh"},banner:{flex:3,height:"100%"},paper:{marginTop:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center",paddingRight:10,paddingLeft:10,flex:1},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),fe=n.p+"static/media/banner.3b6e5062.jpeg",ve=Object(xe.a)()((function(e){var t=ge(),n=Object(u.f)();e.width;return Object(z.jsxs)("div",{className:t.container,children:[Object(z.jsx)(Oe.a,{xsDown:!0,mdDown:!0,children:Object(z.jsx)("div",{className:t.banner,children:Object(z.jsx)("img",{style:{width:"100%",height:"100%"},src:fe})})}),Object(z.jsxs)("div",{className:t.paper,children:[Object(z.jsx)("img",{src:C,style:{width:176}}),Object(z.jsx)("br",{}),Object(z.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(z.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(z.jsx)(me.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Email Address",autoFocus:!0,inputProps:{autoComplete:"off"},color:"secondary"}),Object(z.jsx)(me.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Password",type:"password",inputProps:{autoComplete:"new-password"},color:"secondary"}),Object(z.jsx)(he.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(){n.push("/home")},children:"Sign In"})]})]})]})})),ye=function(){return Object(z.jsx)(j.a,{children:Object(z.jsxs)(u.c,{children:[Object(z.jsx)(u.a,{path:"/",exact:!0,children:Object(z.jsx)(ve,{})}),Object(z.jsx)(u.a,{path:"/home",children:Object(z.jsx)(pe,{})})]})})},we=(n(149),Object(l.a)({palette:{primary:{main:"#d73a2c"},secondary:{light:"#0066ff",main:"#364671",contrastText:"white"}}}));function ke(){return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(d.a,{theme:we,children:Object(z.jsx)(o.a,{children:Object(z.jsx)("div",{style:{overflowY:"hidden",maxHeight:"100vh"},children:Object(z.jsx)(ye,{})})})})})}var Ne=document.getElementById("root");s.a.render(Object(z.jsx)(c.StrictMode,{children:Object(z.jsx)(ke,{})}),Ne)}},[[150,1,2]]]);
//# sourceMappingURL=main.0b03e0e3.chunk.js.map