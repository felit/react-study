var Component = React.createClass({
    render: function () {
        return <div> {
            this.props.items.map(function (i) {
                return <p>{i}</p>
            })
        } </div>;
    }
});

window.kk = ReactDOM.render(<Component items={_.range(0,3)}></Component>,
    document.getElementById('component')
);