(globalThis["webpackChunkbabeltalk"]=globalThis["webpackChunkbabeltalk"]||[]).push([[688],{2430:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C});var n=a(9835),o=a(1957),i=a(6970);const l={class:"row text-center"},r={class:"col-12 text-center",id:"disable-record-div"},s=(0,n._)("img",{src:"icons/icon-transparent-large.png"},null,-1),c={class:"col-12 text-center q-mt-md",id:"message-div"};function d(e,t,a,d,u,g){const m=(0,n.up)("q-spinner-audio"),p=(0,n.up)("q-toggle"),_=(0,n.up)("q-avatar"),w=(0,n.up)("q-btn"),f=(0,n.up)("q-item-label"),h=(0,n.up)("q-item-section"),v=(0,n.up)("q-item"),b=(0,n.up)("q-page"),x=(0,n.Q2)("ripple");return(0,n.wg)(),(0,n.j4)(b,{class:"q-pa-md"},{default:(0,n.w5)((()=>[(0,n._)("div",l,[(0,n.Wm)(o.uT,{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("div",r,[(0,n.Wm)(m,{color:"primary",size:"5em",id:"audio-spinner"}),(0,n.Wm)(p,{modelValue:u.recordVal,"onUpdate:modelValue":t[0]||(t[0]=e=>u.recordVal=e),color:"green",size:"5em"},null,8,["modelValue"])],512),[[o.F8,u.showDisableRecord]])])),_:1}),(0,n.Wm)(o.uT,{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n.Wm)(w,{round:"",glossy:"",style:{"margin-left":"auto","margin-right":"auto",background:"#e7e5ff"},onClick:g.toggleRecording},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{size:"450px"},{default:(0,n.w5)((()=>[s])),_:1})])),_:1},8,["onClick"]),[[o.F8,u.showEnableRecord]])])),_:1}),(0,n._)("div",c,[(0,n.Wm)(o.W3,{name:"list-complete",tag:"q-list"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.textData,(e=>(0,n.wy)(((0,n.wg)(),(0,n.j4)(v,{clickable:"",key:e.id,class:"list-complete-item",style:(0,i.j5)({"border-color":e.srcLangColor})},{default:(0,n.w5)((()=>[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{class:"message-text"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e.text_tgt),1)])),_:2},1024),(0,n.Wm)(f,{caption:"",class:"message-caption"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e.text_src),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)(h,{side:"",top:""},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,i.zw)(e.language_src)+" -> "+(0,i.zw)(e.language_tgt),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["style"])),[[x]]))),128))])),_:1})])])])),_:1})}a(3382);var u=a(3819),g=(a(7632),a(7779));let m={ZH:"#27b12b",EN:"#9595eb"},p=[{language_src:"EN",language_tgt:"ZH",text_src:"Good morning",text_tgt:"早上好",speech_tgt:null},{language_src:"ZH",language_tgt:"EN",text_src:"今天过得怎样伙计",text_tgt:"How are you today my friend",speech_tgt:null},{language_src:"EN",language_tgt:"ZH",text_src:"I am doing very well",text_tgt:"我做得很好",speech_tgt:null},{language_src:"EN",language_tgt:"ZH",text_src:"I just won one million dollars in the lottery",text_tgt:"我刚刚中了一百万美元的彩票",speech_tgt:null},{language_src:"ZH",language_tgt:"EN",text_src:"真是太幸运了, 好羡慕你",text_tgt:"That is so lucky, I am so envious of you",speech_tgt:null},{language_src:"EN",language_tgt:"ZH",text_src:"I am going to spend the money on board games",text_tgt:"我要把钱花在棋盘游戏上",speech_tgt:null},{language_src:"ZH",language_tgt:"EN",text_src:"拿到后请邀请我来玩，我真的很喜欢桌游",text_tgt:"Please invite me to come and play when you get them, I really love board games",speech_tgt:null},{language_src:"EN",language_tgt:"ZH",text_src:"I definitely will, can't wait to play the games with you",text_tgt:"我一定会的，迫不及待想和你一起玩游戏",speech_tgt:null}];const _={data(){return{audioSpinner:null,recordVal:!1,recordAudio:null,socketio:null,timeSlice:100,ipAddress:"https://wetalk.iamohcy.com:3000",textData:[],receiveBuffer:[],processBufferInterval:null,waitingForAudioToEnd:!1,showEnableRecord:!0,showDisableRecord:!1,debugDataIdx:0,debugInterval:null}},mounted(){var e=this;let t=document.createElement("script");t.setAttribute("src","https://www.WebRTC-Experiment.com/RecordRTC.js"),document.head.appendChild(t),this.audioSpinner=document.getElementById("audio-spinner"),this.audioSpinner.pauseAnimations(),this.init(),this.processBufferInterval=window.setInterval((()=>{if(e.receiveBuffer.length>0)if(g.log(e.receiveBuffer.length),e.waitingForAudioToEnd)g.log("Waiting for current audio to end...");else{e.waitingForAudioToEnd=!0;let t=e.receiveBuffer.shift(),a=t["language_src"],n=t["language_tgt"],o=t["text_src"],i=t["text_tgt"],l=t["speech_tgt"],r=new AudioContext({sampleRate:16e3});r.decodeAudioData(l).then((t=>{var a=r.createBufferSource();a.buffer=t,a.connect(r.destination),a.start(),a.onended=()=>{e.waitingForAudioToEnd=!1}}));let s={language_src:a,language_tgt:n,text_src:o,text_tgt:i,visible:!1,srcLangColor:m[a]};e.textData.push(s)}}),100)},methods:{init(){var e=this;null!=e.socketio&&(g.log("disconnect!"),e.socketio.disconnect()),g.log(e.ipAddress),e.socketio=(0,u.io)(e.ipAddress),e.socketio.on("connect",(function(t){g.log("CONNECTED"),e.recordVal=!1})),e.socketio.on("disconnect",(function(t){g.log("DISCONNECTED"),e.recordVal=!1,receiveBuffer=[]})),e.socketio.on("translated",(function(t){t["status"]&&"ok"==t["status"]?e.receiveBuffer.unshift(t):g.log("Some thing is wrong!!")})),null!=e.debugInterval&&clearInterval(e.debugInterval),e.debugDataIdx=0,e.debugInterval=window.setInterval((function(){let t=p[e.debugDataIdx];t["id"]=e.debugDataIdx,t["visible"]=!1,t["srcLangColor"]=m[t["language_src"]],e.debugDataIdx++,e.textData.unshift(t),g.log(t),e.debugDataIdx>=p.length&&clearInterval(e.debugInterval),window.setTimeout((()=>{t["visible"]=!0}),0)}),1e3)},toggleRecording(){this.recordVal=!this.recordVal}},watch:{recordVal(e,t){let a=this;1==e?(a.showEnableRecord=!1,a.showDisableRecord=!0,a.audioSpinner.unpauseAnimations(),navigator.mediaDevices.getUserMedia({audio:!0}).then((e=>{a.recordAudio=RecordRTC(e,{type:"audio",mimeType:"audio/wav",desiredSampRate:16e3,recorderType:StereoAudioRecorder,numberOfAudioChannels:1,timeSlice:a.timeSlice,ondataavailable:function(e){a.socketio.emit("audio",e)}}),a.recordAudio.startRecording()}),(function(e){g.error(JSON.stringify(e))}))):(a.showDisableRecord=!1,window.setTimeout((()=>{a.showEnableRecord=!0}),300),a.audioSpinner.pauseAnimations(),a.recordAudio.stopRecording((function(){})))}}};var w=a(1639),f=a(9885),h=a(6556),v=a(9379),b=a(5918),x=a(592),I=a(1357),y=a(3246),k=a(490),E=a(1233),D=a(3115),A=a(1136),R=a(9984),Z=a.n(R);const T=(0,w.Z)(_,[["render",d]]),C=T;Z()(_,"components",{QPage:f.Z,QInput:h.Z,QBtn:v.Z,QSpinnerAudio:b.Z,QToggle:x.Z,QAvatar:I.Z,QList:y.Z,QItem:k.Z,QItemSection:E.Z,QItemLabel:D.Z}),Z()(_,"directives",{Ripple:A.Z})},2361:()=>{},4616:()=>{}}]);