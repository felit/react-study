var Child = React.createClass({
    getInitialState: function () {
        return {
            childInnerState: (function () {
                var inner = 0;
                return function () {
                    return inner += 2;
                };
            })(),
            innerState: 'innerState'
        };
    }, changeState: function (args1,event) {
        console.log(args1);
        this.setState({
            innerState: 'change inner State'
        });
    },
    render: function () {
        return <div>
            <span>{this.props.title}-{this.props.currentNum}-{this.state.innerState}</span>
            <div onClick={this.changeState.bind(this,300)}>改变子组件的内部状态</div>
            <div onClick={this.props.callbackParent}>子组件向父组件通信</div>
        </div>;
    }
});

var PropertiesObject = React.createClass({
    getInitialState: function () {
        return {
            title: '测试properties', properties: {
                title: 'inner.propertes',
                currentNum: 0
            }
        };
    }, changeTitle: function (event) {
        this.setState({
            properties: {
                title: 'changedTitle',
                currentNum: this.state.properties.currentNum + 1
            }
        });
    },callback:function(event,val1){
        // 子组件向父组件通信
        console.log(val1);
        console.log(event);
        console.log(this.state);
    }, render: function () {
        var s = {
            "background": "#F00"
        };
        return (<div style={s}>
            {/* 父子组件通信 */}
            <Child {...this.state.properties} callbackParent={this.callback} ></Child>
            <div onClick={this.changeTitle}>父子组件通信</div>
        </div>);
    }
});
ReactDOM.render(<PropertiesObject/>, document.getElementById('properties-object'));