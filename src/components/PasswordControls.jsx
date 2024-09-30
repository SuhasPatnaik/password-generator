const PasswordControls = ({
  passwordLength,
  setPasswordLength,
  isNumAllowed,
  setIsNumAllowed,
  isCharAllowed,
  setIsCharAllowed,
}) => {
  return (
    <div className="flex text-sm gap-2">
      <div className="flex items-center gap-2">
        <input
          className="cursor-pointer"
          type="range"
          min={6}
          max={100}
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
        <label htmlFor="length">Length: {passwordLength}</label>
      </div>
      <div className="flex items-center gap-x-1 mx-2">
        <input
          type="checkbox"
          checked={isNumAllowed}
          onChange={(e) => setIsNumAllowed(e.target.checked)}
          id="numCheckbox"
        />
        <label htmlFor="numCheckbox">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1 mx-2">
        <input
          type="checkbox"
          checked={isCharAllowed}
          onChange={(e) => setIsCharAllowed(e.target.checked)}
          id="charCheckbox"
        />
        <label htmlFor="charCheckbox">Characters</label>
      </div>
    </div>
  );
};

export default PasswordControls;
