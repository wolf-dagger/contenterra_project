import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import Footer from "./Footer";
import { MoonLoader } from "react-spinners";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

const MainBox = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = () => {
    axios
      .get("https://www.reddit.com/r/reactjs.json")
      .then((res) => {
        const rawData = res.data.data.children;
        setData(rawData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <ScrollUpButton style={{ backgroundColor: "black" }} />
      {isLoading ? (
        <>
          <div className="flex items-center justify-center h-screen">
            <div className="">  
              <MoonLoader size={40} color="white" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="sm:grid sm:grid-cols-1 mb-5 lg:grid lg:grid-cols-2">
            {data.map((data, index) => (
              <>
                <Card key={index} data={data} />
              </>
            ))}
          </div>
          <div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default MainBox;
