import React from 'react';
import './App.css';
import Choose from './St/Choose';
import Base from './Nd/Base'
import Add from './Add/add';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useSelector } from 'react-redux'

// const counter = useSelector((state) => console.log(state));
const Example = () => {
  const counter = useSelector((state) => {
    return state.name
  })
  return (
    <div>
      name is {counter}
    </div>
  )
}
function App() {
  return(
    <BrowserRouter>
        <Routes>
            <Route path='example' element={<Example />}/>
            <Route path='add' element={<Add />}/>
            <Route path="/" element={<Choose />} />
            <Route path="base" element={<Base />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
