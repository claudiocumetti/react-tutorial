(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{13:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),u=(a(18),a(10)),o=a(7),i=a(8),m=a(12),h=a(11),s=a(1),b=a(2),v=a(3),p=a(4),E=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job")))},d=function(e){var t=e.characterData.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete")))}));return r.a.createElement("tbody",null,t)},f=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.characterData,a=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(E,null),r.a.createElement(d,{characterData:t,removeCharacter:a}))}}]),a}(n.Component),j=a(9),C=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).initialState={name:"",job:""},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(j.a)({},n,r))},e.submitForm=function(){e.props.handleSubmit(e.state),e.setState(e.initialState)},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"job"},"Job"),r.a.createElement("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={characters:[]},e.removeCharacter=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({characters:[].concat(Object(u.a)(e.state.characters),[t])})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"React Tutorial"),r.a.createElement("p",null,"Add a character with a name and a job to the table."),r.a.createElement(f,{characterData:e,removeCharacter:this.removeCharacter}),r.a.createElement("h3",null,"Add New"),r.a.createElement(C,{handleSubmit:this.handleSubmit}))}}]),a}(n.Component);l.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.ebb7a8f3.chunk.js.map