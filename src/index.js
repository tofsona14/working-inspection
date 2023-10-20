import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
const initialState =  {
  
  company:  ['შპს ლილო', 'ლოჯისტიკის კომპანია','fafu'],
  questions:['მიუთითეთ სტატუსი','აქვთ თუ არა მშენებლობაზე მუშებს სპეციალური აღჭურვილობა?',"აკმაყოფილებს სტანდარტს?"],
  answers:[['არაინსპექტირებული', "ინსპექტირებული"],["კი", 'არა'], ['კი', 'არა'],]

  


}
  


const store = configureStore({
  reducer:(state)=> {
    return state
  },
preloadedState: initialState
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
