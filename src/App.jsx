import { useEffect, useMemo, useRef, useState } from "react";
import PasswordGenerator from "./components/PasswordGenerator";
import PasswordControls from "./components/PasswordControls";
import ToastMessage from "./components/ToastMessage";

import "./App.css";

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopy = (message) => {
    setCopyMessage(message);
    setTimeout(() => setCopyMessage(""), 1000); // Clear message after 2 seconds
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>

      <PasswordGenerator
        passwordLength={passwordLength}
        isNumAllowed={isNumAllowed}
        isCharAllowed={isCharAllowed}
        onCopy={handleCopy}
      />

      <PasswordControls
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
        isNumAllowed={isNumAllowed}
        setIsNumAllowed={setIsNumAllowed}
        isCharAllowed={isCharAllowed}
        setIsCharAllowed={setIsCharAllowed}
      />

      <ToastMessage message={copyMessage} />
    </div>
  );
}

export default App;
