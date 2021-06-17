import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount funtion to start up the app
const mount = (el) =>{
    ReactDOM.render(
        <App />,
        el
    );
};

// mount function for dev local
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot);
    }
}

//mount function for container production
export { mount };