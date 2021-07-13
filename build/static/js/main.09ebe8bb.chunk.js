(this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]=this["webpackJsonpsd-0x-block14-project-movie-card-library-crud"]||[]).push([[0],{27:function(e,t,n){e.exports=n(44)},32:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(23),o=n.n(r),c=(n(32),n(3)),l=n(4),u=n(6),s=n(5),m=n(13),h=n(1),v=n(7),d=n.n(v),p=n(12),f=(n(34),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.movie,t=e.title,n=e.storyline,a=e.id,r=e.imagePath;return i.a.createElement("div",{"data-testid":"movie-card",className:"movie-card"},i.a.createElement("h1",null,t),i.a.createElement("h4",null,n),i.a.createElement("img",{src:r,alt:t}),i.a.createElement("br",null),i.a.createElement(m.b,{to:"/movies/".concat(a)},"VER DETALHES"))}}]),n}(i.a.Component)),b=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,"Carregando...")}}]),n}(a.Component),g=n(26),y=n(14),E=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(E));var O=function(){return JSON.parse(localStorage.getItem("movies"))},j=function(e){return localStorage.setItem("movies",JSON.stringify(e))},k=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},S=function(e){var t=O().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){k(t)(e)}))},w=function(e){return new Promise((function(t){var n=O().map((function(t){return t.id===parseInt(e.id,10)?Object(y.a)(Object(y.a)({},t),e):t}));j(n),k("OK")(t)}))},I=function(e){return new Promise((function(t){var n=O(),a=n[n.length-1].id+1,i=Object(y.a)(Object(y.a)({},e),{},{id:a});n=[].concat(Object(g.a)(n),[i]),j(n),k("OK")(t)}))},M=function(e){var t=O();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),j(t),new Promise((function(e){k({status:"OK"})(e)}))},_=(n(40),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={loading:!0,movies:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"fetchMovies",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=O();k(t)(e)}));case 2:t=e.sent,this.setState({loading:!1,movies:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.loading;return n?i.a.createElement(b,null):n?void 0:i.a.createElement("div",{"data-testid":"movie-list",className:"movie-list"},i.a.createElement(m.b,{to:"/movies/new"},"ADICIONAR CART\xc3O"),t.map((function(e){return i.a.createElement(f,{key:e.title,movie:e})})))}}]),n}(a.Component)),x=n(10),C=(n(41),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={loading:!0,movie:{}},a.fetchMovie=a.fetchMovie.bind(Object(x.a)(a)),a.delMovie=a.delMovie.bind(Object(x.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"fetchMovie",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,S(t);case 3:n=e.sent,this.setState({loading:!1,movie:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delMovie",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,M(t);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.movie,n=e.loading,a=t.title,r=t.storyline,o=t.imagePath,c=t.genre,l=t.rating,u=t.subtitle,s=t.id;return n?i.a.createElement(b,null):n?void 0:i.a.createElement("div",{"data-testid":"movie-details",className:"movie-details"},i.a.createElement("img",{alt:"Movie Cover",src:"../".concat(o)}),i.a.createElement("p",null,"Title: ".concat(a)),i.a.createElement("p",null,"Subtitle: ".concat(u)),i.a.createElement("p",null,"Storyline: ".concat(r)),i.a.createElement("p",null,"Genre: ".concat(c)),i.a.createElement("p",null,"Rating: ".concat(l)),i.a.createElement("section",{className:"movie-options"},i.a.createElement(m.b,{to:"/"},"VOLTAR  "),i.a.createElement(m.b,{to:"/movies/".concat(s,"/edit")},"EDITAR  "),i.a.createElement(m.b,{to:"/",onClick:this.delMovie},"DELETAR ")))}}]),n}(a.Component)),P=n(17),A=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state=Object(y.a)({},e.movie),a.handleSubmit=a.handleSubmit.bind(Object(x.a)(a)),a}return Object(l.a)(n,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(P.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return i.a.createElement("label",{htmlFor:"movie_title"},"T\xedtulo",i.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}}))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return i.a.createElement("label",{htmlFor:"movie_subtitle"},"Subt\xedtulo",i.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}}))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return i.a.createElement("div",{className:"row"},i.a.createElement("label",{htmlFor:"movie_image"},"Imagem",i.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}})))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return i.a.createElement("label",{htmlFor:"movie_storyline"},"Sinopse",i.a.createElement("textarea",{id:"movie_storyline",value:t,placeholder:"Sinopse",onChange:function(t){return e.updateMovie("storyline",t.target.value)}}))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return i.a.createElement("label",{htmlFor:"movie_genre"},"G\xeanero",i.a.createElement("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},i.a.createElement("option",{value:"action"},"A\xe7\xe3o"),i.a.createElement("option",{value:"comedy"},"Com\xe9dia"),i.a.createElement("option",{value:"thriller"},"Suspense"),i.a.createElement("option",{value:"fantasy"},"Fantasia")))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return i.a.createElement("label",{htmlFor:"movie_rating"},"Avalia\xe7\xe3o",i.a.createElement("input",{placeholder:"Your ranking",id:"movie_rating",type:"number",step:1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}}))}},{key:"renderSubmitButton",value:function(){return i.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit")}},{key:"render",value:function(){return i.a.createElement("form",{className:"new-movie-form"},this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton())}}]),n}(i.a.Component);A.defaultProps={movie:{}};var F=A,N=(n(42),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(x.a)(a)),a}return Object(l.a)(n,[{key:"handleSubmit",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.history,e.next=3,I(t);case 3:n.push("/");case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"new-movie",className:"new-movie-container"},i.a.createElement(F,{onSubmit:this.handleSubmit}))}}]),n}(a.Component)),R=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={loading:!0,movie:{}},a.editMovie=a.editMovie.bind(Object(x.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(x.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.editMovie()}},{key:"handleSubmit",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.history,e.next=3,w(t);case 3:n.push("/");case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"editMovie",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,S(t);case 3:n=e.sent,this.setState({loading:!1,movie:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.movie;return t?i.a.createElement(b,null):t?void 0:i.a.createElement("div",{"data-testid":"edit-movie"},i.a.createElement(F,{movie:n,onSubmit:this.handleSubmit}))}}]),n}(a.Component),T=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),n}(a.Component),D=(n(43),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement(h.c,null,i.a.createElement(h.a,{exact:!0,path:"/",component:_}),i.a.createElement(h.a,{exact:!0,path:"/movies/new",component:N}),i.a.createElement(h.a,{exact:!0,path:"/movies/:id",component:C}),i.a.createElement(h.a,{exact:!0,path:"/movies/:id/edit",component:R}),i.a.createElement(h.a,{component:T})))}}]),n}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.09ebe8bb.chunk.js.map