/* @jsx REACT.DOM */

var Offer = React.createClass({displayName: "Offer",

    click:function(){
        console.log(' Offer clicked');
    },
    render: function(){
        return React.createElement("table", null, 
            React.createElement("thead", null, 
                React.createElement("tr", null, 
                    React.createElement("th", null, " id "), 
                    React.createElement("th", null, " name "), 
                    React.createElement("th", null, " price ")
                )
            ), 
            "Offer id: ", this.props.id
        )
    }
});


var parent = document.getElementById("viewContainer");

React.render(React.createElement(Offer, {id: "1", name: "offer1", price: "13"}), parent);