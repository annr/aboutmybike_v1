import React from 'react';


class PhotoUpload extends React.Component {

 constructor(props) {
    super(props);
    this.state = {src: "", uploaderDisplay: "inline", previewDisplay: "none" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var _self = this;
    // Jquery selector below to reach up to parent is HORRIBLE. Fix.
    $.ajax({
        url: "/upload",
        type: "POST",
        data: new FormData(event.currentTarget.closest('form')),
        contentType: false,
        cache: false,     
        processData:false,
        success: function(data) {
          _self.setState({
            src: data.tmp_path,
            uploaderDisplay: "none",
            previewDisplay: "inline"
          });
        }
    });
  }

  render() {
    return (
      <div className="form-group">
        <label className="custom-file-upload">
          <input type="file" onChange={this.handleChange} name="bike_photo" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
          <img src="dist/images/upload.png" width="360" height="238" className="add-bike-photo" style={{display: this.state.uploaderDisplay }} />
          <div className="preview-bike-photo-wrapper" style={{display: this.state.previewDisplay }}>
            <img src={this.state.src} width="360" className="preview-bike-photo"/>
          </div>
          <input type="hidden" name="preview_path" id="tmp-photo-path" value={this.state.src} />
        </label>
      </div>
    );
  }
}

export default PhotoUpload;
