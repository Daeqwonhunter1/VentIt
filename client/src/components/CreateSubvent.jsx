import React from 'react'
import {Form,Button} from 'react-bootstrap'
export default function CreateSubvent(props) {

  return (
    <div id = "subventForm">
      <Form className="create-subvent" onSubmit={(e) => {
        e.preventDefault();
        props.createSubvent();

      }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Text className="text-muted">
            Call Your subvent something catchy.
        </Form.Text>
          
          <Form.Control className="input-fields"
            type="text"
            name="vent_title"
            placeholder="vent_title"
            onChange={props.handleSubventChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control as="textarea" rows="3" className="input-fields"
            type="text"
            name="description"
            placeholder="Description"
            onChange={props.handleSubventChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        
        
      </Form>
    </div>
  )
}