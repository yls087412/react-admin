(this["webpackJsonpreact-adminv4"]=this["webpackJsonpreact-adminv4"]||[]).push([[4],{226:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a,l,o,i=n(9),r=n(1),c=n(2),d=n(3),s=n(4),u=n(0),p=n.n(u),f=n(19),h=n(82),y=n(5),v=n(7),k=(n(47),n(257)),m=(n(22),n(26)),E=(n(124),n(74)),b=(n(52),n(39)),x=(n(10),n(258),n(259)),g=n(11);n(260);var O=x.default.TreeNode,K=Object(f.a)({modal:{title:"\u6807\u7b7e",width:500}})((o=l=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={expandAll:!1,expandedKeys:[],checkedKeysStr:"",editKey:null,editValue:""},e.handleOk=function(){var t=e.props.onOk,n=e.state.checkedKeys;t&&t(n)},e.handleBlur=function(){setTimeout((function(){e.setState({editKey:null,editValue:""})}),100)},e.handleSave=function(){var t=e.state,n=t.editKey,a=t.editValue,l=e.props.onSave;console.log(n,a),l&&l(n,a)},e.handleDelete=function(t){var n=e.props.onDelete;n&&n(t)},e.handleAdd=function(t){var n=e.props.onAdd;n&&n(t)},e.handleExpandAll=function(){var t=e.props.options,n=!e.state.expandAll,a=n?t.map((function(e){return e.key})):[];e.setState({expandAll:n,expandedKeys:a})},e.renderTreeNodes=function(){var t=e.props.options,n=e.state.editKey;if(!(null===t||void 0===t?void 0:t.length))return null;return function a(l){return l.map((function(l){var o=l.key,i=l.title,r=t.filter((function(e){return e.parentKey===o})),c=n===o,d=c?p.a.createElement(b.default,{id:"input_".concat(o),defaultValue:i,autoFocus:!0,onBlur:e.handleBlur,onChange:function(t){return e.setState({editValue:t.target.value})},onClick:function(e){e.preventDefault(),e.stopPropagation()}}):i;return d=p.a.createElement("div",{className:"tree-node-title-1C9y4"},p.a.createElement("div",{className:"title-2NIw9"},d),p.a.createElement("div",{className:"icons-28gL2",onClick:function(e){e.preventDefault(),e.stopPropagation()}},c?p.a.createElement(v.SaveOutlined,{style:{color:"green"},onClick:function(){return e.handleSave()}}):p.a.createElement(p.a.Fragment,null,p.a.createElement(v.EditOutlined,{style:{color:"#f1882a"},onClick:function(){return e.setState({editKey:o,editValue:i})}}),p.a.createElement(E.default,{title:"\u60a8\u786e\u5b9a\u5220\u9664\u6807\u7b7e\u300c".concat(i,"\u300d\u5417"),onConfirm:function(){return e.handleDelete(o)}},p.a.createElement(v.DeleteOutlined,{style:{color:"red"}})),p.a.createElement(v.PlusOutlined,{style:{color:"green"},onClick:function(){return e.handleAdd(o)}})))),(null===r||void 0===r?void 0:r.length)?p.a.createElement(O,{key:o,title:d},a(r)):p.a.createElement(O,{key:o,title:d})}))}(t.filter((function(e){return!e.parentKey})))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.onCancel,a=t.options,l=this.state,o=l.expandedKeys,i=l.checkedKeys,r=l.expandAll;return p.a.createElement(g.g,{surplusSpace:!0,onOk:this.handleOk,onCancel:n},(null===a||void 0===a?void 0:a.length)?p.a.createElement("div",{className:"box-3JdXu"},p.a.createElement("div",{className:"top-2Uo4h"},p.a.createElement(m.default,{className:"expand-all-3_p8B",size:"small",type:"primary",onClick:function(){return e.handleExpandAll()}},r?"\u5168\u90e8\u6536\u8d77":"\u5168\u90e8\u5c55\u5f00")),p.a.createElement("div",{className:"content-kLBng"},p.a.createElement(x.default,{selectable:!1,defaultExpandAll:!0,expandedKeys:o,onExpand:function(t){return e.setState({expandedKeys:t})},checkStrictly:!0,checkable:!0,checkedKeys:i,onCheck:function(t){var n=t.checked;e.setState({checkedKeys:n})}},this.renderTreeNodes()))):p.a.createElement("div",{className:"empty-2lz4o"},p.a.createElement(k.default,{description:"\u6682\u65e0\u4efb\u4f55\u6807\u7b7e"},p.a.createElement(m.default,{type:"primary",onClick:function(){return e.handleAdd()}},p.a.createElement(v.PlusOutlined,null)," \u521b\u5efa\u6807\u7b7e"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.checkedKeys,a=void 0===n?[]:n,l=e.options,o=a.join(","),r=null;if(o!==t.checkedKeysStr&&((r={}).checkedKeys=a,r.expandedKeys=a,r.checkedKeysStr=o),null===l||void 0===l?void 0:l.length){var c,d=(null===(c=r)||void 0===c?void 0:c.expandedKeys)||[];l.forEach((function(e){var n=e.isNew,a=e.parentKey;n&&!t.expandedKeys.includes(a)&&d.push(a)})),r||(r={}),r.expandedKeys=[].concat(Object(i.a)(d),Object(i.a)(t.expandedKeys))}return r}}]),n}(p.a.Component),l.defaultProps={options:[],checkedKeys:[]},a=o))||a,S=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={visible:!0},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.style,a=t.value,l=t.options,o=t.onChange,i=t.onAdd,r=t.onDelete,c=t.onSave,d=this.state.visible,s="";return a&&Array.isArray(a)&&a.length&&(s=l.filter((function(e){return a.includes(e.key)})).map((function(e){return e.title})).join(",")),p.a.createElement("div",{style:Object(y.a)({},{height:28,border:"1px solid #e8e8e8",width:200},{},n),title:s},p.a.createElement("div",{style:{display:"flex",alignItems:"center",paddingLeft:8,width:"100%",height:"100%"}},p.a.createElement("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},s),p.a.createElement(v.EditOutlined,{style:{flex:0,padding:"0 8px",cursor:"pointer"},onClick:function(){return e.setState({visible:!0})}})),p.a.createElement(K,{visible:d,onOk:function(t){o(t),e.setState({visible:!1})},onCancel:function(){return e.setState({visible:!1})},checkedKeys:a,options:l,onAdd:i,onDelete:r,onSave:c}))}}]),n}(p.a.Component);S.defaultProps={options:[]};var C,j=n(54),A=[{key:"1",title:"\u6211\u662f\u6807\u7b7e"},{key:"2",parentKey:"1",title:"\u7edf\u4e00\u90ae\u7bb1"},{key:"3",title:"\u6d2a\u9c81\u5a1c\u5a1c"},{key:"4",title:"Java"},{key:"5",title:"\u53d8\u5f62\u91d1\u521a"},{key:"6",title:"Good1"},{key:"7",title:"Good2"},{key:"8",title:"Good3"},{key:"9",title:"Good4"},{key:"10",title:"Good5"},{key:"11",title:"Good6"},{key:"12",title:"Good7"},{key:"13",title:"Good8"}],w=Object(f.a)({path:"/aa"})(C=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={value:[],options:[]},e.handleChange=function(t){e.setState({value:t})},e.handleAdd=function(t){var n=e.state.options;n.push({parentKey:t,key:Object(j.v4)(),title:"\u65b0\u589e\u6807\u7b7e",isNew:!0}),e.setState({options:Object(i.a)(n)})},e.handleDelete=function(t){var n=e.state.options.filter((function(e){return e.key!==t}));e.setState({options:n})},e.handleSave=function(t,n){var a=e.state.options,l=a.find((function(e){return e.key===t}));console.log(t,n,l),l&&(l.title=n),e.setState({options:Object(i.a)(a)})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({options:A})}},{key:"render",value:function(){var e=this,t=this.state,n=t.options,a=t.value;return p.a.createElement(h.a,null,p.a.createElement(S,{value:a,onChange:this.handleChange,options:n,onAdd:function(t){return e.handleAdd(t)},onDelete:function(t){return e.handleDelete(t)},onSave:function(t,n){return e.handleSave(t,n)}}))}}]),n}(p.a.Component))||C},257:function(e,t,n){e.exports=n(6)(115)},258:function(e,t,n){},259:function(e,t,n){e.exports=n(6)(708)},260:function(e,t,n){e.exports={empty:"empty-2lz4o","expand-all":"expand-all-3_p8B",box:"box-3JdXu",top:"top-2Uo4h",content:"content-kLBng","tree-node-title":"tree-node-title-1C9y4",title:"title-2NIw9",icons:"icons-28gL2"}}}]);
//# sourceMappingURL=4.734ed774.chunk.js.map