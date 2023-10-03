import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header} from './components/index';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Header/> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
