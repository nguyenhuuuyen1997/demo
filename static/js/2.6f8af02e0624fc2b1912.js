webpackJsonp([2],{Auc4:function(t,e){},"KiY+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mtWM"),i=a.n(n),o={name:"row",data:function(){return{item:{},perPage:10,file:null,keyword:"",name:"",notiteMsg:"",img:null,pass:"",email:"",currentPage:1,lengthRow:10,results:[],decen:[{value:"người dùng chung",text:"người dùng chung"},{value:"Quản trị viên",text:"Quản trị viên"}]}},mounted:function(){var t=this;i.a.get("http://localhost:8000/user/get").then(function(e){t.results=e.data}).catch(function(t){console.log(t)})},methods:{additem:function(){var t=this;i.a.post("http://localhost:8000/user/additem",this.item).then(function(e){console.log(e),0==e.data.success?(t.notiteMsg="Tên hoặc email đã tồn tại",t.$bvModal.show("bv-modal-success")):(t.notiteMsg="Thêm tài khoản thành công!",t.$bvModal.show("bv-modal-success"))})},edititem:function(t){var e=t;console.log(e),this.item=e},updateitem:function(t){var e=this;i.a.post("http://localhost:8000/user/update",this.item).then(function(t){0==t.data.success?(e.notiteMsg="Trùng email hãy nhập lại!",e.$bvModal.show("bv-modal-success")):(e.notiteMsg="Thay đổi thành công!",e.$bvModal.show("bv-modal-success"))})},load:function(){window.location.reload()},deleteitem:function(t){var e=this;i.a.post("http://localhost:8000/user/delete",t).then(function(t){e.item={},window.location.reload()})}},computed:{fields:function(){return[{key:"index",label:"STT",sortable:!0,thClass:"col1"},{key:"name",label:this.$t("taikhoan.name"),sortable:!0},{key:"pass",label:this.$t("taikhoan.pass"),sortable:!0},{key:"email",label:this.$t("taikhoan.email"),sortable:!0},{key:"decentralization",label:this.$t("taikhoan.dece"),sortable:!0},{key:"image",label:this.$t("taikhoan.img"),sortable:!0},{key:"action",label:this.$t("taikhoan.acti"),sortable:!1,thClass:"col100"}]},items:function(){var t=this;return this.keyword?this.results.filter(function(e){return e.name.includes(t.keyword)||e.email.includes(t.keyword)}):this.results},rows:function(){return this.items.length}},watch:{lengthRow:function(t){this.perPage=this.lengthRow}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"wapper"}},[a("div",[a("h3",[t._v(t._s(t.$t("taikhoan.qltk"))+" ")]),t._v(" "),a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.additem(e)}}},[a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{prepend:t.$t("taikhoan.dn")}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.name,expression:"item.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",required:"",placeholder:t.$t("pla")},domProps:{value:t.item.name},on:{input:function(e){e.target.composing||t.$set(t.item,"name",e.target.value)}}})])],1)],1),t._v(" "),a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{prepend:t.$t("taikhoan.mk")}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.pass,expression:"item.pass"}],staticClass:"form-control",attrs:{type:"text",name:"pass",required:"",placeholder:t.$t("pla")},domProps:{value:t.item.pass},on:{input:function(e){e.target.composing||t.$set(t.item,"pass",e.target.value)}}})])],1)],1),t._v(" "),a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{prepend:t.$t("taikhoan.em")}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.email,expression:"item.email"}],staticClass:"form-control",attrs:{type:"text",name:"email",required:"",placeholder:t.$t("pla")},domProps:{value:t.item.email},on:{input:function(e){e.target.composing||t.$set(t.item,"email",e.target.value)}}})])],1)],1),t._v(" "),a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{prepend:t.$t("taikhoan.st")}},[a("b-form-select",{attrs:{name:"decentralization",options:t.decen},model:{value:t.item.decentralization,callback:function(e){t.$set(t.item,"decentralization",e)},expression:"item.decentralization"}})],1)],1)],1),t._v(" "),a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{prepend:t.$t("taikhoan.anh")}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.img,expression:"item.img"}],staticClass:"form-control",attrs:{type:"text",name:"img",placeholder:t.$t("pla")},domProps:{value:t.item.img},on:{input:function(e){e.target.composing||t.$set(t.item,"img",e.target.value)}}})])],1)],1),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary but"},[t._v(t._s(t.$t("taikhoan.tm")))])])],1)]),t._v(" "),a("div",[a("div",[a("b-row",[a("b-col",{staticStyle:{"text-align":"initial"}},[a("span",[t._v(t._s(t.$t("hienthi")))]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.lengthRow,expression:"lengthRow"}],attrs:{value:"3"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.lengthRow=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"3"}},[t._v("3")]),t._v(" "),a("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),a("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),a("option",{attrs:{value:"30"}},[t._v("30")]),t._v(" "),a("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),a("option",{attrs:{value:"100"}},[t._v("100")])]),t._v(" "),a("span",[t._v(t._s(t.$t("banghi")))])]),t._v(" "),a("b-col",{staticStyle:{"text-align":"right"}},[a("p",[t._v("\n                  "+t._s(t.$t("hienthi"))+" "+t._s(t.$t("banghi"))+"\n                  "),a("strong",[t._v("1 - "+t._s(t.lengthRow))]),t._v(" "+t._s(t.$t("tts"))+"\n                  "),a("strong",[t._v(t._s(t.rows))]),t._v(" "+t._s(t.$t("banghi"))+"\n                ")])])],1),t._v(" "),a("b-row",{staticClass:"seach"},[a("b-col",[a("b-input-group",[a("b-form-input",{attrs:{placeholder:"Search",type:"text"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),t._v(" "),a("b-input-group-text",{attrs:{slot:"append"},slot:"append"},[a("b-btn",{staticClass:"p-0",attrs:{disabled:!t.keyword,variant:"link"},on:{click:function(e){t.keyword=""}}},[a("i",{staticClass:"fa fa-remove"})])],1)],1)],1)],1),t._v(" "),a("div",[a("b-table",{attrs:{striped:"",hover:"",id:"my-table",items:t.items,fields:t.fields,keyword:t.keyword,"per-page":t.perPage,"current-page":t.currentPage},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v("\n                  "+t._s(e.index+1)+"\n                ")]}},{key:"cell(image)",fn:function(t){return[a("iframe",{attrs:{src:t.item.img,alt:"",width:"50",height:"50"}})]}},{key:"cell(action)",fn:function(e){return[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{variant:"success"},on:{click:function(a){return t.edititem(e.item)}}},[t._v("Edit")]),t._v(" "),a("b-button",{attrs:{variant:"outline-primary"},on:{click:function(a){return t.deleteitem(e.item)}}},[t._v("Delete")])]}}])}),t._v(" "),a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)]),t._v(" "),a("b-modal",{attrs:{id:"modal-lg",size:"lg","hide-footer":"",title:"Cập nhập"}},[a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.updateitem(e)}}},[a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{prepend:t.$t("taikhoan.dn")}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.name,expression:"item.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",required:"",placeholder:t.$t("pla")},domProps:{value:t.item.name},on:{input:function(e){e.target.composing||t.$set(t.item,"name",e.target.value)}}})])],1)],1),t._v(" "),a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{prepend:t.$t("taikhoan.mk")}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.pass,expression:"item.pass"}],staticClass:"form-control",attrs:{type:"text",name:"pass",required:"",placeholder:t.$t("pla")},domProps:{value:t.item.pass},on:{input:function(e){e.target.composing||t.$set(t.item,"pass",e.target.value)}}})])],1)],1),t._v(" "),a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{prepend:t.$t("taikhoan.em")}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.email,expression:"item.email"}],staticClass:"form-control",attrs:{type:"text",name:"email",required:"",placeholder:t.$t("pla")},domProps:{value:t.item.email},on:{input:function(e){e.target.composing||t.$set(t.item,"email",e.target.value)}}})])],1)],1),t._v(" "),a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{prepend:t.$t("taikhoan.st")}},[a("b-form-select",{attrs:{name:"decentralization",options:t.decen},model:{value:t.item.decentralization,callback:function(e){t.$set(t.item,"decentralization",e)},expression:"item.decentralization"}})],1)],1)],1),t._v(" "),a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{attrs:{cols:"6"}},[a("b-input-group",{attrs:{prepend:t.$t("taikhoan.anh")}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.item.img,expression:"item.img"}],staticClass:"form-control",attrs:{type:"text",name:"img",placeholder:t.$t("pla")},domProps:{value:t.item.img},on:{input:function(e){e.target.composing||t.$set(t.item,"img",e.target.value)}}})])],1)],1),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-success but"},[t._v("UPDATE")])])],1)]),t._v(" "),a("b-modal",{attrs:{id:"bv-modal-success",title:"Thông báo!","hide-footer":"",noCloseOnEsc:!0,noCloseOnBackdrop:!0,centered:!0}},[a("div",{staticClass:"d-block text-center"},[a("span",{staticClass:"title_success",domProps:{innerHTML:t._s(t.notiteMsg)}}),t._v(" "),a("div",{staticClass:"popup-footer"},[a("b-col",{attrs:{cols:"12"}},[a("b-button",{staticClass:"mt-3",attrs:{type:"button",variant:"danger"},on:{click:function(e){t.load(),t.$bvModal.hide("bv-modal-success")}}},[t._v("Đóng")])],1)],1)])])],1)},staticRenderFns:[]};var r=a("VU/8")(o,s,!1,function(t){a("Auc4")},null,null);e.default=r.exports}});
//# sourceMappingURL=2.6f8af02e0624fc2b1912.js.map