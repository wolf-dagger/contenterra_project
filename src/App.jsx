import Card from "./components/Card";
import Footer from "./components/Footer";
import MainBox from "./components/MainBox";

function App() {
  return (
    <>
      <div className="bg-black w-full p-5 rounded-xl">
        <h1 className="text-center text-[25px] font-mono">
          CONTENTERA ASSIGNMENT
        </h1>
      </div>
      <div className="main p-2">
        <div className="main-box">
          <MainBox />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
