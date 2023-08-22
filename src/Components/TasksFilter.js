import React from "react";
import PropTypes from "prop-types";
import TasksFilterButton from "./TasksFilterButton";

const TasksFilter = ({ filter, onToggleFilter }) => {
  const filterOptions = ["All", "Active", "Completed"];

  return (
    <ul className="filters">
      {filterOptions.map((option) => (
        <li key={option}>
          <TasksFilterButton
            className={filter === option ? "selected" : ""}
            onToggleFilter={onToggleFilter}
            value={option}
          />
        </li>
      ))}
    </ul>
  );
};

TasksFilter.defaultProps = {
  filter: "All",
};

TasksFilter.propTypes = {
  filter: PropTypes.oneOf(["All", "Active", "Completed"]),
  onToggleFilter: PropTypes.func,
};

export default TasksFilter;
