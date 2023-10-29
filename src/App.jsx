import MainBox from "./components/MainBox";

function App() {
  return (
    <>
      <div className="bg-black w-full p-5 rounded-xl">
        <h1 className="text-center text-[25px] font-mono">
          <span className="text-[red] text-[40px]">C</span>ONTENTERA{" "}
          <span className="text-[red] text-[40px]">A</span>SSIGNMENT
        </h1>
      </div>
      <div className="main p-2">
        <div className="main-box">
          <MainBox />
        </div>
      </div>
    </>
  );
}

export default App;
