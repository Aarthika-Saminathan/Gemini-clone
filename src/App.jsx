import React, { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import generateResponse from "./Config/GeminiChat"; // ✅ Import the function correctly

const App = () => {
  const [response, setResponse] = useState("");

  const handleAskGemini = async () => {
    const result = await generateResponse("What is React?");
    setResponse(result);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <Sidebar />
      <Main />
      <div style={{ padding: "20px" }}>
        <button onClick={handleAskGemini}>Ask Gemini</button>
        <p>{response}</p> {/* ✅ Display Gemini's response */}
      </div>
    </div>
  );
};

export default App;
