import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Header/NavBar/NavBar';
import ItemListContainer from './components/Main/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/Main/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom';



function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenido a Eleven Clothing'/>}/> 
          <Route path='category/:categoryName' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
