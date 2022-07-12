import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";

function App() {
  const [searchResults, setSearchResults] = useState();
  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search setSearchResults={setSearchResults} />
    </div>
  );
}

export default App;
