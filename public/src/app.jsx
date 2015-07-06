
variables = [
  [
    "On card",
    [
      ["TRIG_OC_TRANS_NUMBER"           , 0],
      ["TRIG_OC_BALANCE"                , 1],
      ["TRIG_OC_CATEGORY"               , 2],
      ["TRIG_OC_ACTIVATION"             , 3],
      ["TRIG_OC_DAYS_FROM_VALIDITY_DATE", 4]
    ]
  ],

  [
    "On terminal",
    [
      ['TRIG_OT_TRANS_NUMBER'        , 5],
      ['TRIG_OT_PROVISION'           , 6],
      ['TRIG_OT_SOLD'                , 7],
      ['TRIG_OT_SUPER_ADD_SOLD'      , 8]
    ],
  ],

  [
    "Monthly user stats",
    [
      ['TRIG_USM_TRANS_NUMBER'       , 9],
      ['TRIG_USM_TRANS_NUMBER_ADD'   , 10],
      ['TRIG_USM_TRANS_NUMBER_SUB'   , 11],
      ['TRIG_USM_DATE_PERIOD_BEGIN'  , 12],
      ['TRIG_USM_BALANCE_TOTAL_ADD'  , 13],
      ['TRIG_USM_BALANCE_TOTAL_SUB'  , 14]
    ]
  ],

  [
    "Yearly user stats" ,
    [
      ['TRIG_USY_TRANS_NUMBER'       , 15],
      ['TRIG_USY_TRANS_NUMBER_ADD'   , 16],
      ['TRIG_USY_TRANS_NUMBER_SUB'   , 17],
      ['TRIG_USY_DATE_PERIOD_BEGIN'  , 18],
      ['TRIG_USY_BALANCE_TOTAL_ADD'  , 19],
      ['TRIG_USY_BALANCE_TOTAL_SUB'  , 20]
    ]
  ],

  [
    "All times user stats",
    [
      ['TRIG_USE_TRANS_NUMBER'       , 21],
      ['TRIG_USE_TRANS_NUMBER_ADD'   , 22],
      ['TRIG_USE_TRANS_NUMBER_SUB'   , 23],
      ['TRIG_USE_DATE_PERIOD_BEGIN'  , 24],
      ['TRIG_USE_BALANCE_TOTAL_ADD'  , 25],
      ['TRIG_USE_BALANCE_TOTAL_SUB'  , 26]
    ]
  ],

  [
    "Daily terminal stats",
    [
      ['TRIG_TSD_TRANS_NUMBER'       , 27],
      ['TRIG_TSD_TRANS_NUMBER_ADD'   , 28],
      ['TRIG_TSD_TRANS_NUMBER_SUB'   , 29],
      ['TRIG_TSD_DATE_PERIOD_BEGIN'  , 30],
      ['TRIG_TSD_BALANCE_ADD'        , 31],
      ['TRIG_TSD_BALANCE_SUB'        , 32]
    ]
  ],

  [
    "Monthly terminal stats",
    [
      ['TRIG_TSM_TRANS_NUMBER'       , 33],
      ['TRIG_TSM_TRANS_NUMBER_ADD'   , 34],
      ['TRIG_TSM_TRANS_NUMBER_SUB'   , 35],
      ['TRIG_TSM_DATE_PERIOD_BEGIN'  , 36],
      ['TRIG_TSM_BALANCE_ADD'        , 37],
      ['TRIG_TSM_BALANCE_SUB'        , 38]
    ]
  ],

  [
    "Yearly terminal stats",
    [
      ['TRIG_TSY_TRANS_NUMBER'       , 39],
      ['TRIG_TSY_TRANS_NUMBER_ADD'   , 40],
      ['TRIG_TSY_TRANS_NUMBER_SUB'   , 41],
      ['TRIG_TSY_DATE_PERIOD_BEGIN'  , 42],
      ['TRIG_TSY_BALANCE_ADD'        , 43],
      ['TRIG_TSY_BALANCE_SUB'        , 44]
    ]
  ],

  [
    "All times terminal stats",
    [
      ['TRIG_TSE_TRANS_NUMBER'       , 45],
      ['TRIG_TSE_TRANS_NUMBER_ADD'   , 46],
      ['TRIG_TSE_TRANS_NUMBER_SUB'   , 47],
      ['TRIG_TSE_DATE_PERIOD_BEGIN'  , 48],
      ['TRIG_TSE_BALANCE_ADD'        , 49],
      ['TRIG_TSE_BALANCE_SUB'        , 50]
    ]
  ],

  [
    "Other",
    [
      ['TRIG_OTH_RANDOM_NUMBER_100'  , 51],
      ['TRIG_OTH_DATE'               , 52],
      ['TRIG_OTH_TIME'               , 53],
      ['TRIG_OTH_DAY_IN_WEEK_MASK'   , 54]
    ]
  ],

  [
    "Trigger",
    [
      ['TRIG_COUNT_DAY'              , 55],
      ['TRIG_COUNT_MONTH'            , 56],
      ['TRIG_COUNT_YEAR'             , 57],
      ['TRIG_COUNT_EVER'             , 58]
    ]
  ],

  [
    "Generated value",
    [
      ['TRIG_GDATA_0'                , 59],
      ['TRIG_GDATA_1'                , 60],
      ['TRIG_GDATA_2'                , 61],
      ['TRIG_GDATA_3'                , 62],
      ['TRIG_GDATA_4'                , 63]
    ]
  ],

  [
    "From transaction",
    [
      ['TRIG_FT_EFFECTIVE_RATE'      , 64],
      ['TRIG_FT_SOLD_TRANSACTION'    , 65],
      ['TRIG_FT_CODE_TRANSACTION'    , 66],
      ['TRIG_FT_PURCHASE_VALUE'      , 67],
      ['TRIG_USM_SOLD_AMOUNT'        , 68],
      ['TRIG_USY_SOLD_AMOUNT'        , 69],
      ['TRIG_USE_SOLD_AMOUNT'        , 70],
      ['TRIG_OC_ID_ASCII_1'          , 71],
      ['TRIG_OC_ID_ASCII_2'          , 72],
      ['TRIG_OC_ID_ASCII_3'          , 73],
      ['TRIG_OC_ID_ASCII_4'          , 74],
      ['TRIG_OC_ID_ASCII_5'          , 75],
      ['TRIG_OC_ID_ASCII_6'          , 76],
      ['TRIG_OC_ID_ASCII_7'          , 77],
      ['TRIG_OC_ID_ASCII_8'          , 78]
    ]
  ],

  [
    "Value for test",
    [
      ['TRIG_TEST_1'                 , 101],
      ['TRIG_TEST_2'                 , 102],
      ['TRIG_TEST_3'                 , 103],
      ['TRIG_TEST_4'                 , 104],
      ['TRIG_TEST_5'                 , 105]
    ]
  ]

];

operations = [
  '+',
  '-',
  '*',
  '/',
  'm',
  '=',
  '>',
  ']',
  '<',
  '[',
  '!',
  '&',
  '|',
  'a',
  'o'
];

logicalOperations = [
  'a',
  'o'
];


operationTooltips = {
  'm': 'Modulo',
  ']': "More than or equal",
  '[': "Less than or equal",
  '!': "Not equal",
  '&': "Bit mask AND",
  '|': "Bit mask OR",
  'a': "AND",
  'o': 'OR'
};


var flattenVariables = function(variables) {
  var flattened = {};
  var i = 0;
  for(tot = variables.length; i < tot; i++) {
    var j = 0;
    varGroup = variables[i][1];
    for(totj = varGroup.length; j < totj; j++) {
      var key = "$" + varGroup[j][0];
      var val = "$" + varGroup[j][1];
      flattened[key] = val;
    }
  }
  return flattened;
}

flattenedVariables = flattenVariables(variables);


expressionWithVarsToExpressionWithCodes =  function(expr) {
  var varsNotFound = [];
  var response     = {};

  response.replaced = expr.replace(/\$[\w_]+/g, function(varName) {

    if (flattenedVariables[varName]){
      return flattenedVariables[varName];
    }else{
      varsNotFound.push(varName);
      return(' !' + varName + '! ');
    }

  });

  if (varsNotFound.length == 1){
    response.errorMessage = "Variable " + varsNotFound[0] + " not found!";
  }else if(varsNotFound.length > 1){
    response.errorMessage = "Variables not found: " + varsNotFound.join(", ") + '!';
  }

  return response;
}

validateParentheses = function(expr) {
  var response = {'valid': true, 'errorMessage': "Unbalanced parentheses"};

  var counter = 0;
  for (var i = 0, len = expr.length; i < len; i++) {
    switch (expr[i]){
      case "(" :
        counter ++;
        break
      case ")" :
        counter --;
        break
    }
    if (counter < 0){
      response.valid = false;
      response.errorMessage = "A closing parenthesis without an opening parenthesis on character " + (i+1);
      return response;
    }
  }

  if (counter != 0){
    response.valid = false;
  }

  return response;
}

// ===
var operationAddedEvent = 'el:operation-added'
var varAddedEvent       = 'el:var-added'


var VariableGroup = React.createClass({

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
      return <li key={key}><a href="#!" onClick={this.handleClick.bind(this, index, varName, varCode)} >{varName}</a></li>

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


var VariablePicker = React.createClass({

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

var OperationPicker = React.createClass({

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

var ExpressionLanguageEditor = React.createClass({

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

    var validityResponse = validateParentheses(this.state.expression);

    var valid        = validityResponse.valid;
    var errorMessage = validityResponse.errorMessage;

    var validityClassName = null;

    var exprWithCodes;
    if (! valid || expr === ""){
      exprWithCodes = "";
    } else {
      var replacedResponse = expressionWithVarsToExpressionWithCodes(expr);
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

    if (this.state.manual || this.state.fsm == "starting" || this.state.fsm == "operand-added"){
      variablePicker = <VariablePicker variables={variables} />
    }
    if (this.state.manual || this.state.fsm == "first-term-added" || this.state.fsm == "second-term-added"){
      var ops = (! this.state.manual && this.state.fsm == "second-term-added") ? logicalOperations : operations;
      operationPicker = <OperationPicker operations={ops} operationTooltips={operationTooltips} />
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
      variables={variables}
      logicalOperations={logicalOperations}
      operations={operations}
      operationTooltips={operationTooltips}/>,

    document.getElementById('expression-language-editor')
  );
});