import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import  Header from './component/header/header.component';
import { Home } from './pages/home/home.component';
import { Footer } from './component/footer/footer.component';
import  Auth  from './pages/auth/auth.component';
import { Shop } from './pages/shop/shop.component'
import { auth, getUserDataRef } from './firebase/firebase.utils';

import setUser from './redux/user/user.action';

class App extends React.Component {

  unsubscribe = null;

  componentDidMount() {

    const { setUser } = this.props;

    this.unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user != null){
        const userDataRef = await getUserDataRef(user);
        setUser(userDataRef.data());
      }else{
        setUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Header/>

        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/auth' render={() => this.props.user == null ? <Auth /> : <Redirect to="/" />} />
          <Route exact={true} path='/shop' component={Shop} />
        </Switch>

        <Footer />
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: user => dispatch(setUser(user)) 
  };
};

const mapStateToProp = ({user}) => {
  return {
    user: user.activeUser
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(App);
