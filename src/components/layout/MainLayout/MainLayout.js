import React from 'react';

import NavBar from '../NavBar/NavBar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const MainLayout = () => {

    return (
        <div className="MainLayout">
            <NavBar />
            <Main />
            <Footer />
        </div>
    );
}

export default MainLayout;
