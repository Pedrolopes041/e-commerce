import styled from "styled-components";

import Colors from "../../theme/theme.color";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${Colors.background.dark};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: ${Colors.text.white};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderItem = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
  display: flex;
  align-items: center;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    margin-right: 40px;
  }

`;
