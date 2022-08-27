import Router from 'Router/Router';

import Header from 'Components/Common/Header/Header';
import Footer from 'Components/Common/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
