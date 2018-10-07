import React from "react";

export const Employees = ({ employees }) => {
  if (!employees) return <div>Loading...</div>;
  return employees.map(employee => {
    return (
      <tr key={employee.id}>
        <td>{employee.techs.join(", ")}</td>
        <td>{employee.estimation}</td>
      </tr>
    );
  });
};
