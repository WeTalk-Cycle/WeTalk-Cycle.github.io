(globalThis["webpackChunkbabeltalk"]=globalThis["webpackChunkbabeltalk"]||[]).push([[424],{746:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>S});var i=o(9835),a=o(1957),n=o(6970);const r={class:"row text-center"},s={class:"col-12 text-center",id:"disable-record-div"},l=(0,i._)("img",{src:"icons/icon-transparent-large.png"},null,-1),d={class:"col-12 text-center q-mt-md",id:"message-div"};function c(e,t,o,c,u,g){const m=(0,i.up)("q-spinner-audio"),p=(0,i.up)("q-toggle"),f=(0,i.up)("q-avatar"),w=(0,i.up)("q-btn"),h=(0,i.up)("q-item-label"),b=(0,i.up)("q-item-section"),v=(0,i.up)("q-item"),_=(0,i.up)("q-page"),k=(0,i.Q2)("ripple");return(0,i.wg)(),(0,i.j4)(_,{class:"q-pa-md"},{default:(0,i.w5)((()=>[(0,i._)("div",r,[(0,i.Wm)(a.uT,{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",s,[(0,i.Wm)(m,{color:"primary",size:"5em",id:"audio-spinner"}),(0,i.Wm)(p,{modelValue:u.recordVal,"onUpdate:modelValue":t[0]||(t[0]=e=>u.recordVal=e),color:"green",size:"5em"},null,8,["modelValue"])],512),[[a.F8,u.showDisableRecord]])])),_:1}),(0,i.Wm)(a.uT,{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(w,{round:"",glossy:"",style:{"margin-left":"auto","margin-right":"auto",background:"#e7e5ff"},onClick:g.toggleRecording},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{size:"450px"},{default:(0,i.w5)((()=>[l])),_:1})])),_:1},8,["onClick"]),[[a.F8,u.showEnableRecord]])])),_:1}),(0,i._)("div",d,[(0,i.Wm)(a.W3,{name:"list-complete",tag:"q-list"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(u.textData,(e=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(v,{clickable:"",key:e.id,class:"list-complete-item",style:(0,n.j5)({"border-color":e.srcLangColor})},{default:(0,i.w5)((()=>[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"message-text"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.text_tgt),1)])),_:2},1024),(0,i.Wm)(h,{caption:"",class:"message-caption"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(e.text_src),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["style"])),[[k]]))),128))])),_:1})])])])),_:1})}o(3382);var u=o(3819),g=(o(7632),o(7779));let m={zh:"#27b12b",ZH:"#27b12b",en:"#9595eb",EN:"#9595eb"};const p={data(){return{audioSpinner:null,recordVal:!1,recordAudio:null,socketio:null,timeSlice:100,ipAddress:"https://wetalk.iamohcy.com:3000",textData:[],receiveBuffer:[],processBufferInterval:null,waitingForAudioToEnd:!1,showEnableRecord:!0,showDisableRecord:!1,messageIdx:0,debugDataIdx:0,debugInterval:null}},mounted(){var e=this;let t=document.createElement("script");t.setAttribute("src","https://www.WebRTC-Experiment.com/RecordRTC.js"),document.head.appendChild(t),this.audioSpinner=document.getElementById("audio-spinner"),this.audioSpinner.pauseAnimations(),this.init(),this.processBufferInterval=window.setInterval((()=>{if(e.receiveBuffer.length>0)if(g.log(e.receiveBuffer.length),e.waitingForAudioToEnd)g.log("Waiting for current audio to end...");else{e.waitingForAudioToEnd=!0;let t=e.receiveBuffer.shift(),o=t["language_src"],i=t["language_tgt"],a=t["text_src"],n=t["text_tgt"],r=t["speech_tgt"],s=new AudioContext({sampleRate:16e3});s.decodeAudioData(r).then((t=>{var o=s.createBufferSource();o.buffer=t,o.connect(s.destination),o.start(),o.onended=()=>{e.waitingForAudioToEnd=!1}}));let l={language_src:o,language_tgt:i,text_src:a,text_tgt:n,srcLangColor:m[o],id:e.messageIdx};e.messageIdx++,e.textData.unshift(l)}}),100)},methods:{init(){var e=this;null!=e.socketio&&(g.log("disconnect!"),e.socketio.disconnect()),g.log(e.ipAddress),e.socketio=(0,u.io)(e.ipAddress),e.socketio.on("connect",(function(t){g.log("CONNECTED"),e.recordVal=!1})),e.socketio.on("disconnect",(function(t){g.log("DISCONNECTED"),e.recordVal=!1,e.receiveBuffer=[]})),e.socketio.on("translated",(function(t){t["status"]&&"ok"==t["status"]?e.receiveBuffer.unshift(t):g.log("Some thing is wrong!!")}))},toggleRecording(){this.recordVal=!this.recordVal}},watch:{recordVal(e,t){let o=this;1==e?(o.showEnableRecord=!1,o.showDisableRecord=!0,o.audioSpinner.unpauseAnimations(),navigator.mediaDevices.getUserMedia({audio:!0}).then((e=>{o.recordAudio=RecordRTC(e,{type:"audio",mimeType:"audio/wav",desiredSampRate:16e3,recorderType:StereoAudioRecorder,numberOfAudioChannels:1,timeSlice:o.timeSlice,ondataavailable:function(e){o.socketio.emit("audio",e)}}),o.recordAudio.startRecording()}),(function(e){g.error(JSON.stringify(e))}))):(o.showDisableRecord=!1,o.receiveBuffer=[],window.setTimeout((()=>{o.showEnableRecord=!0}),300),o.audioSpinner.pauseAnimations(),o.recordAudio.stopRecording((function(){})))}}};var f=o(1639),w=o(9885),h=o(6556),b=o(9379),v=o(5918),_=o(592),k=o(1357),A=o(3246),R=o(490),x=o(1233),T=o(3115),C=o(1136),D=o(9984),E=o.n(D);const I=(0,f.Z)(p,[["render",c]]),S=I;E()(p,"components",{QPage:w.Z,QInput:h.Z,QBtn:b.Z,QSpinnerAudio:v.Z,QToggle:_.Z,QAvatar:k.Z,QList:A.Z,QItem:R.Z,QItemSection:x.Z,QItemLabel:T.Z}),E()(p,"directives",{Ripple:C.Z})},2361:()=>{},4616:()=>{}}]);