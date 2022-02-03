(function(g){var window=this;'use strict';var pXa=function(a,b){a.Oa("onAutonavCoundownStarted",b)},R5=function(a,b,c){g.M(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Qe(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.OE&&(b.lengthText?(e=b.lengthText||null,f=b.wq||null):b.lengthSeconds&&(e=g.$K(b.lengthSeconds),f=g.$K(b.lengthSeconds,!0)));var k=!!d;d=k&&"RD"===g.KE(d).type;var l=b instanceof g.OE?b.isLivePlayback:null,m=b instanceof g.OE?b.isUpcoming:null;c={title:b.title,author:b.author,author_and_views:b.shortViewCount?b.author+" \u2022 "+b.shortViewCount:b.author,aria_label:b.Rl||g.iH("Watch $TITLE",{TITLE:b.title}),duration:e,
timestamp:f,url:b.Xk(),is_live:l,is_upcoming:m,is_list:k,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:b.shortViewCount?b.shortViewCount+" \u2022 "+b.publishedTimeText:b.publishedTimeText,autoplayAlternativeHeader:b.vn};b instanceof g.NE&&(c.playlist_length=b.playlistLength);a.update(c)},S5=function(a){var b=a.T(),c=b.i;
g.W.call(this,{D:"a",K:"ytp-autonav-suggestion-card",V:{href:"{{url}}",target:c?b.I:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{D:"div",Ga:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],V:{style:"{{background}}"},U:[{D:"div",V:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],qa:"{{duration}}"},{D:"div",Ga:["ytp-autonav-live-stamp"],qa:"Live"},{D:"div",
Ga:["ytp-autonav-upcoming-stamp"],qa:"Upcoming"},{D:"div",K:"ytp-autonav-list-overlay",U:[{D:"div",K:"ytp-autonav-mix-text",qa:"Mix"},{D:"div",K:"ytp-autonav-mix-icon"}]}]},{D:"div",Ga:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],qa:"{{title}}"},{D:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],qa:"{{author}}"},{D:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],qa:"{{views_and_publish_time}}"}]});this.G=a;this.suggestion=
null;this.i=c;this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress)},U5=function(a,b){b=void 0===b?!1:b;
g.W.call(this,{D:"div",K:"ytp-autonav-endscreen-countdown-container"});var c=this;this.I=b;this.C=void 0;this.j=0;b=a.T();var d=b.i;this.G=a;this.suggestion=null;this.onVideoDataChange("newdata",this.G.getVideoData());this.S(a,"videodatachange",this.onVideoDataChange);this.i=new g.W({D:"div",K:"ytp-autonav-endscreen-upnext-container",V:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{D:"div",
K:"ytp-autonav-endscreen-upnext-header"},{D:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",qa:"{{autoplayAlternativeHeader}}"},{D:"a",K:"ytp-autonav-endscreen-link-container",V:{href:"{{url}}",target:d?b.I:""},U:[{D:"div",K:"ytp-autonav-endscreen-upnext-thumbnail",V:{style:"{{background}}"},U:[{D:"div",V:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],qa:"{{duration}}"},{D:"div",Ga:["ytp-autonav-live-stamp"],qa:"Live"},{D:"div",Ga:["ytp-autonav-upcoming-stamp"],qa:"Upcoming"}]},
{D:"div",K:"ytp-autonav-endscreen-video-info",U:[{D:"div",K:"ytp-autonav-endscreen-premium-badge"},{D:"div",K:"ytp-autonav-endscreen-upnext-title",qa:"{{title}}"},{D:"div",K:"ytp-autonav-endscreen-upnext-author",qa:"{{author}}"},{D:"div",K:"ytp-autonav-view-and-date",qa:"{{views_and_publish_time}}"},{D:"div",K:"ytp-autonav-author-and-view",qa:"{{author_and_views}}"}]}]}]});g.J(this,this.i);this.i.Ca(this.element);d||this.S(this.i.Da("ytp-autonav-endscreen-link-container"),"click",this.lJ);this.G.Bb(this.element,
this,115127);this.G.Bb(this.i.Da("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.W({D:"div",K:"ytp-autonav-overlay"});g.J(this,this.overlay);this.overlay.Ca(this.element);this.u=new g.W({D:"div",K:"ytp-autonav-endscreen-button-container"});g.J(this,this.u);this.u.Ca(this.element);this.cancelButton=new g.W({D:"button",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],V:{"aria-label":"Cancel autoplay"},qa:"Cancel"});g.J(this,this.cancelButton);
this.cancelButton.Ca(this.u.element);this.cancelButton.Pa("click",this.pR,this);this.G.Bb(this.cancelButton.element,this,115129);this.playButton=new g.W({D:"a",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],V:{href:"{{url}}",role:"button","aria-label":"Play next video"},qa:"Play Now"});g.J(this,this.playButton);this.playButton.Ca(this.u.element);this.playButton.Pa("click",this.lJ,this);this.G.Bb(this.playButton.element,this,115130);this.B=new g.K(function(){T5(c)},
500);
g.J(this,this.B);this.kJ();this.S(a,"autonavvisibility",this.kJ)},X5=function(a){var b=a.G.Dj(!0,a.G.isFullscreen());
g.M(a.element,"ytp-autonav-endscreen-small-mode",a.Af(b));g.M(a.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.IB);g.M(a.G.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.G.pe());g.M(a.G.getRootNode(),"countdown-running",a.Kh());g.M(a.element,"ytp-player-content",a.G.pe());g.gn(a.overlay.element,{width:b.width+"px"});if(!a.Kh()){a.G.pe()?V5(a,Math.round(W5(a)/1E3)):V5(a);b=!!a.suggestion&&!!a.suggestion.vn;var c=a.G.pe()||!b;g.M(a.element,"ytp-autonav-endscreen-upnext-alternative-header-only",
!c&&b);g.M(a.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.XJ(a.u,a.G.pe())}},T5=function(a){var b=W5(a),c=Math,d=c.min;
var e=a.j?Date.now()-a.j:0;c=d.call(c,e,b);V5(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Kh()?a.select(!0):a.Kh()&&a.B.start()},W5=function(a){var b=a.G.Xp();
return 0<=b?b:g.hD(a.G.T().experiments,"autoplay_time")||1E4},V5=function(a,b){b=void 0===b?-1:b;
a=a.i.Da("ytp-autonav-endscreen-upnext-header");g.Mh(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.Lh("Up next in $SECONDS".slice(0,d)));var e=g.Kh("span");g.Cq(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Rh(e,b);a.appendChild(e);a.appendChild(g.Lh("Up next in $SECONDS".slice(d+c.length)));return}}g.Rh(a,"Up next")},Y5=function(a,b){g.W.call(this,{D:"div",
Ga:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},Z5=function(a){g.W.call(this,{D:"div",
Ga:["ytp-upnext","ytp-player-content"],V:{"aria-label":"{{aria_label}}"},U:[{D:"div",K:"ytp-cued-thumbnail-overlay-image",V:{style:"{{background}}"}},{D:"span",K:"ytp-upnext-top",U:[{D:"span",K:"ytp-upnext-header",qa:"Up Next"},{D:"span",K:"ytp-upnext-title",qa:"{{title}}"},{D:"span",K:"ytp-upnext-author",qa:"{{author}}"}]},{D:"a",K:"ytp-upnext-autoplay-icon",V:{role:"button",href:"{{url}}","aria-label":"Play next video"},U:[{D:"svg",V:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
U:[{D:"circle",K:"ytp-svg-autoplay-circle",V:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",K:"ytp-svg-autoplay-ring",V:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",K:"ytp-svg-fill",V:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",K:"ytp-upnext-bottom",U:[{D:"span",K:"ytp-upnext-cancel"},{D:"span",K:"ytp-upnext-paused",
qa:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.C=this.Da("ytp-svg-autoplay-ring");this.u=this.notification=this.i=this.suggestion=null;this.B=new g.K(this.iz,5E3,this);this.j=0;var b=this.Da("ytp-upnext-cancel");this.cancelButton=new g.W({D:"button",Ga:["ytp-upnext-cancel-button","ytp-button"],V:{tabindex:"0","aria-label":"Cancel autoplay"},qa:"Cancel"});g.J(this,this.cancelButton);this.cancelButton.Pa("click",this.qR,this);this.cancelButton.Ca(b);this.cancelButton&&this.api.Bb(this.cancelButton.element,
this,115129);g.J(this,this.B);this.api.Bb(this.element,this,18788);b=this.Da("ytp-upnext-autoplay-icon");this.S(b,"click",this.rR);this.api.Bb(b,this,115130);this.mJ();this.S(a,"autonavvisibility",this.mJ);this.S(a,"mdxnowautoplaying",this.eW);this.S(a,"mdxautoplaycanceled",this.fW);g.M(this.element,"ytp-upnext-mobile",this.api.T().isMobile)},qXa=function(a,b){return b?b:0<=a.api.Xp()?a.api.Xp():g.hD(a.api.T().experiments,"autoplay_time")||1E4},$5=function(a,b){b=qXa(a,b);
var c=Math,d=c.min;var e=(0,g.R)()-a.j;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.C.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Kh()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Kh()&&a.i.start()},a6=function(a){Y5.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.W({D:"div",K:"ytp-suggestion-panel",U:[{D:"div",Ga:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],qa:"More videos"}]});this.J=new g.W({D:"div",K:"ytp-suggestions-container"});this.videos=[];this.u=null;this.C=this.I=!1;this.j=new U5(this.player);g.J(this,this.j);this.j.Ca(this.element);a.getVideoData().vc?this.i=this.j:(this.i=new Z5(a),g.eM(this.player,this.i.element,4),g.J(this,this.i));this.overlay=new g.W({D:"div",
K:"ytp-autonav-overlay-cancelled-state"});g.J(this,this.overlay);this.overlay.Ca(this.element);this.B=new g.oC(this);g.J(this,this.B);g.J(this,this.table);this.table.Ca(this.element);this.table.show();g.J(this,this.J);this.J.Ca(this.table.element);this.hide()},b6=function(a){var b=a.pe();
b!==a.C&&(a.C=b,a.player.Z("autonavvisibility"),a.C?(a.j!==a.i&&a.j.hide(),a.table.hide()):(a.j!==a.i&&a.j.show(),a.table.show()))},c6=function(a){Y5.call(this,a,"subscribecard-endscreen");
this.i=new g.W({D:"div",K:"ytp-subscribe-card",U:[{D:"img",K:"ytp-author-image",V:{src:"{{profilePicture}}"}},{D:"div",K:"ytp-subscribe-card-right",U:[{D:"div",K:"ytp-author-name",qa:"{{author}}"},{D:"div",K:"html5-subscribe-button-container"}]}]});g.J(this,this.i);this.i.Ca(this.element);var b=a.getVideoData();this.subscribeButton=new g.vN("Subscribe",null,"Unsubscribe",null,!0,!1,b.pj,b.subscribed,"trailer-endscreen",null,null,a);g.J(this,this.subscribeButton);this.subscribeButton.Ca(this.i.Da("html5-subscribe-button-container"));
this.S(a,"videodatachange",this.Ja);this.Ja();this.hide()},d6=function(a){var b=a.T(),c=g.sz||g.SD?{style:"will-change: opacity"}:void 0,d=b.i,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.W.call(this,{D:"a",Ga:e,V:{href:"{{url}}",target:d?b.I:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},U:[{D:"div",K:"ytp-videowall-still-image",V:{style:"{{background}}"}},{D:"span",K:"ytp-videowall-still-info",U:[{D:"span",K:"ytp-videowall-still-info-bg",U:[{D:"span",K:"ytp-videowall-still-info-content",V:c,U:[{D:"span",K:"ytp-videowall-still-info-title",qa:"{{title}}"},{D:"span",
K:"ytp-videowall-still-info-author",qa:"{{author_and_views}}"},{D:"span",K:"ytp-videowall-still-info-live",qa:"Live"},{D:"span",K:"ytp-videowall-still-info-duration",qa:"{{duration}}"}]}]}]},{D:"span",Ga:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],U:[{D:"span",K:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",K:"ytp-videowall-still-listlabel-length",U:[" (",{D:"span",qa:"{{playlist_length}}"},")"]}]},{D:"span",Ga:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
U:[{D:"span",K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",K:"ytp-videowall-still-listlabel-length",qa:" (50+)"}]}]});this.suggestion=null;this.j=d;this.api=a;this.i=new g.oC(this);g.J(this,this.i);this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress);this.i.S(a,"videodatachange",this.onVideoDataChange);a.Ug(this.element,this);this.onVideoDataChange()},e6=function(a){Y5.call(this,a,"videowall-endscreen");
var b=this;this.G=a;this.u=0;this.stills=[];this.B=this.videoData=null;this.C=this.J=!1;this.N=null;this.j=new g.oC(this);g.J(this,this.j);this.I=new g.K(function(){g.L(b.element,"ytp-show-tiles")},0);
g.J(this,this.I);var c=new g.W({D:"button",Ga:["ytp-button","ytp-endscreen-previous"],V:{"aria-label":"Previous"},U:[g.dK()]});g.J(this,c);c.Ca(this.element);c.Pa("click",this.vR,this);this.table=new g.UJ({D:"div",K:"ytp-endscreen-content"});g.J(this,this.table);this.table.Ca(this.element);c=new g.W({D:"button",Ga:["ytp-button","ytp-endscreen-next"],V:{"aria-label":"Next"},U:[g.eK()]});g.J(this,c);c.Ca(this.element);c.Pa("click",this.uR,this);a.getVideoData().vc?this.i=new U5(a,!0):this.i=new Z5(a);
g.J(this,this.i);g.eM(this.player,this.i.element,4);this.hide()},f6=function(a){return g.fM(a.player)&&a.xv()&&!a.B},g6=function(a){var b=a.pe();
b!==a.J&&(a.J=b,a.player.Z("autonavvisibility"))},h6=function(a){g.sM.call(this,a);
var b=this;this.endScreen=null;this.i=this.j=this.u=!1;this.listeners=new g.oC(this);g.J(this,this.listeners);this.env=a.T();rXa(a)?(this.u=!0,sXa(this),this.i?this.endScreen=new a6(a):this.endScreen=new e6(this.player)):this.env.ke?this.endScreen=new c6(this.player):this.endScreen=new Y5(this.player);g.J(this,this.endScreen);g.eM(this.player,this.endScreen.element,4);tXa(this);this.listeners.S(a,"videodatachange",this.onVideoDataChange,this);this.listeners.S(a,g.ky("endscreen"),function(c){b.onCueRangeEnter(c)});
this.listeners.S(a,g.ly("endscreen"),function(c){b.onCueRangeExit(c)})},sXa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.Hi&&a.j===b.vc)return!1;a.i=b.Hi;a.j=b.vc;return!0},rXa=function(a){a=a.T();
return a.Kb&&!a.ke},tXa=function(a){a.player.df("endscreen");
var b=a.player.getVideoData();b=new g.iy(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.iy(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.Md([b,c])};
g.YL.prototype.Xp=g.ca(3,function(){return this.app.Xp()});
g.UX.prototype.Xp=g.ca(2,function(){return this.getVideoData().cO});g.v(S5,g.W);S5.prototype.select=function(){(this.G.fk(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Qv||void 0)||this.G.L("web_player_endscreen_double_log_fix_killswitch"))&&this.G.ub(this.element)};
S5.prototype.onClick=function(a){g.PM(a,this.G,this.i,this.suggestion.sessionData||void 0)&&this.select()};
S5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Vt(a)||(this.select(),g.Ut(a))}};g.v(U5,g.W);g.h=U5.prototype;g.h.Iy=function(a){this.suggestion!==a&&(this.suggestion=a,R5(this.i,a),this.playButton.Ma("url",this.suggestion.Xk()),X5(this))};
g.h.Kh=function(){return 0<this.j};
g.h.Zt=function(){this.Kh()||(this.j=Date.now(),T5(this),pXa(this.G,W5(this)),g.M(this.G.getRootNode(),"countdown-running",this.Kh()))};
g.h.Hq=function(){this.Vm();T5(this);var a=this.i.Da("ytp-autonav-endscreen-upnext-header");a&&g.Rh(a,"Up next")};
g.h.Vm=function(){this.Kh()&&(this.B.stop(),this.j=0)};
g.h.select=function(a){this.G.nextVideo(!1,void 0===a?!1:a);this.Vm()};
g.h.lJ=function(a){g.PM(a,this.G)&&(a.currentTarget===this.playButton.element?this.G.ub(this.playButton.element):a.currentTarget===this.i.Da("ytp-autonav-endscreen-link-container")&&(a=this.i.Da("ytp-autonav-endscreen-link-container"),this.G.Za(a,!0),this.G.ub(a)),this.select())};
g.h.pR=function(){this.G.ub(this.cancelButton.element);g.$L(this.G,!0);this.C&&this.G.Oa("innertubeCommand",this.C)};
g.h.onVideoDataChange=function(a,b){var c;this.C=null==(c=b.yZ)?void 0:c.command};
g.h.kJ=function(){var a=this.G.pe();this.I&&this.sb!==a&&g.XJ(this,a);X5(this);this.G.Za(this.element,a);this.G.Za(this.cancelButton.element,a);this.G.Za(this.i.Da("ytp-autonav-endscreen-link-container"),a);this.G.Za(this.playButton.element,a)};
g.h.Af=function(a){return 400>a.width||459>a.height};g.v(Y5,g.W);g.h=Y5.prototype;g.h.create=function(){this.created=!0};
g.h.destroy=function(){this.created=!1};
g.h.xv=function(){return!1};
g.h.pe=function(){return!1};
g.h.qM=function(){return!1};g.v(Z5,g.W);g.h=Z5.prototype;g.h.iz=function(){this.notification&&(this.B.stop(),this.wc(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.h.Iy=function(a){this.suggestion=a;R5(this,a,"hqdefault.jpg")};
g.h.mJ=function(){g.XJ(this,this.api.pe());this.api.Za(this.element,this.api.pe());this.api.Za(this.Da("ytp-upnext-autoplay-icon"),this.api.pe());this.cancelButton&&this.api.Za(this.cancelButton.element,this.api.pe())};
g.h.nW=function(){window.focus();this.iz()};
g.h.Zt=function(a){var b=this;this.Kh()||(g.ju("a11y-announce","Up Next "+this.suggestion.title),this.j=(0,g.R)(),this.i=new g.K(function(){$5(b,a)},25),$5(this,a),pXa(this.api,qXa(this,a)));
g.Fq(this.element,"ytp-upnext-autoplay-paused")};
g.h.hide=function(){g.W.prototype.hide.call(this)};
g.h.Kh=function(){return!!this.i};
g.h.Hq=function(){this.Vm();this.j=(0,g.R)();$5(this);g.L(this.element,"ytp-upnext-autoplay-paused")};
g.h.Vm=function(){this.Kh()&&(this.i.dispose(),this.i=null)};
g.h.select=function(a){a=void 0===a?!1:a;if(this.api.T().L("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.iz(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.Qe()}),this.u=this.S(this.notification,"click",this.nW),this.B.start())}this.Vm();this.api.nextVideo(!1,a)};
g.h.rR=function(a){!g.Qh(this.cancelButton.element,g.Qt(a))&&g.PM(a,this.api)&&(this.api.pe()&&this.api.ub(this.Da("ytp-upnext-autoplay-icon")),this.select())};
g.h.qR=function(){this.api.pe()&&this.cancelButton&&this.api.ub(this.cancelButton.element);g.$L(this.api,!0)};
g.h.eW=function(a){this.api.getPresentingPlayerType();this.show();this.Zt(a)};
g.h.fW=function(){this.api.getPresentingPlayerType();this.Vm();this.hide()};
g.h.ra=function(){this.Vm();this.iz();g.W.prototype.ra.call(this)};g.v(a6,Y5);g.h=a6.prototype;g.h.create=function(){Y5.prototype.create.call(this);this.B.S(this.player,"appresize",this.Yu);this.B.S(this.player,"onVideoAreaChange",this.Yu);this.B.S(this.player,"videodatachange",this.onVideoDataChange);this.B.S(this.player,"autonavchange",this.nJ);this.B.S(this.player,"autonavcancel",this.sR);this.onVideoDataChange()};
g.h.show=function(){Y5.prototype.show.call(this);(this.I||this.u&&this.u!==this.videoData.clientPlaybackNonce)&&g.$L(this.player,!1);g.fM(this.player)&&this.xv()&&!this.u?(b6(this),2===this.videoData.autonavState?this.player.T().L("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Zt():3===this.videoData.autonavState&&this.i.Hq()):(g.$L(this.player,!0),b6(this));this.Yu()};
g.h.hide=function(){Y5.prototype.hide.call(this);this.i.Hq();b6(this)};
g.h.Yu=function(){var a=this.player.Dj(!0,this.player.isFullscreen());b6(this);X5(this.j);g.M(this.element,"ytp-autonav-cancelled-small-mode",this.Af(a));g.M(this.element,"ytp-autonav-cancelled-tiny-mode",this.pA(a));g.M(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.gn(this.overlay.element,{width:a.width+"px"});if(!this.C){a=g.q(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.q(b.value);b=c.next().value;c=c.next().value;g.M(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.h.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){this.i.Iy(a[0]);this.i!==this.j&&this.j.Iy(a[0]);for(var b=0;b<uXa.length;++b){var c=uXa[b];if(a&&a[c]){this.videos[b]=new S5(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,R5(d,c));g.J(this,this.videos[b]);this.videos[b].Ca(this.J.element)}}}this.Yu()}};
g.h.nJ=function(a){1===a?(this.I=!1,this.u=this.videoData.clientPlaybackNonce,this.i.Vm(),this.sb&&this.Yu()):(this.I=!0,this.pe()&&(2===a?this.i.Zt():3===a&&this.i.Hq()))};
g.h.sR=function(a){a?this.nJ(1):(this.u=null,this.I=!1)};
g.h.xv=function(){return 1!==this.videoData.autonavState};
g.h.Af=function(a){return(910>a.width||459>a.height)&&!this.pA(a)&&!(400>=a.width||360>=a.height)};
g.h.pA=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.h.pe=function(){return this.sb&&g.fM(this.player)&&this.xv()&&!this.u};
var uXa=[1,3,2,4];g.v(c6,Y5);c6.prototype.Ja=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.pj;var b=this.subscribeButton;a.subscribed?b.j():b.u()};g.v(d6,g.W);d6.prototype.select=function(){(this.api.fk(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Qv||void 0)||this.api.L("web_player_endscreen_double_log_fix_killswitch"))&&this.api.ub(this.element)};
d6.prototype.onClick=function(a){g.PM(a,this.api,this.j,this.suggestion.sessionData||void 0)&&this.select()};
d6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.Vt(a)||(this.select(),g.Ut(a))}};
d6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.T();this.j=a.C?!1:b.i};g.v(e6,Y5);g.h=e6.prototype;g.h.create=function(){Y5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Il();this.j.S(this.player,"appresize",this.Il);this.j.S(this.player,"onVideoAreaChange",this.Il);this.j.S(this.player,"videodatachange",this.onVideoDataChange);this.j.S(this.player,"autonavchange",this.UC);this.j.S(this.player,"autonavcancel",this.tR);a=this.videoData.autonavState;a!==this.N&&this.UC(a);this.j.S(this.element,"transitionend",this.DX)};
g.h.destroy=function(){g.Rw(this.j);g.Ue(this.stills);this.stills=[];Y5.prototype.destroy.call(this);g.Fq(this.element,"ytp-show-tiles");this.I.stop();this.N=this.videoData.autonavState};
g.h.xv=function(){return 1!==this.videoData.autonavState};
g.h.show=function(){Y5.prototype.show.call(this);g.Fq(this.element,"ytp-show-tiles");this.player.T().isMobile?g.yq(this.I):this.I.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.$L(this.player,!1);f6(this)?(g6(this),2===this.videoData.autonavState?this.player.T().L("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Zt():3===this.videoData.autonavState&&this.i.Hq()):(g.$L(this.player,!0),g6(this))};
g.h.hide=function(){Y5.prototype.hide.call(this);this.i.Hq();g6(this)};
g.h.DX=function(a){g.Qt(a)===this.element&&this.Il()};
g.h.Il=function(){if(this.videoData&&this.videoData.suggestions&&this.videoData.suggestions.length){g.L(this.element,"ytp-endscreen-paginate");var a=this.G.Dj(!0,this.G.isFullscreen()),b=g.VL(this.G);b&&(b=b.Xe()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.videoData.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var p=b/2,r=e/2,t=b<=f-2&&n>=r*m,w=e<=k-2&&n>=p*m;if((p+
1)/r*d/c>c/(p/(r+1)*d)&&w)n-=p*m,e+=2;else if(t)n-=r*m,b+=2;else if(w)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.An(a,m,n);g.gn(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.Iy(this.videoData.suggestions[0]);this.i instanceof U5&&X5(this.i);g.M(this.element,"ytp-endscreen-takeover",f6(this));g6(this);m+=4;n+=4;for(f=
c=0;f<b;f++)for(k=0;k<e;k++)if(p=c,r=0,d&&f>=b-2&&k>=e-2?r=1:0===k%2&&0===f%2&&(2>k&&2>f?0===k&&0===f&&(r=2):r=2),p=g.Wg(p+this.u,l),0!==r){t=this.stills[c];t||(t=new d6(this.player),this.stills[c]=t,a.appendChild(t.element));w=Math.floor(n*k/e);var x=Math.floor(m*f/b),y=Math.floor(n*(k+r)/e)-w-4,z=Math.floor(m*(f+r)/b)-x-4;g.on(t.element,x,w);g.An(t.element,z,y);g.gn(t.element,"transitionDelay",(k+f)/20+"s");g.M(t.element,"ytp-videowall-still-mini",1===r);g.M(t.element,"ytp-videowall-still-large",
2<r);r=t;p=this.videoData.suggestions[p];r.suggestion!==p&&(r.suggestion=p,t=r.api.T(),w=g.Dq(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",R5(r,p,w),g.UD(t)&&(t=p.Xk(),t=g.zj(t,g.NL("emb_rel_end")),r.Ma("url",t)),(p=(p=p.sessionData)&&p.itct)&&r.api.Xj(r.element,p));c++}g.M(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.Oh(e.element),g.Te(e);this.stills.length=c}};
g.h.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.u=0,this.videoData=a,this.Il())};
g.h.uR=function(){this.u+=this.stills.length;this.Il()};
g.h.vR=function(){this.u-=this.stills.length;this.Il()};
g.h.qM=function(){return this.i.Kh()};
g.h.UC=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,this.i.Vm(),this.sb&&this.Il()):(this.C=!0,this.sb&&f6(this)&&(2===a?this.i.Zt():3===a&&this.i.Hq()))};
g.h.tR=function(a){if(a){for(a=0;a<this.stills.length;a++)this.G.Za(this.stills[a].element,!0);this.UC(1)}else this.B=null,this.C=!1;this.Il()};
g.h.pe=function(){return this.sb&&f6(this)};g.v(h6,g.sM);g.h=h6.prototype;g.h.Uq=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!rXa(this.player)||b;var c=a.He||g.eE(a.u),d=this.player.Xv();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.h.pe=function(){return this.endScreen.pe()};
g.h.cU=function(){return this.pe()?this.endScreen.qM():!1};
g.h.ra=function(){this.player.df("endscreen");g.sM.prototype.ra.call(this)};
g.h.load=function(){var a=this.player.getVideoData();var b=a.sM;if(b&&b.videoId){var c=this.player.tb().Kd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].videoId&&!a.FJ?a=!1:(this.player.fk(b.videoId,void 0,void 0,!0,!0,b),c&&c.yA("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.sM.prototype.load.call(this),this.endScreen.show())};
g.h.unload=function(){g.sM.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.h.onCueRangeEnter=function(a){this.Uq()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.h.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.h.onVideoDataChange=function(){tXa(this);this.u&&sXa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new a6(this.player):this.endScreen=new e6(this.player),g.J(this,this.endScreen),g.eM(this.player,this.endScreen.element,4))};g.rM("endscreen",h6);})(_yt_player);
