import { useState } from 'react';
import './App.css';
import Loader from './Loader';
import Page from './Page';

function App() {

  const [data,setdata] = useState(true);

  return (
    <div className="App">
      {

        (data) ? <Loader/> : <Page/>

      }
      <input type="Button" value="Load Page" onClick={()=>{setdata(false)}}/>
    </div>
  );
}

export default App;
