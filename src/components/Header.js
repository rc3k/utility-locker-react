import React from 'react';
import SortBySelect from './SortBySelect';
import GroupBySelect from './GroupBySelect';

export default ({
  heading, setSort, sortParams, groupByField, setGroupBy,
}) => (
  <div className="row">
    <div className="col-md-6">
      <h1>{heading}</h1>
    </div>
    <div className="col-md-6">
      <SortBySelect
        setSort={setSort}
        column={sortParams.column}
        direction={sortParams.direction}
      />
      <GroupBySelect
        field={groupByField}
        setGroupBy={setGroupBy}
      />
    </div>
  </div>
);
