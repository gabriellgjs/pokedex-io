import { Routes, Route } from 'react-router-dom';
import { ModalPokemon } from './components/ModalPokemon';

const Router = () =>{
    return (         
      <Routes>
        <Route path={`/:pokemon`} element={<ModalPokemon/>}/>
      </Routes>
    )
  }

export default Router;
