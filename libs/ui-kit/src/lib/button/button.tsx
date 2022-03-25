import styled from 'styled-components';
import { Button as MuiButton, ButtonProps } from '@mui/material';

export interface IButtonProps extends ButtonProps {
}

const StyledButton = styled(MuiButton)`
    //color: ${props => props.theme.palette.secondary.main};
    //background-color: ${props => props.theme.palette.primary.main};
  padding: 5px;
  min-width: 160px;
`;

const Button = (props: IButtonProps) => {
  // console.log(props);
  return (
    <StyledButton {...props}>
      {/*{props.children}*/}
    </StyledButton>
  );
};

export default Button;
