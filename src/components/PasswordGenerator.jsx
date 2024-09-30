import { useRef, useMemo } from "react";

const PasswordGenerator = ({
  passwordLength,
  isNumAllowed,
  isCharAllowed,
  onCopy,
}) => {
  const passwordRef = useRef(null); // Reference to the password input field

  const generatePassword = (length, includeNum, includeChar) => {
    const defaultSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberSet = "0123456789";
    const characterSet = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    let passwordPool = defaultSet;
    if (includeNum) passwordPool += numberSet;
    if (includeChar) passwordPool += characterSet;

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordPool.length);
      password += passwordPool[randomIndex];
    }

    return password;
  };

  const generatedPassword = useMemo(() => {
    return generatePassword(passwordLength, isNumAllowed, isCharAllowed);
  }, [passwordLength, isNumAllowed, isCharAllowed]);

  const handleCopy = async () => {
    try {
      passwordRef.current.select();
      await navigator.clipboard.writeText(passwordRef.current.value);
      onCopy("Password copied!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        value={generatedPassword}
        ref={passwordRef}
      />
      <button
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        onClick={handleCopy}
      >
        Copy
      </button>
    </div>
  );
};

export default PasswordGenerator;
