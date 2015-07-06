
define([ 'react', 'app/helpers', 'app/terminal_language_data'],
function( React,       helpers,       data) {

  var operationAddedEvent = 'el:operation-added';
  var varAddedEvent       = 'el:var-added';


  var VariableGroup = React.createClass({displayName: "VariableGroup",

    componentDidMount: function() {
      var triggerLink = React.findDOMNode(this.refs.trigger);
      $(triggerLink).dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false,
        hover: false,
        gutter: 0,
        belowOrigin: false
      });
    },

    handleClick: function(idx, varName, varCode) {
      var picker = React.findDOMNode(this.refs.varPicker);
      $(picker).trigger(varAddedEvent, {'var': varName, 'code': varCode});

    },

    render: function() {

      var name      = this.props.name;
      var activates = 'dropdown' + this.props.idx;

      var variableOptions = this.props.variables.map( function(variableTuple, index){
        var varName = variableTuple[0];
        var varCode = variableTuple[1];
        var key= "a" + index
        return React.createElement("li", {key: key}, React.createElement("a", {href: "#!", onClick: this.handleClick.bind(this, index, varName, varCode)}, varName))

      }, this);

      return (
        <span ref="varPicker">
          <a className='dropdown-btn btn el-code' href='#' data-activates={activates} ref="trigger">{name}</a>
          <ul id={activates} className='dropdown-content'>
            {variableOptions}
          </ul>
        </span>
      );
    }

  });


  var VariablePicker = React.createClass({displayName: "VariablePicker",

    render: function() {

      var variableGroups = this.props.variables.map( function(variableGroup, index){

        var groupName       = variableGroup[0];
        var groupVariables  = variableGroup[1];

        return (
          <VariableGroup key={index} variables={groupVariables} name={groupName} idx={index} />
        );
      }, this);


      return (
        <div className="card-panel">{variableGroups}</div>
      );
    }

  });

  var OperationPicker = React.createClass({displayName: "OperationPicker",

    handleClick: function(idx, operationName) {

      var picker = React.findDOMNode(this.refs.operationPicker);
      $(picker).trigger(operationAddedEvent, {'op': operationName});
    },

    componentDidMount: function() {
      var operationPicker = React.findDOMNode(this.refs.operationPicker);

      $('.tooltipped', $(operationPicker)).tooltip({
        delay: 50
      });

    },

    render: function() {

      var operations = this.props.operations.map( function(operationName, index){
        var key= "op" + index;

        var klassName = "waves-effect waves-light btn el-op blue-grey lighten-1";

        var dataPosition = null;
        var dataTooltip  = null;

        if (this.props.operationTooltips[operationName]){
          klassName += " tooltipped";
          dataPosition = 'top';
          dataTooltip  = this.props.operationTooltips[operationName];
        }

        return (
          <a key={key} onClick={this.handleClick.bind(this, index, operationName)}
            data-position={dataPosition} data-tooltip={dataTooltip}
            className={klassName}>{operationName}</a>
        );

      }, this);


      return (
        <div ref="operationPicker" className="card-panel">{operations}</div>
      );
    }

  });

  var ExpressionLanguageEditor = React.createClass({displayName: "ExpressionLanguageEditor",

    handleSubmit: function() {
      Materialize.toast('Submitted :-)', 4000);
    },

    // starting -> first-term-added -> operand-added -> second-term-added -> starting

    getInitialState: function() {
      return {
        expression:  "",
        fsm:         'starting',
        manual:      false,
      };
    },

    componentDidMount: function() {

      component = this;

      $(window).on(operationAddedEvent, function(event, opts){

        var addedExpr = " " + opts['op'];

        var newState = {}

        var expr = component.state.expression;

        if (component.state.fsm == "second-term-added"){
          newState.fsm         = "starting";
          addedExpr = addedExpr + " ";
        }

        if (component.state.fsm == "first-term-added"){
          newState.fsm = "operand-added";

        }

        newState.expression = expr + addedExpr;

        component.setState(newState);
      })

      $(window).on( varAddedEvent, function(event, opts){
        var code     = opts['code'];
        var variable = opts['var'];

        var addedExpr = " $" + variable;

        var newState = {};

        var expr = component.state.expression;


        if (component.state.fsm == "operand-added"){
          newState.fsm = "second-term-added";
          addedExpr = addedExpr + " )";
        }

        if (component.state.fsm == "starting"){
          newState.fsm = "first-term-added";
          addedExpr = "(" + addedExpr;
        }

        newState.expression=  expr + addedExpr;



        component.setState(newState);
      })

    },

    componentWillUnmount: function() {
      $(window).off(operationAddedEvent);
      $(window).off(varAddedEvent);
    },


    handleChange: function(event) {
      this.setState({expression: event.target.value, manual: true});
    },

    render: function() {

      var expr = this.state.expression;

      var validityResponse = helpers.validateParentheses(this.state.expression);

      var valid        = validityResponse.valid;
      var errorMessage = validityResponse.errorMessage;

      var validityClassName = null;

      var exprWithCodes;
      if (! valid || expr === ""){
        exprWithCodes = "";
      } else {
        var replacedResponse = helpers.expressionWithVarsToExpressionWithCodes(data.flattenedVariables, expr);
        if (replacedResponse.errorMessage){
          valid = false;
          errorMessage = replacedResponse.errorMessage;
        }else{
          exprWithCodes = "( " + replacedResponse.replaced + " )";
        }
      }

      if (! valid){
        validityClassName = "invalid";
      }


      var submitButton = null;
      if (valid && ! (expr === "")){
        submitButton = <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleSubmit}>
          Submit
          <i className="material-icons right">send</i>
        </button>
      }

      var variablePicker = null;
      var operationPicker = null;

      // starting -> first-term-added -> operand-added -> second-term-added

      variables = this.props.variables;

      if (this.state.manual || this.state.fsm == "starting" || this.state.fsm == "operand-added"){
        variablePicker = <VariablePicker variables={variables} />
      }
      if (this.state.manual || this.state.fsm == "first-term-added" || this.state.fsm == "second-term-added"){
        var ops = (! this.state.manual && this.state.fsm == "second-term-added") ? this.props.logicalOperations : this.props.operations;
        operationPicker = <OperationPicker operations={ops} operationTooltips={this.props.operationTooltips} />
      }

      return (
        <div>
          <div className="card-panel">
            <div className="row">
              <div className="input-field col s12">
                <input id="final-expression" className={validityClassName} type="text" value={expr} placeholder="Expression with verbose variable names" onChange={this.handleChange} />
                <label htmlFor="final-expression" className="active" data-error={errorMessage}>Expression with verbose variable names</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="expression-with-names" type="text" value={exprWithCodes} placeholder="Final expression" readOnly="1" ></input>
                <label htmlFor="expression-with-names" className="active" >Final expression</label>
              </div>
            </div>
            <p>
              {submitButton}
            </p>
          </div>
          {variablePicker}
          {operationPicker}
        </div>
      );
    }

  });

  $( document ).ready(function(){
    React.render(
      <ExpressionLanguageEditor
        variables={data.variables}
        logicalOperations={data.logicalOperations}
        operations={data.operations}
        operationTooltips={data.operationTooltips}/>,

      document.getElementById('expression-language-editor')
    );
  });

  return {}

});