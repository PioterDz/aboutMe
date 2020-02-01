import React from 'react';

import Photo from '../../common/Photo/Photo';

const arr = [1, 2, 3, 4, 5, 6];


const Page = () => {

    return arr.map(el => <img src="./bubble.svg" alt='bubble' />);
    // return (
    //     <div className="content">
    //         Strona główna.
    //     </div>
    // );
}

export default Page;