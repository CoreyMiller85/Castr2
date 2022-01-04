import Header from './components/Header/Header';
import { Routes, Route } from 'react-router';
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
