import './Styles/App.scss';
import Login from './Login';
import Detail from './Detail';
import List from './List';
import {Routes, Route, Switch, Redirect, Link} from 'react-router-dom';
import vid from './loop-bg.mp4';

function App() {
  return (
    <div className="App">

      <video id='animated-background' muted autoPlay loop >
        <source src={vid} type='video/mp4' />
      </video>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/list">List</Link></li>
        <li><Link to="/detail">Detail</Link></li>
      </ul>

      {/* _Se renderizan los componentes segun la ruta indicada_ */}
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
        <Route path='/list' element={<List/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
