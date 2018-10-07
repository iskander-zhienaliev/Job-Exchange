import React from "react";

export const Tasks = ({ tasks }) => {
  if (!tasks) return <div>Loading...</div>;
  return tasks.map(task => {
    return (
      <tr key={task.id}>
        <td>{task.techs.join(", ")}</td>
        <td>{task.description}</td>
        <td>{task.estimation}</td>
        <td>{task.tags}</td>
      </tr>
    );
  });
};
