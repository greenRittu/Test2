import { RiShoppingCartFill } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import { useState } from "react";

const AddFood = ({}) => {
  const clearData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: "",
  };

  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);

  return (
    <div>
      <button
        onClick={() => {
          setToggleForm(!toggleForm);
        }}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left hover:bg-blue-700 ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        }`}
      >
        <div>
          <RiShoppingCartFill className="inline-block align-text-top" /> Add
          Food
        </div>
      </button>
      {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-blue-400 rounded-b-md pl-4 pr-4 pb-4 bg-gray-100">
          <div className="sm:grid sm:grid-cols-4 sm:gap-2 sm:items-start sm:pt-4">
            <label
              htmlFor="foodName"
              className="block text-sm font-medium text-gray-800 sm:mt-px sm:pt-2"
            >
              Food's name:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-3">
              <input
                type="text"
                name="foodName"
                id="foodName"
                className="block w-full shadow-sm focus:ring-blue-200 focus:border-blue-200 sm:text-sm border-gray-400 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-4 sm:gap-2 sm:items-start sm:pt-4">
            <label
              htmlFor="Calories"
              className="block text-sm font-medium text-gray-800 sm:mt-px sm:pt-2"
            >
              Calories:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-1">
              <input
                type="text"
                name="foodName"
                id="foodName"
                className="max-w-lg block w-full shadow-sm focus:ring-blue-200 focus:border-blue-200 sm:max-w-xs sm:text-sm border-gray-400 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-4 sm:gap-2 sm:items-start sm:pt-4">
            <label
              htmlFor="fatCount"
              className="block text-sm font-medium text-gray-800 sm:mt-px sm:pt-2"
            >
              Fat:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-1">
              <input
                type="text"
                name="fatCount"
                id="fatCount"
                className="max-w-lg block w-full shadow-sm focus:ring-blue-200 focus:border-blue-200 sm:max-w-xs sm:text-sm border-gray-400 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-4 sm:gap-2 sm:items-start sm:pt-4">
            <label
              htmlFor="proteinCount"
              className="block text-sm font-medium text-gray-800 sm:mt-px sm:pt-2"
            >
              Protein:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-1">
              <input
                type="text"
                name="proteinCount"
                id="proteinCount"
                className="max-w-lg block w-full shadow-sm focus:ring-blue-200 focus:border-blue-200 sm:max-w-xs sm:text-sm border-gray-400 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-4 sm:gap-2 sm:items-start sm:pt-4">
            <label
              htmlFor="carbohydrateCount"
              className="block text-sm font-medium text-gray-800 sm:mt-px sm:pt-2"
            >
              Carbohydrates:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-1">
              <input
                type="text"
                name="carbohydrateCount"
                id="carbohydrateCount"
                className="max-w-lg block w-full shadow-sm focus:ring-blue-200 focus:border-blue-200 sm:max-w-xs sm:text-sm border-gray-400 rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFood;
