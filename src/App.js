import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyle } from './styles/GlobalStyle';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import { Logo } from './components/Logo';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';

export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search);
    const detailId = urlParams.get('detail');
    console.log(detailId);

    return(
        <React.Fragment>
            <GlobalStyle />
            <Logo />
            {
                detailId
                    ?   <PhotoCardWithQuery id={detailId} />
                    :   <React.Fragment>
                            <ListOfCategories />
                            <ListOfPhotoCards categoryId={1} />
                        </React.Fragment>
            }
        </React.Fragment>
    )
}