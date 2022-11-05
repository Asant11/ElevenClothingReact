import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Header/NavBar/NavBar';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer';
import Form from './components/Main/Form/Form';
import Cart from './components/Main/Cart/Cart';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Provider from './context/CartContext';



function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting='Bienvenido a Eleven Clothing'/>}/> 
            <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/form" element={<Form/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
