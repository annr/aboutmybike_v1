import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="add-bike-form">
        <div className="form-group">
          <label className="custom-file-upload">
            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
            <img src="dist/images/upload.png" width="360" height="238" className="add-bike-photo" />
          </label>
        </div>
        <p>All fields are optional</p>
        <div className="form-group">
          <label htmlFor="bikeType">Type</label>
          <select multiple="" className="form-control" id="bikeType">
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
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleSelect1">Example select</label>
          <select className="form-control" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>895</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="saySomething">Say Something about your bike</label>
          <textarea className="form-control" id="saySomething" rows="3"></textarea>
        </div>
        <fieldset className="form-group">
          <legend>Radio buttons</legend>
          <div className="form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
              Option one is this and that—be sure to include why it's great
            </label>
          </div>
          <div className="form-check">
          <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
              Option two can be something else and selecting it will deselect option one
            </label>
          </div>
          <div className="form-check disabled">
          <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled="" />
              Option three is disabled
            </label>
          </div>
        </fieldset>
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" />
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

module.exports = Form;
