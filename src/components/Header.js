import React from 'react';
import SortBySelect from './SortBySelect';
import GroupBySelect from './GroupBySelect';

export default ({
  heading, setSort, sortParams, groupByField, setGroupBy, displaySort,
}) => (
  <div className="row">
    <div className="col-md-6">
      <h1>{heading}</h1>
    </div>
    <div className="col-md-6">
      <GroupBySelect
        field={groupByField}
        setGroupBy={setGroupBy}
      />
      {displaySort ? (
        <SortBySelect
          setSort={setSort}
          column={sortParams.column}
          direction={sortParams.direction}
        />
      ) : null}
    </div>
  </div>
);
