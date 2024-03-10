import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Main/Home";
import HomeTemplate1 from "./Main/HomeTemplate1";
import HomeTemplate2 from "./Main/HomeTemplate2";
import HomeTemplate3 from "./Main/HomeTemplate3";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Home />
        <HomeTemplate1 />
        <HomeTemplate2 />
        <HomeTemplate3 />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
