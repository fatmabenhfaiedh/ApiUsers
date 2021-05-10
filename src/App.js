
import './App.css';
import {Route, Switch} from 'react-router-dom';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
  
    <Switch>
       <Route path="/" component={UsersList}/>
     </Switch>
    
    </div>
  );
}

export default App;
