import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./styles/app.css";
import SignUp from "./pages/signup";
import NotFound from "./pages/not-found";
import Dashboard from "./pages/dashboard";
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";
const Login = lazy(() => import("./pages/login"));

function App() {
  const { user } = useAuthListener();
  console.log(user);
  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
