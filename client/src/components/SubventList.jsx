import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { showAllSubvents } from '../services/api-helper';
import { Card, Button, Dropdown } from 'react-bootstrap'
class SubventList extends Component {
  state = {
    subvents: []
  }

  componentDidMount() {
    const subvents = showAllSubvents();

    this.setState = {
      subvents
    }
  }

  handleShowLogin = () => {
    this.setState({
      showLogin: true
    })
  }

  
  render() {
    const { subvents } = this.props
    this.setState = {
      subvents
    }


    return (
      <>
        <Link to='/subvents/new'><button>New Subvent</button></Link>

        <div id="subvents-list" key ="vfsrtyguhij">
          {subvents && subvents.map(subvent =>
            <div id="subvents" key = {subvent.id}>


              <Card className="Cards" style={{ width: '40rem', height: '20rem' }}>
                <Card.Img className="card_image" variant="top" src={subvent.image_url} />
                <Card.Body>
                  <Card.Title className="card_title">{subvent.vent_title}</Card.Title>
                  <Card.Text className="card_description">
                    
                  </Card.Text>
                  <Link to={`/subvents/${subvent.id}`}><Button size="lg" className="card_button" variant="primary">Click</Button></Link>
                </Card.Body>
                <Dropdown className = "drop"  >
                        <Dropdown.Toggle variant="outline-light" className = "dots" id="dropdown-basic">
                       </Dropdown.Toggle>

                        <Dropdown.Menu className = "none">
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
              </Card>


            </div>



          )}

        </div>
      </>
    )
  }
}
export default withRouter(SubventList)