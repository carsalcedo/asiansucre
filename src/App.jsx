import React from 'react';
import NavBarra from './components/NavBarra';
import Start from './components/Start';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import GallerySection from './components/GallerySection';
import Galeria from './Galeria'
import Foot from './components/Foot';
import MaidCafe from './components/MaidCafe';
import Games from './components/Games';
import Concursos from './components/Concursos';
import Shows from './components/Shows';

 const App = () => {
  const {fotos} = Galeria;

  const mc = fotos.filter(foto => foto.event == "maidface" );
  const w = fotos.filter(foto => foto.event == "winter" );
  const b = fotos.filter(foto => foto.event == "basara" );
  const h = fotos.filter(foto => foto.event == "halloween" );
  const comida = fotos.filter(foto => foto.event == "comida" );
  const juegos = fotos.filter(foto => foto.event == "juegos" );
  const kpop = fotos.filter(foto => foto.id >= 91 && foto.id <= 93 );

  return (
    <div className="container mx-auto px-4">
      <Router>     
        <header>
          <NavBarra/>
        </header>
        
        <Switch>
          <Route path='/maidcafe'>
            <GallerySection fotos={mc} titulo='Asian Sucre Maid´s Café'/>
          </Route> 
          <Route path='/winter'>
            <GallerySection fotos={w} titulo='Asian Sucre Winter'/>
          </Route> 
          <Route path='/basara'>
            <GallerySection fotos={b} titulo='Asian Sucre Basara Challenge'/>
          </Route> 
          <Route path='/halloween'>
            <GallerySection fotos={h} titulo='Asian Sucre Halloween Party'/>
          </Route> 
          <Route path='/maids'>
            <MaidCafe fotos={comida}/>
          </Route> 
          <Route path='/videogames'>
            <Games fotos={juegos}/>
          </Route> 
          <Route path='/concursos'>
            <Concursos/>
          </Route> 
          <Route path='/shows'>
            <Shows fotos={kpop}/>
          </Route> 
          <Route path='/' exact>
            <Start/>
          </Route> 
        </Switch>
      
        <footer className='mt-28'>
          <Foot/>
        </footer>
      </Router>

    </div>
  )
}

export default App;