import React from "react";
import "./TaskCard.css";

export const TaskCard = ({ task }) => {
  const getSubTasksLabel = () => {
    const label = `${
      task?.subTasks.filter((st) => st?.isCompleted).length
    } of ${task?.subTasks?.length} subtasks`;
    return label;
  };
  return (
    <div className="bg-[#2b2c37] py-4 px-3 rounded-lg shadow-md shadow-task task-card">
      <div className="task-title">{task?.title}</div>
      <div className="task-count">{getSubTasksLabel()}</div>
    </div>
  );
};
