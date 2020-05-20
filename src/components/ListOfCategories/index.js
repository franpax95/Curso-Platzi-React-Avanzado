import React, { useState, useEffect } from 'react';
import { Category } from '../Category';

import { List, Item } from './styles';
import { categories as mockCategories } from '../../../api/db.json';

function useCategoriesData(){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        window.fetch('https://curso-platzi-react-avanzado-h10w64ocw.now.sh/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response);
                //add some delay (1s) to see the loading
                setTimeout(() => setLoading(false), 1000);
            });
    }, []);

    return { categories, loading };
}

export const ListOfCategories = () => {
    const [showFixed, setShowFixed] = useState(false);
    const { categories, loading } = useCategoriesData();

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200;
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        }
        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);
    });

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                (loading) 
                    ? <Item key='loading'><Category /></Item>
                    : categories.map((category) => (
                        <Item key={category.id}>
                            <Category {...category} path={`/pet/${category.id}`} />
                        </Item>
                      ))
            }
        </List>
    )

    return (
        <React.Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </React.Fragment>
    )
}