import React from 'react'
import ReactDOM from 'react-dom'
class Confirm extends React.Component{
	render() {
		return (
			<div>
				Confirm
			</div>
		);
	}
	
}
let node = null
const confirm = ()=>{
	return  new Promise(
		function(resolve, reject) {
			node = document.createElement('div')
			document.body.appendChild(node)
			ReactDOM.render(<Confirm />, node)
			if(node){
				resolve('OK')
			}else{
				console.log('else node')
				reject()
			}
		}
	  );
	
}
  export default confirm