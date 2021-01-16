import React from 'react';
import { Route, Switch } from 'react-router-dom';

import  Header from './component/header/header.component';
import { Home } from './pages/home/home.component';
import { Footer } from './component/footer/footer.component';
import  Auth  from './pages/auth/auth.component';
import { Shop } from './pages/shop/shop.component'
import { auth, getUserDataRef } from './firebase/firebase.utils';

class App extends React.Component {

  unsubscribe = null;

  constructor() {
    super()
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user != null){
        const userDataRef = await getUserDataRef(user);
        this.setState({user : userDataRef.data()});
      }else{
        this.setState({user : null});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.user}/>

        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/auth' render={ () => <Auth currentUser={this.state.user}/> } />
          <Route exact={true} path='/shop' component={Shop} />
        </Switch>

        <Footer />
      </div>
    );
  }

}

export default App;
