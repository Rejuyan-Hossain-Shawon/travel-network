
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewProgram from './components/AddNewProgram/AddNewProgram';
import AllOrders from './components/AllOrders/AllOrders';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import OrderPlaced from './components/OrderPlaced/OrderPlaced';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/allorders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path="/addnewprogram">
              <AddNewProgram></AddNewProgram>
            </PrivateRoute>
            <PrivateRoute path="/tourprogram/:id">
              <OrderPlaced></OrderPlaced>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
