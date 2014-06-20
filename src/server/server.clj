(ns server
  (:require [ring.util.response :refer [file-response]]
            [ring.adapter.jetty :refer [run-jetty]]
            [compojure.core :refer [defroutes GET]]
            [compojure.route :as route]))

(defroutes routes
  (GET "/" [] (file-response "public/index.html" {:root "resources"}))
  (route/files "/public" {:root "resources/public"})
  (route/not-found "It's not here, ask someone else."))

(def app routes)
