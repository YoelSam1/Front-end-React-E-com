import React, { useState } from "react";

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control shadow-none"
              placeholder="Search for products..."
              aria-label="Search for listings"
              aria-describedby="button-addon2"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
