import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const MainBox = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const fetchData = () => {
    axios
      .get("https://www.reddit.com/r/reactjs.json")
      .then((res) => {
        const rawData = res.data.data.children;
        console.log(rawData);
        setData(rawData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="sm:grid sm:grid-cols-1 mb-5 lg:grid lg:grid-cols-2">
        {data.map((data, index) => (
          <>
            <Card key={index} data={data} />
          </>
        ))}
      </div>
    </>
  );
};

export default MainBox;
