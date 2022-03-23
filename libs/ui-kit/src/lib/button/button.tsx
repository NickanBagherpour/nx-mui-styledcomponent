import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';

/* eslint-disable-next-line */
export interface ButtonProps {
  variant?: any;
}

const StyledButton = styled(MuiButton)`
  color: ${props => props.theme.palette.secondary.main};
  //background-color: ${props => props.theme.palette.primary.main};
  padding: 5px;
`;

const Button = (props: ButtonProps) => {
  return (
    <StyledButton variant={props.variant ?? 'contained'}>
      Welcome to Button!
    </StyledButton>
  );
};

export default Button;
