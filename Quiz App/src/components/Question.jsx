import ProgressBar from "./ProgressBar.jsx";
import Answers from "./Answers.jsx";
const TIMEOUT = 10000; // 10 seconds

export default function Question({
  questionText,
  answers,
  answerState,
  selectedAnswer,
  onSelectAnswer,
  onSkipAnswer,
}) {
  return (
    <div id="questions">
      <h2>{questionText}</h2>
      <ProgressBar onTimeout={onSkipAnswer} timeout={TIMEOUT}></ProgressBar>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      ></Answers>
    </div>
  );
}
