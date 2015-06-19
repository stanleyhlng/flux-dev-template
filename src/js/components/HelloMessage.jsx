var React = require('react');

var HelloMessage = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'World'
        };
    },

    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

module.exports = HelloMessage;
