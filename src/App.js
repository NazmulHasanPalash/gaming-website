import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import Booking from './component/Booking/Booking';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRouter/PrivateRoute';

function App() {
  return (

    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route exact path="/home">
              <Home></Home>

            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>

            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router></AuthProvider>
    </div>
  )
}

export default App;
