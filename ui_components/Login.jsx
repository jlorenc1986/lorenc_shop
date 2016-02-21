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

            return <div className="login-container">

						<div className="ls-form" id="loginContainer">
                <ul>
							<form method="post" action="/auth">

              <li>
								<input type="text" name="username" id="username"/>
								<label for="username"> username</label>
              </li>

              <li>
              	<input type="password" name="password" id="password"/>
								<label for="password"> password</label>
              </li>
             	  <button> Login
								</button>
							</form>
            </ul>
						</div>


						 </div>
        }
    });


var parent = document.getElementById("viewContainer");

React.render(<Login />, parent);
