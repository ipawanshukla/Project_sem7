(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){e.exports=a(130)},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),o=a(17),s=a(14),l=a(22),m=a(23),u=a(24),d=a(11),h=a(9),f=a(27),p=a(64),g=a.n(p),E=a(184),b=a(183),y=a(178),v=a(192),x=a(190),j=a(86),O=a.n(j),w=a(179),k=a(180),C=a(181),R=a(182),I=a(87),S=a.n(I),P=a(185),A=a(48),F=a.n(A),L=a(58),N=a(172),B=a(13),T=a(84),D=a.n(T),W=a(45),M=a(49),U=a.n(M),V=a(174),Y=a(189),z=a(177),X=a(132),G=a(176),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).useStyles=function(){return Object(N.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}}}))},a.state={count:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0,x4:0,y4:0},a.imageRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getCoordinates",value:function(e){0==this.state.count?this.setState({x1:e.nativeEvent.offsetX,y1:e.nativeEvent.offsetY,count:1}):1==this.state.count?this.setState({x2:e.nativeEvent.offsetX,y2:e.nativeEvent.offsetY,count:2}):2==this.state.count?this.setState({x3:e.nativeEvent.offsetX,y3:e.nativeEvent.offsetY,count:3}):3==this.state.count&&this.setState({x4:e.nativeEvent.offsetX,y4:e.nativeEvent.offsetY,count:4})}},{key:"clearcoordinates",value:function(e){this.setState({count:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0,x4:0,y4:0})}},{key:"submitroi",value:function(e){console.log("inside submit.");var t={camera:{camera1:{roi:[{roi1:{x1:this.state.x1,x2:this.state.x2,x3:this.state.x3,x4:this.state.x4,y1:this.state.y1,y2:this.state.y2,y3:this.state.y3,y4:this.state.y4}}]}},email:this.props.email};console.log(t),U()({url:"/api/insert",method:"POST",data:t}).then((function(e){console.log("Update successfull!!",e),alert("Update Successfull")})).catch((function(){console.log("Internal server error")}))}},{key:"render",value:function(){var e=this.useStyles;if(this.state.count>=2)var t=r.a.createElement(W.Line,{position:"fixed",from:[this.state.x1+this.imageRef.current.x-40,this.state.y1+this.imageRef.current.y-7],to:[this.state.x2+this.imageRef.current.x-40,this.state.y2+this.imageRef.current.y-7],color:"#1DBFE7"});if(this.state.count>=3)var a=r.a.createElement(W.Line,{position:"fixed",from:[this.state.x2+this.imageRef.current.x-40,this.state.y2+this.imageRef.current.y-7],to:[this.state.x3+this.imageRef.current.x-40,this.state.y3+this.imageRef.current.y-7],color:"#1DBFE7"});if(this.state.count>=4)var n=r.a.createElement(W.Line,{position:"fixed",from:[this.state.x3+this.imageRef.current.x-40,this.state.y3+this.imageRef.current.y-7],to:[this.state.x4+this.imageRef.current.x-40,this.state.y4+this.imageRef.current.y-7],color:"#1DBFE7"});if(this.state.count>=4)var i=r.a.createElement(W.Line,{position:"fixed",from:[this.state.x4+this.imageRef.current.x-40,this.state.y4+this.imageRef.current.y-7],to:[this.state.x1+this.imageRef.current.x-40,this.state.y1+this.imageRef.current.y-7],color:"#1DBFE7"});return r.a.createElement(V.a,null,r.a.createElement(Y.a,null,r.a.createElement(Y.a,null,r.a.createElement(G.a,{container:!0,item:!0,xs:12,spacing:2},r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{item:!0,xs:8},r.a.createElement(X.a,{className:e.paper},r.a.createElement(Y.a,{textAlign:"center"},r.a.createElement("img",{onClick:this.getCoordinates.bind(this),ref:this.imageRef,src:D.a,height:"inherit",width:"inherit"}),t,a,n,i))),r.a.createElement(G.a,{item:!0,xs:4},r.a.createElement(X.a,{className:e.paper},r.a.createElement(Y.a,{textAlign:"left"},r.a.createElement(L.a,{variant:"h5",color:"textPrimary"},"Selected Points"),r.a.createElement(L.a,null,"Point 1: (",this.state.x1,", ",this.state.y1,")"),r.a.createElement(L.a,null,"Point 2: (",this.state.x2,", ",this.state.y2,")"),r.a.createElement(L.a,null,"Point 3: (",this.state.x3,", ",this.state.y3,")"),r.a.createElement(L.a,null,"Point 4: (",this.state.x4,", ",this.state.y4,")")),r.a.createElement(G.a,{container:!0,item:!0,xs:10,spacing:1},r.a.createElement(G.a,{item:!0,xs:4},r.a.createElement(X.a,{className:e.paper},r.a.createElement(Y.a,{textAlign:"center"},r.a.createElement(z.a,{variant:"contained",color:"primary",onClick:this.clearcoordinates.bind(this)},r.a.createElement(L.a,null," Clear "))))),r.a.createElement(G.a,{item:!0,xs:4},r.a.createElement(X.a,{className:e.paper},r.a.createElement(Y.a,{textAlign:"right"},r.a.createElement(z.a,{variant:"contained",color:"primary",onClick:this.submitroi.bind(this)},r.a.createElement(L.a,null," Submit ")))))))))))))}}]),t}(r.a.Component),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(V.a,null,r.a.createElement(Y.a,null,r.a.createElement(L.a,{variant:"h6",color:"textSecondary"},"User Profile")))}}]),t}(r.a.Component),K=a(18),Q=a(63),$=a.n(Q),q=a(126),Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).displayFrame=function(){a.setState((function(e){return{dis:!0}}))},a.getVideoImage=function(e,t,n){var r=Object(K.a)(a),i=document.createElement("video");i.onloadedmetadata=function(){"function"===typeof t&&(t=t(this.duration)),this.currentTime=Math.min(Math.max(0,(t<0?this.duration:0)+t),this.duration)},i.onseeked=function(e){var t=document.createElement("canvas");t.height=640,t.width=480,t.getContext("2d").drawImage(i,0,0,640,480);var a=new Image;a.src=t.toDataURL(),n.call(r,a,this.currentTime,e)},i.onerror=function(e){n.call(r,void 0,void 0,e)},i.src=e},a.showImageAt=function(e){var t;a.getVideoImage(a.state.vid,(function(a){return t=a,e}),(function(e,a,n){if("seeked"==n.type){this.processImage(e.src);var r=document.createElement("li");r.innerHTML+="<b>Frame at second "+a+":</b><br />",r.appendChild(e),document.getElementById("frames").appendChild(r),t>=(a+=10)&&this.showImageAt(a)}}))},a.convertFile=function(e){},a.processImage=function(e){a.anonLog();var t=null;document.createElement("img").src=e;var n=!0;try{t=atob(e.split("data:image/jpeg;base64,")[1])}catch(s){n=!1}if(0==n)try{t=atob(e.split("data:image/png;base64,")[1])}catch(s){return void alert("Not an image file Rekognition can process")}for(var r=t.length,i=new ArrayBuffer(r),c=new Uint8Array(i),o=0;o<r;o++)c[o]=t.charCodeAt(o);a.detectFaces(i)},a.anonLog=function(){q.config.region="us-east-1",q.config.credentials=new q.CognitoIdentityCredentials({IdentityPoolId:"us-east-1:16225f41-e3f4-4861-92d4-baf127091ee8"}),q.config.credentials.get((function(){q.config.credentials.accessKeyId,q.config.credentials.secretAccessKey,q.config.credentials.sessionToken}))},a.detectFaces=function(e){q.region="us-east-1";var t={Image:{Bytes:e}};(new q.Rekognition).detectLabels(t,(function(e,t){e?console.log(e,e.stack):(console.log("Success",t),t.Labels.map((function(e){"Person"==e.Name&&console.log("map",e)})))}))},a.state={vid:$.a,dis:!1},a.showImageAt.bind(Object(K.a)(a)),a.getVideoImage.bind(Object(K.a)(a)),a.displayFrame.bind(Object(K.a)(a)),a.processImage.bind(Object(K.a)(a)),a.anonLog.bind(Object(K.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(V.a,null,r.a.createElement(Y.a,null,r.a.createElement(L.a,{variant:"h6",color:"textSecondary"},"Inside CCTV",r.a.createElement(Y.a,null,r.a.createElement("video",{width:"400",controls:!0},r.a.createElement("source",{src:$.a,type:"video/mp4"}),r.a.createElement(L.a,null,"Your browser does not support HTML5 video.")),r.a.createElement(z.a,{variant:"contained",color:"primary",onClick:this.displayFrame},"Get Frames"))),this.state.dis?this.showImageAt(0):console.log("Avoided"),this.state.dis?r.a.createElement("div",{id:"frames"}):r.a.createElement("div",null)))}}]),t}(r.a.Component),_=Object(N.a)((function(e){return{root:{display:"flex"},drawer:Object(h.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(h.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(h.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}}));var ee=function(e){var t=e.window,a=e.email,i=_(),c=Object(B.a)(),o=r.a.useState(!1),s=Object(f.a)(o,2),l=s[0],m=s[1],u=[r.a.createElement(H,{email:a}),r.a.createElement(J,{email:a}),r.a.createElement(Z,{email:a})],d=Object(n.useState)(0),h=Object(f.a)(d,2),p=h[0],j=h[1],I=function(e){j(1),console.log("Inside key press",e)},A=r.a.createElement("div",null,r.a.createElement("div",{className:i.toolbar}),r.a.createElement(y.a,null),r.a.createElement(w.a,null,["Add Roi"].map((function(e,t){return r.a.createElement(k.a,{button:!0,key:t,onClick:I},r.a.createElement(C.a,null,t%2===0?r.a.createElement(O.a,null):r.a.createElement(S.a,null)),r.a.createElement(R.a,{primary:e}))}))),r.a.createElement(y.a,null),r.a.createElement(w.a,null,r.a.createElement(k.a,{button:!0,key:"Profile",onClick:function(e){j(2),console.log("Inside key press",e)}},r.a.createElement(C.a,null,r.a.createElement(g.a,null)),r.a.createElement(R.a,{primary:"Profile"}))),r.a.createElement(w.a,null,r.a.createElement(k.a,{button:!0,key:"CCTV",onClick:function(e){j(3),console.log("Inside key press",e)}},r.a.createElement(C.a,null,r.a.createElement(g.a,null)),r.a.createElement(R.a,{primary:"CCTV"})))),N=void 0!==t?function(){return t().document.body}:void 0;return r.a.createElement("div",{className:i.root},r.a.createElement(b.a,null),r.a.createElement(E.a,{position:"fixed",className:i.appBar},r.a.createElement(P.a,null,r.a.createElement(L.a,{variant:"h6",noWrap:!0},r.a.createElement("img",{src:F.a,height:"50px",width:"50px"})))),r.a.createElement("nav",{className:i.drawer,"aria-label":"mailbox folders"},r.a.createElement(x.a,{smUp:!0,implementation:"css"},r.a.createElement(v.a,{container:N,variant:"temporary",anchor:"rtl"===c.direction?"right":"left",open:l,onClose:function(){m(!l)},classes:{paper:i.drawerPaper},ModalProps:{keepMounted:!0}},A)),r.a.createElement(x.a,{xsDown:!0,implementation:"css"},r.a.createElement(v.a,{classes:{paper:i.drawerPaper},variant:"permanent",open:!0},A))),r.a.createElement("main",{className:i.content},r.a.createElement("div",{className:i.toolbar}),0!=p?u[p-1]:r.a.createElement(L.a,{paragraph:!0},"Welcome ",a)))},te=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(ee,{email:this.props.email})}}]),t}(r.a.Component),ae=a(188),ne=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.submit=function(e){e.preventDefault(),console.log(a.state);var t={email:a.state.email,pass:a.state.pass};U()({url:"/api/login",method:"POST",data:t}).then((function(e){200==e.status&&a.setState({redirect:!0}),console.log("Response from the server ",e)})).catch((function(){console.log("Internal server error")}))},a.state={email:"",password:"",redirect:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.redirect?(console.log("Redirecting in render"),r.a.createElement(te,{email:this.state.email})):r.a.createElement(V.a,{maxWidth:"xs"},r.a.createElement(Y.a,{bgcolor:"",textAlign:"center",p:"24px",mt:"50px",boxShadow:"2",borderRadius:"15px"},r.a.createElement("img",{src:F.a,display:"inline",height:"50px",width:"50px"}),r.a.createElement(L.a,{variant:"h6",color:"textSecondary"},"DQ..."),r.a.createElement(ae.a,{label:"Email",id:"outlined-size-small",variant:"outlined",size:"small",fullWidth:!0,name:"email",type:"email",color:"secondary",margin:"normal",onChange:this.handleChange}),r.a.createElement(ae.a,{color:"secondary",label:"Password",name:"password",type:"password",id:"outlined-size-small",variant:"outlined",size:"small",onChange:this.handleChange,margin:"normal",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(z.a,{variant:"contained",color:"primary",onClick:this.submit},"Login")))}}]),t}(r.a.Component),re=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/"},r.a.createElement(d.a,{to:"/login"})),r.a.createElement(d.b,{exact:!0,path:"/login",component:ne}),r.a.createElement(d.b,{exact:!0,path:"/dash",component:te}),r.a.createElement(d.b,{exact:!0,path:"*",render:function(){return"404 Not Found"}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=a(88),ce=a(187),oe=a(57),se=a(56),le=a(186),me=a(47),ue=Object(ie.a)({palette:{primary:oe.a,secondary:se.a,bg:le.a}});c.a.render(r.a.createElement(ce.a,{theme:ue},r.a.createElement(me.a,null,r.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e,t,a){e.exports=a.p+"static/media/logo.5675e678.png"},63:function(e,t,a){e.exports=a.p+"static/media/vid2.51d4b95a.mp4"},84:function(e,t,a){e.exports=a.p+"static/media/img.fb70a94b.jpeg"}},[[101,1,2]]]);
//# sourceMappingURL=main.b5cb5fd2.chunk.js.map