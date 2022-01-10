//import Navbar from './containers/Navbar/Navbar';
import LoginSignUpForm from './containers/LoginSignUpForm/LoginSignUpForm';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={LoginSignUpForm} exact />
        <Route path="/login-signup" component={LoginSignUpForm} />
        <Route
          render={() => {
            window.location.href = '/Error404.html';
          }}
        />
      </Switch>
    </main>
  );
}
// dikha kya mera msg ?