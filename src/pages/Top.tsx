import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Result from 'pages/Result'
import TopContent from 'components/TopContent'

import 'assets/css/pages/top.scss'

const Top: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="bg-img">
            <TopContent />
          </div>
        </Route>
        <Route path="/search/:keyword" exact>
          <Result></Result>
        </Route>
      </Switch>
    </Router>
  )
}
export default Top
