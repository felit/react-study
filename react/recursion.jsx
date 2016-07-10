var Recursion = React.createClass({
    getInitialState: function () {
        return {level: this.props.level};
    },
    render: function () {
        if (this.props.level > 0) {
            return <div>
                {this.props.level}
                <Recursion level={this.props.level-1}/>
            </div>
        } else {
            return null;
        }
    }
});
ReactDOM.render(<Recursion level={10}/>, document.getElementById('recursion'));