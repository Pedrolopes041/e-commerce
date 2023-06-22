import React from 'react';
import {FunctionComponent} from 'react';

interface AppProps {
    message?: string;
}

const App: FunctionComponent<AppProps> = ({message}) => {
    return <h1>olá mundo</h1>;
}

export default App;
