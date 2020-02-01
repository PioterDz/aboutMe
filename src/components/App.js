import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import MainLayout from './layout/MainLayout/MainLayout';

library.add(faBars);

function App() {
  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export default App;
