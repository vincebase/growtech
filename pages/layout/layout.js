import Navbar from "../templates/nav";
import Footer from "../templates/ourFooter";


const Layout = ({ children }) => {
   return (
      <>
         <div className="content">
            <Navbar />

            {/* page content */}
            {children}

            <Footer />
         </div>
      </>
   );
};

export default Layout;
