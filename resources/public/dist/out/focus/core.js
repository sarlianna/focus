// Compiled by ClojureScript 0.0-2202
goog.provide('focus.core');
goog.require('cljs.core');
goog.require('goog.cssom');
goog.require('goog.History');
goog.require('sablono.core');
goog.require('goog.cssom');
goog.require('goog.events');
goog.require('sablono.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.dom');
goog.require('om.core');
goog.require('om.dom');
goog.require('goog.events.EventType');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
focus.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lapses","lapses",4198884440),0,new cljs.core.Keyword(null,"breaks","breaks",3927947974),0,new cljs.core.Keyword(null,"ratio","ratio",1122190205),3], null));
focus.core.increment_state = (function increment_state(data,edit_key,owner){return om.core.transact_BANG_.call(null,data,edit_key,(function (x){return (x + 1);
}));
});
focus.core.incremental_text = (function incremental_text(app,owner){if(typeof focus.core.t6577 !== 'undefined')
{} else
{
/**
* @constructor
*/
focus.core.t6577 = (function (owner,app,incremental_text,meta6578){
this.owner = owner;
this.app = app;
this.incremental_text = incremental_text;
this.meta6578 = meta6578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
focus.core.t6577.cljs$lang$type = true;
focus.core.t6577.cljs$lang$ctorStr = "focus.core/t6577";
focus.core.t6577.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"focus.core/t6577");
});
focus.core.t6577.prototype.om$core$IRenderState$ = true;
focus.core.t6577.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,(function (){var attrs6580 = new cljs.core.Keyword(null,"label","label",1116631654).cljs$core$IFn$_invoke$arity$1(state);return cljs.core.apply.call(null,React.DOM.label,((cljs.core.map_QMARK_.call(null,attrs6580))?sablono.interpreter.attributes.call(null,attrs6580):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6580))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6580)], null))));
})(),sablono.interpreter.input.call(null,{"type": "text", "value": new cljs.core.Keyword(null,"num-key","num-key",3306782474).cljs$core$IFn$_invoke$arity$1(state).call(null,self__.app)}),React.DOM.button({"onClick": ((function (this$__$1){
return (function (){return focus.core.increment_state.call(null,self__.app,new cljs.core.Keyword(null,"num-key","num-key",3306782474).cljs$core$IFn$_invoke$arity$1(state),this$__$1);
});})(this$__$1))
},"+"));
});
focus.core.t6577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6579){var self__ = this;
var _6579__$1 = this;return self__.meta6578;
});
focus.core.t6577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6579,meta6578__$1){var self__ = this;
var _6579__$1 = this;return (new focus.core.t6577(self__.owner,self__.app,self__.incremental_text,meta6578__$1));
});
focus.core.__GT_t6577 = (function __GT_t6577(owner__$1,app__$1,incremental_text__$1,meta6578){return (new focus.core.t6577(owner__$1,app__$1,incremental_text__$1,meta6578));
});
}
return (new focus.core.t6577(owner,app,incremental_text,null));
});
focus.core.ratio_check = (function ratio_check(app,owner){if(typeof focus.core.t6585 !== 'undefined')
{} else
{
/**
* @constructor
*/
focus.core.t6585 = (function (owner,app,ratio_check,meta6586){
this.owner = owner;
this.app = app;
this.ratio_check = ratio_check;
this.meta6586 = meta6586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
focus.core.t6585.cljs$lang$type = true;
focus.core.t6585.cljs$lang$ctorStr = "focus.core/t6585";
focus.core.t6585.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"focus.core/t6585");
});
focus.core.t6585.prototype.om$core$IRender$ = true;
focus.core.t6585.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs6588 = (((new cljs.core.Keyword(null,"lapses","lapses",4198884440).cljs$core$IFn$_invoke$arity$1(self__.app) >= (new cljs.core.Keyword(null,"breaks","breaks",3927947974).cljs$core$IFn$_invoke$arity$1(self__.app) * new cljs.core.Keyword(null,"ratio","ratio",1122190205).cljs$core$IFn$_invoke$arity$1(self__.app))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"You're doing well!"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"Try to focus a bit more!"], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs6588))?sablono.interpreter.attributes.call(null,attrs6588):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6588))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6588)], null))));
});
focus.core.t6585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6587){var self__ = this;
var _6587__$1 = this;return self__.meta6586;
});
focus.core.t6585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6587,meta6586__$1){var self__ = this;
var _6587__$1 = this;return (new focus.core.t6585(self__.owner,self__.app,self__.ratio_check,meta6586__$1));
});
focus.core.__GT_t6585 = (function __GT_t6585(owner__$1,app__$1,ratio_check__$1,meta6586){return (new focus.core.t6585(owner__$1,app__$1,ratio_check__$1,meta6586));
});
}
return (new focus.core.t6585(owner,app,ratio_check,null));
});
focus.core.focus_view = (function focus_view(app,owner){if(typeof focus.core.t6594 !== 'undefined')
{} else
{
/**
* @constructor
*/
focus.core.t6594 = (function (owner,app,focus_view,meta6595){
this.owner = owner;
this.app = app;
this.focus_view = focus_view;
this.meta6595 = meta6595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
focus.core.t6594.cljs$lang$type = true;
focus.core.t6594.cljs$lang$ctorStr = "focus.core/t6594";
focus.core.t6594.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"focus.core/t6594");
});
focus.core.t6594.prototype.om$core$IRender$ = true;
focus.core.t6594.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs6597 = cljs.core.map.call(null,((function (this$__$1){
return (function (p1__6589_SHARP_){return om.core.build.call(null,focus.core.incremental_text,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),p1__6589_SHARP_], null));
});})(this$__$1))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Ratio:",new cljs.core.Keyword(null,"num-key","num-key",3306782474),new cljs.core.Keyword(null,"ratio","ratio",1122190205)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Lapses:",new cljs.core.Keyword(null,"num-key","num-key",3306782474),new cljs.core.Keyword(null,"lapses","lapses",4198884440)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Breaks:",new cljs.core.Keyword(null,"num-key","num-key",3306782474),new cljs.core.Keyword(null,"breaks","breaks",3927947974)], null)], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs6597))?sablono.interpreter.attributes.call(null,attrs6597):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6597))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,focus.core.ratio_check,self__.app))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6597),sablono.interpreter.interpret.call(null,om.core.build.call(null,focus.core.ratio_check,self__.app))], null))));
});
focus.core.t6594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6596){var self__ = this;
var _6596__$1 = this;return self__.meta6595;
});
focus.core.t6594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6596,meta6595__$1){var self__ = this;
var _6596__$1 = this;return (new focus.core.t6594(self__.owner,self__.app,self__.focus_view,meta6595__$1));
});
focus.core.__GT_t6594 = (function __GT_t6594(owner__$1,app__$1,focus_view__$1,meta6595){return (new focus.core.t6594(owner__$1,app__$1,focus_view__$1,meta6595));
});
}
return (new focus.core.t6594(owner,app,focus_view,null));
});
om.core.root.call(null,focus.core.focus_view,focus.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("focus")], null));

//# sourceMappingURL=core.js.map