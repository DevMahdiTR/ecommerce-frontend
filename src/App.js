import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header, Overlay} from './components/index';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <div className="App">
    <Provider store = {store}>
      <Overlay/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Header/> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
