import { useState } from "react";
import { BiDetail, BiTrash, BiEdit } from "react-icons/bi";
import { Pie } from "react-chartjs-2";

const FoodInfo = ({ food, onDeleteFood, setEditedFood }) => {
  let [toggleFoodInfo, setToggleFoodInfo] = useState(false);

  let countProtein = parseFloat(food.countProtein);
  let countFat = parseFloat(food.countFat);
  let countCarbohydrate = parseFloat(food.countCarbohydrate);
  let countCalories = parseFloat(food.countCalories);
  let foodName = food.name;

  const data = {
    labels: [
      (
        (countProtein * 100) /
        (countProtein + countFat + countCarbohydrate)
      ).toFixed(1) + "% Protein",
      (
        (countFat * 100) /
        (countProtein + countFat + countCarbohydrate)
      ).toFixed(1) + "% Fat",
      (
        (countCarbohydrate * 100) /
        (countProtein + countFat + countCarbohydrate)
      ).toFixed(1) + "% Carbohydrate",
    ],
    datasets: [
      {
        label: "g",
        data: [countProtein, countFat, countCarbohydrate],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 0,
      },
    ],
  };

  function deleteItem() {
    onDeleteFood(food.id);
  }

  function editItem() {
    setEditedFood(food);
  }

  return (
    <li className="px-0 py-1 flex items-start">
      <div className="flex-grow rounded-md bg-gray-100 p-2">
        <div
          className="flex items-center"
          onClick={() => {
            setToggleFoodInfo(!toggleFoodInfo);
          }}
        >
          <span className="flex-none font-medium text-2xl text-gray-500">
            {foodName}
          </span>
          <span className="flex-none font-small text-1xl text-gray-500">
            &nbsp;&nbsp;
            {"(" + food.portionCount + food.portionText + ")"}
          </span>

          <span className="flex-grow text-right">
            {" "}
            <button
              type="button"
              onClick={() => {
                setToggleFoodInfo(!toggleFoodInfo);
              }}
              className="p-2 mr-0 mt-0 rounded text-white bg-blue-400 hover:bg-blue-700 text-2xl"
            >
              <BiDetail />
            </button>
          </span>
        </div>
        {toggleFoodInfo && (
          <>
            <div></div>
            <div className="leading-tight"></div>
            <table className="border-collapse table-auto text-sm w-full mt-5">
              <thead>
                <tr>
                  <th className="text-center border-slate-600 font-medium text-3xl text-slate-500 text-left">
                    Fat
                  </th>
                  <th className="text-center border-slate-600 font-medium text-3xl text-slate-500 text-left">
                    Protein
                  </th>
                  <th className="text-center border-slate-600 font-medium text-3xl text-slate-500 text-left">
                    Carbohydrate
                  </th>
                  <th className="text-center border-slate-600 font-medium text-3xl text-slate-500 text-left">
                    Calories
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-5xl text-center text-slate-500 pt-5">
                    {countFat.toFixed(2) + "g"}
                  </td>
                  <td className="text-5xl text-center text-slate-500 pt-5">
                    {countProtein.toFixed(2) + "g"}
                  </td>
                  <td className="text-5xl text-center text-slate-500 pt-5">
                    {countCarbohydrate.toFixed(2) + "g"}
                  </td>
                  <td className="text-5xl text-center text-slate-500 pt-5">
                    {countCalories.toFixed(2) + "kcal"}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="w-80 mt-10">
              <Pie data={data} />
            </div>
            <div className="flex items-center">
              <span className="flex-grow text-right">
                <button
                  type="button"
                  onClick={editItem}
                  className="p-2 ml-1 mr-0 mt-0 rounded text-white bg-green-500 hover:bg-green-700 text-2xl"
                >
                  <BiEdit />
                </button>
                <button
                  type="button"
                  onClick={deleteItem}
                  className="p-2 ml-1 mr-0 mt-0 rounded text-white bg-red-400 hover:bg-red-700 text-2xl"
                >
                  <BiTrash />
                </button>
              </span>
            </div>
          </>
        )}
      </div>
    </li>
  );
};

export default FoodInfo;
