import './Styles/App.scss';
import Login from './Login';
import Detail from './Detail';
import List from './List';
import {Routes, Route, Outlet, Redirect, Link} from 'react-router-dom';
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
        <li><Link to="/list/detail">Detail</Link></li>
      </ul>

      {/* _Se renderizan los componentes segun la ruta indicada_ */}
      <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/list/detail' element={<Detail/>}></Route>
        <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p style={{
                textAlign: 'center', 
                position: 'relative', 
                top:'40vh', 
                fontSize:'70px', 
                backgroundColor:'gray'
                }}>There's nothing here!</p>
            </main>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
