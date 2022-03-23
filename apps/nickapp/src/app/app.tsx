import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

import { Button } from '@nxnick/ui-kit';
import { Box, Checkbox, FormControlLabel, FormGroup, Step, StepLabel, Stepper, Switch, TextField } from '@mui/material';

const StyledApp = styled.div`
  // Your style here
`;

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

export function App() {
  return (
    <StyledApp>
      <Button variant='outlined' />
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
        <FormControlLabel disabled control={<Checkbox />} label='سلام' />
      </FormGroup>

      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label='Label' />
        <FormControlLabel disabled control={<Switch />} label='Disabled' />
      </FormGroup>


      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        <TextField id='filled-basic' label='Filled' variant='filled' />
        <TextField id='standard-basic' label='Standard' variant='standard' />
      </Box>


      <Box my={10} sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

    </StyledApp>
  );
}

export default App;
