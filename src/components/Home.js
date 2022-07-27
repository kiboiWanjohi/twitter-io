import React from "react";
import app from "../Firebase/firebaseConfig";
function Home() {
  return (
    <div>
      Home
      <button id="log-in" onClick={() => app.auth().signOut()}>
        Log Out
      </button>
    </div>
  );
}

export default Home;
