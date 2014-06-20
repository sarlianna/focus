(defproject focus "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [om "0.5.0"]
                 [sablono "0.2.17"]
                 [ring "1.2.2"]]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.10"]]
  :source-paths ["src/focus" "src/server"]
  :ring {:handler server/app}
  :cljsbuild { :builds [{:id "dev"
                         :source-paths ["src/focus"]
                         :compiler {:externs ["react/react-with-addons.min.js"]
                                    :closure-warnings {:externs-validation :off
                                                       :non-standard-jsdoc :off}
                                    :output-to "./resources/public/dist/focus.js"
                                    :output-dir "./resources/public/dist/out"
                                    :optimizations :none
                                    :source-map true}}]})
