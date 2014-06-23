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
           goog.events.EventType))

(enable-console-print!)

(def app-state (atom {:lapses 0 :breaks 0 :ratio 3}))

(defn increment-state [data edit-key owner]
  (om/transact! data edit-key (fn [x] (+ x 1))))

(defn incremental-text [app owner]
  (reify
    om/IRenderState
    (render-state [this state]
      (html [:div
             [:label (:label state)]
             [:input {:type "text" :value ((:num-key state) app)}]
             [:button {:on-click #(increment-state app (:num-key state) this)} "+"]]))))

(defn ratio-check [app owner]
  (reify
    om/IRender
    (render [this]
      (html [:div
             (if (>= (:lapses app) (* (:breaks app) (:ratio app)))
               [:div "You're doing well!"]
               [:div "Try to focus a bit more!"])]))))

(defn focus-view [app owner]
  (reify
    om/IRender
    (render [this]
      (html [:div
             (map #(om/build incremental-text app {:init-state %})
                  [{:label "Ratio:"  :num-key :ratio}
                   {:label "Lapses:" :num-key :lapses}
                   {:label "Breaks:" :num-key :breaks}])
             (om/build ratio-check app)]))))

(om/root focus-view app-state
  {:target (.getElementById js/document "focus")})
