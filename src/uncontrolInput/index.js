import React from 'react'
export default function InputNumber(props) {
  let inputValue = props.value ? props.value : props.defaultValue
  return (
    <div>
      <input defaultValue = {props.value?props.value:props.defaultValue}   onChange={e=>{props.onChange(e.target.value)}}/>
      <button onClick={() => {alert(inputValue)}}>提交</button>
    </div>
  )
}
   