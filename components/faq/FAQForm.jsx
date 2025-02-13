"use client";
import { useState } from "react";
import Icon from "@/components/ui/icon";

const FAQForm = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        setSearchValue("");
      }}
    >
      <div
        className={
          "pl-6 pr-2 bg-white rounded-lg flex items-center gap-x-3 max-w-[400px] mx-auto"
        }
      >
        <Icon name={"loupe"} className={"text-2xl"} />
        <input
          type="text"
          value={searchValue}
          className={
            "py-[13px] placeholder:text-[#7E808A] placeholder:text-lg outline-none"
          }
          placeholder={"Search"}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default FAQForm;
