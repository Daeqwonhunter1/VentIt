import React from 'react'
import {Form,Button} from 'react-bootstrap'
export default function CreateSubvent(props) {

  return (
    <div>
      <Form className="create-form" onSubmit={(e) => {
        e.preventDefault();
        props.createSubvent();

      }}>
        <Form.Group controlId="formBasicEmail">
          
          <Form.Control className="input-fields"
            type="text"
            name="vent_title"
            placeholder="vent_title"
            onChange={props.handleSubventChange} />
          <Form.Text className="text-muted">
            Call Your subvent something catchy.
        </Form.Text>
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