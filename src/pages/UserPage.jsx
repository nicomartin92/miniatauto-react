import React from 'react';

/* Components */
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const UserPage = () => {
    return (
        <div>
            <Header />

            <div className="main">
                <h1>User page</h1>
                <ul>
                    {['nico', 'paul', 'luc'].map((user, idx) => {
                        return <li key={idx}>{user}</li>
                    })}
                </ul>
            </div>
            
            <Footer />
        </div>
    );
}

export default UserPage;