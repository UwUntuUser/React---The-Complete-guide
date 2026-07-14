import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const activeQuestionIndex =
    answerState === ""
      ? answeredQuestions.length
      : answeredQuestions.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const onQuestionAnswered = useCallback(
    function onQuestionAnswered(answer) {
      setAnswerState("answered");
      setAnsweredQuestions((prev) => [...prev, answer]);

      setTimeout(() => {
        if (QUESTIONS[activeQuestionIndex]?.answers[0] === answer) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 1000);
      }, 1000);
    },
    [activeQuestionIndex],
  );

  const handleSkipAnswer = useCallback(
    () => onQuestionAnswered(null),
    [onQuestionAnswered],
  );

  if (quizIsComplete) {
    return <Summary answers={answeredQuestions} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex]?.text}
        answers={QUESTIONS[activeQuestionIndex]?.answers}
        answerState={answerState}
        selectedAnswer={answeredQuestions[answeredQuestions.length - 1]}
        onSelectAnswer={onQuestionAnswered}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
