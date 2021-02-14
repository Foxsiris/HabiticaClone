import './App.css';
import Header from "./components/header/Header";
import DataPerson from "./components/DataPerson/DataPerson";
import Main from "./components/Main/Main";
import {Route, Switch} from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Inventory from "./components/Inventory/Inventory";


function App() {
  return (
    <div className="App">
        <Header/>
        <DataPerson name={'Daniil'}/>
       <Switch>
           <Route path="/"  exact component={Main}/>
           <Route path="/shop"  exact component={Shop}/>
           <Route path="/inventory"  exact component={Inventory}/>
       </Switch>
    </div>
  );
}

export default App;
