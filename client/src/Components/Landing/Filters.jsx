import React from "react";

const Filters = () => {
  return (
    <div className="flex flex-row-reverse flex-wrap mr-48 gap-5">
      <button className="border-2 border-btnColor rounded-xl px-4 py-2">
        Valid
      </button>
      <button className="border-2 border-btnColor rounded-xl px-4">
        Expired
      </button>
    </div>
  );
};

export default Filters;
