import { FunctionComponent, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";
import Header from "../header/header.component";
import Loading from "../loading/loading";

interface ChildrenProp {
  children: React.ReactNode;
}

const Authentication: FunctionComponent<ChildrenProp> = ({ children }) => {
  const { isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading messager="Você precisa estar logado para acessar essa pagina" />
      </>
    );
  }

  return children;
};

export default Authentication;
