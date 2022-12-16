import Login from './components/Login';
import Showstate from './components/Showstate';
import MyProvider from './components/provider/Provider';

function App() {
  return (
    <MyProvider>
      <Login />
      <Showstate />
    </MyProvider>
  );
}

export default App;
