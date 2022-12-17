import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';

function Layout({children}) {
   return(
      <>   
         <Navbar />
         <div>{children}</div>
      </>
         
   );   
}

export default Layout;