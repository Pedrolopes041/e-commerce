import styled from "styled-components";
import Colors from "../../theme/theme.color";

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${Colors.text.dark};
    font-weight: 500;
    margin-bottom: 25px;
    font-size: 1.325rem;
    max-width: 50%;
    text-align: center;
  }
`;
