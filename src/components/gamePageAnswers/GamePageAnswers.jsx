import styles from "./styles.module.scss";
import { textReplacer } from "../../utils/textReplacer";
import { useEffect, useState } from "react";

export default function GamePageAnswers({
  question,
  getAnswer,
  score,
  answerColor,
}) {
  const [answerText, setAnswerText] = useState("");

  useEffect(() => {
    if (score <= 1) {
      setAnswerText("Correct Answer:");
    } else {
      setAnswerText("Correct Answers:");
    }
  });
  return (
    <div className={styles.AnswerContainer}>
      <h4>
        {answerText} {score}
      </h4>
      <div className={styles.AnswerGrid}>
        {question &&
          question.allQuestions.map((item, index) => (
            <h5
              className={styles.Answer}
              style={{
                backgroundColor: answerColor,
              }}
              onMouseDown={() => getAnswer(textReplacer(item))}
              key={index}
            >
              {textReplacer(item)}
            </h5>
          ))}
      </div>
    </div>
  );
}
