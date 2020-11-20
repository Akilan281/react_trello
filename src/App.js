import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { SCREENS } from './common/Constant';
import HomeComponent from './screens/home/HomeComponent';
import {Provider} from 'react-redux'
import Store from './redux/store/Store'

function App() {
  return (
 <Provider store={Store}>
      <Router>
      <Switch>
        <Route exact path={SCREENS.HOME} component={HomeComponent}/>
      </Switch>
    </Router>
 </Provider>
  )
}

export default App;
