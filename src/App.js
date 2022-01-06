import Header from './components/Header/Header';
import { Routes, Route } from 'react-router';
import SingleCardPage from './components/SingleCardPage/SingleCardPage';
import CardContainer from './components/CardContainer/CardContainer';
import Menu from './components/Menu/Menu';
function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<CardContainer />} />

        <Route path='/singlecard' element={<SingleCardPage />} />
      </Routes>
    </div>
  );
}

export default App;
