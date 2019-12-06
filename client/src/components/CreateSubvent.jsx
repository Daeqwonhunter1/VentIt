import React from 'react'
export default function CreateSubvent(props) {


  return (
    <div>
      <form className="create-form" onSubmit={(e) => {
        e.preventDefault();
        props.createSubvent();
      }}>
     
        <h2 className="create-header">Create Subvent</h2>

        <input
          className="input-fields"
          type="text"
          name="vent_title"
          placeholder="vent_title"
          onChange={props.handleSubventChange}
        />

        
        <input
          className="input-fields"
          type="text"
          name="description"
          placeholder="Description"
          onChange={props.handleSubventChange}
          // value={props.subventFormData.description}
        />
        <input className="create-button" type="submit" value="Submit" />
      </form>
    </div>
  )
}