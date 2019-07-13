import React from 'react';

/* Components */
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const ListPage = () => {
    return (
        <div>
            <Header />

            <div className="main">
                <h1>List page</h1>
            </div>
            
            <Footer />
        </div>
    );
}

export default ListPage;