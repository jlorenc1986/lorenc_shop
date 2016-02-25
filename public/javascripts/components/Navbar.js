/* @jsx REACT.DOM */

var Navbar = React.createClass({displayName: "Navbar",

        render: function() {


            return React.createElement("nav", null, 
            "navbar"
            )
        }
    });

    parent = document.getElementById("navbar");

React.render(React.createElement(Navbar, null), parent);
