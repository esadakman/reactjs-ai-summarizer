import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  // Navigate,
  // Outlet,
  Route,
  Routes,
} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./styles/app.css";
import SignUp from "./pages/signup";
const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
