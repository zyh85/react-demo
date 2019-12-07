# react-demo
react-demo
	async componentDidMount(){
	    let res = await confirm("确定删除吗")
	    if(res) {
	        console.log("是")
	    } else {
	        console.log("否")
	    }
	}
