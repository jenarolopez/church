import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const App = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  
  return (
    <Select
      
      placeholder={props.placeholder}
     
      styles={{
        control: (baseStyles, state) => {
         
          return {
            ...baseStyles,
            transition: "none",
            boxShadow: "none",
            outline: state.menuIsOpen ? "1.5px solid #64748b" : "none",
            outlineColor: "#64748b",
            borderRadius: "0.375rem",
            borderColor: state.menuIsOpen ? "#64748b" : "rgb(209,213,219)",

            "&:hover": {
              borderColor: state.menuIsOpen ? "#64748b" : "rgb(209,213,219)",
            },
          };
        },
      }}
      classNames={{
        control: (state) =>
          "h-[42px] pl-2 pr-2 rounded-md text-md text-gray-900 border-gray-300 border",
      }}
      defaultValue={selectedOption}
      onChange={props.onChange}
      options={options}
    />
  );
}

export default App