(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"7n0A":function(e,n,t){"use strict";t.r(n);var o=t("ofXK"),r=t("tyNb"),c=t("2lmt"),s=t("fXoL"),i=t("bTqV"),p=t("1jcm"),a=t("3Pt+"),b=t("H7fD");let u=(()=>{class e{constructor(){this.showSpinner=!1}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Gb({type:e,selectors:[["app-tree-node-onp"]],inputs:{node:"node",showSpinner:"showSpinner"},decls:1,vars:2,consts:[[3,"node","showSpinner"]],template:function(e,n){1&e&&s.Nb(0,"app-tree-node",0),2&e&&s.fc("node",n.node)("showSpinner",n.showSpinner)},directives:[b.a],styles:[""],changeDetection:0}),e})();const d=[{path:"",component:(()=>{class e extends c.a{constructor(){super()}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Gb({type:e,selectors:[["app-change-detection-on-push"]],features:[s.yb],decls:13,vars:3,consts:[[1,"header"],[1,"header__text"],[1,"header__actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","dark",3,"click"],[3,"ngModel","ngModelChange"],[3,"node","showSpinner"]],template:function(e,n){1&e&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.pc(2," Tap the button below to trigger change detection. Repeat until you're tired. "),s.Ob(),s.Pb(3,"div",2),s.Pb(4,"button",3),s.Xb("click",(function(){return n.triggerTap()})),s.pc(5,"Trigger"),s.Ob(),s.Pb(6,"button",4),s.Xb("click",(function(){return n.randomizeDepths(n.tree)})),s.pc(7,"Randomize Depths"),s.Ob(),s.Pb(8,"button",5),s.Xb("click",(function(){return n.resetTree()})),s.pc(9,"Reset"),s.Ob(),s.Ob(),s.Pb(10,"mat-slide-toggle",6),s.Xb("ngModelChange",(function(e){return n.options.showSpinners=e})),s.pc(11,"Show Progress Spinners!"),s.Ob(),s.Ob(),s.Nb(12,"app-tree-node-onp",7)),2&e&&(s.Bb(10),s.fc("ngModel",n.options.showSpinners),s.Bb(2),s.fc("node",n.tree)("showSpinner",n.options.showSpinners))},directives:[i.a,p.a,a.e,a.f,u],styles:[""]}),e})()}];let l=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(n){return new(n||e)},imports:[[r.b.forChild(d)],r.b]}),e})();var h=t("PCNd");t.d(n,"ChangeDetectionOnPushModule",(function(){return f}));let f=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(n){return new(n||e)},imports:[[o.c,l,h.a,a.b]]}),e})()}}]);