(this.webpackJsonpblogeme=this.webpackJsonpblogeme||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},319:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(87),o=n.n(c),l=(n(95),n(10)),s=n(11),i=n(13),u=n(12),m=n(7),h=(n(53),n(21)),p=(n(96),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=r.a.createElement(h.b,{to:"/login"},r.a.createElement("span",{className:"login"},"Log In")),t=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.b,{to:"/new-article"},r.a.createElement("span",{className:"login"},"Create Article")),r.a.createElement(h.b,{to:"/login",onClick:this.props.handleLogOut},r.a.createElement("span",{className:"login"},"Sign Out")));return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav-menu flex"},r.a.createElement(h.b,{to:"/"},r.a.createElement("span",{className:"logo"},"BLOG || EME ")),r.a.createElement("div",{className:"button flex"},this.props.login.login?t:e)))))}}]),n}(r.a.Component)),d=n(4),f=n.n(d),E=n(15),g="https://still-plains-30343.herokuapp.com/api",b={saveAuthToken:function(e){window.localStorage.setItem("blogEMEToken",e)},getAuthToken:function(){return window.localStorage.getItem("blogEMEToken")},clearAuthToken:function(){window.localStorage.removeItem("blogEMEToken")},hasAuthToken:function(){return!!b.getAuthToken()},makeBasicAuthToken:function(e,t){return window.btoa("".concat(e,":").concat(t))}},v=b,O={getArticles:function(){return fetch("".concat(g,"/articles"),{method:"GET",headers:{authorization:v.getAuthToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},getArticle:function(e){return fetch("".concat(g,"/articles/").concat(e)).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postArticle:function(e){return fetch("".concat(g,"/articles"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)})},deleteArticle:function(e){return fetch("".concat(g,"/articles/").concat(e),{method:"DELETE"})},postComment:function(e){return fetch("".concat(g,"/comments"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteComment:function(e){return fetch("".concat(g,"/comments/").concat(e),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({id:e})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},loginUser:function(e){return fetch("".concat(g,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},createUser:function(e){return fetch("".concat(g,"/users"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},getUsers:function(){return fetch("".concat(g,"/users")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},j=(n(102),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getArticles(a.state.token);case 3:t=e.sent,a.setState({articles:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),a.state={articles:[],token:a.props.token},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.articles.map((function(e){return r.a.createElement("div",{className:"article-div",key:e.id},r.a.createElement(h.b,{to:"/articles/".concat(e.id)},r.a.createElement("h1",null,e.title)),r.a.createElement("p",null,e.content))}));return r.a.createElement("div",{className:"flex-articles"},e)}}]),n}(r.a.Component)),k=n(25),w=(n(103),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user_name:"",full_name:"",nick_name:"",password:"",confirm_password:"",error_password:!1},e.handleChange=function(t){t.preventDefault(),e.setState(Object(k.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(E.a)(f.a.mark((function t(n){var a,r,c,o,l;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),(a=e.state).password!==a.confirm_password&&e.setState({error_password:!0}),a.password!==a.confirm_password){t.next=14;break}return e.setState({error_password:!1}),r={user_name:a.user_name,full_name:a.full_name,password:a.password,nickname:a.nick_name},t.next=8,O.createUser(r);case 8:c=t.sent,console.log(c),o=c.user,l=c.token,v.saveAuthToken(l),e.props.handleLogin(o.id),e.props.history.push("/");case 14:case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"register-form"},r.a.createElement("h1",null,"WELCOME TO BLOGEME CREATE AN ACCOUNT FOR FREE!"),r.a.createElement("h2",null,this.state.error_password?"PASSWORDS DO NOT MATCH!":""),r.a.createElement("input",{onChange:this.handleChange,name:"full_name",type:"text",placeholder:"Full name",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.handleChange,name:"user_name",type:"text",placeholder:"Username",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.handleChange,name:"password",type:"password",placeholder:"Password",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{onChange:this.handleChange,name:"confirm_password",type:"password",placeholder:"Confirm Password",required:!0}),r.a.createElement("br",null),r.a.createElement("button",null,"Create an Account")))}}]),n}(r.a.Component)),y=(n(104),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user_name:"",password:"",loginError:!1},e.handleUpdate=function(t){t.preventDefault(),e.setState(Object(k.a)({},t.currentTarget.name,t.currentTarget.value))},e.handleSubmit=function(){var t=Object(E.a)(f.a.mark((function t(n){var a,r,c,o,l,s,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.state,r=a.user_name,c=a.password,o={user_name:r,password:c},t.next=5,O.loginUser(o);case 5:l=t.sent,s=l.user,i=l.token,v.saveAuthToken(i),e.props.handleLogin(s.id),e.props.history.push("/");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement("h1",null,"SIGN IN TO BLOGEME!"),r.a.createElement("h2",null,this.state.loginError?"USERNAME OR PASSWORD WRONG!":""),r.a.createElement("input",{onChange:this.handleUpdate,name:"user_name",type:"text",placeholder:"Username",required:!0}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",onChange:this.handleUpdate,name:"password",placeholder:"Password",required:!0}),r.a.createElement("br",null),r.a.createElement("button",null,"Sign In")))}}]),n}(r.a.Component)),C=(n(105),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("span",{className:"comment"},this.props.comment.text),r.a.createElement("br",null),r.a.createElement("button",{className:"delete-comment",id:this.props.comment.id,onClick:function(t){return e.props.handleDeleteComment(t.currentTarget.id)}},"DELETE")))}}]),n}(r.a.Component)),S=(n(106),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleDeleteArticle=function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O.deleteArticle(a.state.article.id);case 3:a.props.history.push("/");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.updateNewComment=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleDeleteComment=function(){var e=Object(E.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,O.deleteComment(t);case 3:n=a.state.comments.filter((function(e){return e.id!==t})),a.setState({comments:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSubmitNewComment=function(){var e=Object(E.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={text:a.state.newComment,article_id:a.state.id,user_id:a.state.article.author_id},e.next=3,O.postComment(n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={user:"",id:e.match.params.id,article:{},comments:[],newComment:""},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.getArticle(this.state.id);case 3:t=e.sent,this.setState({article:t.article,comments:t.articleComments}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.comments.map((function(t){return r.a.createElement(C,{key:t.id,comment:t,handleDeleteComment:e.handleDeleteComment})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{key:this.state.id,className:"article"},r.a.createElement("h1",null,this.state.article.title),r.a.createElement("p",null,this.state.article.content),r.a.createElement("button",{onClick:this.handleDeleteArticle},"DELETE ARTICLE")),r.a.createElement("div",{className:"new-comment"},r.a.createElement("h1",null,"DISCUSSION"),r.a.createElement("form",{onSubmit:this.handleSubmitNewComment,className:"comments-form"},r.a.createElement("textarea",{onChange:this.updateNewComment,name:"newComment",placeholder:"Add to to discussion"}),r.a.createElement("button",null,"SUBMIT")),r.a.createElement("ul",null,t)))}}]),n}(r.a.Component)),x=(n(107),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"BLOGEME copyright 2020"))}}]),n}(r.a.Component)),A=(n(108),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:"",author_id:e.props.user_id},e.handleUpdate=function(t){e.setState(Object(k.a)({},t.currentTarget.name,t.currentTarget.value))},e.handleSubmit=function(){var t=Object(E.a)(f.a.mark((function t(n){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,a={title:e.state.title,content:e.state.content,author_id:e.state.author_id},t.next=5,O.postArticle(a);case 5:e.props.history.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-new-article"},r.a.createElement("input",{onChange:this.handleUpdate,name:"title",type:"text",placeholder:"Article title"}),r.a.createElement("textarea",{onChange:this.handleUpdate,name:"content",placeholder:"article"}),r.a.createElement("button",null,"POST")))}}]),n}(r.a.Component)),T=n(89),_=n.n(T),N={particles:{number:{value:500,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}}},L=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={login:v.hasAuthToken(),user_id:null},e.handleLogin=function(t){e.setState({user_id:t,login:!0})},e.handleLogOut=function(){e.setState({user_id:null,login:!1}),v.clearAuthToken()},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{className:"particles",params:N}),r.a.createElement(p,{handleLogOut:this.handleLogOut,login:this.state}),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",render:function(t){return e.state.login?r.a.createElement(j,Object.assign({token:e.state.token},t)):r.a.createElement(w,Object.assign({},t,{handleLogin:e.handleLogin}))}}),r.a.createElement(m.a,{exact:!0,path:"/Register",render:function(t){return r.a.createElement(w,Object.assign({},t,{handleLogin:e.handleLogin}))}}),r.a.createElement(m.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(y,Object.assign({},t,{handleLogin:e.handleLogin}))}}),r.a.createElement(m.a,{exact:!0,path:"/articles/:id",render:function(t){return e.state.login?r.a.createElement(S,t):r.a.createElement(y,Object.assign({},t,{handleLogin:e.handleLogin}))}}),r.a.createElement(m.a,{exact:!0,path:"/new-article",render:function(t){return e.state.login?r.a.createElement(A,Object.assign({},t,{user_id:e.state.user_id})):r.a.createElement(y,Object.assign({},t,{handleLogin:e.handleLogin}))}})),r.a.createElement(x,null))}}]),n}(r.a.Component);o.a.render(r.a.createElement(h.a,null,r.a.createElement(L,null)),document.getElementById("root"))},53:function(e,t,n){},90:function(e,t,n){e.exports=n(319)},95:function(e,t,n){},96:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.ad707d67.chunk.js.map