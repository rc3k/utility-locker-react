import React from 'react';

export default ({ setGroupBy, field }) => (
  <div className="d-flex w-100 form-group p-2">
    <label htmlFor="group-by-select" className="pt-2 pr-1 text-right">
      Group by:
    </label>
    <select
      id="group-by-select"
      className="form-control"
      value={field}
      onChange={(event) => setGroupBy(event.target.value)}
    >
      <option value="">None</option>
      <option value="type">Type</option>
    </select>
  </div>
);
