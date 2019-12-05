import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  verifyUser
} from '../services/api-helper'
import { showAllSubvents } from '../services/api-helper';

class SubventList extends Component {
  state = {
    subvents: []
  }

  componentDidMount() {
    const subvents = showAllSubvents();
    console.log(subvents)
    this.setState = {
      subvents
    }
  }


  // descriptionModal = () => {
  //   document.getElementsByClassName("description-modal").style.display = "block"
  // }
  render() {
    const { subvents } = this.props
    this.setState = {
      subvents
    }
   
    console.log(this.state.subvents)
    return (
      <div id="subvent-list">
        <Link to="/subvents/new">
          <div class="plus radius">
          </div>
        </Link>
        <h2>Subvents</h2>
        <div id="subvents">
          {subvents && subvents.map(subvent =>
            <div className="subvent" key={subvent.id}>
              <h1>{console.log(subvent)}</h1>
              <Link to={`/subvents/${subvent.id}`}><h1>{subvent.vent_title}</h1></Link>
              {/* <p className="created-by">created by: {subvent.user.username}</p> */}
              <img src = {subvent.image_url} />
            </div>
          )}

        </div>
      </div>
    )
  }
}
export default withRouter(SubventList)