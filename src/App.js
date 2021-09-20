// import styles
import './App.css';
// import Route And Switch
import { Switch, Route } from 'react-router-dom'
// import Componenets 
// import Header from './components/header/Header.js';
import Header from "./components/header/Header";

// import pages 
import ListCountry from './views/ListCountry';
import SingleCountry from './views/singleCountry/SingleCountry';
import  NotFound  from './views/notFound/NotFound';
// import Header from './components/header/Header';
function App() {
  return (
    <>
      <Header/>
      <Switch>
          <Route exact path="/">
              <ListCountry/>
          </Route>
          <Route exact path="/countries/:id" children={<SingleCountry />}>  
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
