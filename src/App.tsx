import { Routes, Route } from "react-router";
import { auth } from "./firebase";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { ProtectedRoute } from "./components/ProtectedRoutes";

function App() {
  const [user] = useAuthState(auth);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage user={user} />} /> || (
      <Route path="/register" element={<RegisterPage user={user} />} />)
      <Route
        path="/"
        element={
          <ProtectedRoute user={user}>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
