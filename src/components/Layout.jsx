import React from 'react';
import NavbarA from './NavbarA.jsx';
import Header from './Header.jsx';

class Layout extends React.Component {
   render() {
      return (
         <div>
         	<Header/>
            <h2 className="test">Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

export default Layout;