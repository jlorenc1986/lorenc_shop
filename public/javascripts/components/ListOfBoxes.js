/* @jsx REACT.DOM */

var ListOfBoxes = React.createClass({displayName: "ListOfBoxes",

    click:function() {
        console.log('clicked');
    },

    render: function() {
        return React.createElement("div", {className: "list"}, 
                React.createElement("ul", null, 
                    React.createElement("li", null, React.createElement(OfferBox, {name: "Offers"}))
                )
            )
    }
}),

    parent = document.getElementById("viewContainer");

React.render(React.createElement(ListOfBoxes, null), parent);