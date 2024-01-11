// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFormSubmitted: false,
    firstNameError: false,
    lastNameError: false,
  }

  blurFirstName = () => {
    const isFirstNameValid = this.validateFirstName()
    this.setState({firstNameError: !isFirstNameValid})
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  blurLastName = () => {
    const isLastNameValid = this.validateLastName()
    this.setState({lastNameError: !isLastNameValid})
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  changeLastName = event => {
    const {target} = event
    const {value} = target
    this.setState({lastName: value})
  }

  changeFirstName = event => {
    const {target} = event
    const {value} = target
    this.setState({firstName: value})
  }

  renderLastName = () => {
    const {lastName} = this.state
    return (
      <>
        <label htmlFor="last" className="first">
          LAST NAME
        </label>
        <input
          type="text"
          id="last"
          value={lastName}
          onChange={this.changeLastName}
          placeholder="   LAST NAME"
          className="inputBox"
          onBlur={this.blurLastName}
        />
      </>
    )
  }

  renderFirstName = () => {
    const {firstName} = this.state
    return (
      <>
        <label htmlFor="first" className="first">
          FIRST NAME
        </label>
        <input
          type="text"
          id="first"
          value={firstName}
          onChange={this.changeFirstName}
          placeholder="   FIRST NAME"
          className="inputBox"
          onBlur={this.blurFirstName}
        />
      </>
    )
  }

  submitFormDetails = event => {
    const {firstName, lastName} = this.state
    const isFirstNameValid = this.validateFirstName()
    const isLastNameValid = this.validateLastName()
    event.preventDefault()
    if (firstName !== '' && lastName !== '') {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        isFormSubmitted: false,
        firstNameError: !isFirstNameValid,
        lastNameError: !isLastNameValid,
      })
    }
  }

  submitAnotherResponse = () => {
    const {isFormSubmitted} = this.state
    this.setState({
      isFormSubmitted: !isFormSubmitted,
      firstName: '',
      lastName: '',
    })
  }

  renderThanks = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        className="btn"
        type="submit"
        onClick={this.submitAnotherResponse}
      >
        {' '}
        Submit Another Response
      </button>
    </>
  )

  renderForm = () => {
    const {firstNameError, lastNameError} = this.state
    return (
      <form onSubmit={this.submitFormDetails}>
        <div className="nameContainers">{this.renderFirstName()}</div>
        {firstNameError && <p>Required</p>}
        <div className="nameContainers">{this.renderLastName()}</div>
        {lastNameError && <p>Required</p>}
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="appContainer">
        <h1 className="heading">Registration</h1>
        <div className="formContainer">
          {isFormSubmitted ? this.renderThanks() : this.renderForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
