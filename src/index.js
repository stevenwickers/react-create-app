import React from "react";
import { BrowserRouter } from 'react-router-dom';
import {render} from "react-dom";
import App from './App';
import { createBrowserHistory } from "history";
//import  express from 'express';



render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));




