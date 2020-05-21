import React from 'react';
import { Router } from '@reach/router';

import { GlobalStyle } from './styles/GlobalStyle';
import Context from './Context';
import { Logo } from './components/Logo';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';



export const App = () => {
    return(
        <React.Fragment>
            <GlobalStyle />
            <Logo />
            <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path='/detail/:detailId' />
            </Router>

            <Context.Consumer>
                {
                    ({ isAuth }) => isAuth 
                        ?   <Router>
                                <Favs path='/favs' />
                                <User path='/user' /> 
                            </Router>
                        :   <Router>
                                <NotRegisteredUser path='/favs' />
                                <NotRegisteredUser path='/user' />
                            </Router>
                }   
            </Context.Consumer>
                
            <Navbar />
        </React.Fragment>
    )
}