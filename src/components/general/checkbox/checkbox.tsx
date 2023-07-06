"use client";

import React, { useState } from "react";

interface CheckboxI {
  label: string;
}

const Checkbox = ({ label }: CheckboxI) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="myCheckbox"
        className="rounded h-5 w-5"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="myCheckbox" className="ml-2 font-normal text-base">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;


