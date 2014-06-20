(ns focus.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [goog.events :as events]
            [goog.cssom :as cssom]
            [goog.dom :as gdom])
  (:import goog.net.EventType
           goog.History
           goog.history.EventType
           [goog.net XhrIO]
           goog.events.EventType))

(enable-console-print!)


(def app-state (atom {:lapses 0 :breaks 0 :ratio 3}))

(defn incremental-text [app owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (html [:div
             [:label "default"]
             [:input {:type "text" :value (:num-key state)}]
             [:button "+" {:on-click '()}]]))))

(def ratio (incremental-text "Ratio:" :ratio))

(def breaks (incremental-text "Breaks:" :breaks))

(def lapses (incremental-text "Lapses:" :lapses))

(defn focus-view [app owner]
  (reify
    om/IRender
    (render 
      (map #(om/build incremental-text app {:init-state %}) [{:num-key :ratio} {:num-key :lapses} {:num-key :breaks}]))))

(om/root focus-view app-state
  {:target (.getElementById js/document "focus")})
