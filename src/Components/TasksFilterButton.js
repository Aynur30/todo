import React from "react";
import PropTypes from "prop-types";

const TasksFilterButton = ({ value, className, onToggleFilter }) => {
  return (
    <label htmlFor={value} className={className}>
      <input
        style={{ display: "none" }}
        type="radio"
        name="TasksFilterButton"
        id={value}
        value={value}
        onChange={(e) => onToggleFilter(e.target.value)}
      />
      {value}
    </label>
  );
};

TasksFilterButton.defaultProps = {
  className: "",
};

TasksFilterButton.propTypes = {
  onToggleFilter: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export default TasksFilterButton;
