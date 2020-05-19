import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyle } from './GlobalStyle';
import { ListOfPhotoCards } from './components/ListOfPhotoCard';

export const App = () => (
    <React.Fragment>
        <GlobalStyle />
        <ListOfCategories />
        <ListOfPhotoCards />
    </React.Fragment>
);