import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {FunctionComponent, useContext} from 'react'

import HomePage from "./pages/home/home.page";
import Login from "./pages/login/login.page";
import SignUpPage from "./pages/sign-up/sign-up.page";

import { auth, db} from "./config/firebase.config";
import { UserContext } from "./contexts/user.context";
import { collection, getDocs, query, where} from "firebase/firestore";

const App: FunctionComponent = () => {

  const {isAuthenticated, logautUser, loginUser} = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    const issSigninOut = isAuthenticated && !user;
    if (issSigninOut) {
      return logautUser()
    }

    const issSignIn = !isAuthenticated && user;
    if(issSignIn) {
      const querySnapShot = await getDocs(
        //Esta linha define a consulta ao banco de dados Firestore para obter documentos da coleção ‘users’ onde o campo ‘id’ é igual ao UID do usuário atual.
        query(collection(db, "users"), where("id", "==", user.uid))
      );

      //Esta linha define uma constante useFromFireStore que armazena os dados do primeiro documento retornado pela consulta ao banco de dados Firestore.
      const useFromFireStore = querySnapShot.docs[0]?.data();

      return loginUser(useFromFireStore as any);
    }
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
