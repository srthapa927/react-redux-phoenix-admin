import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TextFieldGroup from '../common/TextFieldGroup'

class CreateForm extends Component {
  state = {
    type: '',
    dueDate: '',
    introQuestions: [],
    questions: [],
    displayIntroQuestion: false
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="content-header">
          <h1>
            Create Question Set
          </h1>
          <ol className="breadcrumb">
            <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
            <li><Link to="#">Questions</Link></li>
            <li className="active">Create Question Set</li>
          </ol>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Question Set Form</h3>
                </div>
                <form >
                  <div className="box-body">
                    <TextFieldGroup
                      label="Type"
                      name="type"
                      placeholder="Enter type for questions"
                      value={this.state.type}
                      onChange={this.onChange}
                    />
                    <TextFieldGroup
                      label="DueDate"
                      name="dueDate"
                      type="date"
                      placeholder="Enter type of question"
                      value={this.state.dueDate}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary" onSubmit="onSubmit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateForm
