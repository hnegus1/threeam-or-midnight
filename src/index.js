import React from 'react';
import ReactDOM from 'react-dom';
import {Footer} from './footer.js';
import {Quiz} from './quiz.js';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

function Index(){
    return(
        <div>
            <div class='main-content'><Quiz/></div>
            <div class='footer'><Footer/></div>
        </div>
    )
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);