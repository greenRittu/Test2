import "./styles.css";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import AddFood from "./components/AddFood";
import Search from "./components/Search";
import FoodInfo from "./components/FoodInfo";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const opts = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

function Data(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [textError, setTextError] = useState("");
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/api/foods/`, opts)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setData(data);
        console.log("Success2:", data);
        props.onInputValueChange(data);
      })
      .then(() => {
        setLoading(false);
        console.log("Success2:", "test01");
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        setTextError(error);
        console.log("Error:", error);
      });
  }, []);

  if (loading) return <p className="pb-2">Loading...</p>;
  if (error) return <p className="pb-2">{textError.toString()}</p>;
  if (!data) return null;
  //if (data) return <pre className="pb-2">{data.toString()}</pre>;
  console.log("Test!");
}

export default function App() {
  const [foodList, setFoodList] = useState([]);

  return (
    <div className="App container mx-auto mt-4 font-thin bg-gray-200 p-2 rounded-md">
      <h3 className="text-3xl mb-5">
        <IoFastFoodOutline className="inline-block text-blue-500 mr-2 ml-3 mb-3" />
        List of Food
      </h3>
      <Data inputValue={foodList} onInputValueChange={setFoodList} />
      <AddFood />
      <Search />
      <ul>
        {foodList.map((food) => (
          <FoodInfo key={food.id} food={food} />
        ))}
      </ul>
    </div>
  );
}
