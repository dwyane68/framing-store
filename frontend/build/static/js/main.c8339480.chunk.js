(this.webpackJsonpframing_store=this.webpackJsonpframing_store||[]).push([[0],{125:function(e,t,a){e.exports=a.p+"static/media/demo.44dc6069.png"},140:function(e,t,a){e.exports=a(246)},145:function(e,t,a){},146:function(e,t,a){},154:function(e,t,a){},162:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var n,c=a(0),l=a.n(c),o=a(6),r=a.n(o),i=(a(145),a(92)),u=a(23),s=(a(146),a(147),a(137)),m=a(28),d=(a(149),a(136)),f=(a(152),a(58)),h=(a(154),a(99),a(57)),E=(a(101),a(34)),g=(a(86),a(48)),b=(a(247),a(134)),p=(a(76),a(24)),v=(a(115),a(70)),w=(a(87),a(39)),O=(a(162),a(249)),j=a(250),y=a(251),k=a(252),C=a(253),S=a(254),U=a(116),x=(a(163),a(164),a(135)),R=a(84),D=a.n(R),B="http://localhost:1337",F=function(e,t,a){!function(e){var t=e.path,a=e.params,n=(e.headers,e.cb),c=e.err;D.a.post("".concat(B).concat(t),a).then((function(e){200!==e.status&&201!==e.status||!n?c(e):n(e.data)})).catch((function(e){404!==e.status&&400!==e.status?e&&401===e.status?w.a.warning("Unauthorised request! You will be logged out."):w.a.warning("Something went wrong!!"):c&&c(e.message)}))}({path:"/api/general/publish",params:e,cb:t,err:a})},I=function(e){var t=Object(c.useState)(!1),a=Object(m.a)(t,2),n=a[0],o=a[1],r=Object(c.useState)(!1),i=Object(m.a)(r,2),u=i[0],s=i[1],d=Object(c.useState)(""),f=Object(m.a)(d,2),h=f[0],E=f[1];Object(c.useEffect)((function(){""!=e.fetchUrl&&(console.log(e.fetchUrl),E(e.fetchUrl),s(!0))}),[e]);var g=function(){o(!0),function(e,t,a){D()({url:"".concat(e),method:"GET",responseType:"blob"}).then((function(e){t(e)})).catch((function(e){a(e)}))}(h,(function(e){var t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,a.setAttribute("download","image_".concat(Math.round(+new Date/1e3),".png")),document.body.appendChild(a),a.click(),w.a.success("Downloaded"),o(!1),s(!1)}),(function(){w.a.warn("Error downloading"),o(!1),s(!1)}))},b=function(){E(""),s(!1),e.handleCancel()};return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{centered:!0,width:"90%",style:{height:"60%"},visible:u,title:"Preview Image",onOk:g,onCancel:b,footer:[l.a.createElement(p.a,{key:"cancel",onClick:b},"Cancel"),l.a.createElement(p.a,{key:"download",type:"primary",loading:n,onClick:g},"Download")]},l.a.createElement(v.a,{style:{width:"95%",height:"50%",margin:"auto"},cover:l.a.createElement("img",{alt:"Image Preview",src:h,style:{height:"-webkit-fill-available"}})})))},L=a(125),P=a.n(L);var T=function(){var e=Object(c.useState)(n),t=Object(m.a)(e,2),a=(t[0],t[1],Object(c.useState)(void 0)),o=Object(m.a)(a,2),r=o[0],i=o[1],u=Object(c.useState)("https://via.placeholder.com/500"),s=Object(m.a)(u,2),d=s[0],f=s[1],x=Object(c.useState)(0),R=Object(m.a)(x,2),D=R[0],B=R[1],L=Object(c.useState)(.2),T=Object(m.a)(L,2),z=T[0],A=T[1],M=Object(c.useState)(),_=Object(m.a)(M,2),J=_[0],W=_[1],Y=Object(c.useState)(""),Z=Object(m.a)(Y,2),q=Z[0],G=Z[1];n={x:200,y:200,width:500,height:600,rotate:0,scaleX:1,scaleY:1};var H={src:r,initialAspectRatio:1,rotatable:!0,zoomTo:z},N=function(e){var t;A(t=z+e),"undefined"!==typeof J&&J.zoomTo(t)},X=function(e){var t;B(t=D+e),"undefined"!==typeof J&&J.rotateTo(t)};return l.a.createElement("div",null,!r&&l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{hoverable:!0,style:{width:600,height:600,margin:"auto"},cover:l.a.createElement("img",{alt:"example",src:P.a,style:{height:"-webkit-fill-available"}})}),l.a.createElement(b.a,{beforeUpload:function(e){var t=new FileReader;return t.readAsDataURL(e),t.onload=function(){var e=t.result;i(e)},!1}},l.a.createElement(p.a,null,l.a.createElement(O.a,null)," Click to Upload"))),r&&l.a.createElement(h.a,null,l.a.createElement(E.a,{span:12},l.a.createElement(v.a,{style:{height:"50%"}},l.a.createElement(U.a,Object.assign({},H,{dragMode:"move",onInitialized:function(e){W(e),A(.2),e.setData(n)}})),l.a.createElement("div",{className:"actions"},l.a.createElement(g.a,{title:"Rotate Left"},l.a.createElement(p.a,{icon:l.a.createElement(j.a,null),onClick:function(){X(-90)}})),l.a.createElement(g.a,{title:"Rotate Right"},l.a.createElement(p.a,{icon:l.a.createElement(y.a,null),onClick:function(){X(90)}})),l.a.createElement(g.a,{title:"ZoomIn"},l.a.createElement(p.a,{icon:l.a.createElement(k.a,null),onClick:function(){N(.1)}})),l.a.createElement(g.a,{title:"ZoomOut"},l.a.createElement(p.a,{icon:l.a.createElement(C.a,null),onClick:function(){N(-.1)}})),l.a.createElement(g.a,{title:"Reset"},l.a.createElement(p.a,{icon:l.a.createElement(S.a,null),onClick:function(){"undefined"!==typeof J&&(J.reset(),A(.2))}})),l.a.createElement(p.a,{onClick:function(){i(""),f("")}},"Upload new image"),l.a.createElement(p.a,{onClick:function(){"undefined"!==typeof J&&f(J.getCroppedCanvas().toDataURL())}},"Preview"),l.a.createElement(p.a,{onClick:function(){"https://via.placeholder.com/500"===d?w.a.error("Please generate preview before publishing."):w.a.loading("please wait while the image is being processed.",(function(){F({file:d},(function(e){G(e.previewUrl)}),(function(){w.a.error("Error uploading image")}))}))}},"Publish")))),l.a.createElement(E.a,{span:12},l.a.createElement(v.a,{hoverable:!0,style:{margin:"10px",background:"transparent",height:"auto",width:"90%"},cover:l.a.createElement("img",{alt:"example",src:d,style:{margin:"auto",width:"90%"}})}))),l.a.createElement(I,{fetchUrl:q,handleCancel:function(){G("")}}))},z=f.a.Header,A=f.a.Content,M=f.a.Footer,_=(f.a.Sider,d.a.SubMenu,function(e){var t=Object(c.useState)(10),a=Object(m.a)(t,2),n=a[0],o=(a[1],Object(c.useState)("Framing Store")),r=Object(m.a)(o,2),i=r[0],d=(r[1],Object(c.useState)(!1)),h=Object(m.a)(d,2);h[0],h[1];return l.a.createElement(f.a,null,l.a.createElement(f.a,null,l.a.createElement(z,{style:{background:"#fff",fontSize:"larger"}},i),l.a.createElement("div",{style:{background:"#ECECEC",padding:"30px"}},l.a.createElement(A,{style:{margin:"0 16px"}},l.a.createElement("div",null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",component:T}))))),l.a.createElement(s.a,{offsetBottom:n},l.a.createElement(M,{style:{textAlign:"center"}},"Developed By Shubham"))))});var J=function(){return l.a.createElement(i.a,{basename:"/"},l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",component:_})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[140,1,2]]]);
//# sourceMappingURL=main.c8339480.chunk.js.map