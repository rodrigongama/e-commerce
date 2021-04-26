import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Update from './pages/Update';
import Aside from './components/Aside';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Aside />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/update" component={Update} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
