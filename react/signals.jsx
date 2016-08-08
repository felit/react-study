/**
 * 不相关组件的通信，通过js-signals完成
 * @type {*|Signal|e}
 */
//通信
var aToBChannel = new signals.Signal();
var globalChannel = new signals.Signal();
var ComponentA = React.createClass({
    getInitialState: function () {
        return {content: ''};
    }, render: function () {
        return (
            <div>Component-A
                <div>{this.state.content}</div>
            </div>
        );
    }, componentDidMount: function () {
        var self = this;
        var binding = this.props.channel.add(function (params) {
            self.setState({content: params.toString()});
        });
        var binding2 = globalChannel.add(function (event) {
            console.log(event);
        });
    }, componentDidUpdate: function () {

    }
});
var ComponentB = React.createClass({
    getInitialState: function () {
        return {};
    }, render: function () {
        return (<div onClick={this.clickHandler}>Component-B</div>);
    }, componentDidMount: function () {
        this.props.channel.dispatch("from ComponentB");

    }, clickHandler: function (event) {
        this.props.channel.dispatch(new Date());
        globalChannel.dispatch("Date:" + new Date() + " from component b");
    }
});
ReactDOM.render(<ComponentA channel={aToBChannel}/>, document.getElementById('component-a'));
ReactDOM.render(<ComponentB channel={aToBChannel}/>, document.getElementById('component-b'));
