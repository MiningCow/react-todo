import { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import "./App.css";

const App: FC = () => {
  return (
    <Router>
			<Routes>
				<Route path="/" element={<Navigate replace to="/todo" />} />
				<Route path="/todo" element={<TodoPage />} />
			</Routes>
    </Router>
  );
}

export default App;
