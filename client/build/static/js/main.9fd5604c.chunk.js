(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},290:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(29),a=n.n(i),r=(n(160),n(13)),j=n(14),l=(n(161),n(1));var o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("nav",{children:[Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("img",{src:"/Images/logo.jpg",alt:"",className:"nav-logo"})}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"location",children:[Object(l.jsx)("i",{className:"fas fa-map-marker-alt fa-lg"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"subtext",children:"Hello"}),Object(l.jsx)("h4",{children:"Select your address"})]})]})}),Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)("input",{type:"text",className:"search"}),Object(l.jsx)("i",{className:"fas fa-search fa-lg"})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"location",children:[Object(l.jsx)("button",{children:Object(l.jsx)("img",{src:"/Images/india.png",className:"india-img dropbtn",alt:""})}),Object(l.jsx)("i",{class:"fas fa-caret-down"})]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"location",children:[Object(l.jsxs)(r.b,{to:"/auth",className:"link",children:[Object(l.jsx)("p",{className:"subtext",children:"Hello,Sign in"}),Object(l.jsx)("h4",{children:"Accounts & Lists"})]}),Object(l.jsx)("i",{class:"fas fa-caret-down"})]})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"location",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"subtext",children:"Return"}),Object(l.jsx)("h4",{children:"&Orders"})]})})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"location",children:Object(l.jsx)("img",{className:"cart-img",src:"/Images/cart.jpg",alt:""})})})]}),Object(l.jsxs)("header",{className:"header",children:[Object(l.jsxs)("div",{className:"subtext",children:[Object(l.jsx)("i",{className:"fas fa-bars"}),Object(l.jsx)("p",{children:"All"})]}),Object(l.jsx)("div",{className:"subtext",children:Object(l.jsx)("p",{children:"Mobiles"})}),Object(l.jsx)("div",{className:"subtext",children:Object(l.jsx)("p",{children:"BestSellers"})}),Object(l.jsx)("div",{className:"subtext",children:Object(l.jsx)("p",{children:"Fashion"})}),Object(l.jsx)("div",{className:"subtext",children:Object(l.jsx)("p",{children:"Electronics"})}),Object(l.jsx)("div",{className:"subtext",children:Object(l.jsx)("p",{children:"CustomerService"})}),Object(l.jsx)("div",{className:"subtext",children:Object(l.jsx)("p",{children:"AmazonPay"})}),Object(l.jsxs)("div",{className:"subtext",children:[Object(l.jsx)("p",{children:"Prime"}),Object(l.jsx)("i",{class:"fas fa-caret-down"})]}),Object(l.jsx)("div",{className:"subtext",children:Object(l.jsx)("p",{children:"Today'sDeals"})}),Object(l.jsx)("div",{className:"subtext",children:Object(l.jsx)("p",{children:"NewReleases"})}),Object(l.jsx)("div",{className:"subtext",children:Object(l.jsx)("p",{children:"Computers"})}),Object(l.jsx)("div",{className:"subtext",children:Object(l.jsx)("p",{children:"Home&Kitchen"})}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"header-img",children:Object(l.jsx)("img",{src:"/Images/bellbottom.jpg",alt:""})})})]})]})})},d=n(55),b=n.n(d),h=n(74),x=n(39);n(167);var O=function(){var e=Object(j.f)(),t=Object(c.useState)(""),n=Object(x.a)(t,2),s=n[0],i=n[1],a=Object(c.useState)(""),o=Object(x.a)(a,2),d=o[0],O=o[1],m=function(){var t=Object(h.a)(b.a.mark((function t(n){var c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:d})});case 3:return c=t.sent,t.next=6,c.json;case 6:401!==(i=t.sent).status&&i?(window.alert("Login Successfully"),console.log("Invalid"),e.push("/")):(window.alert("User Successfully NOT Registered"),console.log("Invalid"));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("img",{src:"/Images/logo1.jpg",className:"logo",alt:""})}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("form",{method:"POST",className:"details",children:[Object(l.jsx)("h1",{children:"Sign-In"}),Object(l.jsx)("label",{htmlFor:"textF",children:"Email or mobile phone number"}),Object(l.jsx)("input",{id:"textF",type:"email",value:s,name:"email",autoComplete:"on",onChange:function(e){return i(e.target.value)}}),Object(l.jsx)("label",{htmlFor:"textF1",children:"Enter Password"}),Object(l.jsx)("input",{id:"textF1",type:"password",value:d,name:"password",onChange:function(e){return O(e.target.value)}}),Object(l.jsx)("button",{className:"btn",onClick:m,children:"Continue"}),Object(l.jsxs)("p",{children:["By Continuing, you agree to Amazon's ",Object(l.jsx)("span",{children:"Conditions of Use"})," and ",Object(l.jsx)("span",{children:"Privacy Notice."})]}),Object(l.jsx)("br",{}),Object(l.jsx)(r.b,{className:"help",href:"#",children:"Need help?"})]}),Object(l.jsx)("hr",{}),Object(l.jsx)(r.b,{to:"/add",children:Object(l.jsx)("button",{className:"account btn",type:"submit",children:"Create your Amazon Account"})}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{children:"\xa9 1996-2021, Amazon.com, Inc. or its affiliates"})]})]})},m=n(75),p=n(101);n(168);var g,u=function(){var e,t,n=Object(j.f)(),s=Object(c.useState)({name:"",email:"",password:"",confirmpassword:""}),i=Object(x.a)(s,2),a=i[0],o=i[1];console.log(a);var d=function(n){n.preventDefault(),console.log(n),e=n.target.name,t=n.target.value,o(Object(p.a)(Object(p.a)({},a),{},Object(m.a)({},e,t)))},O=function(){var e=Object(h.a)(b.a.mark((function e(t){var c,s,i,r,j,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=a.name,s=a.email,i=a.password,r=a.confirmpassword,e.next=4,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,email:s,password:i,confirmpassword:r})});case 4:return j=e.sent,e.next=7,j.json;case 7:401!==(l=e.sent).status&&l?(window.alert("User Successfully Registered"),console.log("Invalid"),n.push("/auth")):(window.alert("User Successfully NOT Registered"),console.log("Invalid"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)("img",{src:"/Images/logo1.jpg",className:"logo",alt:" "})}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"details",children:[Object(l.jsx)("h1",{children:"Create Your Account"}),Object(l.jsxs)("form",{method:"POST",children:[Object(l.jsx)("label",{htmlFor:"textF",children:"Name"}),Object(l.jsx)("input",{id:"textF",type:"email",value:a.name,onChange:d,name:"name"}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"textF",children:"Email Address"}),Object(l.jsx)("input",{id:"textF",type:"email",value:a.email,onChange:d,name:"email"}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"textF",children:"Password"}),Object(l.jsx)("input",{id:"textF",type:"password",value:a.password,onChange:d,name:"password"}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{htmlFor:"textF",children:"Confirm Password"}),Object(l.jsx)("input",{id:"textF",type:"password",value:a.confirmpassword,onChange:d,name:"confirmpassword"})]}),Object(l.jsx)("button",{className:"btn",onClick:O,children:"Continue"}),Object(l.jsxs)("p",{children:["By Continuing, you agree to Amazon's ",Object(l.jsx)("span",{children:"Conditions of Use"})," and ",Object(l.jsx)("span",{children:"Privacy Notice."})]}),Object(l.jsx)("br",{}),Object(l.jsx)(r.b,{className:"help",href:"#",children:"Need help?"})]})})]})},f=n(12),v=n(151),N=n(9),w=N.a.div(g||(g=Object(f.a)(["\nposition: fixed;\nwidth: 100%;\nleft: 95%;\n@media (max-width:500px){\n    left:86%;\n}\nbottom: 50px;\nheight: 20px;\nfont-size: 3rem;\nz-index: 999;\ncursor: pointer;\ncolor: #232f3e;\n"])));var y=function(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),n=t[0],s=t[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>300?s(!0):e<=300&&s(!1)})),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(w,{children:Object(l.jsx)(v.a,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:n?"inline":"none"}})})})};n(109);var S,I,F,C,A,T,k=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"error-container",children:[Object(l.jsx)("img",{src:"Images/logo1.jpg",alt:"img"}),Object(l.jsxs)("div",{className:"error-text",children:[Object(l.jsx)("h1",{children:"Looking for something?"}),Object(l.jsx)("p",{children:"We're sorry. The Web address you entered is not a functioning page on our site"}),Object(l.jsx)("br",{}),Object(l.jsxs)("h2",{children:["Go to Amazon.in's ",Object(l.jsx)(r.b,{to:"/",children:"Home"})," Page"]})]})]})})},E=(n(305),N.a.div(S||(S=Object(f.a)(["\n  height: 60vh;\n  background-color: #CAD5E2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]))),N.a.h1(I||(I=Object(f.a)(["\n  font-size: 70px;\n  margin-bottom: 20px;\n"]))),N.a.div(F||(F=Object(f.a)(["\n  font-size: 24px;\n  font-weight: 300;\n  margin-bottom: 20px;\n"]))),N.a.div(C||(C=Object(f.a)(["\n  width: 50%;\n  height: 40px;\n  background-color: white;\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid lightgray;\n"]))),N.a.input(A||(A=Object(f.a)(["\n  border: none;\n  flex: 8;\n  padding-left: 20px;\n"]))),N.a.button(T||(T=Object(f.a)(["\n  flex: 1;\n  border: none;\n  background-color: teal;\n  color: white;\n"]))),n(144)),R=n(308),z=n(152),L=(n(221),[{width:1,itemsToShow:1},{width:400,itemsToShow:2},{width:768,itemsToShow:3},{width:1200,itemsToShow:4}]);var M,P,U,D,W,G,B,H=function(){return Object(l.jsxs)("div",{className:"carousel",children:[Object(l.jsx)("h1",{children:"Up to 80% off | Bestselling home furniture"}),Object(l.jsxs)(z.a,{breakPoints:L,children:[Object(l.jsx)("img",{src:"/Images/menu.jpg",className:"slider-img",alt:""}),Object(l.jsx)("img",{src:"/Images/menu1.jpg",alt:""}),Object(l.jsx)("img",{src:"/Images/menu2.jpg",alt:""}),Object(l.jsx)("img",{src:"/Images/menu3.jpg",alt:""}),Object(l.jsx)("img",{src:"/Images/menu4.jpg",alt:""}),Object(l.jsx)("img",{src:"/Images/menu8.jpg",alt:""}),Object(l.jsx)("img",{src:"/Images/menu6.jpg",alt:""}),Object(l.jsx)("img",{src:"/Images/menu7.jpg",alt:""})]})]})},Y=(n(222),N.a.div(M||(M=Object(f.a)(["\n  width: 100%;\n  padding:40px 60px;\n  background:#232f3e;\n  position: relative;\n  bottom:0;\n\n  @media (max-width: 1000px) {\n    padding: 70px 30px;\n  }\n"])))),J=N.a.div(P||(P=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    margin-left: 60px;\n    padding: 0 30px;\n    \n"]))),V=N.a.div(U||(U=Object(f.a)(["\n    color:#fff;\n    display: grid;\n    grid-template-columns: repeat(4,1fr);\n    grid-gap: 10px;\n    \n    @media (max-width: 1000px) {\n    grid-template-columns: repeat(2,1fr);"]))),K=N.a.div(D||(D=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  margin-left: 60px;\n  "]))),X=N.a.div(W||(W=Object(f.a)(["\n  font-size: 18px;\n  color: #eee;\n  margin-bottom: 20px;\n  font-weight: bold;\n  "]))),$=N.a.a(G||(G=Object(f.a)(["\n  color: #fff;\n  margin-bottom: 10px;\n  font-size: 15px;\n  text-decoration: none;\n   \n  &:hover {\n      text-decoration: underline;\n      transition: 200ms ease-in;\n  }\n"])));N.a.div(B||(B=Object(f.a)(["\n  width : 100%;\n  text-align = center;\n  font-size = 1.2rem;\n  justify-content = center;\n  background-color = #37475a;\n   \n"])));var q,Q,Z,_,ee,te,ne,ce,se,ie,ae=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"footer",children:Object(l.jsx)(Y,{style:{color:"#fff"},children:Object(l.jsx)(J,{children:Object(l.jsxs)(V,{children:[Object(l.jsxs)(K,{children:[Object(l.jsx)(X,{children:"Get to Know Us"}),Object(l.jsx)($,{className:"link",href:"#",children:"About Us"}),Object(l.jsx)($,{className:"link",href:"#",children:"Careers"}),Object(l.jsx)($,{href:"#",children:"Press Releases"}),Object(l.jsx)($,{href:"#",children:"Amazon Cares"}),Object(l.jsx)($,{href:"#",children:"Gift a Smile"})]}),Object(l.jsxs)(K,{children:[Object(l.jsx)(X,{children:"Connect with Us"}),Object(l.jsx)($,{href:"#",children:"Facebook"}),Object(l.jsx)($,{href:"#",children:"Twitter"}),Object(l.jsx)($,{href:"#",children:"Instagram"})]}),Object(l.jsxs)(K,{children:[Object(l.jsx)(X,{children:"Make Money with Us"}),Object(l.jsx)($,{href:"#",children:"Sell on Amazon"}),Object(l.jsx)($,{href:"#",children:"Amazon Global Selling"}),Object(l.jsx)($,{href:"#",children:"Become an Affiliate"}),Object(l.jsx)($,{href:"#",children:"Advertise Your Products"}),Object(l.jsx)($,{href:"#",children:"Fulfilment by Amazon"})]}),Object(l.jsxs)(K,{children:[Object(l.jsx)(X,{children:"Let Us Help You"}),Object(l.jsx)($,{href:"#",children:"Your Account"}),Object(l.jsx)($,{href:"#",children:"Returns Centre"}),Object(l.jsx)($,{href:"#",children:"100% Purchase Protection"}),Object(l.jsx)($,{href:"#",children:"Amazon App Download"}),Object(l.jsx)($,{href:"#",children:"Help"})]})]})})})})})},re=n(306),je=n(307),le=[{id:1,img:n.p+"static/media/shoes1.bf9282fd.png",title:"SUMMER SALE",desc:"DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",bg:"f5fafd"},{id:2,img:n.p+"static/media/shoes2.5b8ba2c7.png",title:"AUTUMN COLLECTION",desc:"DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",bg:"fcf1ed"},{id:3,img:n.p+"static/media/shoes3.3c83a17c.png",title:"LOUNGEWEAR LOVE",desc:"DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",bg:"fbf0f4"}],oe=N.a.div(q||(q=Object(f.a)(["\n  width: 100%;\n  height: 70vh;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 30px;\n"]))),de=N.a.div(Q||(Q=Object(f.a)(["\n  width: 50px;\n  height: 50px;\n  background-color: #fff7f7;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: ",";\n  right: ",";\n  margin: auto;\n  cursor: pointer;\n  opacity: 0.7;\n  z-index: 2;\n\n  $:hover { \n    color: #fff;\n    opacity: 1;\n  }\n"])),(function(e){return"left"===e.direction&&"10px"}),(function(e){return"right"===e.direction&&"10px"})),be=N.a.div(Z||(Z=Object(f.a)(["\n  height: 100%;\n  display: flex;\n  transition: all 1.5s ease;\n  transform: translateX(","vw);\n"])),(function(e){return-100*e.slideIndex})),he=N.a.div(_||(_=Object(f.a)(["\n  width: 100vw;\n  height: 80vh;\n  display: flex;\n  align-items: center;\n  background-color: #",";\n"])),(function(e){return e.bg})),xe=N.a.div(ee||(ee=Object(f.a)(["\n  margin: 0 100px;\n  margin-right: 30px;\n  height: 50%;\n  flex: 1;\n"]))),Oe=N.a.img(te||(te=Object(f.a)(["\n  height: 80%;\n  object-fit : cover;\n"]))),me=N.a.div(ne||(ne=Object(f.a)(["\n  flex: 1;\n  padding: 50px;\n"]))),pe=N.a.h1(ce||(ce=Object(f.a)(["\n  font-size: 70px;\n"]))),ge=N.a.p(se||(se=Object(f.a)(["\n  margin: 50px 0px;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 3px;\n"]))),ue=N.a.button(ie||(ie=Object(f.a)(["\n  padding: 10px;\n  font-size: 20px;\n  background-color: transparent;\n  cursor: pointer;\n"]))),fe=function(){var e=Object(c.useState)(0),t=Object(x.a)(e,2),n=t[0],s=t[1],i=function(e){s("left"===e?n>0?n-1:2:n<2?n+1:0)};return Object(l.jsxs)(oe,{children:[Object(l.jsx)(de,{direction:"left",onClick:function(){return i("left")},children:Object(l.jsx)(re.a,{})}),Object(l.jsx)(be,{slideIndex:n,children:le.map((function(e){return Object(l.jsxs)(he,{bg:e.bg,children:[Object(l.jsx)(xe,{children:Object(l.jsx)(Oe,{src:e.img})}),Object(l.jsxs)(me,{children:[Object(l.jsx)(pe,{children:e.title}),Object(l.jsx)(ge,{children:e.desc}),Object(l.jsx)(ue,{children:"SHOW NOW"})]})]},e.id)}))}),Object(l.jsx)(de,{direction:"right",onClick:function(){return i("right")},children:Object(l.jsx)(je.a,{})})]})};var ve=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{style:{width:"100%"},children:[Object(l.jsx)(E.Carousel,{data:[{image:"/Images/screenshot.jpg",alt:""},{image:"/Images/screenshot1.jpg",alt:""},{image:"/Images/screenshot2.jpg",alt:""},{image:"/Images/screenshot4.jpg",alt:""},{image:"/Images/screenshot5.jpg",alt:""}],time:5e3,width:"100%",height:"500px",automatic:!0,slideBackgroundColor:"darkgrey",slideImageFit:"cover",thumbnails:!1,thumbnailWidth:"100px",style:{objectFit:"contain",margin:"px auto",width:"100%",padding:"0 20px"}}),Object(l.jsx)(R.a,{children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("div",{className:"sub-card",children:[Object(l.jsx)("h1",{children:"Up to 70% off | Electronics clearance store"}),Object(l.jsx)("div",{className:"img",children:Object(l.jsx)("img",{src:"/Images/Laptop1.jpg",alt:""})}),Object(l.jsx)(r.b,{href:"#",children:"See More"})]}),Object(l.jsxs)("div",{className:"sub-card",children:[Object(l.jsx)("h1",{children:"Festive latest launches"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"img",children:Object(l.jsx)("img",{src:"/Images/Laptop.jpg",alt:""})}),Object(l.jsx)(r.b,{href:"#",children:"See More"})]}),Object(l.jsxs)("div",{className:"sub-card",children:[Object(l.jsx)("h1",{children:"Revamp your home in style"}),Object(l.jsx)("div",{className:"img",children:Object(l.jsx)("img",{src:"/Images/La.jpg",alt:""})}),Object(l.jsx)(r.b,{href:"#",children:"See More"})]}),Object(l.jsx)("div",{className:"sub-card",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Sign in for your best experience"}),Object(l.jsx)("button",{className:"btn",children:"Sign in securely"})]})})]})}),Object(l.jsx)(fe,{}),Object(l.jsx)("img",{src:"/Images/middle.jpg",alt:"",className:"middle-img"}),Object(l.jsx)(H,{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(R.a,{children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("div",{className:"sub-card",children:[Object(l.jsx)("h1",{children:"Start a hobby in photography"}),Object(l.jsx)("div",{className:"img1",children:Object(l.jsx)("img",{src:"/Images/slider-main3.jpg",alt:""})}),Object(l.jsx)(r.b,{href:"#",children:"See More"})]}),Object(l.jsxs)("div",{className:"sub-card",children:[Object(l.jsx)("h1",{children:"Up to 60% off | Top deals on Stationery supplies"}),Object(l.jsx)("div",{className:"img1",children:Object(l.jsx)("img",{src:"/Images/slider-main2.jpg",alt:""})}),Object(l.jsx)(r.b,{href:"#",children:"See More"})]}),Object(l.jsxs)("div",{className:"sub-card",children:[Object(l.jsx)("h1",{children:"JOIN PRIME today at \u20b9999/year"}),Object(l.jsx)("div",{className:"img1",children:Object(l.jsx)("img",{src:"/Images/slider-main.jpg",alt:""})}),Object(l.jsx)(r.b,{href:"#",children:"See More"})]}),Object(l.jsxs)("div",{className:"sub-card",children:[Object(l.jsx)("h1",{children:"Topmost Collection to make wedding special"}),Object(l.jsx)("div",{className:"img1",children:Object(l.jsx)("img",{src:"/Images/slider-main1.jpg",alt:""})}),Object(l.jsx)(r.b,{href:"#",children:"See More"})]})]})}),Object(l.jsx)("footer",{children:Object(l.jsx)(ae,{})})]})})};n(290);function Ne(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{}),Object(l.jsx)("div",{className:"header",children:Object(l.jsx)(ve,{})})]})}var we=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",children:Object(l.jsx)(Ne,{})}),Object(l.jsx)(j.a,{path:"/auth",exact:!0,component:O}),Object(l.jsx)(j.a,{path:"/add",exact:!0,component:u}),Object(l.jsx)(j.a,{exact:!0,component:k})]}),Object(l.jsx)(y,{})]})};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(we,{})}),document.getElementById("root"))}},[[291,1,2]]]);
//# sourceMappingURL=main.9fd5604c.chunk.js.map