import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

import { Button } from '@nxnick/ui-kit';
import { useTranslation } from '@nxnick/translations';
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
  const { t }: any = useTranslation();

  const errorCode = 404;
  return (
    <StyledApp>
      <Button variant='outlined'>
        {t('button.cancel')}
      </Button>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label={t('button.register')} />
        <FormControlLabel disabled control={<Checkbox />} label={t('search')} />
      </FormGroup>

      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label={t(`title`)} />
        <FormControlLabel disabled control={<Switch />} label='Disabled' />
      </FormGroup>

      <Box margin={10}>
        <h1>{t('description.part1')}</h1>
        <h2>{t('description.part2')}</h2>
        <h3>{t('description.part3')}</h3>
        <h3>{t('description.part4', { selectLimit: 15 })}</h3>
        <h4>{t([`error.${errorCode}`, 'error.unspecific'])}</h4>
        <h4>{t([`error.${errorCode + 5}`, 'error.unspecific'])}</h4>
      </Box>

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
