var Dyn = React.createClass({
    getInitialState: function () {
        return {}
    }, render: function () {
        console.log(this.props.children);
        return <p className="parent"> {this.props.children} </p>
    }
});
var Child = React.createClass({
    render: function () {
        return <span className="children">hello children</span>;
    }
});

var vm = ReactDOM.render(
    <Dyn>
        <span>footer</span>
    </Dyn>,
    document.getElementById('parent-wrapper'));
window.vmd = vm;
//vm.setProps({children:React.createElement(Child)});