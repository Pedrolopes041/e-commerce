import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { FunctionComponent, useContext } from "react";

import HomePage from "./pages/home/home.page";
import Login from "./pages/login/login.page";
import SignUpPage from "./pages/sign-up/sign-up.page";
import ExplorePage from "./pages/explore/explore";
import Loading from "./components/loading/loading";
import CategoryDetailsPage from "./pages/category-details/category-details.page";

import { auth, db } from "./config/firebase.config";
import { UserContext } from "./contexts/user.context";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { UserConverter } from "./converte/firestore.converte";
import Cart from "./components/cart/cart-component";
import CheckoutPage from "./pages/checkout-page/checkout.pag";
import Authentication from "./components/authentication/authentication.component";
import PaymentConfirmationPage from "./pages/payment-confimation/payment.confirmation.page";

const App: FunctionComponent = () => {
  const { isAuthenticated, logautUser, loginUser } = useContext(UserContext);

  const [isinitializing, setIsInitializing] = useState(true);

  onAuthStateChanged(auth, async (user) => {
    const issSigninOut = isAuthenticated && !user;
    if (issSigninOut) {
      logautUser();
      return setIsInitializing(false);
    }

    const issSignIn = !isAuthenticated && user;
    if (issSignIn) {
      const querySnapShot = await getDocs(
        //Esta linha define a consulta ao banco de dados Firestore para obter documentos da coleção ‘users’ onde o campo ‘id’ é igual ao UID do usuário atual.
        query(
          collection(db, "users").withConverter(UserConverter),
          where("id", "==", user.uid)
        )
      );

      //Esta linha define uma constante useFromFireStore que armazena os dados do primeiro documento retornado pela consulta ao banco de dados Firestore.
      const useFromFireStore = querySnapShot.docs[0]?.data();

      loginUser(useFromFireStore);
      return setIsInitializing(false);
    }
    return setIsInitializing(false);
  });

  if (isinitializing) return <Loading />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign" element={<SignUpPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route
          path="/payment-confirmation"
          element={<PaymentConfirmationPage />}
        />

        <Route
          path="/checkout"
          element={
            <Authentication>
              <CheckoutPage />
            </Authentication>
          }
        />
      </Routes>

      <Cart />
    </BrowserRouter>
  );
};

export default App;
