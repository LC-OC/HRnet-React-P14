import React from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import FilterComponent from "../components/FilterComponent";
import HeaderEmployeeList from "../components/HeaderEmployeeList";
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
      (item.firstName &&
        item.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.lastName &&
        item.lastName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.dateOfBirth &&
        item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.startDate &&
        item.startDate.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.street &&
        item.street.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.city &&
        item.city.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.state &&
        item.state.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.zipCode && item.zipCode.includes(filterText)) ||
      (item.department &&
        item.department.toLowerCase().includes(filterText.toLowerCase()))
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
    <div className="main-employee-list">
      <HeaderEmployeeList />
      <h1>Employees List</h1>
      <div className="datatable-container">
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
    </div>
  );
};
export default EmployeeList;
