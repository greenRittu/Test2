import { RiShoppingCartFill } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { useState } from "react";

const AddFood = ({ onSendFood, editedFood, setEditedFood }) => {
  const clearFoodData = {
    foodName: "",
    foodDescription: "",
    foodVisible: false,
    foodCountFat: "",
    foodCountPotein: "",
    foodCountCarbohydrate: "",
    foodCountCalories: "",
    foodPortion: null,
    foodCategory: null,
  };

  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearFoodData);

  function formDataPublish() {
    const foodInfo = {
      //id: lastId + 1,
      name: editedFood ? editedFood.name : formData.foodName,
      description: editedFood
        ? editedFood.description
        : formData.foodDescription,
      visible: true,
      countFat: editedFood ? editedFood.countFat : formData.foodCountFat,
      countProtein: editedFood
        ? editedFood.countProtein
        : formData.foodCountPotein,
      countCarbohydrate: editedFood
        ? editedFood.countCarbohydrate
        : formData.foodCountCarbohydrate,
      countCalories: editedFood
        ? editedFood.countCalories
        : formData.foodCountCalories,
      portion: 1,
      category: null,
    };
    onSendFood(editedFood ? editedFood : foodInfo);
    setFormData(clearFoodData);
    setToggleForm(!toggleForm);
  }

  return (
    <div>
      <button
        onClick={() => {
          //setEditedFood(null);
          setToggleForm(!toggleForm);
        }}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left hover:bg-blue-700 ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        }`}
      >
        <div>
          <RiShoppingCartFill className="inline-block align-text-top mr-1" />
          {editedFood ? "Edit Food: " + editedFood.name : "Add Food"}
        </div>
      </button>
      {(toggleForm || editedFood) && (
        <div className="border-r-2 border-b-2 border-l-2 border-blue-400 rounded-b-md pl-4 pr-4 pb-4 bg-gray-100">
          <div className="sm:grid sm:grid-cols-4 sm:gap-2 sm:items-start sm:pt-4">
            <label
              htmlFor="foodName"
              className="block text-sm font-medium text-gray-500 sm:mt-px sm:pt-2"
            >
              Food's name:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-3">
              <input
                type="text"
                name="foodName"
                id="foodName"
                value={editedFood ? editedFood.name : formData.foodName}
                onChange={(event) => {
                  setFormData({ ...formData, foodName: event.target.value });
                  if (editedFood) {
                    editedFood.name = event.target.value;
                  }
                }}
                className="block w-full shadow-sm focus:ring-blue-200 focus:border-blue-200 sm:text-sm border-gray-400 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-4 sm:gap-2 sm:items-start sm:pt-4">
            <label
              htmlFor="Calories"
              className="block text-sm font-medium text-gray-500 sm:mt-px sm:pt-2"
            >
              Calories:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-1">
              <input
                type="text"
                name="foodName"
                id="foodName"
                value={
                  editedFood
                    ? editedFood.countCalories
                    : formData.foodCountCalories
                }
                onChange={(event) => {
                  if (editedFood) {
                    formData.countCalories = editedFood.foodCountCalories;
                  }
                  setFormData({
                    ...formData,
                    foodCountCalories: event.target.value,
                  });
                  if (editedFood) {
                    editedFood.countCalories = event.target.value;
                  }
                }}
                className="max-w-lg block w-full shadow-sm focus:ring-blue-200 focus:border-blue-200 sm:max-w-xs sm:text-sm border-gray-400 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-4 sm:gap-2 sm:items-start sm:pt-4">
            <label
              htmlFor="fatCount"
              className="block text-sm font-medium text-gray-500 sm:mt-px sm:pt-2"
            >
              Fat:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-1">
              <input
                type="text"
                name="fatCount"
                id="fatCount"
                value={editedFood ? editedFood.countFat : formData.foodCountFat}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    foodCountFat: event.target.value,
                  });
                  if (editedFood) {
                    editedFood.countFat = event.target.value;
                  }
                }}
                className="max-w-lg block w-full shadow-sm focus:ring-blue-200 focus:border-blue-200 sm:max-w-xs sm:text-sm border-gray-400 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-4 sm:gap-2 sm:items-start sm:pt-4">
            <label
              htmlFor="proteinCount"
              className="block text-sm font-medium text-gray-500 sm:mt-px sm:pt-2"
            >
              Protein:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-1">
              <input
                type="text"
                name="proteinCount"
                id="proteinCount"
                value={
                  editedFood
                    ? editedFood.countProtein
                    : formData.foodCountPotein
                }
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    foodCountPotein: event.target.value,
                  });
                  if (editedFood) {
                    editedFood.countProtein = event.target.value;
                  }
                }}
                className="max-w-lg block w-full shadow-sm focus:ring-blue-200 focus:border-blue-200 sm:max-w-xs sm:text-sm border-gray-400 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-4 sm:gap-2 sm:items-start sm:pt-4">
            <label
              htmlFor="carbohydrateCount"
              className="block text-sm font-medium text-gray-500 sm:mt-px sm:pt-2"
            >
              Carbohydrates:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-1">
              <input
                type="text"
                name="carbohydrateCount"
                id="carbohydrateCount"
                value={
                  editedFood
                    ? editedFood.countCarbohydrate
                    : formData.foodCountCarbohydrate
                }
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    foodCountCarbohydrate: event.target.value,
                  });
                  if (editedFood) {
                    editedFood.countCarbohydrate = event.target.value;
                  }
                }}
                className="max-w-lg block w-full shadow-sm focus:ring-blue-200 focus:border-blue-200 sm:max-w-xs sm:text-sm border-gray-400 rounded-md"
              />
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                onClick={formDataPublish}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFood;
