import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectQuiz } from "./quizzesSlice";

export default function Quizzes() {
  const quizzes = useSelector(selectQuiz);
  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={`/quizzes/${quiz.id}`}>
            <li className="quiz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
