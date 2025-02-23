import { useState } from "react";
import Select from "react-select";
import { IoSearch } from "react-icons/io5";
import FilteredProducts from "./FilteredProducts";
export default function ShopProducts() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const options = [
    { value: "", label: "All" },
    { value: "sofa", label: "Sofa" },
    { value: "chair", label: "Chair" },
    { value: "mobile", label: "Mobile" },
    { value: "watch", label: "Watch" },
    { value: "wireless", label: "Wireless" },
  ];

  return (
    <div className="p-3 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] mx-auto ">
      <div className="flex flex-col gap-10 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="min-w-xs md:min-w-xs">
            <Select
              options={options}
              defaultValue={{ value: "", label: "Filter By Category" }}
              isClearable={true}
              className="w-full"
              onChange={(e) => {
                setSelectedCategory(e.value);
              }}
            />
          </div>
          <div className="grow relative min-w-xs ">
            <input
              type="text"
              name="searchQuery"
              className="md:min-w-full w-full h-full border outline-gray-400 focus:outline-blue-500 rounded-full py-2 px-5 pe-15"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            <button className="absolute top-0 bottom-0 flex justify-center items-center end-2 p-5 cursor-pointer">
              <IoSearch />
            </button>
          </div>
        </div>
        <FilteredProducts
          category={selectedCategory}
          searchTerm={searchQuery}
        />
      </div>
    </div>
  );
}
