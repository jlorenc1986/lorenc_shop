/* @jsx REACT.DOM */

var Offer = React.createClass({

    click:function(){
        console.log(' Offer clicked');
    },
    render: function(){
        return <table>
            <thead>
                <tr>
                    <th> id </th>
                    <th> name </th>
                    <th> price </th>
                </tr>
            </thead>
            Offer id: {this.props.id}
        </table>
    }
});


var parent = document.getElementById("viewContainer");

React.render(<Offer id="1" name="offer1" price="13" />, parent);