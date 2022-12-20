import React from "react";

const FilterComponent = ({ filterText, onFilter }) => (
  <>
    <p className="search">Search: </p>
    <input
      id="search"
      type="text"
      aria-label="Search Input"
      className="search-employee"
      value={filterText}
      onChange={onFilter}
    />
  </>
);

export default FilterComponent;
