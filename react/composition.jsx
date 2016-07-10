var AnswerRadioInput = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool
    },
    getDefaultProps: function () {
        return {
            id: null,
            checked: false
        }
    },
    render: function () {
        return (
            <div className="radio">
                <label>
                    <input type="radio"/>
                    Label Text
                </label>
            </div>
        );
    }
});

var AnswerMultipleChoiceQuestion = React.createClass({
    getInitialState: function () {
        return {choices: []}
    },
    renderChoices: function () {
        return this.props.choices.map(function (choice, i) {
            return AnswerRadioInput({
                id: 'choice-' + i,
                name: this.state.id,
                label: choice,
                value: choice,
                checked: this.state.value === choice
            });
        }.bind(this));
    },
    render: function () {
        return (
            <div className="form-group">
                <label className="survey-item-label" htmlFor={this.state.id}>
                    {this.props.label}
                </label>
                <div className="survey-item-content">
                    {this.renderChoices()}
                </div>
            </div>
        );
    }
});
ReactDOM.render(<AnswerMultipleChoiceQuestion name='test' label='label' value="900"
                                              choices={[1,2,34]}/>, document.getElementById('composition'));