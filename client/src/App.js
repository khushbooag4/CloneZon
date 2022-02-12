import React, { Suspense } from 'react'
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/auth/SignIn';
import Register from './components/register/Register';
import ScrollButton from './components/utils/ScrollButton';
import Error from './components/Mainsection/Error';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallBack from './components/utils/ErrorBoudaries';
import Newsletter from './components/utils/NewsLetter';
import './App.css';

const Header = React.lazy( () => import("./components/Mainsection/Header"))



function App() {
   return (
  
<Router>
      <Switch>
          <Route exact path="/">
           <Home />
           </Route>
          <Route path="/auth" exact={true} component= {SignIn} />
          <Route path="/add" exact={true} component = {Register} />
          {/* <Route exact path= "/slider" component={Products} /> */}
          <Route exact = {true} component={Error} />
          
         </Switch>
        
         <ScrollButton />
    </Router>
    
  );
}
function Home() {
  return (
    <div>
      <Navbar />
       <div className="header">
         <ErrorBoundary FallbackComponent={ErrorFallBack} onReset = { () => {}}>
           <Suspense fallback={ <div>Loading....</div>}>
               <Header />
           </Suspense>
        </ErrorBoundary>
       </div>
      </div>
  );
}

export default App;
