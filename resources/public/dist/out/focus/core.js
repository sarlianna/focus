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
goog.require('goog.net.XhrIO');
goog.require('om.dom');
goog.require('goog.events.EventType');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
focus.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lapses","lapses",4198884440),0,new cljs.core.Keyword(null,"breaks","breaks",3927947974),0,new cljs.core.Keyword(null,"ratio","ratio",1122190205),3], null));
focus.core.incremental_text = (function incremental_text(app,owner){if(typeof focus.core.t6326 !== 'undefined')
{} else
{
/**
* @constructor
*/
focus.core.t6326 = (function (owner,app,incremental_text,meta6327){
this.owner = owner;
this.app = app;
this.incremental_text = incremental_text;
this.meta6327 = meta6327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
focus.core.t6326.cljs$lang$type = true;
focus.core.t6326.cljs$lang$ctorStr = "focus.core/t6326";
focus.core.t6326.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"focus.core/t6326");
});
focus.core.t6326.prototype.om$core$IRenderState$ = true;
focus.core.t6326.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.label(null,"default"),sablono.interpreter.input.call(null,{"type": "text", "value": new cljs.core.Keyword(null,"num-key","num-key",3306782474).cljs$core$IFn$_invoke$arity$1(state)}),React.DOM.button(null,"+",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.List.EMPTY], null)));
});
focus.core.t6326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6328){var self__ = this;
var _6328__$1 = this;return self__.meta6327;
});
focus.core.t6326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6328,meta6327__$1){var self__ = this;
var _6328__$1 = this;return (new focus.core.t6326(self__.owner,self__.app,self__.incremental_text,meta6327__$1));
});
focus.core.__GT_t6326 = (function __GT_t6326(owner__$1,app__$1,incremental_text__$1,meta6327){return (new focus.core.t6326(owner__$1,app__$1,incremental_text__$1,meta6327));
});
}
return (new focus.core.t6326(owner,app,incremental_text,null));
});
focus.core.ratio = focus.core.incremental_text.call(null,"Ratio:",new cljs.core.Keyword(null,"ratio","ratio",1122190205));
focus.core.breaks = focus.core.incremental_text.call(null,"Breaks:",new cljs.core.Keyword(null,"breaks","breaks",3927947974));
focus.core.lapses = focus.core.incremental_text.call(null,"Lapses:",new cljs.core.Keyword(null,"lapses","lapses",4198884440));
