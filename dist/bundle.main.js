!function(e){function t(t){for(var a,o,i=t[0],c=t[1],s=t[2],p=0,m=[];p<i.length;p++)o=i[p],l[o]&&m.push(l[o][0]),l[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);m.length;)m.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==l[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},l={0:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;r.push([124,1]),n()}({124:function(e,t,n){n(125),e.exports=n(324)},299:function(e,t,n){var a=n(300);"string"==typeof a&&(a=[[e.i,a,""]]);n(60)(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},300:function(e,t,n){(e.exports=n(59)(!1)).push([e.i,'body {\n  color: #263238;\n  background-color: whitesmoke;\n  padding: 0 15px; }\n\n[type="checkbox"]:checked, td > #checkbox {\n  opacity: 1;\n  pointer-events: auto;\n  position: relative; }\n\n.page-header {\n  margin: 15px 20px 20px 20px; }\n\n.header-box h4 {\n  display: none; }\n\n.add-bills .add-header {\n  padding: 13px 0 13px 0;\n  font-weight: bold;\n  margin: 0 auto;\n  line-height: 25px; }\n\n.add-bills .btn {\n  margin: 10px 5px 10px 0; }\n\n.add-bills .message {\n  display: inline;\n  padding-left: 5px; }\n  .add-bills .message h6 {\n    display: inline; }\n\n.bill-table {\n  margin-bottom: 20px;\n  padding-left: 10px; }\n  .bill-table th, .bill-table tr, .bill-table td {\n    border-radius: 0;\n    text-transform: capitalize; }\n  .bill-table tr:hover {\n    background-color: #cfd8dc; }\n  .bill-table th:nth-child(n+7), .bill-table td:last-child {\n    text-align: center; }\n\n.update-form {\n  background-color: whitesmoke;\n  border: 1px solid #b2dfdb;\n  padding: 25px; }\n  .update-form .updatebill-header {\n    background-color: #b2dfdb;\n    height: 50px; }\n    .update-form .updatebill-header h5 {\n      margin: 0;\n      padding: 12px;\n      font-weight: 500; }\n\n@media (max-width: 720px) {\n  .header-box h2 {\n    display: none; }\n  .header-box h4 {\n    display: block; }\n  .bill-table {\n    overflow-x: scroll; } }\n',""])},320:function(e,t,n){var a=n(321);"string"==typeof a&&(a=[[e.i,a,""]]);n(60)(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},321:function(e,t,n){(e.exports=n(59)(!1)).push([e.i,".popup-modal {\n  background-color: rgba(244, 250, 250, 0.5);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 1;\n  margin-bottom: 0; }\n  .popup-modal .popup-close {\n    margin: 50px;\n    font-size: 3em; }\n    .popup-modal .popup-close .close-modal:hover {\n      color: #698d8d;\n      cursor: pointer; }\n  .popup-modal .popup-modalbody {\n    position: absolute;\n    top: 100px;\n    font-size: 1.5rem;\n    padding: 10px; }\n",""])},322:function(e,t,n){var a=n(323);"string"==typeof a&&(a=[[e.i,a,""]]);n(60)(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},323:function(e,t,n){(e.exports=n(59)(!1)).push([e.i,".calcbody {\n  padding: 10px;\n  border-radius: 2px;\n  background-color: #80cbc4; }\n  .calcbody .display {\n    border: 1px solid #1b7c72;\n    border-radius: 2px;\n    height: 70px;\n    margin-top: 10px;\n    margin-bottom: 5px;\n    background-color: #c9e4e1; }\n    .calcbody .display .displayText {\n      color: #263238;\n      font-weight: 700;\n      word-wrap: break-word;\n      text-align: right;\n      margin: 2px 0 0 0; }\n  .calcbody .buttonsContainer {\n    margin-bottom: 10px;\n    padding: 0; }\n    .calcbody .buttonsContainer .leftContainer {\n      padding: 0; }\n    .calcbody .buttonsContainer .clearbtnContainer, .calcbody .buttonsContainer .numberbtnContainer {\n      padding: 0 6px 0 0; }\n      .calcbody .buttonsContainer .clearbtnContainer .numberbtnBox, .calcbody .buttonsContainer .numberbtnContainer .numberbtnBox {\n        margin-bottom: 0; }\n    .calcbody .buttonsContainer .ops {\n      padding: 0; }\n    .calcbody .buttonsContainer .btn {\n      margin: 5px 0;\n      width: 100%;\n      border-radius: 2px;\n      color: white;\n      font-weight: 500;\n      background-color: #1b7c72;\n      transition: all 0.3s; }\n    .calcbody .buttonsContainer .btnplus {\n      height: 82px; }\n",""])},324:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(123),o=n.n(r),i=(n(295),n(298),n(299),n(45)),c=n.n(i),s=function(e){var t=e.payfrom,n=e.payto,a=e.type,r=e.amount,o=e.paid,i=e.id,c=e.added,s=e.toggleModal,u=e.note,p=o?l.a.createElement("input",{id:"checkbox",onChange:e.checkbox.bind(void 0,i),type:"checkbox",defaultChecked:!0}):l.a.createElement("input",{id:"checkbox",onChange:e.checkbox.bind(void 0,i),type:"checkbox"});return l.a.createElement("tr",null,l.a.createElement("td",null,new Date(c).toLocaleString().split(",")[0]),l.a.createElement("td",null,t),l.a.createElement("td",null,n),l.a.createElement("td",null,a),l.a.createElement("td",null,"$ ",(r/100).toFixed(2)),l.a.createElement("td",null,u),l.a.createElement("td",{className:"center"},p),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){s(e)},className:"waves-effect waves-light btn-small teal lighten-3"},l.a.createElement("i",{className:"fas fa-pencil-alt"}))))};function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=function(e){var t=e.col,n=void 0===t?"s12":t,a=e.list,r=e.checkbox,o=e.toggleModal,i=a.map(function(e){return l.a.createElement(s,u({},e,{key:e.id,checkbox:r,toggleModal:o}))});return l.a.createElement("div",{className:"bill-table ".concat(n)},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",{className:"teal lighten-4 blue-grey-text text-darken-3"},l.a.createElement("th",null,"DATE"),l.a.createElement("th",null,"PAY FROM"),l.a.createElement("th",null,"PAY TO"),l.a.createElement("th",null,"TYPE"),l.a.createElement("th",null,"AMOUNT"),l.a.createElement("th",null,"NOTE"),l.a.createElement("th",null,"COMPLETE"),l.a.createElement("th",null,"UPDATE"))),l.a.createElement("tbody",null,i)))},m=(n(320),function(e){var t=e.modal,n=e.close,a=e.children;return t?l.a.createElement("div",{className:"popup-modal row"},l.a.createElement("div",{className:"popup-close right"},l.a.createElement("i",{className:"fas fa-times close-modal",onClick:n,title:"Close"})),l.a.createElement("div",{className:"popup-modalbody col s10 m6 l4 offset-s1 offset-m3 offset-l4"},a)):null});function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n(322);var g=function(e){function t(e){var n,a;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this,(n=!(a=b(t).call(this,e))||"object"!==d(a)&&"function"!=typeof a?v(this):a).state={calcItems:[],equalClick:0,numberClicked:!1,opClick:!1,decimalClicked:!1,answer:0},n.handleNumber=n.handleNumber.bind(v(v(n))),n.handleDecimal=n.handleDecimal.bind(v(v(n))),n.handleEqual=n.handleEqual.bind(v(v(n))),n.handleExport=n.handleExport.bind(v(v(n))),n.handleOps=n.handleOps.bind(v(v(n))),n.resetAll=n.resetAll.bind(v(v(n))),n.clearDigits=n.clearDigits.bind(v(v(n))),n.percent=n.percent.bind(v(v(n))),n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a.Component),n=t,(r=[{key:"handleNumber",value:function(e){var t=e.target.value,n=this.state,a=n.calcItems,l=n.equalClick;if(1<=l)this.resetAll(),this.pushCalcItems(t);else if(!isNaN(a[a.length-1])&&l<1){var r=a[a.length-1]+t,o=h(a);o.splice(a.length-1,1,r),this.setState({calcItems:o})}else this.pushCalcItems(t);this.setState({numberClicked:!0,opClick:!1})}},{key:"pushCalcItems",value:function(e){this.setState({calcItems:h(this.state.calcItems).concat([e])})}},{key:"handleDecimal",value:function(){var e=this.state,t=e.numberClicked,n=e.decimalClicked,a=e.opClick,l=e.calcItems;if(t&&!n){var r=l[l.length-1]+".",o=h(l);o.splice(l.length-1,1,r),this.setState({calcItems:o})}else(a||!l.length||!t&&"."!=l[l.length-1][[l.length-1].length-1])&&this.pushCalcItems("0.");this.setState({decimalClicked:!0})}},{key:"handleOps",value:function(e){var t=this.state.calcItems,n=t[t.length-1];if(isNaN(n)){if(isNaN(n)&&0!=t.length){var a=h(t);a.splice(t.length-1,1,e.target.id),this.setState({calcItems:a})}}else this.pushCalcItems(e.target.id);this.setState({opClick:!0,numberClicked:!1,decimalClicked:!1,equalClick:0})}},{key:"handleEqual",value:function(){this.setState({equalClick:this.state.equalClick+1});var e=this.state.calcItems;e?e.length&&this.mathFilter(e):this.pushCalcItems("0")}},{key:"handleExport",value:function(){this.props.getAmount(this.state.answer)}},{key:"mathFilter",value:function(e){var t,n,a,l=this.opSequenceAndParse(e),r=l[0];if(3<=l.length)for(var o=1;o<l.length-1;o+=2)t=l[o],n=l[o+1],r=a=this.doMath(r,n,t);else 2===l.length?(n=r,t=l[1],a=this.doMath(r,n,t)):1===l.length&&(a=l[0]);isNaN(a)||a%1==0||(a=parseFloat(a.toPrecision(8))),this.setState({calcItems:[a],answer:a})}},{key:"opSequenceAndParse",value:function(e){for(var t,n=0;n<e.length;n++)if(n%2==0)e[n]=parseFloat(e[n]);else if(("*"===e[n]||"/"===e[n])&&2<e.length){var a=e[n],l=e[n-1],r=parseFloat(e[n+1]);t=this.doMath(l,r,a),e.splice(n-1,3,t)}return e}},{key:"doMath",value:function(e,t,n){var a;return"+"===n?a=e+t:"-"===n?a=e-t:"*"===n?a=e*t:"/"===n&&(a=0===t?"Error":e/t),a}},{key:"resetAll",value:function(){this.setState({calcItems:[],equalClick:0,numberClicked:!1,opClick:!1,decimalClicked:!1,answer:null})}},{key:"clearDigits",value:function(){var e=this.state,t=e.calcItems,n=e.equalClick,a=t[t.length-1]+"";if(!isNaN(a)&&1<a.length){var l=a.slice(0,-1),r=h(t);r.splice(t.length-1,1,l),this.setState({calcItems:r})}else if(1<n)this.state({calcItems:[]});else{var o=h(t);o.pop(),this.setState({calcItems:o})}}},{key:"percent",value:function(){var e=this.state.calcItems,t=e[e.length-1]/100;this.setState({calcItems:[t],answer:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.calcItems,r=t.equalClick,o=[7,8,9,4,5,6,1,2,3,0].map(function(t){return l.a.createElement("div",{className:"numberbtnContainer col s4",key:t},l.a.createElement("button",{className:"btn numberbtn",onClick:e.handleNumber,value:t},t))});return l.a.createElement(a.Fragment,null,l.a.createElement("div",{className:"calcbody col s12 m8"},l.a.createElement("div",{className:"displayArea"},l.a.createElement("div",{className:"display col s12"},l.a.createElement("p",{className:"displayText"},n.join("")))),l.a.createElement("div",{className:"buttonsContainer col s12"},l.a.createElement("div",{className:"leftContainer col s8"},l.a.createElement("div",{className:"numberbtnBox"},l.a.createElement("div",{className:"clearbtnContainer col s4"},l.a.createElement("button",{className:"btn clearbtnC",onClick:this.resetAll},"AC")),l.a.createElement("div",{className:"clearbtnContainer col s4"},l.a.createElement("button",{className:"btn clearbtnCE",onClick:this.clearDigits},"CE")),l.a.createElement("div",{className:"clearbtnContainer col s4"},l.a.createElement("button",{className:"btn percent",onClick:this.percent},"%")),o,l.a.createElement("div",{className:"numberbtnContainer col s4"},l.a.createElement("button",{className:"btn",id:"decimal",value:".",onClick:this.handleDecimal},".")),l.a.createElement("div",{className:"numberbtnContainer col s4"},l.a.createElement("button",{className:"btn",id:"equalbtn",value:"=",onClick:this.handleEqual},"=")))),l.a.createElement("div",{className:"ops col s4"},l.a.createElement("button",{className:"btn opsbtn",id:"/",onClick:this.handleOps},"÷"),l.a.createElement("button",{className:"btn opsbtn",id:"*",onClick:this.handleOps},"×"),l.a.createElement("button",{className:"btn opsbtn",id:"-",onClick:this.handleOps},"-"),l.a.createElement("button",{className:"btn opsbtn btnplus",id:"+",onClick:this.handleOps},"+")))),l.a.createElement("div",{className:"export right"},r?l.a.createElement("button",{className:"btn export-answer",onClick:this.handleExport,title:"Export answer to amount"},l.a.createElement("i",{className:"fas fa-file-import"})," Export"):null))}}])&&f(n.prototype,r),t}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=function(e){function t(e){var n,a;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this,(n=!(a=C(t).call(this,e))||"object"!==E(a)&&"function"!=typeof a?S(this):a).state={payfrom:"",payto:"",amount:"",type:"default",note:"",error:"",message:"",modal:!1},n.handleInput=n.handleInput.bind(S(S(n))),n.handleSubmit=n.handleSubmit.bind(S(S(n))),n.handleSelect=n.handleSelect.bind(S(S(n))),n.toggleModal=n.toggleModal.bind(S(S(n))),n.getAmontFromCalc=n.getAmontFromCalc.bind(S(S(n))),n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,l.a.Component),n=t,(r=[{key:"handleInput",value:function(e){var t,n=e.target,a=n.name,l=n.value;this.setState((x(t={},a,l),x(t,"message",""),t))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.payfrom,a=t.payto,l=t.amount,r=t.type;n&&a&&!isNaN(l)&&"default"!==r?(this.props.callBack(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){x(e,t,n[t])})}return e}({},this.state)),this.resetInputs(),this.setState({message:"Bill record added!"})):"default"===r?this.setState({error:"Please select payment type"}):this.setState({error:"Please input numbers for amount",amount:""})}},{key:"resetInputs",value:function(){var e=this;this.setState({payfrom:"",payto:"",amount:"",type:"default",note:"",error:""},function(){return M.FormSelect.init(e.formSelect)})}},{key:"handleSelect",value:function(e){this.setState({type:e.target.value})}},{key:"toggleModal",value:function(){this.setState({modal:!this.state.modal})}},{key:"getAmontFromCalc",value:function(e){e&&this.setState({modal:!1,amount:e},function(){return M.updateTextFields()})}},{key:"componentDidMount",value:function(){M.FormSelect.init(this.formSelect),M.updateTextFields()}},{key:"render",value:function(){var e=this,t=this.props.col,n=void 0===t?"s12":t,r=this.state,o=r.payfrom,i=r.payto,c=r.amount,s=r.error,u=r.type,p=r.note,d=r.message,h=r.modal;return l.a.createElement(a.Fragment,null,l.a.createElement("div",{className:"add-bills ".concat(n)},l.a.createElement("form",{onSubmit:this.handleSubmit,action:""},l.a.createElement("div",{className:"center addbill-header"},l.a.createElement("h6",{className:"teal lighten-4 add-header blue-grey-text text-darken-3",title:"Add Bills"},"ADD BILL")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{name:"payfrom",autoComplete:"off",id:"payfrom",type:"text",value:o,onChange:this.handleInput,maxLength:"20",required:!0}),l.a.createElement("label",{htmlFor:"payfrom"},"Pay From")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{name:"payto",autoComplete:"off",id:"payto",type:"text",value:i,onChange:this.handleInput,maxLength:"20",required:!0}),l.a.createElement("label",{htmlFor:"payto"},"Pay To")),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{className:"active",htmlFor:"amount"},"Amount"),l.a.createElement("input",{name:"amount",autoComplete:"off",id:"amount",type:"text",value:c,onChange:this.handleInput,maxLength:"20",required:!0})),l.a.createElement("div",{className:"input-field"},l.a.createElement("select",{value:u,name:"type",onChange:this.handleSelect,ref:function(t){e.formSelect=t},required:!0},l.a.createElement("option",{value:"default",disabled:!0},"Select Type"),l.a.createElement("option",{value:"Credit Card"},"Credit Card"),l.a.createElement("option",{value:"Cash"},"Cash"),l.a.createElement("option",{value:"Check"},"Check"),l.a.createElement("option",{value:"Wire"},"Wire Transfer")),l.a.createElement("label",{htmlFor:""},"Select Payment Type")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{name:"note",autoComplete:"off",id:"note",type:"text",value:p,onChange:this.handleInput,maxLength:"30",title:"Add some notes"}),l.a.createElement("label",{htmlFor:"note"},"Note")),l.a.createElement("div",{className:"btn teal lighten-2",onClick:this.toggleModal,title:"Open calculator"},l.a.createElement("i",{className:"fas fa-calculator"})),l.a.createElement("button",{className:"btn teal lighten-1",title:"Add record to table"},"Add ",l.a.createElement("i",{className:"fas fa-check"})),l.a.createElement("div",{className:"message"},l.a.createElement("h6",{className:"teal-text"},d)),l.a.createElement("h6",{className:"red-text"},s))),l.a.createElement(m,{modal:h,close:this.toggleModal},l.a.createElement(g,{ref:"cal",getAmount:this.getAmontFromCalc})))}}])&&k(n.prototype,r),t}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var B=function(e){function t(e){var n,a;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this,(n=!(a=I(t).call(this,e))||"object"!==O(a)&&"function"!=typeof a?A(this):a).state={payfrom:"",payto:"",amount:"",type:"",note:"",id:null,error:""},n.handleInput=n.handleInput.bind(A(A(n))),n.handleSubmit=n.handleSubmit.bind(A(A(n))),n.handleSelect=n.handleSelect.bind(A(A(n))),n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,a.Component),n=t,(r=[{key:"handleInput",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(P({},n,a))}},{key:"handleSelect",value:function(e){this.setState({type:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.payfrom,a=t.payto,l=t.amount,r=t.type;n&&a&&!isNaN(l)&&"default"!==r?this.props.updateBill(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){P(e,t,n[t])})}return e}({},this.state)):this.setState({error:"Please enter correct updates",amount:""})}},{key:"componentDidMount",value:function(){var e=this.props.updateData,t=e.payfrom,n=e.payto,a=e.amount,l=e.type,r=e.note,o=e.id;this.setState({payfrom:t,payto:n,amount:a/100,type:l,note:r,id:o}),M.FormSelect.init(this.formSelect)}},{key:"render",value:function(){var e=this,t=this.props,n=t.toggleModal,a=t.deleteBill,r=this.state,o=r.payfrom,i=r.payto,c=r.amount,s=r.type,u=r.note,p=r.error,d=r.id;return l.a.createElement(m,{modal:!0,close:n},l.a.createElement("div",{className:"update-form card"},l.a.createElement("form",{onSubmit:this.handleSubmit,action:""},l.a.createElement("div",{className:"center updatebill-header"},l.a.createElement("h5",{className:"add-header blue-grey-text text-darken-3"},"Update ",l.a.createElement("i",{className:"fas fa-pen-alt"}))),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{name:"payfrom",autoComplete:"off",id:"payfrom",type:"text",value:o,onChange:this.handleInput,maxLength:"20",required:!0}),l.a.createElement("label",{className:"active",htmlFor:"up-payfrom"},"Pay From")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{name:"payto",autoComplete:"off",id:"payto",type:"text",value:i,onChange:this.handleInput,maxLength:"20",required:!0}),l.a.createElement("label",{className:"active",htmlFor:"up-payto"},"Pay To")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{name:"amount",autoComplete:"off",id:"amount",type:"text",value:c,onChange:this.handleInput,maxLength:"20",required:!0}),l.a.createElement("label",{className:"active",htmlFor:"up-amount"},"Amount")),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{className:"active",htmlFor:""},"Select Payment Type"),l.a.createElement("select",{value:s,name:"type",onChange:this.handleSelect,ref:function(t){e.formSelect=t},required:!0},l.a.createElement("option",{value:"Credit Card"},"Credit Card"),l.a.createElement("option",{value:"Cash"},"Cash"),l.a.createElement("option",{value:"Check"},"Check"),l.a.createElement("option",{value:"Wire"},"Wire Wire Transfer"))),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{name:"note",autoComplete:"off",id:"note",type:"text",value:u,onChange:this.handleInput,maxLength:"30",title:"Add some notes"}),l.a.createElement("label",{className:"active",htmlFor:"up-note"},"Note")),l.a.createElement("h6",{className:"red-text"},p),l.a.createElement("div",{className:"btn red lighten-2",onClick:function(){return a(d)},title:"Delete"},l.a.createElement("i",{className:"fas fa-trash-alt"})),l.a.createElement("button",{className:"btn teal lighten-1 right",title:"Update",onClick:this.handleSubmit},"Update ",l.a.createElement("i",{className:"fas fa-check"})))))}}])&&j(n.prototype,r),t}();function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t,n,a,l,r,o){try{var i=e[r](o),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(a,l)}function F(e){return function(){var t=this,n=arguments;return new Promise(function(a,l){var r=e.apply(t,n);function o(e){T(r,a,l,o,i,"next",e)}function i(e){T(r,a,l,o,i,"throw",e)}o(void 0)})}}function q(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var U=function(e){function t(e){var n,a;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this,(n=!(a=R(t).call(this,e))||"object"!==D(a)&&"function"!=typeof a?H(this):a).state={billsList:[],error:"",modal:!1,updateData:{}},n.addBill=n.addBill.bind(H(H(n))),n.deleteBill=n.deleteBill.bind(H(H(n))),n.checkbox=n.checkbox.bind(H(H(n))),n.updateBill=n.updateBill.bind(H(H(n))),n.toggleModal=n.toggleModal.bind(H(H(n))),n}var n,r,o,i,s,u,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.getBillsData()}},{key:"addBill",value:(m=F(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.post("/api/bills",t);case 3:this.getBillsData(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),this.errorHandle();case 9:case"end":return e.stop()}},e,this,[[0,6]])})),function(e){return m.apply(this,arguments)})},{key:"getBillsData",value:(u=F(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("/api/bills");case 3:(t=e.sent).data.success&&this.setState({billsList:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.errorHandle();case 10:case"end":return e.stop()}},e,this,[[0,7]])})),function(){return u.apply(this,arguments)})},{key:"deleteBill",value:(s=F(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.delete("/api/bills/".concat(t));case 3:this.getBillsData(),this.toggleModal(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.errorHandle();case 10:case"end":return e.stop()}},e,this,[[0,7]])})),function(e){return s.apply(this,arguments)})},{key:"checkbox",value:(i=F(regeneratorRuntime.mark(function e(t,n){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t,paid:n.target.checked?1:0},e.prev=1,e.next=4,c.a.post("/api/bills/checkbox",a);case 4:this.getBillsData(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),this.errorHandle();case 10:case"end":return e.stop()}},e,this,[[1,7]])})),function(e,t){return i.apply(this,arguments)})},{key:"updateBill",value:(o=F(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.post("/api/bills/update",t);case 3:this.getBillsData(),this.toggleModal(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.errorHandle();case 10:case"end":return e.stop()}},e,this,[[0,7]])})),function(e){return o.apply(this,arguments)})},{key:"errorHandle",value:function(){this.setState({message:"Error: Unable to retrieving bill data"})}},{key:"toggleModal",value:function(e){this.setState({modal:!this.state.modal,updateData:e||null})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.billsList,a=e.modal,r=e.updateData;return l.a.createElement("div",null,l.a.createElement("div",{className:"header-box"},l.a.createElement("h2",{className:"center page-header  blue-grey-text text-darken-4"},"Bill Record Table ",l.a.createElement("i",{className:"fas fa-comment-dollar"})),l.a.createElement("h4",{className:"center page-header  blue-grey-text text-darken-4"},"Bill Record Table ",l.a.createElement("i",{className:"fas fa-comment-dollar"}))),l.a.createElement("h5",{className:"red-text text-darken-2 center"},t),l.a.createElement("div",{className:"row"},l.a.createElement(p,{list:n,toggleModal:this.toggleModal,checkbox:this.checkbox,col:"col s12 l9"}),l.a.createElement(w,{col:"col s12 l3 ",callBack:this.addBill})),a?l.a.createElement(B,{display:a,updateData:r,toggleModal:this.toggleModal,deleteBill:this.deleteBill,updateBill:this.updateBill}):null)}}])&&q(n.prototype,r),t}();o.a.render(l.a.createElement(U,null),document.getElementById("root"))}});