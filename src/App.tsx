import Router from 'Router/Router';

import Header from 'Components/Common/Header/Header';
import Footer from 'Components/Common/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <div id="us_main_wrapper">
        <Header />
        <Router />
      </div>
      <Footer />
    </>
  );
};

export default App;
