import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home.page";
import Login from "./pages/login/login.page";
import SignUpPage from "./pages/sign-up/sign-up.page";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase.config";

const App = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
