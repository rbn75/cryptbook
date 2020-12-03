import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { DataCtxProvider } from './hooks/context'
import 'victory';

ReactDOM.render(
    <DataCtxProvider>
        <Router />
    </DataCtxProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
