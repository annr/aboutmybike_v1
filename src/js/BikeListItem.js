const React = require('react');

class BikeListItem extends React.Component {
  render() {
    let photo = "dist/images/mock/bike" + this.props.id + ".jpg";
    let link = "/bikes/" + this.props.id;
    let description = "placeholder";
    return (
      <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp amb--bike-list-item">
        <header className="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white amb--bike-list-item-header">
          <img src={photo} width="300" height="225" alt={this.props.brand} />
        </header>
        <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone amb--bike-list-item-card">
          <div className="mdl-card__supporting-text">
            <h4>{this.props.brand} {this.props.model}</h4>
            {description}
          </div>
          <div className="mdl-card__actions">
            <a href="{link}" className="mdl-button">About this bike</a>
          </div>
        </div>
        <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1">
          <i className="material-icons">more_vert</i>
        </button>
        <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" htmlFor="btn1">
          <li className="mdl-menu__item">View</li>
          <li className="mdl-menu__item">Favorite</li>
        </ul>
      </section>
    );
  }

}

module.exports = BikeListItem;