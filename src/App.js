import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Messages from './components/Profile/Messages/Messages';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <div id="content">
        <Navbar />
        <div className="content">
          <Route exact path='/messages' component={Messages} />
          <Route exact path='/profile' component={Profile} />
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;