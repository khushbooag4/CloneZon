import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Header from './components/Mainsection/Header';
import Register from './components/register/Register';
import Footer  from './components/Footer/Footer';
import ScrollButton from './components/utils/ScrollButton';
import Error from './components/Mainsection/Error';

function App() {
  
  return (
  
<Router>
      <Switch>
          <Route exact path="/">
           <Home />
           </Route>
          <Route path="/auth" exact={true} component= {SignIn} />
          <Route path="/add" exact={true} component = {Register} />
          <Route exact = {true} component={Error} />
         </Switch>
         {/* <footer><Footer /></footer> */}
         <ScrollButton />
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
function RegisterIn() {
  return (
    <>
    <Register />
    </>
  );
}

export default App;
