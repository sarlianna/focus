(ns focus.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [garden.core :refer [css]]
            [goog.events :as events]
            [goog.cssom :as cssom]
            [goog.dom :as gdom])
  (:import goog.net.EventType
           goog.History
           goog.history.EventType
           goog.events.EventType))

(enable-console-print!)

(def app-state (atom {:lapses 0 :breaks 0 :ratio 3 :last-break 0}))

(defn increment-state [data edit-key owner]
  ;; Very unideal placement here, only here to get it working quickly
  (if (= edit-key :breaks) (om/transact! data :last-break (fn [_] (:lapses @data))))
  (om/transact! data edit-key (fn [x] (+ x 1))))

(defn handle-numeric-change [e data edit-key owner]
  (let [value (.. e -target -value)]
    (.log js/console value)
    (if (re-find #"[0-9]+" value)
      (om/transact! data edit-key (fn [_] (.. e -target -value))))
    (if-not (= "" value) 
      (om/set-state! owner :value value))))

(defn incremental-text [app owner]
  (reify
    om/IInitState
    (init-state [this]
      )
    om/IRenderState
    (render-state [this {:keys [label num-key]}]
      (html [:div
             [:label label]
             [:input {:type "text" :value (num-key app)}]
             [:button {:on-click #(increment-state app num-key this)} "+"]]))))

(defn editable [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [label val-key]}]
      (html [:div
             [:label label]
             [:input {:type "text" :value (val-key app) 
                      :on-change #(handle-numeric-change % app val-key owner)}]]))))

(defn last-break [app owner]
  (reify
    om/IRender
    (render [this]
      (html
        [:div "Lapses since last break: "
         [:span (- (:lapses app) (:last-break app))]]))))

;; Summary messages about performance overall -- not super necessary
(defn ratio-check [app owner]
  (reify
    om/IRender
    (render [this]
      (html [:div
             (if (>= (:lapses app) (* (:breaks app) (:ratio app)))
               [:div "Overall: you're doing well!"]
               [:div "Overall: try to focus a bit more next time!"])]))))

(defn current-check [app owner]
  (reify
    om/IRender
    (render [this]
      (html [:div
             (if (>= (- (:lapses app) (:last-break app)) (:ratio app))
               [:div "Currently: Feel free to take a short break anytime!"]
               [:div "Currently: Keep going! You can do it!"])]))))

(defn focus-view [app owner]
  (reify
    om/IRender
    (render [this]
      (html [:div
             (om/build editable app {:init-state {:label "Ratio:" :val-key :ratio}})
             (map #(om/build incremental-text app {:init-state %})
                   [{:label "Lapses:" :num-key :lapses}
                    {:label "Breaks:" :num-key :breaks}])
             (om/build last-break app)
             (om/build current-check app)
             (om/build ratio-check app)]))))

(om/root focus-view app-state
  {:target (.getElementById js/document "focus")})
