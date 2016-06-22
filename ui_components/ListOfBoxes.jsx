/* @jsx REACT.DOM */

var ListOfBoxes = React.createClass({

        getInitialState: function() {

            return { data: [] };


        },

        componentDidlMount: function() {

            $.ajax({
                url: this.props.url,
                dataType: 'json',
                cache: false,
                success: function(data) {
                    this.setState( { data: data } );
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });

        },

        click: function() {
            console.log('clicked');
        },

        render: function() {
            var list = this.state.data;

            return <div className="list">



            </div>
        }
    }),

    parent = document.getElementById("viewContainer");

React.render(<ListOfBoxes url="http://127.0.0.1:3000/offers/list" />, parent);