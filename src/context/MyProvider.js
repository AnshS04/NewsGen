import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true);

    return (
        <MyContext.Provider value={{ articles, setArticles, totalResults, setTotalResults, loading, setLoading }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
