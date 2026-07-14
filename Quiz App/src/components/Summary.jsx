import QUIZ_COMPLETE_IMAGE from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ answers }) {
  const skippedAnswers = answers.filter((answer) => answer === null);
  const correctAnswers = answers.filter(
    (answer, index) =>
      answer !== null && QUESTIONS[index]?.answers[0] === answer,
  );

  const skippedAnsweresShare = Math.round(
    (skippedAnswers.length / answers.length) * 100,
  );
  const correctAnsweresShare = Math.round(
    (correctAnswers.length / answers.length) * 100,
  );
  const wrongAnsweresShare = 100 - skippedAnsweresShare - correctAnsweresShare;

  return (
    <div id="summary">
      <img src={QUIZ_COMPLETE_IMAGE} alt="Quiz Complete" />
      <h2>Quiz Complete!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnsweresShare}</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnsweresShare}</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">{wrongAnsweresShare}</span>
          <span className="text">Wrong</span>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer == null) {
            cssClass += " skipped";
          } else if (QUESTIONS[index]?.answers[0] === answer) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index]?.text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
