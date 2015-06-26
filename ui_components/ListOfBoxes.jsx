/* @jsx REACT.DOM */

var ListOfBoxes = React.createClass({

    click:function() {
        console.log('clicked');
    },

    render: function() {
        return <div className="list">
                <ul>
                    <li><OfferBox name ="Offers" /></li>
                </ul>
            </div>
    }
}),

    parent = document.getElementById("viewContainer");

React.render(<ListOfBoxes />, parent);