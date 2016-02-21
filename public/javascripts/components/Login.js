/* @jsx REACT.DOM */

var Login = React.createClass({displayName: "Login",

        getInitialState: function() {

					return {};

        },

        componentDidlMount: function() {


        },

        click: function() {
            console.log('clicked');
        },

        render: function() {

            return React.createElement("div", {className: "login-container"}, 

						React.createElement("div", {class: "ls-form", id: "loginContainer"}, 
                React.createElement("ul", null, 
							React.createElement("form", {action: ""}, 

              React.createElement("li", null, 
								React.createElement("input", {type: "text", name: "username", id: "username"}), 
								React.createElement("label", {for: "username"}, " username")
              ), 

              React.createElement("li", null, 
              	React.createElement("input", {type: "password", name: "password", id: "password"}), 
								React.createElement("label", {for: "password"}, " password")
              ), 
             	  React.createElement("button", null, " Login"
								)
							)
            )
						)


						 )
        }
    });


var parent = document.getElementById("viewContainer");

React.render(React.createElement(Login, null), parent);
