webpackJsonp([23,24],{294:/*!****************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./example/views/form.vue ***!
  \****************************************************************************************************************************************************************/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(8),i=[{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]},{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]},{value:"china",label:"中国",children:[{value:"sichuan",label:"四川",children:[{value:"chegndu",label:"成都"},{value:"deyang",label:"德阳"}]}]},{value:"America",label:"美国",children:[{value:"California",label:"加利福尼亚",children:[{value:"lake",label:"湖"},{value:"Los Angeles",label:"洛杉矶"}]},{value:"Delaware",label:"特拉华",children:[{value:"Dover",label:"多佛"}]}]}];t["default"]={data:function(){var e=this;return{textArea:{value:"",minHeight:100,autoResize:!0,lineHeight:14,input:function(){console.log("textarea is inputing")},change:function(){console.log("textarea is changed")}},number:{value:0,step:.1,format:2,min:-5,max:10},audio:{title:"ninelie-Aimer",src:"http://covteam.u.qiniudn.com/test2.mp3",poster:"http://covteam.u.qiniudn.com/ka2.jpg",options:{preload:!1,autoplay:!1,rate:1,loop:!1,volume:.5}},breadcrumb:{separator:"/",list:[{icon:"ion-home",value:"首页",route:{path:"/"}},{icon:"ion-document",value:"订单",route:{path:"/button"}},{value:"订单查询",route:{path:"/form"}}]},TableData:{options:{select:!0},columns:[{index:1,key:"name",value:"姓名"},{index:2,key:"age",value:"年龄"},{index:3,key:"wechat",value:"微信"}],actions:[{type:"button",text:"编辑",func:function(t,r){e.editTable(r)}},{type:"button",text:"删除",func:function(t,r){console.log(r),e.removeTableItem(r)}}],tableData:[{id:1,name:"王尼玛",age:"33",wechat:"wangnima",checkbox:{disabled:!1,checked:!1,text:""}},{id:2,name:"赵铁柱",age:"26",wechat:"Iron-column-zhao",checkbox:{disabled:!1,checked:!1,text:""}},{id:3,name:"张全蛋",age:"27",wechat:"Michael Jack",checkbox:{disabled:!1,checked:!1,text:""}}]},cascader:{options:i,valueArr:[]},timeline:[{icon:"ion-alert-circled",color:"#2db7f5",text:"创建服务现场 2015-09-01"},{color:"#2db7f5",text:"创建服务现场 2015-09-01"},{color:"red",text:"创建服务现场 2015-09-01"}],timePicker:"",datePicker:{value:"",options:{timePicker:!0,format:"YYYY-MM-DD",monthList:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],weekList:["一","二","三","四","五","六","日"],limit:{weekDay:{availables:[1,2,3,4,5,6,0]},customerLimit:function(e){return 2*Math.random()>1}}}},slider:43,switchA:!1,progressCommon:{percent:50,options:{color:"#2db7f5",size:"common",state:"loading"}},progressSmall:{percent:50,options:{color:"#2db7f5",size:"small",state:"loading"}},progressCircle:{percent:50,options:{color:"#2db7f5",size:"small",state:"",format:function(e){return e+"% "}}},radios:[{checked:!1,value:"A"},{checked:!1,value:"B"},{checked:!1,value:"C"},{checked:!1,value:"aa"}],selectCity:{value:{}},selectProvince:{value:{},options:[{selected:!1,disabled:!1,value:"四川",id:1},{selected:!1,disabled:!1,value:"北京",id:2},{selected:!1,disabled:!1,value:"广东",id:3}]},checkbox:{checked:!1,text:"我已阅读用户协议"},form:{user:{value:"",placeHolder:"input here",title:"用户名:",state:"loading",tip:""},pass:{value:"",placeHolder:"input here",title:"密码:",state:"default",tip:""},bio:{value:"",placeHolder:"input here",title:"验证码:",state:"failed"}}}},computed:{selectCityOptions:function(){var e={1:[{selected:!1,disabled:!1,value:"成都",id:1},{selected:!1,disabled:!1,value:"德阳",id:2}],2:[{selected:!1,disabled:!1,value:"海淀",id:2},{selected:!1,disabled:!1,value:"朝阳",id:1}],3:[{selected:!1,disabled:!1,value:"广州",id:2},{selected:!1,disabled:!1,value:"深圳",id:1}]};return this.selectProvince.value.id?e[this.selectProvince.value.id].slice():[]}},components:{formItem:o.formItem,rdSelect:o.rdSelect,rdButton:o.rdButton,rdButtonGroup:o.rdButtonGroup,rdDropButton:o.rdDropButton,rdUpload:o.rdUpload,rdCheckbox:o.rdCheckbox,rdText:o.rdText,rdTextarea:o.rdTextarea,rdEditText:o.rdEditText,rdTextSelect:o.rdTextSelect,rdRadio:o.rdRadio,rdProgress:o.rdProgress,rdProgressCircle:o.rdProgressCircle,rdCascader:o.rdCascader,rdSwitch:o.rdSwitch,rdSlider:o.rdSlider,rdDatePicker:o.rdDatePicker,rdTooltip:o.rdTooltip,rdTimeline:o.rdTimeline,rdAlert:o.rdAlert,rdTable:o.rdTable,rdTimePicker:o.rdTimePicker,rdSpin:o.rdSpin,breadcrumb:o.breadcrumb,rdAudio:o.rdAudio,rdNumber:o.rdNumber},methods:{editTable:function(e){this.$Notification.success("正在编辑"+e._value[0],"",5e3)},removeTableItem:function(e){var t=this;this.TableData.tableData.forEach(function(r){r.id===e.id&&t.TableData.tableData.$remove(r)}),this.$Notification.success("删除"+e._value[0]+"成功","",5e3)},notificationAction:function(){this.$Notification.success("2333","233",5e3)},userInputing:function(){var e=this;this.form.user.state="loading";var t={0:{state:"loading",tip:"loading?!"},1:{state:"failed",tip:"该用户名已被使用"},2:{state:"success",tip:"该用户名似乎没有被使用"},3:{state:"info",tip:"该用户名已被使用"},4:{state:"warning",tip:"该用户名已被使用"}};setTimeout(function(){var r=Math.floor(4.9*Math.random());e.form.user.state=t[r].state,e.form.user.tip=t[r].tip},2e3)},passInputing:function(){this.form.pass.value.length<6?(this.form.pass.state="warning",this.form.pass.tip="请输入数字和字母"):(this.form.pass.state="default",this.form.pass.tip="")},failed:function(e){this.$Modal.create("网络错误","无法连接到服务器",function(){e.state="default",console.log("confirmed")},function(){console.log("canceled")})},startProgress:function(e){e.percent=0,e.options.state="";var t=setInterval(function(){e.percent<100?e.percent++:(2*Math.random()<1?e.options.state="failed":e.options.state="success",clearInterval(t))},50)}}}},355:/*!************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./example/views/form.vue ***!
  \************************************************************************************************************************************************/
function(e,t,r){t=e.exports=r(9)(),t.push([e.id,".form{max-width:540px}.img-min{width:10rem}","",{version:3,sources:["/./example/views/form.vue"],names:[],mappings:"AACA,MACI,eAAiB,CACpB,AACD,SACI,WAAa,CAChB",file:"form.vue",sourcesContent:["\n.form {\n    max-width: 540px;\n}\n.img-min {\n    width: 10rem;\n}\n"],sourceRoot:"webpack://"}])},359:/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/extract-text-webpack-plugin/loader.js?{"omit":1,"extract":true,"remove":true}!./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./example/views/form.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
function(e,t,r){var o=r(355);"string"==typeof o&&(o=[[e.id,o,""]]),r(10)(o,{}),o.locals&&(e.exports=o.locals)},526:/*!*********************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./example/views/form.vue ***!
  \*********************************************************************************************************/
function(e,t){e.exports='<div> <rd-button @click=notificationAction><rd-tooltip>点我触发notification</rd-tooltip>默认按钮</rd-button> <rd-button type=primary>按钮</rd-button> <rd-button type=ghost size=large>large</rd-button> <rd-button type=ghost>common</rd-button> <rd-button type=ghost size=small>small</rd-button> <rd-button type=ghost :loading=true>save</rd-button> <rd-button type=icon><i class=ion-upload></i></rd-button> <rd-button-group> <rd-button type=ghost>common</rd-button> <rd-button type=ghost>common</rd-button> <rd-button type=ghost>common</rd-button> </rd-button-group> <rd-drop-button text=2333> <rd-button type=ghost @click=notificationAction>common</rd-button> <rd-button type=ghost @click=notificationAction>common</rd-button> </rd-drop-button> <rd-drop-button text=2333> <rd-button type=ghost @click=notificationAction>common</rd-button> <rd-button type=ghost @click=notificationAction>common</rd-button> </rd-drop-button> <rd-drop-button text=2333 type=primary> <rd-button type=ghost @click=notificationAction>common</rd-button> <rd-button type=ghost @click=notificationAction>common</rd-button> </rd-drop-button> <p> <rd-upload></rd-upload> </p> <p> <rd-text-select></rd-text-select> </p> <p> 相信大多数前端开发人员，都使用过Angular、<rd-edit-text value=React :tip=false></rd-edit-text>或者<rd-edit-text value=Vue.js :tip=true></rd-edit-text>。他们都通过数据绑定的方法，提升了开发效率。 </p> <form class=form> <form-item title=2333:> <rd-text :textfield=form.user></rd-text> </form-item> <form-item title=username:> <rd-text :textfield=form.user :input=userInputing></rd-text> </form-item> <form-item title=password:> <rd-text :textfield=form.pass :input=passInputing type=password></rd-text> </form-item> <form-item title=verify:> <rd-text @click=failed(form.bio) :textfield=form.bio></rd-text> </form-item> <form-item title=agree:> <rd-checkbox :checkbox=checkbox></rd-checkbox> <rd-checkbox :checkbox=checkbox></rd-checkbox> </form-item> <form-item title=sex:> <rd-radio :radios=radios></rd-radio> </form-item> <form-item title=load:> <rd-progress @click=startProgress(progressCommon) :progress=progressCommon></rd-progress> </form-item> <form-item title=sex:> <rd-progress @click=startProgress(progressSmall) :progress=progressSmall></rd-progress> </form-item> <div> <rd-progress-circle @click=startProgress(progressCircle) :progress=progressCircle></rd-progress-circle> </div> <div> <rd-select :value.sync=selectProvince.value :options.sync=selectProvince.options></rd-select> <rd-select :value.sync=selectCity.value :options.sync=selectCityOptions></rd-select> </div> <form-item title=address:> <rd-cascader :cascader=cascader></rd-cascader> </form-item> <form-item title=address:> <rd-switch :checked.sync=switchA size=small></rd-switch> <rd-switch :checked.sync=switchA></rd-switch> </form-item> <form-item title=price:> <rd-slider :value.sync=slider></rd-slider> <rd-timeline :timeline=timeline></rd-timeline> </form-item> <form-item title=出发时间:> <rd-date-picker :value.sync=datePicker.value :options=datePicker.options></rd-date-picker> <rd-time-picker value=timePicker></rd-time-picker> <rd-alert></rd-alert> </form-item> <div> <rd-table :table=TableData></rd-table> </div> <p> <rd-spin></rd-spin> <rd-spin color=red></rd-spin> </p> <p> <span>233333333<rd-tooltip>这里是tooltip</rd-tooltip></span> <span>啊啊啊<rd-tooltip>这里是tooltip</rd-tooltip></span> <span>按时打算发生的<rd-tooltip>这里是tooltip</rd-tooltip></span> <span>啊啊<rd-tooltip>这里是tooltip</rd-tooltip></span> </p> <p> <breadcrumb :breadcrumb=breadcrumb.list separator=/ ></breadcrumb> </p> </form> <p> <rd-number :number=number></rd-number> </p> <p> <rd-audio :audio=audio></rd-audio> </p> <p> <rd-textarea :value.sync=textArea.value :auto-resize=true :input=textArea.input :change=textArea.change :min-height=textArea.minHeight></rd-textarea> </p> <p> <img class=img-min v-preview="\'http:\\/\\/covteam.u.qiniudn.com/ka2.jpg\'" src=http://covteam.u.qiniudn.com/ka2.jpg alt=""> </p> <p> <img class=img-min v-preview="\'http:\\/\\/covteam.u.qiniudn.com/poster.png\'" src=http://covteam.u.qiniudn.com/poster.png alt=""> </p> </div>'},554:/*!********************************!*\
  !*** ./example/views/form.vue ***!
  \********************************/
function(e,t,r){var o,i;r(359),o=r(294),i=r(526),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}});