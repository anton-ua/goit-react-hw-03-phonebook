(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=n(10),i=n(5),u=n(1),s=n(2),m=n(3),d=n(4),h=n(9),f=n.n(h),p=n(18),b=n(6),v={name:"",number:""},C=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state=Object(i.a)({},v),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(b.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.state.name&&e.state.number&&(e.props.onAddContact(Object(i.a)({},e.state)),e.reset())},e.reset=function(){e.setState(Object(i.a)({},v))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name",r.a.createElement("input",{type:"text",placeholder:"Enter name",name:"name",value:this.state.name,onChange:this.handleChange}),r.a.createElement("input",{type:"text",placeholder:"Enter phone number",name:"number",value:this.state.number,onChange:this.handleChange})),r.a.createElement("button",{type:"submit"},"Add Contact")))}}]),n}(a.Component),E=function(e){var t=e.name,n=e.number,a=e.deleteContact;return r.a.createElement("li",null,r.a.createElement("p",null,t,": ",r.a.createElement("span",null,n),r.a.createElement("button",{type:"button",onClick:a},"Delete")))},g=function(e){var t=e.contacts,n=e.deleteContact,c=e.children;return r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"Contacts"),c,r.a.createElement("ul",null,t.map((function(e){var t=e.name,a=e.number,c=e.id;return r.a.createElement(E,{key:c,name:t,number:a,id:c,deleteContact:function(){return n(c)}})}))))},O=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleFilter=function(t){var n=t.target.value;e.props.filterValue(n)},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("input",{placeholder:"Find contact",value:this.props.filter,onChange:this.handleFilter})}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){var n=Object(p.a)(),a=Object(i.a)({},t,{id:n});e.state.contacts.map((function(e){return e.name.toLowerCase()})).includes(t.name.toLowerCase())?alert("".concat(t.name," is already in contact")):e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[a])}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.filterValue=function(t){e.setState((function(){return{filter:t}}))},e.filterContacts=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.filterContacts(t,n);return r.a.createElement("div",{className:f.a.container},r.a.createElement(C,{onAddContact:this.addContact}),t.length>0&&r.a.createElement(g,{contacts:a,deleteContact:this.deleteContact},t.length>=2&&r.a.createElement(O,{filter:n,filterValue:this.filterValue})))}}]),n}(a.Component);o.a.render(r.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,n){e.exports={container:"App_container__1XEZl"}}},[[11,1,2]]]);
//# sourceMappingURL=main.40cf8dac.chunk.js.map