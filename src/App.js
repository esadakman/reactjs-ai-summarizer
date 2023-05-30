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
import NotFound from "./pages/not-found";
const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path="/*" element={<NotFound  />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
