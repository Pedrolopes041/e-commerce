import { FunctionComponent, ButtonHTMLAttributes, ReactNode } from "react";

// Styles
import { CustomButtonContainer, IconContainer } from "./custom-button-style";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactNode;
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}

      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
