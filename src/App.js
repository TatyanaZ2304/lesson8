import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import './App.css';

const routes = [
  {
    id: '№1',
    name: 'Product'
  },
  {
    id: '№2',
    name: 'Product'
  },
  {
    id: '№3',
    name: 'Product'
  },
  {
    id: '№4',
    name: 'Product'
  },
  {
    id: '№5',
    name: 'Product'
  }
];

class NavMenu extends React.Component {
  render() {
    return (
      <menu className="nav-menu">
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        {routes.map(page => {
          const { id, name } = page;
          return <li key={id}>
          <NavLink to={`/products/${id}`}>{name} {id}</NavLink>
          </li>
        })}
      </menu>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products/:myId' exact component={Products} />
        </Switch>
        
      </Router>
    </div>
  );
}
export default App;
