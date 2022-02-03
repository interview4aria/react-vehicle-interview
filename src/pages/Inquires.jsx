import React, { Component } from 'react';

export default class Inquires extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" style={{marginTop: '40px'}}>
        <div id="form">
          <div className="form-group">
            <label htmlFor="form_name" className="required">Name</label>
            <input type="text" id="form_name" name="form[name]" required="required" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="form_email" className="required">Email</label>
            <input type="email" id="form_email" name="form[email]" required="required" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="form_message" className="required">Message</label>
            <textarea id="form_message" name="form[message]" required="required" className="form-control"></textarea>
          </div>
          <div className="form-group">
            <label className="required" htmlFor="form_vehicle">Vehicle</label>
            <select id="form_vehicle" name="form[vehicle]" className="form-control">
              <option value="7">Air Force One</option>
              <option value="6">Al Mirqab</option>
              <option value="3">Batmobile</option>
              <option value="4">Bullitt</option>
              <option value="5">Dilbar</option>
              <option value="1">Enola Gay</option>
              <option value="2">Spirit of St. Louis</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit" id="form_send" name="form[send]" className="btn-primary btn">Send</button>
          </div>
        </div>
      </div>
    )
  }
}
