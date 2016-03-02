/* @jsx REACT.DOM */

var Navbar = React.createClass({

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

						login = 	<a className="ls-button ls-button--primary"  href="">Login</a>;
					}else{
						SignOut = <a className="ls-button ls-button--primary"  href="">SignOut</a>;
					}


            return <header>
              <nav>

                <ul className="ls-navbar">
                  <li className="ls-navbar__item ls-navbar__item--home"> <a class="ls-button ls-button--primary"  href="/">home</a></li>
                  <li className="ls-navbar__item"></li>
                  <li className="ls-navbar__item ls-navbar__item--signin">


										{login}

            			 {SignOut}
            			</li>
                </ul>
              </nav>
            </header>
        }
    });

    parent = document.getElementById("navbar");

React.render(<Navbar/>, parent);
