(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(21),r=n.n(a),i=n(4),d=n(5),l=n(10),o=n(26),j=n(1),b=Object(c.createContext)();function h(e){var t=e.children,n=Object(c.useState)(!1),s=Object(o.a)(n,2),a={openMenu:s[0],setOpenMenu:s[1]};return Object(j.jsx)(b.Provider,{value:a,children:t})}var m,p,x,u=n(3),O={xxs:20,xs:30,sm:48,md:64,lg:75},f=function(e){return function(t){return"@media (max-width: ".concat(O[e],"em) {").concat(t,"}")}},g=d.c.div(m||(m=Object(u.a)(["\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    .logo-box{\n        display:flex;\n        padding:1rem 2rem;\n        align-items:center;\n        .logo{\n           height:8rem;\n        }\n        h4{\n            font-size:2.5rem;\n            text-transform: uppercase;\n            padding-left:1rem;\n            color:#C8BFC7;\n            ","\n        }\n    }\n    .menu-box{\n        padding: 0 3.5rem;\n\n        & > div{\n            width: 3.5rem;\n            height: 0.4rem;\n            background-color: #C8BFC7;\n            margin: 0.6rem 0;\n        }\n    }\n"])),f("xs")(p||(p=Object(u.a)(["\n                visibility:hidden            "])))),v=d.c.div(x||(x=Object(u.a)(["\n    text-align:center;\n    text-transform:uppercase;\n    background:White;\n    height:100vh;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n   \n    /* .close-menu{\n        position:absolute;\n        top:0.5rem;\n        right:10rem\n    } */\n"])));function N(){var e=Object(c.useContext)(b),t=e.openMenu,n=e.setOpenMenu,s=function(){n(!1)};return Object(j.jsx)(j.Fragment,{children:t?Object(j.jsxs)(v,{children:[Object(j.jsxs)("h1",{children:[" ",Object(j.jsx)(l.b,{to:"/",onClick:s,children:"Home"})," "]}),Object(j.jsxs)("h1",{children:[" ",Object(j.jsx)(l.b,{to:"/about",onClick:s,children:"About"})," "]}),Object(j.jsxs)("h1",{children:[" ",Object(j.jsx)(l.b,{to:"/projects",onClick:s,children:"Portfolio"})," "]}),Object(j.jsxs)("h1",{children:[" ",Object(j.jsx)(l.b,{to:"/contact",onClick:s,children:"contact"})," "]})]}):Object(j.jsxs)(g,{children:[Object(j.jsxs)("div",{className:"logo-box",children:[Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",className:"logo"}),Object(j.jsx)("h4",{children:"deepthi Ushus"})]}),Object(j.jsxs)("div",{className:"menu-box",onClick:function(){return n(!0)},children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})]})})}var z,A,Z,y,w,P,Y=n.p+"static/media/prof_pic.c065a34e.jpg",J=d.c.div(z||(z=Object(u.a)(["\n .utility{\n   text-align:center;\n }\n  /* background-image:linear-gradient(to right bottom,#402039,#402039); */\n"]))),C=d.c.div(A||(A=Object(u.a)(["\n/* background-image:linear-gradient(to right bottom,#402039,#402039); */\n    /* height:70vh; */\n    padding:3rem;\n    display:flex;\n    background-color:white;  \n    justify-content:center;\n    flex-wrap:",";\n    ","\n    "])),(function(e){return e.wrap}),f("xs")(Z||(Z=Object(u.a)(["\n        font-size: 5rem;\n        letter-spacing:0.8rem;\n        "])))),T=d.c.div(y||(y=Object(u.a)(["  \n   padding:5rem 0 0 5rem;\n    flex:0 0 ","; //if there is a prop lg, take its value else check if there is a prop sm if yes take its value otherwise fall back to the default value of 50%;\n      ","\n    .skills{\n    display:flex;\n    flex-wrap:wrap;\n\n    span{\n      margin:1rem;\n      border: 1px solid black;\n      padding:1rem;\n      border-radius:1rem;\n\n    }\n  }\n  .prof-pic{\n    max-width:100%;\n    align-self:center;\n    \n  }\n  .contact{\n    margin: 2rem auto;\n    padding:1rem;\n    border:none;\n    box-shadow: 0 1rem 2rem gray;\n    border-radius:5px;\n    text-align:center;\n    font-size:2rem;\n  }\n"])),(function(e){var t=e.lg,n=e.sm;return t||n||"50%"}),f("sm")(w||(w=Object(u.a)(["\n        padding:3rem 0 0 3rem;\n        "])))),E=d.c.h2(P||(P=Object(u.a)(["\n    margin:0;\n    display:inline-block;\n    font-size:6rem;\n    background-image: linear-gradient(to right, rgb(48,115,81), rgb(64,32,57));\n    color:transparent;\n    -webkit-background-clip: text;\n    transition:all 0.2s;\n    &:hover{    \n        transform:scale(1.1)\n    }\n"])));function B(){return Object(j.jsxs)(J,{children:[Object(j.jsx)(N,{}),Object(j.jsx)("div",{className:"utility",children:Object(j.jsx)(E,{children:"About"})}),Object(j.jsxs)(C,{children:[Object(j.jsxs)(T,{lg:"70%",children:["I am a hard-working and passionate fullstack developer with an aptitude to create elegant solutions in an effective manner. I am currently studying a two year course on fullstack web developement at Nacakdemin. I have done projects both individually as as a part of the team during the course of my studies.I am so happy to be at the deployment of my new career as a web developer, aspiring to get a great opportunity to implement my skills and deliver amazing results.",Object(j.jsx)("h2",{children:"Skills"}),Object(j.jsxs)("div",{className:"skills",children:[Object(j.jsx)("span",{children:"Javascript"}),Object(j.jsx)("span",{children:"React"}),Object(j.jsx)("span",{children:"Node.js"}),Object(j.jsx)("span",{children:"HTML5"}),Object(j.jsx)("span",{children:"CSS3"}),Object(j.jsx)("span",{children:"Vue Basics"}),Object(j.jsx)("span",{children:"PHP"}),Object(j.jsx)("span",{children:"Sass"}),Object(j.jsx)("span",{children:"Bootstrap"}),Object(j.jsx)("span",{children:"StyledComponents"}),Object(j.jsx)("span",{children:"MaterialUI/React"}),Object(j.jsx)("span",{children:"Vuetify"}),Object(j.jsx)("span",{children:"MongoDB"}),Object(j.jsx)("span",{children:"MySQL"}),Object(j.jsx)("span",{children:"RESTful API"}),Object(j.jsx)("span",{children:"Git/GitHub"}),Object(j.jsx)("span",{children:"Agile Principles"}),Object(j.jsx)("span",{children:"Scrum"})]})]}),Object(j.jsx)(T,{sm:"30%",children:Object(j.jsx)("img",{src:Y,alt:"profile_picture",className:"prof-pic",gradient:!0})})]})]})}var Q=n(16);function W(){return Object(j.jsxs)(J,{children:[Object(j.jsx)(N,{}),Object(j.jsx)("div",{className:"utility",children:Object(j.jsx)(E,{children:"Contact"})}),Object(j.jsx)(C,{children:Object(j.jsxs)(T,{lg:"80%",children:[Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsxs)("h4",{children:[Object(j.jsx)(Q.a,{})," Email"]}),Object(j.jsx)("p",{children:"ushusdeepthi@gmail.com"})]}),Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsxs)("h4",{children:[Object(j.jsx)(Q.c,{})," phone"]}),Object(j.jsx)("p",{children:"0723759999"})]}),Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsxs)("h4",{children:[Object(j.jsx)(Q.b,{})," Location"]}),Object(j.jsx)("p",{children:"Stockholm, Sweden"})]})]})})]})}var S,M,I,L,V,R,X,G,k,q,_=n(15),F=n.p+"static/media/background.5803e610.jpg",H=Object(d.d)(S||(S=Object(u.a)(["\n 0% { \n     transform: translateX(-10rem)\n    }\n 80% {\n     transform: translateX(1rem)\n    }\n 100% {\n     transform: translateX(0)\n    }\n"]))),D=Object(d.d)(M||(M=Object(u.a)(["\n 0% { \n     transform: translateX(10rem)\n    }\n 80% {\n     transform: translateX(-1rem)\n    }\n 100% {\n     transform: translateX(0)\n    }\n"]))),U=Object(d.d)(I||(I=Object(u.a)(["\n 0% { \n     opacity:0;\n     transform: translateY(30rem)\n    }\n 80% {\n     opacity:1;\n     transform: translateY(-1rem)\n    }\n 100% {\n     opacity:1\n     transform: translateY(0)\n    }\n"]))),K=d.c.header(L||(L=Object(u.a)(["\n    position:relative;\n    height:100vh;\n    background-image: linear-gradient(rgba(64,32,57,0.8),rgba(64,32,57,0.8)),url(",");\n    background-size: cover;\n    background-position: center;\n\n    .title-box{\n        color:#C8BFC7;\n        position: absolute;\n        width:90%;\n        top:50%;\n        left:50%;\n        transform:translate(-50%,-50%);\n        color:#C8BFC7;\n        text-align:center;\n    }\n    .title{\n        margin-bottom:6rem;\n        &--main{\n            font-weight:600;\n            display:block;\n            font-size:6rem;\n            letter-spacing:1.1rem;\n            animation: "," 1s ease-out;\n\n            ","\n            ","                     \n        }\n\n        &--sub{\n            display:block;\n            font-size:3rem;\n            letter-spacing:0.8rem;\n            text-transform:uppercase;\n            margin-top:1rem;\n            animation: "," 1s ease-out;\n\n            ","       \n            ","       \n            ","        \n        }\n\n    }  \n    .social{\n        animation: "," 1s ease-out 1s;\n        animation-fill-mode: backwards;\n    }\n    .social a{\n        \n        &:link,&:visited{\n            font-size:3rem;\n            margin: 0 2rem;\n            color:#C8BFC7;\n        }\n        &:hover{\n            color:#fff;\n        }\n    }   \n"])),F,H,f("sm")(V||(V=Object(u.a)(["\n                font-size: 5rem;\n                letter-spacing:0.75rem;\n                "]))),f("xs")(R||(R=Object(u.a)(["\n                font-size: 3.5rem;\n                letter-spacing:0.5rem;\n            "]))),D,f("sm")(X||(X=Object(u.a)(["\n                font-size: 2.75rem;\n                letter-spacing:0.5rem;\n            "]))),f("xs")(G||(G=Object(u.a)(["\n                font-size: 2.3rem;\n                letter-spacing:0.2rem;\n            "]))),f("xxs")(k||(k=Object(u.a)(["\n                font-size: 2rem;\n                letter-spacing:0.6rem;\n            "]))),U);function $(){var e=Object(c.useContext)(b),t=e.openMenu;e.setOpenMenu;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(K,{children:[Object(j.jsx)(N,{}),!t&&Object(j.jsxs)("div",{className:"title-box",children:[Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("span",{className:"title--main",children:"Deepthi Ushus"}),Object(j.jsx)("span",{className:"title--sub",children:"Fullstack developer"})]}),Object(j.jsxs)("div",{className:"social",children:[Object(j.jsx)("a",{href:"",children:Object(j.jsx)(_.a,{})}),Object(j.jsx)("a",{href:"",children:Object(j.jsx)(_.b,{})}),Object(j.jsx)("a",{href:"",children:Object(j.jsx)(_.d,{})}),Object(j.jsx)("a",{href:"",children:Object(j.jsx)(_.c,{})})]})]})]})})}var ee=d.c.div(q||(q=Object(u.a)(["\n    margin:2rem;\n    flex :0 1 26vw;\n    perspective:150rem;\n    -moz-perspective: 150rem;\n    position:relative;    \n    height:45rem;\n    .card__side{\n        border-radius: 3px;\n        width:100%;\n        height:45rem;\n        position:absolute;\n        top:0;\n        left:0;\n        backface-visibility: hidden;\n        \n        box-shadow: 0 1rem 2rem rgba(0,0,0,0.5);\n        transition:all 1s ease;\n\n        &--front{\n            background-color: #fff;        \n        }\n        &--back{\n            background-image: linear-gradient(to right bottom, rgb(48,115,81), rgb(64,32,57));\n            transform:rotateY(180deg);\n            color:#C8BFC7;\n            padding:2rem;\n        }\n    }\n    &:hover .card__side--front{\n        transform:rotateY(180deg);\n    }\n    &:hover .card__side--back {\n        transform: rotateY(0);\n    }\n    .card__img{\n        max-width:100%;\n        /* height:100%; */\n        border-radius:5px;\n    }\n    .card__heading{\n        text-align:center;\n    }\n    .card__action{\n        color:#C8BFC7;\n        text-decoration: none;\n        text-align:center;\n    }\n"]))),te=n.p+"static/media/quiz.21844262.jpg",ne=n.p+"static/media/star-wars.6e627db0.jpg",ce=n.p+"static/media/yatzy.7d6cf7d1.jpg",se=n.p+"static/media/crm.199760d8.jpg",ae=n.p+"static/media/acme.4e85bc9b.jpg",re=n.p+"static/media/webshop.4ac42604.jpg";function ie(){return Object(j.jsxs)(J,{children:[Object(j.jsx)(N,{}),Object(j.jsx)("div",{className:"utility",children:Object(j.jsx)(E,{children:"Portfolio"})}),Object(j.jsxs)(C,{wrap:"wrap",children:[Object(j.jsxs)(ee,{onClick:function(){return window.open("https://ushusdeepthi.github.io/Project/","_blank")},children:[Object(j.jsx)("div",{className:"card__side card__side--front",children:Object(j.jsx)("img",{src:te,alt:"quiz_project",className:"card__img"})}),Object(j.jsxs)("div",{className:"card__side card__side--back",children:[Object(j.jsx)("h1",{className:"card__heading",children:"Quiz App"}),Object(j.jsx)("p",{className:"card__text",children:"The project includes the developement of a quiz app using object oriented javascript.The questions are fetched from an external api and rendered one by one.The score of the game is provided at the end."}),Object(j.jsxs)("ul",{className:"card__list",children:[Object(j.jsx)("li",{children:"Javascript"}),Object(j.jsx)("li",{children:"HTML"}),Object(j.jsx)("li",{children:"CSS"})]}),Object(j.jsx)("a",{href:"https://github.com/ushusdeepthi/Project",className:"card__action card__action--code",target:"_blank",children:"source code"}),Object(j.jsx)("a",{href:"https://ushusdeepthi.github.io/Project/",className:"card__action card__action-app",children:"app"})]})]}),Object(j.jsxs)(ee,{children:[Object(j.jsx)("div",{className:"card__side card__side--front",children:Object(j.jsx)("img",{src:ne,alt:"star-wars",className:"card__img"})}),Object(j.jsxs)("div",{className:"card__side card__side--back",children:[Object(j.jsx)("h1",{className:"card__heading",children:"StarWars App"}),Object(j.jsx)("p",{className:"card__text",children:"This is React App using react router for navigation and styled components and css for styling. The Character details are fetched from swapi api and displayed on the screen"}),Object(j.jsxs)("ul",{className:"card__list",children:[Object(j.jsx)("li",{children:"React, jsx, react router"}),Object(j.jsx)("li",{children:"Styled Compoenents"}),Object(j.jsx)("li",{children:"CSS"})]}),Object(j.jsx)("a",{href:"https://github.com/ushusdeepthi/Project",className:"card__action card__action--code",target:"_blank",children:"source code"}),Object(j.jsx)("a",{href:"https://ushusdeepthi.github.io/Project/",className:"card__action card__action-app",children:"app"})]})]}),Object(j.jsxs)(ee,{children:[Object(j.jsx)("div",{className:"card__side card__side--front",children:Object(j.jsx)("img",{src:ce,alt:"Yatzy game",className:"card__img"})}),Object(j.jsxs)("div",{className:"card__side card__side--back",children:[Object(j.jsx)("h1",{className:"card__heading",children:"Quiz App"}),Object(j.jsx)("p",{className:"card__text",children:"The project includes the developement of a quiz app using object oriented javascript.The questions are fetched from an external api and rendered one by one.The score of the game is provided at the end."}),Object(j.jsxs)("ul",{className:"card__list",children:[Object(j.jsx)("li",{children:"Javascript"}),Object(j.jsx)("li",{children:"HTML"}),Object(j.jsx)("li",{children:"CSS"})]}),Object(j.jsx)("a",{href:"https://github.com/ushusdeepthi/Project",className:"card__action card__action--code",target:"_blank",children:"source code"}),Object(j.jsx)("a",{href:"https://ushusdeepthi.github.io/Project/",className:"card__action card__action-app",children:"app"})]})]}),Object(j.jsxs)(ee,{children:[Object(j.jsx)("div",{className:"card__side card__side--front",children:Object(j.jsx)("img",{src:se,alt:"React-CRM",className:"card__img"})}),Object(j.jsxs)("div",{className:"card__side card__side--back",children:[Object(j.jsx)("h1",{className:"card__heading",children:"Quiz App"}),Object(j.jsx)("p",{className:"card__text",children:"The project includes the developement of a quiz app using object oriented javascript.The questions are fetched from an external api and rendered one by one.The score of the game is provided at the end."}),Object(j.jsxs)("ul",{className:"card__list",children:[Object(j.jsx)("li",{children:"Javascript"}),Object(j.jsx)("li",{children:"HTML"}),Object(j.jsx)("li",{children:"CSS"})]}),Object(j.jsx)("a",{href:"https://github.com/ushusdeepthi/Project",className:"card__action card__action--code",target:"_blank",children:"source code"}),Object(j.jsx)("a",{href:"https://ushusdeepthi.github.io/Project/",className:"card__action card__action-app",children:"app"})]})]}),Object(j.jsxs)(ee,{children:[Object(j.jsx)("div",{className:"card__side card__side--front",children:Object(j.jsx)("img",{src:ae,alt:"ACME Events",className:"card__img"})}),Object(j.jsxs)("div",{className:"card__side card__side--back",children:[Object(j.jsx)("h1",{className:"card__heading",children:"Quiz App"}),Object(j.jsx)("p",{className:"card__text",children:"The project includes the developement of a quiz app using object oriented javascript.The questions are fetched from an external api and rendered one by one.The score of the game is provided at the end."}),Object(j.jsxs)("ul",{className:"card__list",children:[Object(j.jsx)("li",{children:"Javascript"}),Object(j.jsx)("li",{children:"HTML"}),Object(j.jsx)("li",{children:"CSS"})]}),Object(j.jsx)("a",{href:"https://github.com/ushusdeepthi/Project",className:"card__action card__action--code",target:"_blank",children:"source code"}),Object(j.jsx)("a",{href:"https://ushusdeepthi.github.io/Project/",className:"card__action card__action-app",children:"app"})]})]}),Object(j.jsxs)(ee,{children:[Object(j.jsx)("div",{className:"card__side card__side--front",children:Object(j.jsx)("img",{src:re,alt:"Webshop",className:"card__img"})}),Object(j.jsxs)("div",{className:"card__side card__side--back",children:[Object(j.jsx)("h1",{className:"card__heading",children:"Quiz App"}),Object(j.jsx)("p",{className:"card__text",children:"The project includes the developement of a quiz app using object oriented javascript.The questions are fetched from an external api and rendered one by one.The score of the game is provided at the end."}),Object(j.jsxs)("ul",{className:"card__list",children:[Object(j.jsx)("li",{children:"Javascript"}),Object(j.jsx)("li",{children:"HTML"}),Object(j.jsx)("li",{children:"CSS"})]}),Object(j.jsx)("a",{href:"https://github.com/ushusdeepthi/Project",className:"card__action card__action--code",target:"_blank",children:"source code"}),Object(j.jsx)("a",{href:"https://ushusdeepthi.github.io/Project/",className:"card__action card__action-app",children:"app"})]})]}),Object(j.jsxs)(ee,{children:[Object(j.jsx)("div",{className:"card__side card__side--front",children:Object(j.jsx)("img",{src:re,alt:"Webshop",className:"card__img"})}),Object(j.jsxs)("div",{className:"card__side card__side--back",children:[Object(j.jsx)("h1",{className:"card__heading",children:"Quiz App"}),Object(j.jsx)("p",{className:"card__text",children:"The project includes the developement of a quiz app using object oriented javascript.The questions are fetched from an external api and rendered one by one.The score of the game is provided at the end."}),Object(j.jsxs)("ul",{className:"card__list",children:[Object(j.jsx)("li",{children:"Javascript"}),Object(j.jsx)("li",{children:"HTML"}),Object(j.jsx)("li",{children:"CSS"})]}),Object(j.jsx)("a",{href:"https://github.com/ushusdeepthi/Project",className:"card__action card__action--code",target:"_blank",children:"source code"}),Object(j.jsx)("a",{href:"https://ushusdeepthi.github.io/Project/",className:"card__action card__action-app",children:"app"})]})]})]})]})}var de,le,oe={colors:{primary:"#402039",neutral:"#C8BFC7",secondary:"#307351"}},je=Object(d.b)(de||(de=Object(u.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&family=Roboto+Slab:wght@200;600;900&display=swap');\n*,*::after,*::before{\n    box-sizing: inherit;\n}\nhtml{\n    font-size:62.5%;\n    /* @media (max-width: 56.25em) {\n        //900px\n        @content;\n    } */\n    //<900px\n    ","\n    //<600px\n\n      \n    \n}\nbody{\n    box-sizing: border-box;\n    font-family: 'Montserrat', sans-serif;\n    line-height:1.7;\n    font-size:1.6rem;\n}\n"])),f("md")(le||(le=Object(u.a)(["\n    font-size: 56.25%;\n    "]))));function be(){return Object(j.jsxs)(d.a,{theme:oe,children:[Object(j.jsx)(je,{}),Object(j.jsx)(h,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/about",children:Object(j.jsx)(B,{})}),Object(j.jsx)(i.a,{path:"/contact",children:Object(j.jsx)(W,{})}),Object(j.jsx)(i.a,{path:"/projects",children:Object(j.jsx)(ie,{})}),Object(j.jsx)(i.a,{path:"/",children:Object(j.jsx)($,{})})]})})]})}r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(l.a,{children:Object(j.jsx)(be,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.05f3a79d.chunk.js.map