(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1:function(e,a,t){e.exports={title:"Form_title__3wm12",form_blok:"Form_form_blok__3dTUf",form_blok10:"Form_form_blok10__21c3T",form_label:"Form_form_label__1aIk9",form_control:"Form_form_control__Hwa1W",col:"Form_col__1XT_p",form_file:"Form_form_file__1WXug",btn:"Form_btn__1yeNR",fa:"Form_fa__18oz7"}},26:function(e,a,t){e.exports={container:"MessageStatus_container__3-c40",header:"MessageStatus_header__3auD0",data:"MessageStatus_data__iST_V",theme:"MessageStatus_theme__3iQHu",status:"MessageStatus_status__2SPFx",green:"MessageStatus_green__15Vaq",red:"MessageStatus_red__1D7QE"}},39:function(e,a,t){e.exports={blok:"File_blok__3bG5Y",file:"File_file__1YX0G",fa:"File_fa__HJqSa",delete:"File_delete__2o7vU"}},40:function(e,a,t){e.exports={container:"MessagePage_container__dMst3",header:"MessagePage_header__249WP",data:"MessagePage_data__1Cvpm",theme:"MessagePage_theme__T0lyP",status:"MessagePage_status__16r_O"}},56:function(e,a,t){e.exports={container:"FormPage_container__1hWhO",form:"FormPage_form__HuxW-",fa:"FormPage_fa__L4A1i",loading:"FormPage_loading__3vV0f"}},70:function(e,a,t){e.exports=t(81)},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(60),r=t.n(s),m=(t(74),t(75),t(76),t(41)),o=t(43),c=t(61),i=t(62),f=t(68),d=t(63),_=t(69),u=(t(77),t(56)),g=t.n(u),v=t(1),E=t.n(v),h=t(39),p=t.n(h),b=function(e){var a=e.fileData.map((function(a,t){return l.a.createElement("div",{className:p.a.blok,key:t},l.a.createElement("div",{className:p.a.file},l.a.createElement("i",{className:p.a.fa+" fa fa-paperclip","aria-hidden":"true"}),a.split(".")[0].length>15?a.split(".")[0].slice(0,15)+"..."+a.split(".")[1]:a),l.a.createElement("div",{className:p.a.delete},l.a.createElement("i",{className:p.a.fa+" fa fa-trash-o","aria-hidden":"true"}),l.a.createElement("span",{onClick:function(){return e.DeleteFile(t)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c ")))}));return l.a.createElement("div",null,a)},N=t(13),k=t(23),D=k.a().shape({for_name:k.b().min(2,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430*").max(40,"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435*"),from_name:k.b().min(2,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430*").max(40,"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435*"),for_email:k.b().email("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email \u0430\u0434\u0440\u0435\u0441*").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435*"),from_email:k.b().email("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email \u0430\u0434\u0440\u0435\u0441*").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435*"),theme:k.b().min(2,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430*").max(30,"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435*"),message:k.b().min(2,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430").max(300,"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435*")}),y=function(e){var a=function(){for(var a=[],t=document.getElementById("file").files,n=0;n<t.length;n++)a.push(document.getElementById("file").files[n].name);e.UpdateFiles(a)};return l.a.createElement(N.c,{initialValues:{for_email:"",for_name:"",from_email:"",from_name:"",theme:"",message:""},validationSchema:D,onSubmit:function(a,t){var n=t.resetForm;a.status="\u0412 \u043e\u0447\u0435\u0440\u0435\u0434\u0438",e.SendMessage(a),setTimeout((function(){n()}),500)},render:function(t){var n=t.errors,s=t.touched,r=t.isValid;return l.a.createElement(N.b,{action:"",className:E.a.container,encType:"multipart/form-data"},l.a.createElement("div",{className:E.a.title},l.a.createElement("h2",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439")),l.a.createElement("div",{className:E.a.form_blok},l.a.createElement("span",{className:E.a.form_label},"\u041e\u0442 \u043a\u043e\u0433\u043e"),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:E.a.col+" col"},l.a.createElement(N.a,{type:"text",className:E.a.form_control+" form-control "+(n.from_name&&s.from_name&&" is-invalid"),name:"from_name",placeholder:"\u0418\u043c\u044f"}),l.a.createElement("div",{className:"invalid-feedback"},n.from_name)),l.a.createElement("div",{className:E.a.col+" col"},l.a.createElement(N.a,{type:"text",className:E.a.form_control+" form-control "+(n.from_email&&s.from_email&&" is-invalid"),name:"from_email",placeholder:"Email"}),l.a.createElement("div",{className:"invalid-feedback"},n.from_email)))),l.a.createElement("div",{className:E.a.form_blok},l.a.createElement("span",{className:E.a.form_label},"\u041a\u043e\u043c\u0443"),l.a.createElement("br",null),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:E.a.col+" col"},l.a.createElement(N.a,{type:"text",className:E.a.form_control+" form-control "+(n.for_name&&s.for_name&&" is-invalid"),name:"for_name",placeholder:"\u0418\u043c\u044f"}),l.a.createElement("div",{className:"invalid-feedback"},n.for_name)),l.a.createElement("div",{className:E.a.col+" col"},l.a.createElement(N.a,{type:"text",className:E.a.form_control+" form-control "+(n.for_email&&s.for_email&&" is-invalid"),name:"for_email",placeholder:"Email"}),l.a.createElement("div",{className:"invalid-feedback"},n.for_email)))),l.a.createElement("div",{className:E.a.form_blok},l.a.createElement("span",{className:E.a.form_label},"\u0422\u0435\u043c\u0430 \u043f\u0438\u0441\u044c\u043c\u0430"),l.a.createElement("br",null),l.a.createElement(N.a,{type:"text",className:E.a.form_control+" form-control "+(n.theme&&s.theme&&" is-invalid"),name:"theme",placeholder:" \u0422\u0435\u043c\u0430"}),l.a.createElement("div",{className:"invalid-feedback"},n.theme)),l.a.createElement("div",{className:E.a.form_blok},l.a.createElement("span",{className:E.a.form_label},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),l.a.createElement(N.a,{type:"text",className:E.a.form_control+" form-control "+(n.message&&s.message&&" is-invalid"),style:{paddingTop:15,paddingBottom:90},name:"message",placeholder:"\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),l.a.createElement("div",{className:"invalid-feedback"},n.message)),l.a.createElement(b,{fileData:e.state.fileData,DeleteFile:e.DeleteFile}),l.a.createElement("div",{className:E.a.form_file},l.a.createElement("label",{htmlFor:"file"},l.a.createElement("i",{className:E.a.fa+" fa fa-paperclip","aria-hidden":"true"})," \u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0444\u0430\u0439\u043b"),l.a.createElement(N.a,{type:"file",id:"file",name:"files",multiple:!0,onChange:a})),l.a.createElement("div",{className:E.a.form_blok10},l.a.createElement("button",{type:"submit",className:E.a.btn+" btn btn-primary",disabled:!r},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))}})},S=t(40),F=t.n(S),M=t(26),w=t.n(M),x=function(e){var a;return"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"===e.status?a="green":"\u041e\u0448\u0438\u0431\u043a\u0430"===e.status&&(a="red"),l.a.createElement("div",{className:w.a.header+" row"},l.a.createElement("div",{className:"col-2 "+w.a.data},e.date),l.a.createElement("div",{className:"col-8 "+w.a.theme},e.theme),l.a.createElement("div",{className:"col-2 "+w.a.status+" "+("green"===a&&w.a.green)+" "+("red"===a&&w.a.red)},e.status))},j=function(e){var a=e.state.messageData.map((function(e,a){return l.a.createElement(x,{key:a,theme:e.theme,status:e.status,date:e.date})}));return l.a.createElement("div",{className:F.a.container},l.a.createElement("h4",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),0===e.state.messageData.length?l.a.createElement("div",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0435\u0449\u0451 \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u0438\u0441\u044c"):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:F.a.header+" row"},l.a.createElement("div",{className:"col-2 "+F.a.data},"\u0414\u0430\u0442\u0430"),l.a.createElement("div",{className:"col-8 "+F.a.theme},"\u0422\u0435\u043c\u0430"),l.a.createElement("div",{className:"col-2 "+F.a.status},"\u0421\u0442\u0430\u0442\u0443\u0441")),a))},O=function(e){var a=!e.state.messageData.some((function(e){return"\u0412 \u043e\u0447\u0435\u0440\u0435\u0434\u0438"===e.status}));return l.a.createElement("div",{className:g.a.container},a?l.a.createElement("div",{className:g.a.form},l.a.createElement(y,e)):l.a.createElement("div",{className:g.a.loading},l.a.createElement("h2",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043d\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443"),l.a.createElement("p",null,"\u0421\u043e\u0432\u0441\u0435\u043c \u0441\u043a\u043e\u0440\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432\u044b\u043b\u0435\u0442\u0438\u0442 \u0438\u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0438 \u0431\u0443\u0434\u0435\u0442 \u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u043f\u043e\u0447\u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f \xab",e.state.messageData[e.state.messageData.length-1].for_email,"\xbb \u0441\u043e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u044e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043e\u0432.")),l.a.createElement(j,{state:e.state}),l.a.createElement("button",{onClick:function(){return e.ClearHistory()}}," \u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))},T=t(67),P=new(t.n(T).a)({auth:{login:"momentalochka@yandex.ru",password:"be7Bukeeg"}}),q={Track:function(e){return P.request({action:"track.get",id:e,session:"session"})},SendMessage:function(e){return P.request({action:"issue.send.test",letter:{subject:e.theme,"from.name":e.from_name,"from.email":e.from_email,"to.name":e.for_name,message:{text:e.message},attaches:[{name:"\u0438\u043c\u044f \u0444\u0430\u0439\u043b\u0430",content:"\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0444\u0430\u0439\u043b\u0430 \u0437\u0430\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 base64",encoding:"base64"}]},sendwhen:"test",mca:[e.for_email]})}},C=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(f.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).SendMessage=function(e){var a=["\u042f\u043d\u0432\u0430\u0440\u044f","\u0424\u0435\u0432\u0440\u0430\u043b\u044f","\u041c\u0430\u0440\u0442\u0430","\u0410\u043f\u0440\u0435\u043b\u044f","\u041c\u0430\u044f","\u0418\u044e\u043d\u044f","\u0418\u044e\u043b\u044f","\u0410\u0432\u0433\u0443\u0441\u0442\u0430","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u041e\u043a\u0442\u044f\u0431\u0440\u044f","\u041d\u043e\u044f\u0431\u0440\u044f","\u0414\u0435\u043a\u0430\u0431\u0440\u044f"][(new Date).getMonth()],n=(new Date).getDate();e.date=n+" "+a,t.setState({messageData:[].concat(Object(o.a)(t.state.messageData),[Object(m.a)({},e)]),fileData:[]}),q.SendMessage(e).then((function(e){var a=setInterval((function(e){q.Track(e["track.id"]).then((function(e){if(console.log(e.obj.status),"-1"===e.obj.status){clearTimeout(a),console.log("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e");var n=t.state.messageData.pop();n.status="\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e",t.setState({messageData:[].concat(Object(o.a)(t.state.messageData),[Object(m.a)({},n)])})}else if("-2"===e.obj.status){clearTimeout(a),console.log("\u041e\u0448\u0438\u0431\u043a\u0430");var l=t.state.messageData.pop();l.status="\u041e\u0448\u0438\u0431\u043a\u0430",t.setState({messageData:[].concat(Object(o.a)(t.state.messageData),[Object(m.a)({},l)])})}}))}),1e3,e,t.state)}))},t.UpdateFiles=function(e){t.setState({fileData:e})},t.DeleteFile=function(e){var a=Object(o.a)(t.state.fileData);a.splice(e,1),t.setState({fileData:a})},t.ClearHistory=function(){localStorage.removeItem("state"),setTimeout((function(){t.setState({messageData:[]})}),300)},t}return Object(_.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){localStorage.getItem("state")?this.setState(Object(m.a)({},JSON.parse(localStorage.getItem("state")))):this.setState({fileData:[],messageData:[]})}},{key:"componentWillUpdate",value:function(e,a){localStorage.setItem("state",JSON.stringify(Object(m.a)({},a)))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(O,{UpdateFiles:this.UpdateFiles,state:this.state,DeleteFile:this.DeleteFile,Validate:this.Validate,SendMessage:this.SendMessage,ClearHistory:this.ClearHistory})}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[70,1,2]]]);
//# sourceMappingURL=main.adbf0ae8.chunk.js.map