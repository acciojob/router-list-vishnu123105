import React from "react";
import "./../styles/App.css";
import { Route, Switch, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <h1>Item List</h1>
        <ul>
          <li>
            <Link to="/item/1">Item1</Link>
          </li>
          <li>
            <Link to="/item/2">Item2</Link>
          </li>
          <li>
            <Link to="/item/3">Item3</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

const ItemDetails = () => {
  // const {id}=useParams()
  const don = window.location.pathname.split("/").reverse()[0];
  return (
    <>
      <h1>Item {don}</h1>
      <p>Discription for Item {don}</p>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/item/:id">
        <ItemDetails />
      </Route>
    </Switch>
  );
};

export default App;
