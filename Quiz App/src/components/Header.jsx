import quizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={quizLogo} alt="Quiz App Logo" />
      <h1>Quiz App</h1>
    </header>
  );
}
