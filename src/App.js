import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ShareQRCodePopup from './components/ShareQRCodePopup'; 


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <ShareQRCodePopup />
      <Footer /> 
    </>
  );
}

export default App;