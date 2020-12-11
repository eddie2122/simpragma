import React, {useState} from 'react';
import './App.css';
import LoginPage from './components/loginPage/loginPage';
import Store from './components/reduxStore/Store';
import { Provider } from 'react-redux';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logUserIn } from './components/reduxStore/LoginActions';
import Dashboard from './components/dashboard/dashboard';



function App() {


  const [isLogged, setIsLogged] = useState(false);

  const handleClick = () => {
    setIsLogged(true)
  }

  return (
    <div>
    <Provider store={Store}>
     {!isLogged ?  <LoginPage handleClick = {handleClick}/> : <Dashboard/>}
    </Provider>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ logUserIn: logUserIn }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
