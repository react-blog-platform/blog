import React from "react"
import Loadable from "react-loadable"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "../App"
import loading from "../components/loading"

interface router {
  component: any
  path: string
}

const RouterList: Array<router> = [
  {
    component: () => import("../containers/Articles"),
    path: "/"
  },
  {
    component: () => import("../containers/Detail"),
    path: "/post/:postId"
  },
  {
    component: () => import("../containers/Management"),
    path: "/management"
  }
]

const AppRouter = () => (
  <Router>
    <Switch>
      <Route
        key={"/login"}
        exact
        path="/login"
        component={Loadable({
          loader: () => import("../containers/Login"),
          loading
        })}
      />
      <Route
        key={"/register"}
        exact
        path="/register"
        component={Loadable({
          loader: () => import("../containers/Register"),
          loading
        })}
      />
      <App>
        {RouterList.map(item => (
          <Route
            key={item.path}
            exact
            path={item.path}
            component={Loadable({
              loader: item.component,
              loading
            })}
          />
        ))}
      </App>
    </Switch>
  </Router>
)
export default AppRouter
