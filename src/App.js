import './App.css'
import {Component} from 'react'

// Replace your code here
class App extends Component {
  state = {inputText: '', onSave: false}

  onInputChange = e => {
    this.setState({inputText: e.target.value})
  }

  onSaveClicked = () => {
    this.setState(prev => ({onSave: !prev.onSave}))
  }

  render() {
    const {inputText, onSave} = this.state
    const btnText = onSave ? 'Edit' : 'Save'
    return (
      <div className="background-con">
        <div className="card-con">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-btn-con">
            {onSave ? (
              <p>{inputText}</p>
            ) : (
              <input
                onChange={this.onInputChange}
                value={inputText}
                className="input-area"
                type="text"
              />
            )}

            <button onClick={this.onSaveClicked} className="btn" type="button">
              {btnText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
