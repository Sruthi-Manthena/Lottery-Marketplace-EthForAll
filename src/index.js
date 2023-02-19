import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import 'remixicon/fonts/remixicon.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <App />
        </Router>
    </React.StrictMode>
);


