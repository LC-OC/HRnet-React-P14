import React from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import FilterComponent from "../components/FilterComponent";
import HeaderEmployeeList from "../components/HeaderEmployeeList";

//import FilterComponent from "../components/FilterComponent";
const EmployeeList = () => {
  const employee = useSelector((state) => state.employee);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
      reorder: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
      reorder: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
      reorder: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
      reorder: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
      reorder: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
      reorder: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
      reorder: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
      reorder: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
      reorder: true,
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredEmployee = employee.filter(
    (item) =>
      item.firstName &&
      item.firstName.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  return (
    <div>
      <HeaderEmployeeList />
      <h1>Employee List</h1>
      <DataTable
        columns={columns}
        subHeader
        data={filteredEmployee}
        pagination
        subHeaderComponent={subHeaderComponentMemo}
        paginationResetDefaultPage={resetPaginationToggle}
        persistTableHead
      />
    </div>
  );
};
export default EmployeeList;
