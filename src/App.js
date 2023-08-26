import AdvisorList from "./components/AdvisorList";
import Footer from "./components/Footer";
import MentorList from "./components/MentorList";
import Universitylist from "./components/Universitylist";

function App() {
  return (
    <div className='mx-6 md:mx-16 lg:mx-32 h-screen font-Montserrat'>
      <Universitylist/>
      <MentorList/>
      <AdvisorList/>
      <Footer/>
    </div>
  );
}

export default App;
