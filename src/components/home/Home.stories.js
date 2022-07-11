import React from 'react';
import  Home  from './Home';
export default {
    title: 'MauroPintoSocañoP3aux/Home',
    component: Home,
    argTypes: {
        info: { firstName: 'Maurooo' },
    },
};

const Template = args => <Home { ...args } />;
export const LoggedIn = Template.bind({});
LoggedIn.args = {
    firstName: 'mauro',
    cambioBiografia: true,
    miniStoriBook : {
        0:{
            emoji: "watermelon",
                text: " i like sandia"
        }
    }
} 


