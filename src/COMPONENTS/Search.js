import React from "react";

const Search = ({ onSearch }) => {
  return (
    <>
    <div>
      <input
        type="text"
        onChange={onSearch}
        placeholder="Search..."
        style={{
          padding: "8px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "100%",
          maxWidth: "400px",
          boxSizing: "border-box",
          marginTop: "18px",
        }}
      />
    </div>
   
    </>
  );
};

export default Search;
