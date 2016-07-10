var OneDim = React.createClass({
        render: function () {
            return (<p>
                <span>{this.props.title}</span><br/>
                <span>{}</span>
            </p>);
        }
    }
);

var hello = ReactDOM.render(<OneDim title="测试title"/>, document.getElementById("example"));
console.log(hello);
window.hello = hello;
