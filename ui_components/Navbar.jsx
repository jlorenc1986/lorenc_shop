/* @jsx REACT.DOM */

var Navbar = React.createClass({

  componentDidMount: function() {
    console.log("navbar did mount" );
  },

  componentWillReceiveProps: function(nextProps) {

  },

  componentWillMount: function() {

  },

  componentWillUpdate: function(nextProps, nextState) {

  },

 
        render: function() {


            return <header>
              <nav>

                <ul className="ls-navbar">
                  <li className="ls-navbar__item ls-navbar__item--home"> <a class="ls-button ls-button--primary"  href="/">home</a></li>
                  <li className="ls-navbar__item"></li>
                  <li className="ls-navbar__item ls-navbar__item--signin">

            				 <a className="ls-button ls-button--primary" href="/login">login </a>

            				<a className="ls-button ls-button--primary"  href="">SignOut</a>

            			</li>
                </ul>
              </nav>
            </header>
        }
    });

    parent = document.getElementById("navbar");

React.render(<Navbar/>, parent);
