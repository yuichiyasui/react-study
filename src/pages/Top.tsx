import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
          検索結果
        </Route>
      </Switch>
    </Router>
  )
}
export default Top
