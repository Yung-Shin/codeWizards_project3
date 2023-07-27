import React from 'react';



//import Home from './pages/Home';
import Login from './pages/Login'; // Import LoginPage



/*

      <Route path="/home" element={<Home />} />
      <Route path="*" element={<div>404</div>} />
*/

function App() {
  return <div>hello app</div>
}
  
  /*
  Need to add this to app.js, just don't know where at

  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
  */


export default App;
