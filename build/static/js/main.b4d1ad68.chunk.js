(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a(29)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(10),i=a.n(c),r=(a(17),a(1)),s=a(2),o=a(4),u=a(3),m=a(5),d=(a(19),a(21),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"holder"},l.a.createElement("span",{class:"top"}," TECH SALES WORK "),l.a.createElement("span",{class:"bottom"}," ",l.a.createElement("div",{class:"typewriter"}," The highest paying, highest rated, and most in-demand ")," jobs in Software Sales, updated daily "))}}]),t}(l.a.Component)),p=(a(9),function(){return l.a.createElement("div",null,l.a.createElement("span",{class:"header"}," Jobs Posted Today "),l.a.createElement("br",null))}),h=(a(7),function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"spinner-grow text-success",role:"status"},l.a.createElement("span",{class:"sr-only"},"Loading...")),l.a.createElement("div",{class:"spinner-grow text-success",role:"status"},l.a.createElement("span",{class:"sr-only"},"Loading...")),l.a.createElement("div",{class:"spinner-grow text-success",role:"status"},l.a.createElement("span",{class:"sr-only"},"Loading...")))}),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={loading:!1,data:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://sheetsu.com/apis/v1.0su/c3d38a3d5efd").then(function(e){return e.json()}).then(function(t){e.setState({loading:!1,data:t})})}},{key:"renderData",value:function(){return l.a.createElement("ul",{class:"job-list"},this.state.data.map(function(e){return l.a.createElement("div",null,l.a.createElement("li",{key:e.id,class:"item",id:"hov"},l.a.createElement("a",{href:e.url,target:"_blank",title:e.title,id:"some-div"},l.a.createElement("span",{class:"company-picture",title:e.company},l.a.createElement("img",{"data-src":e.logo,alt:"\ud83d\udcb0",class:"lazyloaded",src:e.logo})),l.a.createElement("div",{class:"org"},l.a.createElement("span",{class:"company-n-title"},l.a.createElement("span",{class:"companyName"}," ",e.company),l.a.createElement("span",{class:"jobTitle"}," ",e.title)),l.a.createElement("span",{class:"jobLocation"}," ",e.location)),l.a.createElement("div",null,l.a.createElement("span",{id:"some-element"}," Click",l.a.createElement("br",null),"to",l.a.createElement("br",null),"Apply")))))}))}},{key:"render",value:function(){var e=this.state,t=(e.data,e.loading);return l.a.createElement("div",{class:"container-fluid"},t?l.a.createElement(h,null):this.renderData())}}]),t}(l.a.Component),E=(l.a.Component,function(){return l.a.createElement("div",null,l.a.createElement("span",{class:"header"}," Jobs Posted Earlier "),l.a.createElement("br",null))}),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={loading:!1,data:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),fetch("https://sheetsu.com/apis/v1.0su/c3d38a3d5efd/sheets/earlier").then(function(e){return e.json()}).then(function(t){e.setState({loading:!1,data:t})})}},{key:"renderData",value:function(){return l.a.createElement("ul",{class:"job-list"},this.state.data.map(function(e){return l.a.createElement("div",null,l.a.createElement("li",{key:e.id,class:"item",id:"hov"},l.a.createElement("a",{href:e.url,target:"_blank",title:e.title,id:"some-div"},l.a.createElement("span",{class:"company-picture",title:e.company},l.a.createElement("img",{"data-src":e.logo,alt:"\ud83d\udcb0",class:"lazyloaded",src:e.logo})),l.a.createElement("div",{class:"org"},l.a.createElement("span",{class:"company-n-title"},l.a.createElement("span",{class:"companyName"}," ",e.company),l.a.createElement("span",{class:"jobTitle"}," ",e.title)),l.a.createElement("span",{class:"jobLocation"}," ",e.location)),l.a.createElement("div",null,l.a.createElement("span",{id:"some-element"}," Click",l.a.createElement("br",null),"to",l.a.createElement("br",null),"Apply")))))}))}},{key:"render",value:function(){var e=this.state,t=(e.data,e.loading);return l.a.createElement("div",{class:"container-fluid"},t?l.a.createElement(h,null):this.renderData())}}]),t}(l.a.Component),y=a(6),v=(a(25),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:{name:"",email:""}},a.handleInputChange=a.handleInputChange.bind(Object(y.a)(Object(y.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(y.a)(Object(y.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleInputChange",value:function(e){var t=this.state.data;t[e.target.name]=e.target.value,this.setState({loading:!1,data:t})}},{key:"handleSubmit",value:function(e){e.preventDefault(),fetch("https://sheetsu.com/apis/v1.0su/71dd9a045b9f",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(this.state.data)}).then(function(e){return e.json()}).then(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{class:"row columns is-mobile d-inline-flex"},l.a.createElement("form",{id:"email-form",onSubmit:this.handleSubmit,class:"d-inline-flex columns is-mobile"},l.a.createElement("p",{class:"note column"}," Get a Daily Email ",l.a.createElement("br",null),"of SaaS Sales Jobs "),l.a.createElement("input",{class:"input column d-inline-flex is-mobile",type:"text",placeholder:"Name",name:"form_name",onChange:this.handleInputChange,required:!0}),l.a.createElement("input",{class:"input d-inline-flex column is-mobile",type:"email",placeholder:"Email",name:"form_email",onChange:this.handleInputChange,required:!0}),l.a.createElement("button",{class:"btnsizing button d-inline-flex column",type:"submit",onClick:function(){alert("Thanks! Sending you great jobs :)")}},"\ud83d\udcb8 Subscribe \ud83d\udcb8")))}}]),t}(l.a.Component)),j={backgroundColor:"black",borderTop:"1px solid #E7E7E7",textAlign:"center",padding:"20px",position:"fixed",left:"0",bottom:"0",height:"60px",width:"100%"},g={display:"block",padding:"20px",height:"60px",width:"100%"},O=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"container-fluid",style:g},l.a.createElement("div",{class:"container-fluid",style:j},l.a.createElement(v,null)))}}]),t}(l.a.Component),k=(a(27),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("a",{id:"tweet",class:"by-ryan",href:"https://twitter.com/Ryan___Doyle",target:"_blank",title:"Made By @ksaitor"},l.a.createElement("span",null,"by @Ryan___Doyle")," ",l.a.createElement("span",{class:"pic"})))}}]),t}(l.a.Component)),C=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"container-fluid mydiv"},l.a.createElement(k,null),l.a.createElement(d,null),l.a.createElement(p,null),l.a.createElement(b,null),l.a.createElement(E,null),l.a.createElement(f,null),l.a.createElement(O,null))}}]),t}(l.a.Component);i.a.render(l.a.createElement(C,null),document.getElementById("root"))}],[[11,2,1]]]);
//# sourceMappingURL=main.b4d1ad68.chunk.js.map