import React from 'react'
class InputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			inputValue: ''
		}
  }
  inputChange(val) {
    console.log('inputChange', val)
    this.setState({
      inputValue : val
    })
    console.log('inputChange this.state.inputValue', this.state.inputValue)
  }
  onSubmit() {
    console.log('this.state.inputValue:',this.state.inputValue)
    this.props.onChange(this.state.inputValue) 
    alert(this.state.inputValue)
  }
  render() {
    this.inputValue = this.props.value ? this.props.value : this.props.defaultValue
    return (
     <div>
        <input defaultValue={this.inputValue}  onChange={(e)=>{this.inputChange(e.target.value)}}/>
        <button onClick={() => {this.onSubmit()}}>提交</button>
      </div>
    )
  }
}
  export default InputNumber