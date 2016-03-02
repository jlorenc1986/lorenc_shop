/* @jsx REACT.DOM */

var Login = React.createClass({

        getInitialState: function() {

					return {
						"isloggend" : false
					};

        },

        componentDidlMount: function() {


        },

        click: function() {
            console.log('clicked');
        },

        render: function() {

					var isLogged = false;
					var login = null;
					if(isLogged){

					}

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
