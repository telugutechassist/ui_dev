import { useState } from 'react'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'

function App() {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSignupClick = () => {
    setIsRegistering(true);
  };

  return (
    <div>
      {isRegistering ? (
        <Register />
      ) : (
        <Login onSignupClick={handleSignupClick} />
      )}
    </div>
  );
}

export default App;
