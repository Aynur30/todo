import React from "react";
import PropTypes from "prop-types";
import TasksFilter from "./TasksFilter";

const Footer = ({ taskLeft, filter, onToggleFilter, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{taskLeft} items left</span>
      <TasksFilter onToggleFilter={onToggleFilter} filter={filter} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  filter: "All",
};

Footer.propTypes = {
  taskLeft: PropTypes.number,
  onToggleFilter: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

export default Footer;
