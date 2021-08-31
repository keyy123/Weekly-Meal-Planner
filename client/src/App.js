import './App.css';
import Layout from './layout/Layout'
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'
import {useState, useEffect} from 'react'
import { useHistory, Switch, Route } from 'react-router-dom';
import Login from './screens/Login'
import Register from './screens/Register';
import MainContainer from './containers/MainContainer';
import Home from '../src/screens/Home/Home'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
handleVerify()
  }, [])
  
  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);  
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/')
  }



  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/Login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/Register'>
            <Register handleRegister={handleRegister}/>
          </Route>
          <Route path="/Home">
            <Home />         
          </Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
