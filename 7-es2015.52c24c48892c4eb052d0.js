(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{hilt:function(n,t,o){"use strict";o.r(t);var e=o("ofXK"),i=o("tyNb"),s=o("fXoL"),c=o("bTqV");function r(n,t){if(1&n&&s.Nb(0,"div",1),2&n){const n=s.ac();s.nc("left",n.coordinates.position_x+"px")("top",n.coordinates.position_y+"px")}}let a=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Gb({type:n,selectors:[["app-mini-box"]],inputs:{coordinates:"coordinates"},decls:1,vars:1,consts:[["class","mini-box",3,"left","top",4,"ngIf"],[1,"mini-box"]],template:function(n,t){1&n&&s.oc(0,r,1,4,"div",0),2&n&&s.fc("ngIf",t.coordinates)},directives:[e.j],styles:[".mini-box[_ngcontent-%COMP%]{width:20px;height:20px;background-color:#1e90ff;position:absolute;border-radius:50%;margin-top:4px;margin-left:4px}"]}),n})();function u(n,t){if(1&n){const n=s.Qb();s.Pb(0,"button",11),s.Xb("click",(function(){return s.jc(n),s.ac().toggleRunWithDelay()})),s.pc(1),s.Ob()}if(2&n){const n=s.ac();s.Bb(1),s.qc(" ",n.shouldRunWithDelay?"Don't update view":"Update view with delay"," ")}}const d=[{path:"",component:(()=>{class n{constructor(n){this.zone=n,this.coordinates={position_x:0,position_y:0},this.updateDelay=100,this.isRunningOutsideAngular=!1,this.shouldRunWithDelay=!1,this.onMouseMoveNonZone=n=>{this.shouldRunWithDelay?this.updateCoordinatesWithDelay(n):this.updateCoordinates(n)}}ngOnInit(){this.coordinates={position_x:0,position_y:0}}switchProcessingContext(n){this.isRunningOutsideAngular=!this.isRunningOutsideAngular,this.shouldRunWithDelay=!1,this.zone.runOutsideAngular(this.isRunningOutsideAngular?()=>{n.addEventListener("mousemove",this.onMouseMoveNonZone)}:()=>{n.removeEventListener("mousemove",this.onMouseMoveNonZone)})}updateCoordinates(n){this.coordinates={position_x:n.offsetX?n.offsetX+2:0,position_y:n.offsetY?n.offsetY+2:0},console.log(this.coordinates)}toggleRunWithDelay(){this.shouldRunWithDelay=!this.shouldRunWithDelay}updateCoordinatesWithDelay(n){this.moveTimer&&clearTimeout(this.moveTimer),this.moveTimer=setTimeout(()=>{this.zone.run(()=>{this.updateCoordinates(n)})},this.updateDelay)}onMouseMove(n){this.updateCoordinates(n)}}return n.\u0275fac=function(t){return new(t||n)(s.Mb(s.z))},n.\u0275cmp=s.Gb({type:n,selectors:[["app-zones-demo"]],decls:18,vars:13,consts:[[1,"zones-demo"],[1,"text-center"],[1,"toggle-container","text-center"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","dark",3,"click",4,"ngIf"],[1,"text-center","update-delay-hint"],[1,"box-inner","box-outside-zone"],["boxInner",""],[3,"coordinates"],[1,"box-inner",3,"mousemove"],[1,"text-heading"],["mat-raised-button","","color","dark",3,"click"]],template:function(n,t){if(1&n){const n=s.Qb();s.Pb(0,"div",0),s.Pb(1,"h4",1),s.pc(2," Change Detection - NgZone Demo "),s.Ob(),s.Pb(3,"div",2),s.Pb(4,"button",3),s.Xb("click",(function(){s.jc(n);const o=s.ic(10);return t.switchProcessingContext(o)})),s.pc(5),s.Ob(),s.oc(6,u,2,1,"button",4),s.Ob(),s.Pb(7,"div",5),s.pc(8," Move mouse constantly and then stop to see the changes on view "),s.Ob(),s.Pb(9,"div",6,7),s.Nb(11,"app-mini-box",8),s.Ob(),s.Pb(12,"div",9),s.Xb("mousemove",(function(n){return t.onMouseMove(n)})),s.Nb(13,"app-mini-box",8),s.Ob(),s.Pb(14,"div",10),s.pc(15),s.Ob(),s.Pb(16,"div",10),s.pc(17),s.Ob(),s.Ob()}2&n&&(s.Bb(5),s.qc(" Run ",t.isRunningOutsideAngular?"Inside":"Outside"," Angular Zone"),s.Bb(1),s.fc("ngIf",t.isRunningOutsideAngular),s.Bb(1),s.nc("display",t.shouldRunWithDelay?"block":"none"),s.Bb(2),s.nc("display",t.isRunningOutsideAngular?"block":"none"),s.Bb(2),s.fc("coordinates",t.coordinates),s.Bb(1),s.nc("display",t.isRunningOutsideAngular?"none":"block"),s.Bb(1),s.fc("coordinates",t.coordinates),s.Bb(2),s.qc("Running ",t.isRunningOutsideAngular?"outside":"inside"," NgZone"),s.Bb(2),s.rc("Coordinates: X = ",t.coordinates.position_x,", Y = ",t.coordinates.position_y,""))},directives:[c.a,e.j,a],styles:[".text-center[_ngcontent-%COMP%]{text-align:center}.zones-demo[_ngcontent-%COMP%]{width:400px;height:400px;margin:20px auto}.text-heading[_ngcontent-%COMP%]{padding:10px;text-align:center}.zones-demo[_ngcontent-%COMP%]   .box-inner[_ngcontent-%COMP%]{width:250px;height:250px;margin:20px auto;background:#eee;position:relative;border-radius:4px}"]}),n})()}];let l=(()=>{class n{}return n.\u0275mod=s.Kb({type:n}),n.\u0275inj=s.Jb({factory:function(t){return new(t||n)},imports:[[i.b.forChild(d)],i.b]}),n})();var p=o("PCNd");o.d(t,"ZonesDemoModule",(function(){return b}));let b=(()=>{class n{}return n.\u0275mod=s.Kb({type:n}),n.\u0275inj=s.Jb({factory:function(t){return new(t||n)},imports:[[e.c,l,p.a]]}),n})()}}]);