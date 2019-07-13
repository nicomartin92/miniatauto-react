import React from 'react';

/* Components */
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainPage = () => {
    return (
        <div>
            <Header />

            <div className="main">
                <h1>Main page</h1>
            </div>
            
            <Footer />
        </div>  
    );
}

export default MainPage;