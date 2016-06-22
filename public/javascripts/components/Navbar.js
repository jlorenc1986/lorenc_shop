/* @jsx REACT.DOM */

var Navbar = React.createClass({displayName: "Navbar",

  componentDidMount: function() {
    console.log("navbar did mount" );

  },

  componentWillReceiveProps: function(nextProps) {

      alert(nextProps);
  },

	getInitialState:function(){

        if (this.props.user.length > 0) {

            return {
                isLogged: true,
                user: JSON.parse(this.props.user)
            }
        } else {

            return {
                isLogged: false,
                user: null
            }
        }



	},

  componentWillMount: function() {

  },

  componentWillUpdate: function(nextProps, nextState) {

  },


        render: function() {

					var isLogged = this.state.isLogged;

					var login = null;
					var SignOut = null;
            var UserInfo = null;
					if(isLogged){


                        SignOut = React.createElement("a", {className: "ls-button ls-button--primary", href: ""}, " SignOut");
                        UserInfo = React.createElement("span", {className: "user-info--rounded"}, " ", this.state.user.username, " ");

					}else{
                        login = React.createElement("a", {className: "ls-button ls-button--primary", href: ""}, "Login");
					}


            return React.createElement("header", null, 
              React.createElement("nav", null, 

                React.createElement("ul", {className: "ls-navbar"}, 
                  React.createElement("li", {className: "ls-navbar__item ls-navbar__item--home"}, " ", React.createElement("a", {class: "ls-button ls-button--primary", href: "/"}, "home")), 
                  React.createElement("li", {className: "ls-navbar__item"}), 
                  React.createElement("li", {className: "ls-navbar__item ls-navbar__item--signin"}, 


                      login, 
                      UserInfo, 
            			 SignOut
            			)
                )
              )
            )
        }
    });

    parent = document.getElementById("navbar");

React.render(React.createElement(Navbar, {user: parent.getAttribute('user')}), parent);
