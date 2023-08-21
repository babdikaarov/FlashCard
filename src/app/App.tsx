import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";
import Root from "../components/Root.tsx";
import store from "./store.tsx";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/topics" element={<Topics />} />
      <Route path="/topics/new" element={<NewTopicForm />} />
      <Route path="/topics/:id" element={<Topic />} />
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/quizzes/new" element={<NewQuizForm />} />
      <Route path="/quizzes/:id" element={<Quiz />} />
    </Route>
  )
);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
