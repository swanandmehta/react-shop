import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './component/header/header.component';
import { Home } from './pages/home/home.component';
import { Footer } from './component/footer/footer.component';

class App extends React.Component {

  constructor(){
    super()
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header/>

        <Switch>
          <Route exact={true} path='/' component={Home} />
        </Switch>

        <Footer/>
      </div>
    );
  }

}

export default App;
