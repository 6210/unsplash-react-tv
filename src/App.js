import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './screens/Home/Home';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
};
