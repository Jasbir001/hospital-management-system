import Appointment from "../component/Appointmet";
import DoctorsPreview from "../component/DoctorsPreview";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Main } from "../component/Main";
import Services from "../component/Services";

function Homepage()
{
    return(
        <>
           <Header/>
            <Main/>
            <Services/>
            <DoctorsPreview/>
            <Appointment/>
            <Footer/>
        </>
    )
}


export default Homepage