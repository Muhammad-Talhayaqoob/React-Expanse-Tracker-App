import  ReactDOM  from "react-dom";
import './index.css'
import App from './App.js'
//  { createRoot }  'react-dom/client';
// import { createRoot } from 'react-dom/client';
// const { createRoot } = require('react-dom/client');


// ReactDOM.render( <h2> <App/>  </h2>,document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <h2><App /></h2>
//   );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
  
