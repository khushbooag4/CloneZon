import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Header from './components/Mainsection/Header';
import Register from './components/register/Register';
import Error from './components/Mainsection/Error';

function App() {
  
  return (
  
<Router>
      <Switch>
          <Route exact path="/">
           <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/auth">
            <Dashboard />
          </Route>
          <Route path="/add">
            <RegisterIn />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <Navbar />
       <div className="header">
           <Header />
       </div>
      </div>
  );
}

function About() {
  return (
    <>
     <h1><center>This is a Amazon Clone</center></h1>
    </>
  );
}

function Dashboard() {
  return (
    <SignIn />
  );
}

function RegisterIn() {
  return (
    <>
    <Register />
    </>
  );
}

export default App;
