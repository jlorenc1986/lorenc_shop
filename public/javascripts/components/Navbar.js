/* @jsx REACT.DOM */

var Navbar = React.createClass({displayName: "Navbar",

  componentDidMount: function() {
    console.log("navbar did mount" );
  },

  componentWillReceiveProps: function(nextProps) {

  },

	getInitialState:function(){

		return { isLogged: false}
	},

  componentWillMount: function() {

  },

  componentWillUpdate: function(nextProps, nextState) {

  },


        render: function() {

					var isLogged = this.state.isLogged;
					var login = null;
					var SignOut = null;
					if(isLogged){

						login = 	React.createElement("a", {className: "ls-button ls-button--primary", href: ""}, "Login");
					}else{
						SignOut = React.createElement("a", {className: "ls-button ls-button--primary", href: ""}, "SignOut");
					}


            return React.createElement("header", null, 
              React.createElement("nav", null, 

                React.createElement("ul", {className: "ls-navbar"}, 
                  React.createElement("li", {className: "ls-navbar__item ls-navbar__item--home"}, " ", React.createElement("a", {class: "ls-button ls-button--primary", href: "/"}, "home")), 
                  React.createElement("li", {className: "ls-navbar__item"}), 
                  React.createElement("li", {className: "ls-navbar__item ls-navbar__item--signin"}, 


										login, 

            			 SignOut
            			)
                )
              )
            )
        }
    });

    parent = document.getElementById("navbar");

React.render(React.createElement(Navbar, null), parent);
