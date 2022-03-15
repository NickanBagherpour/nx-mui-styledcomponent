import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
}

const StyledButton = styled.button`
  color: blue;
  padding: 5px;
`;

const Button = (props: ButtonProps) => {
  return (
    <StyledButton>
      Welcome to Button!
    </StyledButton>
  );
};

export default Button;
