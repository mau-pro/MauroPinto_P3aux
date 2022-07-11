import { withTheme } from '@mui/material';
import React from 'react';
import App from './App';
export default {
    title: 'MauroPintoSocañoP3aux/App',
    component: App,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = args => <App {...args} />;
export const LoggedIn = Template.bind({});
LoggedIn.args = {
    ControlbackgroundColor: true

} 