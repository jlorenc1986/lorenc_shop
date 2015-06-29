/* @jsx REACT.DOM */

var Offer = React.createClass({

    click:function() {
        console.log(' Offer clicked');
    },

    render: function() {
        return <table className="table table-hover">
            <thead>
                <tr>
                    <th> id  </th>
                    <th> name </th>
                    <th> price </th>
                </tr>
            </thead>
            <tbody>

                <tr>
                        <td> { this.props.id } </td>
                        <td> { this.props.name } </td>
                        <td> { this.props.price } </td>
                </tr>


            </tbody>
        </table>
    }
});