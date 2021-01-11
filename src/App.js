import profileImage from './img/me.gif';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>My react App</h1>
     <h2>Its me Pranav</h2>
     <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
