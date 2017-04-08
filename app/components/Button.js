var React = require('react');

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.state = {counter: 0 }
		this.handleClick = this.handleClick.bind(this)
}

  handleClick(){

  	this.setState((prevState) =>({
    	counter: prevState.counter + 1
    }))
  }
  
  render(){
  	return (
  		<button onClick={this.handleClick}>
      	{this.state.counter}
      </button>
 		)
  }
}

module.exports = Button