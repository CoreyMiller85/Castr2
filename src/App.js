import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';
import NewHeader from './components/NewHeader/NewHeader';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SingleCardPage from './components/SingleCardPage/SingleCardPage';
import Menu from './components/Menu/Menu';
function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/singlecard' element={<SingleCardPage />} />
      </Routes>
    </div>
  );
}

export default App;
