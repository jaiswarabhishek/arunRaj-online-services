// import Navbar from "./navbar";
// import Footer from "./footer";
import Navbar from "./Navbar";
import Footer from "./Footer";



export default function Layout({ children }) {
  return (
    <>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </>
  );
}
