import { useInput } from "../hooks/InputHook.jsx";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleOnBlur: handleEmailBlur,
    hasError: hasEmailError,
  } = useInput("", (value) => value.includes("@"));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleOnBlur: handlePasswordBlur,
    hasError: hasPasswordError,
  } = useInput("", (value) => value.length >= 6);

  function handleSubmit(event) {
    event.preventDefault();

    if (!hasEmailError && !hasPasswordError) {
      console.log("Submitted", emailValue, passwordValue);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={handleEmailBlur}
            onChange={(e) => handleEmailChange(e.target.value)}
            value={emailValue}
          />
          {hasEmailError && (
            <p className="control-error">Please enter a valid email address.</p>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={handlePasswordBlur}
            onChange={(e) => handlePasswordChange(e.target.value)}
            value={passwordValue}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
