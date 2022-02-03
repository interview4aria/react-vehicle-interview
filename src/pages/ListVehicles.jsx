import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const DataTable = require("react-data-components").DataTable;

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const transform = (vehicles) => vehicles.map((data) => Object.assign({}, data, {
  description: data.description.substring(0, 97) + '...',
  price: formatter.format(data.price),
}));

export default class ListVehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
        vehicles: [],
        DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:8081/api/vehicles")
      .then((response) => response.json())
      .then((vehicles) => {
          this.setState({
              vehicles: transform(vehicles),
              DataisLoaded: true
          });
      })
  }

  render() {
    const { vehicles } = this.state;
    const columns = [
      { title: 'Name', prop: 'name' },
      { title: 'Color', prop: 'color' },
      { title: 'Description', prop: 'description' },
      { title: 'Type', prop: 'type' },
      { title: 'Price', prop: 'price' }
    ];

    return (
        <>
          <DataTable
            className="panel-body"
            keys="id"
            columns={columns}
            initialData={vehicles}
            initialPageLength={5}
            initialSortBy={{ prop: 'city', order: 'descending' }}
            pageLengthOptions={[5, 20, 50]}
          />
          <div className="container">
            <Link to="/inquire">
              <button className="btn btn-info btn-default">Inquire About a Vehicle</button>
            </Link>
          </div>
        </>
    )
  }
}
