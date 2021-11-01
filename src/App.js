
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewProgram from './components/AddNewProgram/AddNewProgram';
import AllOrders from './components/AllOrders/AllOrders';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
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
          <Route path="/myorders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/allorders">
            <AllOrders></AllOrders>
          </Route>
          <Route path="/addnewprogram">
            <AddNewProgram></AddNewProgram>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
