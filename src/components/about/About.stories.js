import React from 'react';
import About from './About';
export default {
    title: 'MauroPintoSocañoP3aux/About',
    component: About
};

const Template = args => <About {...args} />;
export const LoggedIn = Template.bind({});
LoggedIn.args = {
    bibliografia: "i 'm Mauro "
    
} 
