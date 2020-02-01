import React from 'react';

import NavBar from '../NavBar/NavBar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class MainLayout extends React.Component {

    componentDidMount() {
        setTimeout(this.func, 12000);
    }

    render() {
        return (
            <div className="MainLayout">
                <NavBar />
                <Main />
                <Footer />
            </div>
        );
    }

}

export default MainLayout;
