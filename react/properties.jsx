var Properties = React.createClass({
    clickHandler:function(event){
        console.log(this.props);
        console.log(event);
    },
    render: function () {
        return <p onClick={this.clickHandler}> { this.props.surveys[0].title } </p>
    }
});
var surs = [{title: 'Superheroes'}];
ReactDOM.render(<Properties surveys={surs}/>, document.getElementById('properties'));
