(function(g){var window=this;'use strict';var J6=function(a){g.W.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.oe=!1;this.player=a;this.S(a,"minimized",this.cg);this.S(a,"onStateChange",this.zH)},K6=function(a){g.sM.call(this,a);
this.i=new J6(this.player);this.i.hide();g.eM(this.player,this.i.element,4);a.Re()&&(this.load(),g.M(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(J6,g.W);g.h=J6.prototype;
g.h.pF=function(){this.tooltip=new g.iQ(this.player,this);g.J(this,this.tooltip);g.eM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.zc=new g.lN(this.player);g.J(this,this.zc);this.Fg=new g.W({D:"div",K:"ytp-miniplayer-scrim"});g.J(this,this.Fg);this.Fg.Ca(this.element);this.S(this.Fg.element,"click",this.RA);var a=new g.W({D:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Close"},U:[g.fK()]});g.J(this,a);a.Ca(this.Fg.element);this.S(a.element,"click",this.Oi);
a=new g.$1(this.player,this);g.J(this,a);a.Ca(this.Fg.element);this.Rp=new g.W({D:"div",K:"ytp-miniplayer-controls"});g.J(this,this.Rp);this.Rp.Ca(this.Fg.element);this.S(this.Rp.element,"click",this.RA);var b=new g.W({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,b);b.Ca(this.Rp.element);a=new g.W({D:"div",K:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ca(this.Rp.element);var c=new g.W({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,c);c.Ca(this.Rp.element);this.lO=new g.KO(this.player,
this,!1);g.J(this,this.lO);this.lO.Ca(b.element);b=new g.IO(this.player,this);g.J(this,b);b.Ca(a.element);this.nextButton=new g.KO(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ca(c.element);this.Ig=new g.VP(this.player,this);g.J(this,this.Ig);this.Ig.Ca(this.Fg.element);this.Ic=new g.TO(this.player,this);g.J(this,this.Ic);g.eM(this.player,this.Ic.element,4);this.HA=new g.W({D:"div",K:"ytp-miniplayer-buttons"});g.J(this,this.HA);g.eM(this.player,this.HA.element,4);a=new g.W({D:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Close"},U:[g.fK()]});g.J(this,a);a.Ca(this.HA.element);this.S(a.element,"click",this.Oi);a=new g.W({D:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],V:{"aria-label":"Close"},U:[g.mK()]});g.J(this,a);a.Ca(this.HA.element);this.S(a.element,"click",this.QW);this.S(this.player,"presentingplayerstatechange",this.Rc);this.S(this.player,"appresize",this.yb);this.S(this.player,"fullscreentoggled",this.yb);this.yb()};
g.h.show=function(){this.Rd=new g.vq(this.Dq,null,this);this.Rd.start();this.oe||(this.pF(),this.oe=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Ic.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.Rd&&(this.Rd.dispose(),this.Rd=void 0);g.W.prototype.hide.call(this);this.player.Re()||(this.oe&&this.Ic.hide(),this.player.loadModule("annotations_module"))};
g.h.ra=function(){this.Rd&&(this.Rd.dispose(),this.Rd=void 0);g.W.prototype.ra.call(this)};
g.h.Oi=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.h.QW=function(){this.player.playVideo()};
g.h.RA=function(a){if(a.target===this.Fg.element||a.target===this.Rp.element)this.player.T().L("kevlar_miniplayer_play_pause_on_scrim")?g.UI(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.h.cg=function(){g.M(this.player.getRootNode(),"ytp-player-minimized",this.player.Re())};
g.h.Cd=function(){this.Ic.Rb();this.Ig.Rb()};
g.h.Dq=function(){this.Cd();this.Rd&&this.Rd.start()};
g.h.Rc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.h.yb=function(){g.gP(this.Ic,0,this.player.bb().getPlayerSize().width,!1);g.UO(this.Ic)};
g.h.zH=function(a){this.player.Re()&&(0===a?this.hide():this.show())};
g.h.hc=function(){return this.tooltip};
g.h.Xe=function(){return!1};
g.h.Af=function(){return!1};
g.h.Fi=function(){return!1};
g.h.Mx=function(){};
g.h.Hn=function(){};
g.h.Hs=function(){};
g.h.Wn=function(){return null};
g.h.pw=function(){return null};
g.h.Dj=function(){return new g.$m(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Kq=function(a,b,c,d,e){var f=0,k=d=0,l=g.Bn(a);if(b){c=g.Dq(b,"ytp-prev-button")||g.Dq(b,"ytp-next-button");var m=g.Dq(b,"ytp-play-button"),n=g.Dq(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.rn(b,this.element),k=b.x,f=b.y-12):n&&(k=g.Dq(b,"ytp-miniplayer-button-top-left"),f=g.rn(b,this.element),b=g.Bn(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.Vg(k,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Bl=function(){};
g.h.Sk=function(){return!1};g.v(K6,g.sM);K6.prototype.create=function(){};
K6.prototype.cj=function(){return!1};
K6.prototype.load=function(){this.player.hideControls();this.i.show()};
K6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.rM("miniplayer",K6);})(_yt_player);
