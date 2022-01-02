import Header from './components/Header/Header';
import CardContainer from './components/CardContainer/CardContainer';
import NewHeader from './components/NewHeader/NewHeader';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <CardContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
