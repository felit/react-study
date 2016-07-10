var Timer = React.createClass({
    getInitialState: function() {
        console.log("getInitialState" + this);
        return {secondsElapsed: 0};
    },
    tick: function() {
        console.log("tick" + this);
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    },
    componentDidMount: function() {
        console.log("componentDidMount" + this);
        this.interval = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function() {
        console.log("componentWillUnmount" + this);
        clearInterval(this.interval);
    },
    render: function() {
        return (
            <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
    }
});
window.Timer = Timer;
//ReactDOM.render(<Timer />, document.getElementById('timer'));

