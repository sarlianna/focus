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

;; styles

(def incremental-btn
  [:.incremental-btn {:margin-left "-30px"
                      :fuck-you-left "99999999px"
                      :margin-top "25px"
                      }])

(def styles (css (concat
                   [[:body
                     {:background "#EEE"}
                     ]]
                   [[:.wrapper {:width "100%"
                                :padding "20px"}]]
                   [incremental-btn])))

(cssom/addCssText styles)

;; app logic and logic components

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
    om/IRenderState
    (render-state [this {:keys [label num-key]}]
      (html [:div 
             [:div {:class "form-group col-xs-3"}
               [:label label]
               [:input {:type "text" :value (num-key app) :class "form-control"}]]
             [:div {:class "col-xs-1"}
               [:button {:class "btn incremental-btn" 
                         :on-click #(increment-state app num-key this)} "+"]]]))))

(defn editable [app owner]
  (reify
    om/IRenderState
    (render-state [this {:keys [label val-key]}]
      (html [:div {:class "form-group col-xs-4"}
             [:label label]
             [:input {:type "text" :value (val-key app) :class "form-control"
                      :on-change #(handle-numeric-change % app val-key owner)}]]))))

(defn last-break [app owner]
  (reify
    om/IRender
    (render [this]
      (html
        [:div
         [:b "Lapses since last break: "]
         [:span (- (:lapses app) (:last-break app))]]))))

;; Summary messages about performance overall -- rather unnecessary
(defn ratio-check [app owner]
  (reify
    om/IRender
    (render [this]
      (html [:div
             [:b "Overall: "]
             (if (>= (:lapses app) (* (:breaks app) (:ratio app)))
               [:p {:class "text-success"} "You're doing well!"]
               [:p {:class "text-danger"} "Try to focus a bit more next time!"])]))))

(defn current-check [app owner]
  (reify
    om/IRender
    (render [this]
      (html [:div
             [:b "Currently: "]
             (if (>= (- (:lapses app) (:last-break app)) (:ratio app))
               [:p {:class "text-success"} "Feel free to take a short break anytime!"]
               [:p "Keep going! You can do it!"])]))))

(defn focus-view [app owner]
  (reify
    om/IRender
    (render [this]
      (html [:div {:class "wrapper"}
             [:div {:class "row"}
               (om/build editable app {:init-state {:label "Ratio:" :val-key :ratio}})
               (map #(om/build incremental-text app {:init-state %})
                     [{:label "Lapses:" :num-key :lapses}
                      {:label "Breaks:" :num-key :breaks}])]
             [:div {:class "row"}
              [:div {:class "col-xs-3"}
               (om/build last-break app)]
              [:div {:class "col-xs-3"}
               (om/build current-check app)]
              [:div {:class "col-xs-3"}
               (om/build ratio-check app)]]]))))

(om/root focus-view app-state
  {:target (.getElementById js/document "focus")})
