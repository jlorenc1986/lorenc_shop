/* @jsx REACT.DOM */

var Login = React.createClass({

        getInitialState: function() {

					return {};

        },

        componentDidlMount: function() {


        },

        click: function() {
            console.log('clicked');
        },

        render: function() {

            return <div className="loginContainer">

						<div class="" id="loginContainer">
							<form action="">
								<input type="text" name="username" id="username"/>
								<label for="username"> username</label>
								<input type="text" name="password" id="password"/>
								<label for="password"> password</label>
								<button> Login
								</button>
							</form>
						</div>


						 </div>
        }
    });


var parent = document.getElementById("viewContainer");

React.render(<Login />, parent);
