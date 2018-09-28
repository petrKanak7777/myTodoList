import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions/index";

const Footer = () => (
  /* JSX - syntactic sugar for 
             React.createElement(component, props, ...children) fun */
  /*<div>
      <span>Show:</span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
          All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
      </FilterLink>
  </div>*/

  <div>
    <span>Show:</span>
    {[
      React.createElement(
        FilterLink,
        { key: "footer_0", filter: VisibilityFilters.SHOW_ALL },
        "All"
      ),
      React.createElement(
        FilterLink,
        { key: "footer_1", filter: VisibilityFilters.SHOW_ACTIVE },
        "Active"
      ),
      React.createElement(
        FilterLink,
        { key: "footer_2", filter: VisibilityFilters.SHOW_COMPLETED },
        "Completed"
      )
    ]}
  </div>
);

export default Footer;
