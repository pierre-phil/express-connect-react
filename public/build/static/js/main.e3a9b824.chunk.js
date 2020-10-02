(this["webpackJsonptodos-app"]=this["webpackJsonptodos-app"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(5),c=n.n(l),r=(n(13),n(14),n(7)),s=n(6),i=n(1),m=function(e){var t=e.todo,n=e.deleteTodo,o=e.toggleCompleteTodo,l={textDecoration:t.isCompleted?"line-through":"none"};return console.log(t),a.a.createElement("div",{className:"shadow-sm border p-2 d-flex align-items-center justify-content-between mb-2"},a.a.createElement("span",{style:l},t.text),a.a.createElement("div",{className:"btn-group"},t.isCompleted?a.a.createElement("button",{className:"btn btn-light btn-sm btn-dark",type:"button",onClick:function(){return o(t)}},"R\xe9tablir"):a.a.createElement("button",{className:"btn btn-light btn-sm",type:"button",onClick:function(){return o(t)}},"Terminer"),a.a.createElement("button",{className:"btn btn-danger btn-sm",type:"button",onClick:function(){return n(t)}},"Supprimer")))},u=Object(o.createContext)(),d=function(e){var t=e.children,n=Object(o.useState)((function(){return JSON.parse(localStorage.getItem("todoList"))||[]})),l=Object(i.a)(n,2),c=l[0],r=l[1];return a.a.createElement(u.Provider,{value:{todos:c,setTodos:r}},t)},p=function(e){var t=e.deleteTodo,n=e.toggleCompleteTodo,l=Object(o.useContext)(u).todos;return a.a.createElement("main",null,l.map((function(e){return a.a.createElement(m,{key:e.id,todo:e,deleteTodo:t,toggleCompleteTodo:n})})))},f=Object(o.createContext)(),b=function(e){var t=e.children,n=Object(o.useState)(localStorage.getItem("mode")||"light"),l=Object(i.a)(n,2),c=l[0],r=l[1];Object(o.useEffect)((function(){localStorage.setItem("mode",c)}),[c]);var s="dark"===c?"bg-dark text-light":"";return a.a.createElement(f.Provider,{value:{mode:c,setMode:r,modeClass:s}},t)},g=function(e){var t=e.filter,n=e.setFilter,l=Object(o.useContext)(f).modeClass;return a.a.createElement("div",{className:"input-group mb-3"},a.a.createElement("label",{className:"input-group-text ".concat(l),htmlFor:"select"},"Filtrer les t\xe2ches"),a.a.createElement("select",{className:"form-select ".concat(l),id:"select",value:t,onChange:function(e){n(e.target.value)}},a.a.createElement("option",{value:"all"},"Toutes \ud83d\udd90\ufe0f"),a.a.createElement("option",{value:"completed"},"Termin\xe9es \ud83d\udcaa"),a.a.createElement("option",{value:"notcompleted"},"pas Termin\xe9es \ud83d\udc48")))},v=function(e){var t=e.addTodo,n=e.setFilter,l=Object(o.useContext)(f).modeClass;return a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var o=e.target.elements.todo.value;t(o),console.log("newTodoText",e.target.elements.todo.value),e.target.reset(),n((function(e){return"completed"===e?"all":e}))}},a.a.createElement("div",{className:"input-group mb-2"},a.a.createElement("label",{className:"input-group-text ".concat(l),htmlFor:"todo"},"Ajouter une t\xe2che"),a.a.createElement("input",{className:"form-control ".concat(l),id:"todo",required:!0})),a.a.createElement("button",{type:"submit",className:"btn btn-primary"},"allons-y !"))},h=n(17),E=function(){var e=Object(o.useContext)(f),t=e.mode,n=e.setMode;return a.a.createElement("div",{className:"mb-3 d-flex flex-row justify-content-end"},a.a.createElement("div",{className:"form-check form-switch"},a.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"activate",checked:"dark"===t,onChange:function(){n((function(e){return"dark"===e?"light":"dark"}))}}),a.a.createElement("label",{className:"form-check-label",htmlFor:"activate"},"dark"===t?"Mode sombre":"Mode clair")))},C=function(){var e=Object(o.useContext)(u),t=e.todos,n=e.setTodos,l=Object(o.useState)("notcompleted"),c=Object(i.a)(l,2),m=c[0],d=c[1];Object(o.useEffect)((function(){document.title=t.length?"Vous avez ".concat(t.length," t\xe2ches \xe0 accomplir !"):"Que devez vous faire aujourd'hui ?"}),[t.length]),Object(o.useEffect)((function(){localStorage.setItem("todoList",JSON.stringify(t))}),[t]);var f=t.filter((function(e){return"completed"===m?e.isCompleted:"notcompleted"!==m||!e.isCompleted})),b=t.filter((function(e){return e.isCompleted})).length;return a.a.createElement("main",null,a.a.createElement("h2",{className:"text-center"},"Ma liste de t\xe2ches (",b," / ",t.length,")"),a.a.createElement(E,null),a.a.createElement(g,{filter:m,setFilter:d}),a.a.createElement(p,{todos:f,deleteTodo:function(e){n(t.filter((function(t){return t!==e})))},toggleCompleteTodo:function(e){n(t.map((function(t){return Object(r.a)({},t,{isCompleted:e.id===t.id?!t.isCompleted:t.isCompleted})})))}}),a.a.createElement(v,{addTodo:function(e){var o={text:e,isCompleted:!1,id:Object(h.a)()};console.log(o),n([].concat(Object(s.a)(t),[o]))},setFilter:d}))},j=function(e){var t=e.children,n=Object(o.useContext)(f).modeClass;return a.a.createElement("div",{className:"min-vh-100 py-3 ".concat(n)},a.a.createElement("div",{className:"container my-3"},t))};var N=function(){return a.a.createElement(b,null,a.a.createElement(d,null,a.a.createElement(j,null,a.a.createElement("div",{className:"container my-4"},a.a.createElement("h1",{className:"text-center"},"ToDos App"),a.a.createElement(C,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e3a9b824.chunk.js.map