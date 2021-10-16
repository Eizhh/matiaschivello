
import {NavBar} from './Components/Navbar/NavBar';
import { ItemListContainer} from "./Components/Container/ItemListContainer";
import './estilos.css'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import {
BrowserRouter,
Route,
Switch,
Redirect
}from 'react-router-dom'

function App() {




  return (
    <>
    <BrowserRouter>
      
      <NavBar />
      
      <Switch>
        <Route exact path="/">
         <ItemListContainer />
        </Route>

        <Route path="/productos/:categoryId">
          <ItemListContainer />
        </Route>

        <Route exact path="/detail/:itemId">
          <ItemDetailContainer/>
        </Route>

        <Route path="/contacto">
          <h1>Contacto</h1>
        </Route>

        <Route path="*">
           <Redirect to="/"/>
        </Route>

        <Route exact path="/cart">
           <h1>carrito</h1>
        </Route>

      </Switch>
    </BrowserRouter>

  </> 
  );
}

export default App;
