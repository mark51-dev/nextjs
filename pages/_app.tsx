import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "../redux/store";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/Global';


const theme = {
    colors: {
        primary: '#0070f3',
    },
};

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
    </ThemeProvider>
);

export default wrapper.withRedux(WrappedApp);
