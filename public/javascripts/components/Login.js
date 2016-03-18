/* @jsx REACT.DOM */

var Login = React.createClass({displayName: "Login",

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

            return React.createElement("div", {className: "login-container"}, 

						React.createElement("div", {className: "ls-form", id: "loginContainer"}, 
                React.createElement("ul", null, 
							React.createElement("form", {method: "post", action: "/auth"}, 

              React.createElement("li", null, 
								React.createElement("input", {type: "text", name: "username", id: "username"}), 
								React.createElement("label", {for: "username"}, " username")
              ), 

              React.createElement("li", null, 
              	React.createElement("input", {type: "password", name: "password", id: "password"}), 
								React.createElement("label", {for: "password"}, " password")
              ), 
								React.createElement("button", {className: "button"}, " Login"
								)
							)
            )
						)


						 )
        }
    });


var parent = document.getElementById("viewContainer");

React.render(React.createElement(Login, null), parent);
