import React, { useEffect, useState } from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { createStore, StateMachineProvider } from 'little-state-machine';
import { DevTool } from 'little-state-machine-devtools';
import { ThemeProvider } from 'styled-components';
import queryString from 'query-string';
import GlobalStyle from 'components/GlobalStyle/GlobalStyle';
import AppContainer from 'components/AppContainer/AppContainer';
import UserDetailsForm from './pages/UserDetailsForm';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

export const initialFormState = {
  form: {
    email: '',
    password: '',
    confirmPassword: '',
    voucher: '',
  },
};

export const initialStepState = {
  stepsCompleted: {
    stepOne: false,
    stepTwo: false,
    stepThree: false,
  },
};

createStore({
  ...initialFormState,
  ...initialStepState,
});

const theme = {
  accent: '#7114ea',
  backgroundColor: '#fff',
  fonts: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
};

function App() {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [params, setParams] = useState({});
  console.log('params: ', params);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      // use document
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    const urlParams = queryString.parse(window.location.search);
    console.log('urlParams: ', urlParams);
    setParams(urlParams);
  }, []);

  return (
    <Root>
      <ThemeProvider theme={theme}>
        <StateMachineProvider>
          {process.env.NODE_ENV !== 'production' && <DevTool />}
          <GlobalStyle />
          <AppContainer>
            <React.Suspense fallback={<em>Loading...</em>}>
              {isReady && (
                <Routes path={'/'} render={() => <UserDetailsForm />} />
              )}
            </React.Suspense>
          </AppContainer>
        </StateMachineProvider>
      </ThemeProvider>
    </Root>
  );
}

export default App;
