import './App.css';
import './bootstrap.css'
import {HashRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Container from 'react-bootstrap/Container';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
function App() {
  return (
    <Router>
    <Header />
      <main>
        <Container>
          <Routes>
            <Route path ='/' element = { <HomeScreen /> } exact />
            <Route path ='/login' element = { <LoginScreen /> }  />
            <Route path ='/register' element = { <RegisterScreen /> }  />
            <Route path ='/profile' element = { <ProfileScreen /> }  />
          </Routes>
        </Container>
      </main>
      </Router>
      
  );
}

export default App;
