(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{269:function(e,t,n){e.exports=n.p+"static/media/laugh.ada2c653.png"},290:function(e,t,n){e.exports=n(555)},554:function(e,t,n){},555:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(53),c=n.n(o),l=n(20),u=(n(295),n(34)),i=Object(u.a)(),s=n(32),p=n(573),m=n(569),E=function(){return r.a.createElement(p.a,{color:"green",inverted:!0,stackable:!0},r.a.createElement(s.a,{to:"/"},r.a.createElement(p.a.Item,{header:!0},"Jokes")),r.a.createElement(s.a,{to:"/groups"},r.a.createElement(p.a.Item,null,"Pick A Group")),r.a.createElement(m.a,{item:!0},r.a.createElement(m.a.Menu,null,r.a.createElement(m.a.Item,null,r.a.createElement(s.a,{to:"/new",className:"dropdownLink"},"Create A Group")),r.a.createElement(m.a.Item,null,r.a.createElement(s.a,{to:"/all",className:"dropdownLink"},"All Jokes")),r.a.createElement(m.a.Item,null,r.a.createElement(s.a,{to:"/collections",className:"dropdownLink"},"Collections")))))},d=n(562),f=n(571),h=n(572),O=n(45),k=n(46),j=n(48),b=n(47),g=n(49),C=n(22),v=n(576),y=n(51),G=n.n(y),J={method:"GET",headers:{"Content-Type":"application/json","x-rapidapi-host":"joke3.p.rapidapi.com","x-rapidapi-key":"c3c1143e7bmshff008c0cd95d032p1752b3jsn6d33464deb05",useQueryString:!0}};function _(){return function(e){G()("https://jokesproject.herokuapp.com/api/jokes").then(function(e){return e.json()}).then(function(t){return e({type:"FETCH_JOKES",payload:t})})}}var T=function(e){return function(t){t({type:"JOKE_SELECTED",payload:e})}},w=function(e){function t(){return Object(O.a)(this,t),Object(j.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchRandomJoke()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,function(){if(e.props.jokeOfDay)return r.a.createElement(d.a,{textAlign:"center"},r.a.createElement(v.a,{as:"h2"},'"',e.props.jokeOfDay.content,'"'))}())}}]),t}(a.Component),S=Object(C.b)(function(e){return{jokeOfDay:e.jokes.jokeOfDay}},{fetchRandomJoke:function(){return function(e){G()("https://joke3.p.rapidapi.com/v1/joke",J).then(function(e){return e.json()}).then(function(t){e({type:"FETCH_JOKE_OF_THE_DAY",payload:t})})}}})(w),D=n(269),N=n.n(D),R=function(){return r.a.createElement("div",null,r.a.createElement(v.a,{as:"h2",icon:!0,textAlign:"center"},r.a.createElement("img",{src:N.a,alt:"laugh",className:"largeLaugh"})))},A=function(){return r.a.createElement(d.a,{className:"extraContent"},r.a.createElement(R,null),r.a.createElement(f.a,{floating:!0},r.a.createElement(S,null)),r.a.createElement(h.a,{as:s.a,to:"/groups",color:"green"},"View All Groups!"))},x=function(){return function(e){return e({type:"LOADING_GROUPS"}),G()("https://jokesproject.herokuapp.com/api/groups").then(function(e){return e.json()}).then(function(t){return console.log("hit",t),e({type:"FETCH_GROUPS",payload:t})})}},L=function(e){console.log(e);var t={method:"GET",headers:{"Content-Type":"application/json"}};return function(n){G()("https://jokesproject.herokuapp.com/api/groups/".concat(e),t).then(function(e){return e.json()}).then(function(e){return n({type:"SET_GROUP",payload:e})})}},P=function(e){return function(t){G()("https://jokesproject.herokuapp.com/api/groups/"+e.id,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(function(n){return t({type:"DELETE_GROUP",payload:e})})}},I=function(e,t){var n=t.id,a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({joke:e})};return function(e){G()("https://jokesproject.herokuapp.com/api/groups/".concat(n,"/add_to_collections"),a).then(function(e){return e.json()}).then(function(t){return e({type:"ADD_TO_COLLECTIONS",payload:t})})}},F=function(e,t){var n=t.id,a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({joke:e})};return function(e){G()("https://jokesproject.herokuapp.com/api/groups/".concat(n,"/remove_from_collections"),a).then(function(e){return e.json()}).then(function(t){return e({type:"REMOVE_FROM_COLLECTIONS",payload:t})})}},U=n(566),H=n(564),M=n(565),K=Object(H.a)({form:"GroupForm",validate:function(e){var t={};return e.title||(t.title="You must enter a title"),e.description||(t.description="You must enter a description"),t}})(function(e){var t=function(e){var t=e.input,n=e.label,a=e.meta,o="field ".concat(a.error&&a.touched?"error":"");return r.a.createElement("div",{className:o},r.a.createElement("label",null,n),r.a.createElement("input",Object.assign({},t,{autoComplete:"off"})),r.a.createElement("div",null,function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}(a)))};return r.a.createElement(d.a,null,r.a.createElement(M.a,{onSubmit:e.handleSubmit(function(t){console.log("A"),e.onSubmit(t),console.log("B"),alert("Group created"),i.push("/")})},r.a.createElement(U.a,{name:"title",component:t,label:"Enter title: "}),r.a.createElement(U.a,{name:"description",component:t,label:"Enter descripiton: "}),r.a.createElement(h.a,{color:"green"},"Submit")))}),Y=Object(C.b)(null,{createGroup:function(e){console.log("C");var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:e})};return function(e){G()("https://jokesproject.herokuapp.com/api/groups",t).then(function(e){return e.json()}).then(function(t){console.log("D"),e({type:"CREATE_GROUP",payload:t})})}}})(function(e){return r.a.createElement(d.a,null,r.a.createElement(v.a,null,"Create a Group"),r.a.createElement(K,{onSubmit:function(t){e.createGroup(t)}}))}),V=n(563),B=n(17),W=n(83),X=n(578),q=n(570),Q=n(568),$=n(577),z=n(567),Z=Object(C.b)(function(e){return{currentGroup:e.group.currentGroup,selectedJoke:e.jokes.selectedJoke}},function(e){return Object(B.b)({addJokeToGroupCollections:I},e)})(function(e){var t=function(){e.addJokeToGroupCollections(e.selectedJoke,e.currentGroup),i.push("/collections")};return r.a.createElement("div",null,e.selectedJoke?r.a.createElement($.a,{textAlign:"center"},r.a.createElement(z.a,{key:e.selectedJoke.id},r.a.createElement(z.a.Content,null,r.a.createElement(z.a.Header,{as:"h3"},e.selectedJoke.content),r.a.createElement("br",null),r.a.createElement(Q.a,{trigger:r.a.createElement(h.a,{basic:!0,color:"green",onClick:t,content:"Add to Collection"}),content:"Added!",on:"click",position:"top right"})))):null)}),ee=function(e){function t(){return Object(O.a)(this,t),Object(j.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchJokes()}},{key:"render",value:function(){var e=this;return this.props.allJokes?r.a.createElement("div",null,r.a.createElement(v.a,{as:"h2"},r.a.createElement(W.a,{name:"group alternate"}),r.a.createElement(v.a.Content,null,"Available Jokes")),r.a.createElement(X.a,null,r.a.createElement(X.a.Row,{columns:3},this.props.allJokes.map(function(t,n){return r.a.createElement(X.a.Column,{className:"column"},r.a.createElement(q.a.Group,null,r.a.createElement(q.a,{className:"jokeCard"},r.a.createElement(q.a.Content,null,r.a.createElement(q.a.Description,null,t.content)),e.props.currentGroup&&r.a.createElement(q.a.Content,{extra:!0,className:"extraContent"},r.a.createElement(Q.a,{trigger:r.a.createElement(h.a,{color:"green",onClick:function(){return e.props.selectJoke(t)},content:"View Joke"}),content:r.a.createElement(Z,null),on:"click",position:"top right"})))))}))),r.a.createElement("div",null,"Please select a group first to add a joke in your collection.")):r.a.createElement("div",null,"No jokes available")}}]),t}(a.Component),te=Object(C.b)(function(e){return{currentGroup:e.group.currentGroup,allJokes:e.jokes.allJokes}},function(e){return Object(B.b)({fetchJokes:_,selectJoke:T},e)})(ee),ne=function(e){return r.a.createElement(d.a,{style:{marginTop:"30px"}},r.a.createElement(R,null),r.a.createElement(V.a,null),r.a.createElement(te,null))},ae=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(j.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={count:0},n.handleClick=function(){n.setState(function(e){return{count:e.count+1}})},n}return Object(g.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{as:"div",labelPosition:"right"},r.a.createElement(h.a,{color:"red",content:"Upvote",icon:"thumbs up",label:{basic:!0,color:"red",pointing:"left",content:this.state.count},onClick:this.handleClick}))}}]),t}(a.Component),re=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(j.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={count:0},n.handleClick=function(){n.setState(function(e){return{count:e.count+1}})},n}return Object(g.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{as:"div",labelPosition:"right"},r.a.createElement(h.a,{color:"blue",content:"Downvote",icon:"thumbs down",label:{basic:!0,color:"blue",pointing:"left",content:this.state.count},onClick:this.handleClick}))}}]),t}(a.Component),oe=Object(C.b)(function(e){return{currentGroup:e.group.currentGroup}},function(e){return Object(B.b)({removeJokeFromGroupCollections:F},e)})(function(e){return e.currentGroup?r.a.createElement(d.a,null,r.a.createElement(v.a,{as:"h2"},r.a.createElement(W.a,{name:"group alternate"}),r.a.createElement(v.a.Content,null,'You are in Your "',e.currentGroup.title,'" Group')),r.a.createElement(X.a,null,r.a.createElement(X.a.Row,{columns:2},e.currentGroup.collections.map(function(t,n){return r.a.createElement(X.a.Column,{className:"column"},r.a.createElement(q.a,{key:t.id,className:"collectionJokeCard"},r.a.createElement(q.a.Content,null,r.a.createElement(q.a.Description,{className:"collectionJokeDescription"},t.content)),r.a.createElement(q.a.Content,{extra:!0,className:"extraContent"},r.a.createElement(h.a.Group,null,r.a.createElement(ae,null),r.a.createElement(re,null),r.a.createElement(h.a,{onClick:function(){return e.removeJokeFromGroupCollections(t,e.currentGroup)}},"Remove Joke")))))})))):r.a.createElement("div",null,"You must select a group first!")}),ce=function(){return r.a.createElement(d.a,{style:{marginTop:"30px"}},r.a.createElement(R,null),r.a.createElement(V.a,null),r.a.createElement(X.a,null,r.a.createElement(X.a.Column,null,r.a.createElement(oe,null))))},le=function(e){function t(){var e,n;Object(O.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(j.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(e){n.props.deleteGroup(n.props.currentGroup),alert("Group deleted!"),i.push("/")},n}return Object(g.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchGroups()}},{key:"handleChange",value:function(e){this.props.setGroup(e.target.value)}},{key:"render",value:function(){var e=this,t=this.props.allGroups.map(function(e,t){return r.a.createElement("option",{value:e.id,key:e.id,id:e.id},e.title)});return r.a.createElement("div",null,r.a.createElement(X.a,{centered:!0},r.a.createElement(X.a.Row,null,r.a.createElement(X.a.Column,{width:8},r.a.createElement("div",{className:"ui centered card"},r.a.createElement("select",{onChange:function(t){return e.handleChange(t)}},r.a.createElement("option",{value:""},"Select a Group"),t)))),r.a.createElement(V.a,null),r.a.createElement(X.a.Row,null,r.a.createElement(X.a.Column,{width:12},r.a.createElement("div",null,function(){if(e.props.currentGroup){var t=e.props.currentGroup;return r.a.createElement(q.a,{fluid:!0,className:"groupDetails"},r.a.createElement(q.a.Content,null,r.a.createElement(q.a.Header,{as:"h2",textAlign:"center"},t.title,r.a.createElement(q.a.Meta,{content:t.description})),r.a.createElement(q.a.Content,{className:"extraContent"},r.a.createElement(h.a.Group,null,r.a.createElement(h.a,{as:s.a,to:"/all",color:"violet"},"Add Jokes "),r.a.createElement(h.a,{as:s.a,to:"/collections",color:"green"},"Collections"),r.a.createElement(h.a,{onClick:function(){return e.onClick()},color:"red"},"Delete Group")))))}}()),r.a.createElement("div",{className:"extraContent"},r.a.createElement(h.a.Group,null,r.a.createElement(h.a,{as:s.a,to:"/all",color:"green"},"All Jokes"),r.a.createElement(h.a,{as:s.a,to:"/new",color:"green"},"Create a Group")))))))}}]),t}(a.Component),ue=Object(C.b)(function(e){return{allGroups:e.group.allGroups,currentGroup:e.group.currentGroup}},function(e){return Object(B.b)({deleteGroup:P,fetchGroups:x,setGroup:L},e)})(le),ie=function(){return r.a.createElement(d.a,null,r.a.createElement(R,null),r.a.createElement(ue,null))},se=function(){return r.a.createElement(l.b,{history:i},r.a.createElement(E,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:A}),r.a.createElement(l.a,{exact:!0,path:"/new",component:Y}),r.a.createElement(l.a,{exact:!0,path:"/groups",component:ie}),r.a.createElement(l.a,{exact:!0,path:"/all",component:ne}),r.a.createElement(l.a,{exact:!0,path:"/collections",component:ce})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=n(277),me=n(574),Ee=n(30),de={loading:!1,allGroups:[],currentGroup:null};var fe={loading:!1,selectedJoke:null,jokeOfDay:null,allJokes:[]};var he=Object(B.c)({group:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_GROUPS":return Object(Ee.a)({},e,{loading:!0});case"CREATE_GROUP":return Object(Ee.a)({},e,{group:t.payload});case"FETCH_GROUPS":return Object(Ee.a)({},e,{loading:!1,allGroups:t.payload});case"DELETE_GROUP":return Object(Ee.a)({},e,{currentGroup:null,loading:!1});case"RETRIEVING_SELECTED_GROUP":return Object(Ee.a)({},e,{loading:!0});case"SET_GROUP":return Object(Ee.a)({},e,{currentGroup:e.allGroups.find(function(e){return e.id===t.payload.id})});case"ADD_TO_COLLECTIONS":case"REMOVE_FROM_COLLECTIONS":return Object(Ee.a)({},e,{currentGroup:Object(Ee.a)({},e.currentGroup,{collections:t.payload})});default:return e}},form:me.a,jokes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_JOKE_OF_THE_DAY":return Object(Ee.a)({},e,{loading:!1,jokeOfDay:t.payload});case"LOADING_JOKES":return Object(Ee.a)({},e,{loading:!0});case"FETCH_JOKES":return Object(Ee.a)({},e,{loading:!1,allJokes:t.payload});case"JOKE_SELECTED":return Object(Ee.a)({},e,{loading:!1,selectedJoke:t.payload});default:return e}}}),Oe=(n(554),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d),ke=Object(B.e)(he,Oe(Object(B.a)(pe.a)));c.a.render(r.a.createElement(C.a,{store:ke},r.a.createElement(se,null)),document.querySelector("#root"));t.default=ke;"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[290,1,2]]]);
//# sourceMappingURL=main.cd9a245b.chunk.js.map