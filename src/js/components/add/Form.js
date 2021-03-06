import React from 'react';
import PhotoUpload from './PhotoUpload';

// Fix button: 
//    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save Basic Details</button>
const Form = () => (
  <form className="generic-container add-bike-form" encType="multipart/form-data">
    <PhotoUpload />
    <p>All fields are optional</p>
    <input type="hidden" name="user_id" value="1" />
    <div className="form-group">
      <label htmlFor="bikeStyle">Style</label>
      <select multiple="" className="form-control" id="bikeStyle" name="style">
        <option></option>
        <option>Road</option>
        <option>Mountain</option>
        <option>Hybrid</option>
        <option>Fixed-gear</option>
        <option>Cruiser</option>
        <option>BMX</option>
        <option>Track</option>
        <option>Folding</option>
        <option>Recumbant</option>
        <option>Tandem</option>
        <option>Adult Tricycle</option>
        <option>Other</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="brand">Brand</label>
      <input type="text" className="form-control" id="brand" name="brand" placeholder="Ex. Raleigh" />
    </div>
    <div className="form-group">
      <label htmlFor="model">Model</label>
      <input type="text" className="form-control" id="model" name="model" />
    </div>
    <div className="form-group">
      <label htmlFor="nickname">If your bike had a name it would be...</label>
      <input type="text" className="form-control" id="nickame" name="nickname" />
    </div>
    <div className="form-group">
      <label htmlFor="saySomething">Say Something about your bike</label>
      <textarea className="form-control" id="saySomething" rows="5" name="description"></textarea>
    </div>
    <div className="form-group">
      <small id="fileHelp" className="form-text text-muted">You can add all the details you want next, or later.</small>
    </div>
    <button type="submit" className="btn btn-primary">Save Basic Details</button>
  </form>
);

/*
class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = { src: "", uploaderDisplay: "inline" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault(); // avoid to execute the actual submit of the form.
    $.ajax({
      type: "POST",
      url: "/api/bike/create",
      data: $(event.target.parentElement).serialize(),
      dataType: "json",
      success: function (data) {
        const path = `/#/view/${data.bikeId}`;
        browserHistory.push(path);
      },
      error: function (err) {
        return {
          error: err.status + ": " + err.statusText
        };
      }
    });
  }
*/

export default Form;
