import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/logo.png" alt="Vision Academy Logo" className="App-logo" />
        <h1>Welcome to Vision Academy</h1>
        <p>
          Your gateway to learning and innovation.
        </p>
        <p>
          Explore our courses and resources to enhance your skills.
        </p>
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="member">
              <img src="/images/ceo.png" alt="CEO" />
              <p>CEO</p>
            </div>
            <div className="member">
              <img src="/images/coo.jpg" alt="COO" />
              <p>COO</p>
            </div>
            <div className="member">
              <img src="/images/pc-sir.png" alt="PC Sir" />
              <p>PC Sir</p>
            </div>
            <div className="member">
              <img src="/images/sonalika-das.png" alt="Sonalika Das" />
              <p>Sonalika Das</p>
            </div>
            <div className="member">
              <img src="/images/urmila.jpeg" alt="Urmila" />
              <p>Urmila</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
