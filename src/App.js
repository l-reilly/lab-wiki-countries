// src/App.js
import "./App.css";
import Navbar from "./components/navbar";
import CountriesList from "./components/countriesList";
import countries from './countries.json'
import { Switch, Route } from 'react-router-dom'
import CountryDetails from "./components/countryDetails"

function App() {
  return <div className="App">
    <Navbar/>
    
    <Switch>
      <Route path="/" >
      <CountriesList countries={countries} />
      </Route>
        <Route path="/:id">
          <CountryDetails countries={countries} />
        </Route>
    </Switch>
  </div>;
}
export default App;