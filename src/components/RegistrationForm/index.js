// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isRegister: false,
    showValidLastName: false,
    showValidFirstName: false,
    errorMsg: 'Required',
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const isValidLastName = lastName === ''

    this.setState({showValidLastName: isValidLastName})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const isValidFirstName = firstName === ''
    this.setState({showValidFirstName: isValidFirstName})
  }

  onBlurTwoNames = () => {
    const {firstName, lastName} = this.state
    const result = firstName === '' && lastName === ''
    this.setState({showValidFirstName: result, showValidLastName: result})
  }

  renderFirstNameField = () => {
    const {firstName, showValidFirstName, errorMsg} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          FIRST NAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={firstName}
          onChange={this.onChangeFirstName}
          placeholder="First name"
        />
        {showValidFirstName && <p className="error-message">{errorMsg}</p>}
      </>
    )
  }

  renderLastNameField = () => {
    const {lastName, showValidLastName, errorMsg} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          LAST NAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={lastName}
          onChange={this.onChangeLastName}
          placeholder="Last name"
        />
        {showValidLastName && <p className="error-message">{errorMsg}</p>}
      </>
    )
  }

  userSubmitForm = () => (
    <div>
      <div className="input-container">{this.renderFirstNameField()}</div>
      <div className="input-container">{this.renderLastNameField()}</div>
      <button type="submit" className="login-button">
        Submit
      </button>
    </div>
  )

  successForm = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button type="submit" className="login-button">
        Submit Another Response Submitted
      </button>
    </div>
  )

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    const firstInput = firstName === ''
    const lastInput = lastName === ''
    console.log(firstInput)
    console.log(lastInput)
    if (firstInput && lastInput) {
      this.onBlurTwoNames()
    } else if (firstInput) {
      this.onBlurFirstName()
    } else if (lastInput) {
      this.onBlurLastName()
    } else {
      this.setState(prevState => ({
        isRegister: !prevState.isRegister,
      }))
    }
  }

  render() {
    const {isRegister} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Registration</h1>
        </div>
        <form className="form-container" onSubmit={this.submitForm}>
          {isRegister ? this.successForm() : this.userSubmitForm()}
        </form>
      </div>
    )
  }
}
export default RegistrationForm
