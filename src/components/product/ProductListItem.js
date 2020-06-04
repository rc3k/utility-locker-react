import React from 'react';

export default ({ item }) => (
  <div className="product-list-item list-group-item flex-column align-items-start mb-2">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{item.name}</h5>
      <div>
        £
        {item.price.value.toFixed(2)}
      </div>
    </div>
    <p className="mb-1">{item.description}</p>
    <small>
      <ul>
        <li>
          <span className="font-weight-bold">ID: </span>
          {item.id}
        </li>
        <li>
          <span className="font-weight-bold">Type: </span>
          {item.type_name}
        </li>
        <li>
          <span className="font-weight-bold">Department: </span>
          {item.department}
        </li>
        <li>
          <span className="font-weight-bold">Weight: </span>
          {item.weight}
          g
        </li>
      </ul>
    </small>
  </div>
);
