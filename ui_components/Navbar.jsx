/* @jsx REACT.DOM */

var Navbar = React.createClass({

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


                        SignOut = <a className="ls-button ls-button--primary" href=""> SignOut</a>;
                        UserInfo = <span className="user-info--rounded"> {this.state.user.username} </span>;

					}else{
                        login = <a className="ls-button ls-button--primary" href="">Login</a>;
					}


            return <header>
              <nav>

                <ul className="ls-navbar">
                  <li className="ls-navbar__item ls-navbar__item--home"> <a class="ls-button ls-button--primary"  href="/">home</a></li>
                  <li className="ls-navbar__item"></li>
                  <li className="ls-navbar__item ls-navbar__item--signin">


                      {login}
                      {UserInfo}
            			 {SignOut}
            			</li>
                </ul>
              </nav>
            </header>
        }
    });

    parent = document.getElementById("navbar");

React.render(<Navbar user={parent.getAttribute('user')}/>, parent);
