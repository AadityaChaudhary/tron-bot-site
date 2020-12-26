import React from 'react';
import './index.css'

class Login extends  React.Component {
	constructor(props) {
    super(props);
    this.state = {ID: 0, Pass: ''};
    this.handleIDChange = this.handleIDChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIDChange(event) {    this.setState({ID: event.target.value});  }
  handlePassChange(event) {    this.setState({Pass: event.target.value});  }
  handleSubmit(event) {
    alert('A login was submitted: ' + this.state.ID + ' ' + this.state.Pass);
    event.preventDefault();
  }

  render() {
    return ( 
	  <div class="min-h-screen Gainsboro py-6 flex flex-col justify-center sm:py-12">
	    <div class="relative py-3 w-2/6 sm:max-w-xl sm:mx-auto">
	      <div class="absolute inset-0 SpaceCadet shadow-lg transform rotate-24 sm:rounded-3xl"></div>
	      <div class="absolute inset-0 CadetBlue shadow-lg transform rotate-12 sm:rounded-3xl"></div>
	      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
	        <div class="max-w-md mx-auto">
		  <p class="text-xl">Please Log In</p>
		  <form onSubmit={this.handleSubmit}>
		    
		    <label class="text-xl">Server ID:</label>
		    <input class="mt-1 mb-2 mx-2 text-xl px-1 Gainsboro rounded-3xl" value={this.state.ID} onChange={this.handleIDChange}  type="number" name="server_id" />
  
		    <label class="text-xl"> Password: </label>
		    <input class="mb-2 mx-2 text-xl px-1 Gainsboro rounded-3xl" value={this.state.Pass} onChange={this.handlePassChange} type="password" name="password" />
  
		    <input class="my-2 px-4 py-2 text-xl rounded-3xl LightSteelBlue" type="submit" value="Submit" />
  
		  </form>
	        </div>
	      </div>
	    </div>
	</div>
    );

  }
}

export default Login;
