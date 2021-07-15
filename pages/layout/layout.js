import Navbar from "../templates/nav";
import Footer from "../templates/ourFooter";


const Layout = ({ children }) => {
   return (
      <>
         <Navbar />

         {/* page content */}
         {children}

         <Footer />
      </>
   );
};

export default Layout;
