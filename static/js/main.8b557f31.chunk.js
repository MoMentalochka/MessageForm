(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{2:function(e,a,t){e.exports={title:"Form_title__3wm12",form_blok:"Form_form_blok__3dTUf",form_blok10:"Form_form_blok10__21c3T",form_label:"Form_form_label__1aIk9",form_control:"Form_form_control__Hwa1W",col:"Form_col__1XT_p",form_file:"Form_form_file__1WXug",form_file_label:"Form_form_file_label__2VDqP",btn:"Form_btn__1yeNR",fa:"Form_fa__18oz7",DragDrop:"Form_DragDrop__a3VCe"}},27:function(e,a,t){e.exports={container:"MessageStatus_container__3-c40",header:"MessageStatus_header__3auD0",data:"MessageStatus_data__iST_V",theme:"MessageStatus_theme__3iQHu",status:"MessageStatus_status__2SPFx",green:"MessageStatus_green__15Vaq",red:"MessageStatus_red__1D7QE"}},40:function(e,a,t){e.exports={blok:"File_blok__3bG5Y",file:"File_file__1YX0G",fa:"File_fa__HJqSa",delete:"File_delete__2o7vU",error:"File_error__1BmJT"}},41:function(e,a,t){e.exports={container:"MessagePage_container__dMst3",header:"MessagePage_header__249WP",data:"MessagePage_data__1Cvpm",theme:"MessagePage_theme__T0lyP",status:"MessagePage_status__16r_O"}},66:function(e,a,t){e.exports={container:"FormPage_container__1hWhO",form:"FormPage_form__HuxW-",fa:"FormPage_fa__L4A1i",loading:"FormPage_loading__3vV0f",DragDrop:"FormPage_DragDrop__3XTm1"}},76:function(e,a,t){e.exports={dropZone:"DragDrop_dropZone__2IOCp"}},80:function(e,a,t){e.exports=t(90)},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(72),s=t.n(l),o=(t(84),t(85),t(86),t(42)),m=t(45),c=t(49),i=t(50),f=t(60),d=t(51),_=t(62),u=(t(87),t(66)),g=t.n(u),p=t(2),v=t.n(p),E=t(40),b=t.n(E),h=function(e){var a=e.fileData.map((function(a,t){return a.error?r.a.createElement("div",{class:"alert alert-danger",role:"alert"},"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 - ",a.name,a.error):r.a.createElement("div",{className:b.a.blok,key:t},r.a.createElement("div",{className:b.a.file},r.a.createElement("i",{className:b.a.fa+" fa fa-paperclip","aria-hidden":"true"}),a.name.split(".")[0].length>15?a.name.split(".")[0].slice(0,15)+"..."+a.name.split(".")[1]:a.name),r.a.createElement("div",{className:b.a.delete},r.a.createElement("i",{className:b.a.fa+" fa fa-trash-o","aria-hidden":"true"}),r.a.createElement("span",{onClick:function(){return e.DeleteFile(t)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c ")))}));return r.a.createElement("div",null,a)},N=t(17),D=t(24),F=D.a().shape({for_name:D.b().min(2,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430*").max(40,"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435*"),from_name:D.b().min(2,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430*").max(40,"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435*"),for_email:D.b().email("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email \u0430\u0434\u0440\u0435\u0441*").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435*"),from_email:D.b().email("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email \u0430\u0434\u0440\u0435\u0441*").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435*"),theme:D.b().min(2,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430*").max(30,"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435*"),message:D.b().min(2,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430").max(300,"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 300 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432*").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435*")}),k=t(93),S=t(59),y=t(76),O=t.n(y),T={drop:function(e,a){for(var t=[],n=a.getItem().files,r=function(a){var r=new FileReader;r.onload=function(){n[a].size<5242880?t[a]={name:n[a].name,content:r.result.split(",")[1],encoding:"base64",size:n[a].size}:t[a]={name:n[a].name,content:"",encoding:"base64",size:n[a].size,error:"\u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 5Mb"},e.UpdateFiles(t)},r.readAsDataURL(n[a])},l=0;l<n.length;l++)r(l);e.UploadFilesToggler(!1)}},j=function(e){function a(){return Object(c.a)(this,a),Object(f.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(_.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return(0,this.props.connectDropTarget)(r.a.createElement("div",{className:O.a.dropZone},r.a.createElement("h2",null,"\u0411\u0440\u043e\u0441\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u044e\u0434\u0430, \u044f \u043b\u043e\u0432\u043b\u044e"),r.a.createElement("p",null,"\u041c\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u043c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 (jpg, png, gif), \u043e\u0444\u0438\u0441\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b (doc, xls, pdf) \u0438 zip-\u0430\u0440\u0445\u0438\u0432\u044b. \u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0444\u0430\u0439\u043b\u0430 \u0434\u043e 5 \u041c\u0411")))}}]),a}(r.a.Component),x=Object(k.a)(S.a.FILE,T,(function(e,a){return{connectDropTarget:e.dropTarget()}}))(j),M=t(92),w=function(e){return r.a.createElement(r.a.Fragment,null," ",e.state.UploadFiles&&r.a.createElement(M.a,{backend:S.b},r.a.createElement(x,{UpdateFiles:e.UpdateFiles,UploadFilesToggler:e.UploadFilesToggler})),r.a.createElement(N.c,{initialValues:{for_email:"",for_name:"",from_email:"",from_name:"",theme:"",message:""},validationSchema:F,onSubmit:function(a,t){var n=t.resetForm;a.status="\u0412 \u043e\u0447\u0435\u0440\u0435\u0434\u0438",e.SendMessage(a),setTimeout((function(){n()}),500)},render:function(a){var t=a.errors,n=a.touched,l=a.isValid;return r.a.createElement(N.b,{action:"",className:v.a.container,encType:"multipart/form-data"},r.a.createElement("div",{className:v.a.title},r.a.createElement("h2",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439")),r.a.createElement("div",{className:v.a.form_blok},r.a.createElement("span",{className:v.a.form_label},"\u041e\u0442 \u043a\u043e\u0433\u043e"),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:v.a.col+" col"},r.a.createElement(N.a,{type:"text",className:v.a.form_control+" form-control "+(t.from_name&&n.from_name&&" is-invalid"),name:"from_name",placeholder:"\u0418\u043c\u044f"}),r.a.createElement("div",{className:"invalid-feedback"},t.from_name)),r.a.createElement("div",{className:v.a.col+" col"},r.a.createElement(N.a,{type:"text",className:v.a.form_control+" form-control "+(t.from_email&&n.from_email&&" is-invalid"),name:"from_email",placeholder:"Email"}),r.a.createElement("div",{className:"invalid-feedback"},t.from_email)))),r.a.createElement("div",{className:v.a.form_blok},r.a.createElement("span",{className:v.a.form_label},"\u041a\u043e\u043c\u0443"),r.a.createElement("br",null),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:v.a.col+" col"},r.a.createElement(N.a,{type:"text",className:v.a.form_control+" form-control "+(t.for_name&&n.for_name&&" is-invalid"),name:"for_name",placeholder:"\u0418\u043c\u044f"}),r.a.createElement("div",{className:"invalid-feedback"},t.for_name)),r.a.createElement("div",{className:v.a.col+" col"},r.a.createElement(N.a,{type:"text",className:v.a.form_control+" form-control "+(t.for_email&&n.for_email&&" is-invalid"),name:"for_email",placeholder:"Email"}),r.a.createElement("div",{className:"invalid-feedback"},t.for_email)))),r.a.createElement("div",{className:v.a.form_blok},r.a.createElement("span",{className:v.a.form_label},"\u0422\u0435\u043c\u0430 \u043f\u0438\u0441\u044c\u043c\u0430"),r.a.createElement("br",null),r.a.createElement(N.a,{type:"text",className:v.a.form_control+" form-control "+(t.theme&&n.theme&&" is-invalid"),name:"theme",placeholder:" \u0422\u0435\u043c\u0430"}),r.a.createElement("div",{className:"invalid-feedback"},t.theme)),r.a.createElement("div",{className:v.a.form_blok},r.a.createElement("span",{className:v.a.form_label},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),r.a.createElement(N.a,{type:"text",className:v.a.form_control+" form-control "+(t.message&&n.message&&" is-invalid"),style:{paddingTop:15,paddingBottom:90},name:"message",placeholder:"\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),r.a.createElement("div",{className:"invalid-feedback"},t.message)),r.a.createElement(h,{fileData:e.state.fileData,DeleteFile:e.DeleteFile}),r.a.createElement("div",{className:v.a.form_file,onClick:function(){e.UploadFilesToggler(!0)}},r.a.createElement("div",{className:v.a.form_file_label},r.a.createElement("i",{className:v.a.fa+" fa fa-paperclip","aria-hidden":"true"})," \u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u0444\u0430\u0439\u043b")),r.a.createElement("div",{className:v.a.form_blok10},r.a.createElement("button",{type:"submit",className:v.a.btn+" btn btn-primary",disabled:!l},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))}}))},U=t(41),P=t.n(U),C=t(27),q=t.n(C),I=function(e){var a;return"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"===e.status?a="green":"\u041e\u0448\u0438\u0431\u043a\u0430"===e.status&&(a="red"),r.a.createElement("div",{className:q.a.header+" row"},r.a.createElement("div",{className:"col-2 "+q.a.data},e.date),r.a.createElement("div",{className:"col-8 "+q.a.theme},e.theme),r.a.createElement("div",{className:"col-2 "+q.a.status+" "+("green"===a&&q.a.green)+" "+("red"===a&&q.a.red)},e.status))},V=function(e){var a=e.state.messageData.map((function(e,a){return r.a.createElement(I,{key:a,theme:e.theme,status:e.status,date:e.date})}));return r.a.createElement("div",{className:P.a.container},r.a.createElement("h4",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),0===e.state.messageData.length?r.a.createElement("div",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0435\u0449\u0451 \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u0438\u0441\u044c"):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:P.a.header+" row"},r.a.createElement("div",{className:"col-2 "+P.a.data},"\u0414\u0430\u0442\u0430"),r.a.createElement("div",{className:"col-8 "+P.a.theme},"\u0422\u0435\u043c\u0430"),r.a.createElement("div",{className:"col-2 "+P.a.status},"\u0421\u0442\u0430\u0442\u0443\u0441")),a))},W=function(e){var a=!e.state.messageData.some((function(e){return"\u0412 \u043e\u0447\u0435\u0440\u0435\u0434\u0438"===e.status}));return r.a.createElement("div",{className:g.a.container},a?r.a.createElement("div",{className:g.a.form},r.a.createElement(w,e)):r.a.createElement("div",{className:g.a.loading},r.a.createElement("h2",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043d\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443"),r.a.createElement("p",null,"\u0421\u043e\u0432\u0441\u0435\u043c \u0441\u043a\u043e\u0440\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432\u044b\u043b\u0435\u0442\u0438\u0442 \u0438\u0437 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0438 \u0431\u0443\u0434\u0435\u0442 \u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u043f\u043e\u0447\u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044f \xab",e.state.messageData[e.state.messageData.length-1].for_email,"\xbb \u0441\u043e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u044e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043e\u0432.")),r.a.createElement(V,{state:e.state}),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.ClearHistory()}},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e"))},H=t(78),z=new(t.n(H).a)({auth:{login:"momentalochka@yandex.ru",password:"be7Bukeeg"}}),J={Track:function(e){return z.request({action:"track.get",id:e,session:"session"})},SendMessage:function(e,a){return a=a.map((function(e){return{name:"".concat(e.name),content:"".concat(e.content),encoding:"".concat(e.encoding)}})),z.request({action:"issue.send",letter:{subject:e.theme,"from.name":e.from_name,"from.email":e.from_email,"to.name":e.for_name,message:{text:e.message},attaches:a},sendwhen:"test",mca:[e.for_email]})}},B=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(f.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).SendMessage=function(e){var a=["\u042f\u043d\u0432\u0430\u0440\u044f","\u0424\u0435\u0432\u0440\u0430\u043b\u044f","\u041c\u0430\u0440\u0442\u0430","\u0410\u043f\u0440\u0435\u043b\u044f","\u041c\u0430\u044f","\u0418\u044e\u043d\u044f","\u0418\u044e\u043b\u044f","\u0410\u0432\u0433\u0443\u0441\u0442\u0430","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u041e\u043a\u0442\u044f\u0431\u0440\u044f","\u041d\u043e\u044f\u0431\u0440\u044f","\u0414\u0435\u043a\u0430\u0431\u0440\u044f"][(new Date).getMonth()],n=(new Date).getDate();e.date=n+" "+a,t.setState({messageData:[].concat(Object(m.a)(t.state.messageData),[Object(o.a)({},e)])});var r=t.state.fileData;J.SendMessage(e,r).then((function(e){var a=setInterval((function(e){J.Track(e["track.id"]).then((function(e){if("-1"===e.obj.status){clearTimeout(a);var n=t.state.messageData.pop();n.status="\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e",t.setState({messageData:[].concat(Object(m.a)(t.state.messageData),[Object(o.a)({},n)]),fileData:[]})}else if("-2"===e.obj.status){clearTimeout(a);var r=t.state.messageData.pop();r.status="\u041e\u0448\u0438\u0431\u043a\u0430",t.setState({messageData:[].concat(Object(m.a)(t.state.messageData),[Object(o.a)({},r)]),fileData:[]})}}))}),5e3,e,t.state)}))},t.UpdateFiles=function(e){t.setState({fileData:e})},t.DeleteFile=function(e){var a=Object(m.a)(t.state.fileData);a.splice(e,1),t.setState({fileData:a})},t.ClearHistory=function(){localStorage.removeItem("state"),setTimeout((function(){t.setState({messageData:[]})}),300)},t.UploadFilesToggler=function(e){t.setState({UploadFiles:e})},t}return Object(_.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){localStorage.getItem("state")?this.setState(Object(o.a)({},JSON.parse(localStorage.getItem("state")),{UploadFiles:!1,fileData:[]})):this.setState({fileData:[],messageData:[],UploadFiles:!1})}},{key:"componentWillUpdate",value:function(e,a){localStorage.setItem("state",JSON.stringify(Object(o.a)({},a)))}},{key:"render",value:function(){return r.a.createElement(W,{UpdateFiles:this.UpdateFiles,state:this.state,DeleteFile:this.DeleteFile,Validate:this.Validate,SendMessage:this.SendMessage,ClearHistory:this.ClearHistory,UploadFilesToggler:this.UploadFilesToggler})}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[80,1,2]]]);
//# sourceMappingURL=main.8b557f31.chunk.js.map