import Navbar from "../templates/nav";
import MyFooter from "../templates/ourFooter";


const Layout = ({ children }) => {
   return (
      <>
         <Navbar />

         {/* page content */}
         {children}

         <MyFooter />
      </>
   );
};

export default Layout;
