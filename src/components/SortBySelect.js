import React from 'react';

export default ({ setSort, column, direction }) => (
  <div className="d-flex w-100 p-2">
    <label htmlFor="sort-by-select" className="pt-2 pr-1 text-right">
      Sort:
    </label>
    <select
      id="sort-by-select"
      className="form-control"
      value={`${column}_${direction}`}
      onChange={(event) => setSort(...event.target.value.split('_'))}
    >
      <option value="name_asc">Default (name)</option>
      <option value="price_desc">Highest price</option>
      <option value="price_asc">Lowest price</option>
    </select>
  </div>
);
