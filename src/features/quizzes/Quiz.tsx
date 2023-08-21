import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import { useSelector } from "react-redux";
import { selectQuiz } from "./quizzesSlice";

export default function Topic() {
  const quizzes = useSelector(selectQuiz);
  let { id } = useParams();
  const quiz = quizzes[id];

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
