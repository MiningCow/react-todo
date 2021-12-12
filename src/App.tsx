import { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import TodoForm from "./pages/TodoForm";
import "./App.css";

const App: FC = () => {
  return (
    <Router>
			<Routes>
				<Route path="/" element={<Navigate replace to="/todos" />} />
				<Route path="/todos" element={<TodoPage />} />
				<Route path="/todos/:todoId" element={<TodoForm />} />
			</Routes>
    </Router>
  );
}

export default App;
