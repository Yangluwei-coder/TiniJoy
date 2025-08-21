import { Outlet } from 'react-router';
import './layout.css';
import ScrollHint from '../../components/ScrollHint/ScrollHint';
import Nav from '../../components/MainNavbar/Nav';
import Footer from '../../components/FooterSection/Footer';

export default function Layout() {
  return (

    <div> 
        <ScrollHint/>
        <Nav/>
        <div><Outlet/></div>       
        <Footer />
    </div>

  )
}