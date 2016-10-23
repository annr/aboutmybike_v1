import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="generic-container add-bike-form">
        <div className="form-group">
          <label className="custom-file-upload">
            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
            <img src="dist/images/upload.png" width="360" height="238" className="add-bike-photo" />
          </label>
        </div>
        <p>All fields are optional</p>
        <div className="form-group">
          <label htmlFor="bikeStyle">Style</label>
          <select multiple="" className="form-control" id="bikeStyle">
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
          <input type="text" className="form-control" id="brand" placeholder="Ex. Raleigh" />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input type="text" className="form-control" id="model" />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">If your bike had a name it would be...</label>
          <input type="text" className="form-control" id="nickame" />
        </div>
        <div className="form-group">
          <label htmlFor="saySomething">Say Something about your bike</label>
          <textarea className="form-control" id="saySomething" rows="5"></textarea>
        </div>
        <div className="form-group">
        <small id="fileHelp" className="form-text text-muted">You can add all the details you want next, or later.</small>
        </div>
        <button type="submit" className="btn btn-primary">Save Basic Details</button>
      </form>
    )
  }
}

// <fieldset className="form-group">
//   <legend>Brakes</legend>
//   <div className="form-check">
//     <label className="form-check-label">
//       <input type="radio" className="form-check-input" name="optionsBrakes" id="optionsBrakes1" value="rim" />
//       Rim (most common)
//     </label>
//   </div>
//   <div className="form-check">
//   <label className="form-check-label">
//       <input type="radio" className="form-check-input" name="optionsBrakes" id="optionsBrakes2" value="disc" />
//       Disc
//     </label>
//   </div>
//   <div className="form-check disabled">
//   <label className="form-check-label">
//       <input type="radio" className="form-check-input" name="optionsBrakes" id="optionsBrakes3" value="none" />
//       None / other
//     </label>
//   </div>
// </fieldset>
// <div className="form-group">
//   <label htmlFor="numberOfGears">Speeds</label>
//   <input type="number" className="form-control form-control-number" id="numberOfSpeeds" aria-describedby="numberOfSpeeds" />
// </div>

module.exports = Form;
