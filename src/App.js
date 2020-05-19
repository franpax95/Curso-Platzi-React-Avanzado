import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyle } from './styles/GlobalStyle';
import { ListOfPhotoCards } from './components/ListOfPhotoCard';
import { Logo } from './components/Logo';

export const App = () => (
    <React.Fragment>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards />
    </React.Fragment>
);