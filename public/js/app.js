
variables = [
  [
    "On card",
    [
      ["OC_TRANS_NUMBER"           , 0],
      ["OC_BALANCE"                , 1],
      ["OC_CATEGORY"               , 2],
      ["OC_ACTIVATION"             , 3],
      ["OC_DAYS_FROM_VALIDITY_DATE", 4]
    ]
  ],

  [
    "On terminal",
    [
      ['OT_TRANS_NUMBER'        , 5],
      ['OT_PROVISION'           , 6],
      ['OT_SOLD'                , 7],
      ['OT_SUPER_ADD_SOLD'      , 8]
    ],
  ],

  [
    "Monthly user stats",
    [
      ['USM_TRANS_NUMBER'       , 9],
      ['USM_TRANS_NUMBER_ADD'   , 10],
      ['USM_TRANS_NUMBER_SUB'   , 11],
      ['USM_DATE_PERIOD_BEGIN'  , 12],
      ['USM_BALANCE_TOTAL_ADD'  , 13],
      ['USM_BALANCE_TOTAL_SUB'  , 14]
    ]
  ],

  [
    "Yearly user stats" ,
    [
      ['USY_TRANS_NUMBER'       , 15],
      ['USY_TRANS_NUMBER_ADD'   , 16],
      ['USY_TRANS_NUMBER_SUB'   , 17],
      ['USY_DATE_PERIOD_BEGIN'  , 18],
      ['USY_BALANCE_TOTAL_ADD'  , 19],
      ['USY_BALANCE_TOTAL_SUB'  , 20]
    ]
  ],

  [
    "All times user stats",
    [
      ['USE_TRANS_NUMBER'       , 21],
      ['USE_TRANS_NUMBER_ADD'   , 22],
      ['USE_TRANS_NUMBER_SUB'   , 23],
      ['USE_DATE_PERIOD_BEGIN'  , 24],
      ['USE_BALANCE_TOTAL_ADD'  , 25],
      ['USE_BALANCE_TOTAL_SUB'  , 26]
    ]
  ],

  [
    "Daily terminal stats",
    [
      ['TSD_TRANS_NUMBER'       , 27],
      ['TSD_TRANS_NUMBER_ADD'   , 28],
      ['TSD_TRANS_NUMBER_SUB'   , 29],
      ['TSD_DATE_PERIOD_BEGIN'  , 30],
      ['TSD_BALANCE_ADD'        , 31],
      ['TSD_BALANCE_SUB'        , 32]
    ]
  ],

  [
    "Monthly terminal stats",
    [
      ['TSM_TRANS_NUMBER'       , 33],
      ['TSM_TRANS_NUMBER_ADD'   , 34],
      ['TSM_TRANS_NUMBER_SUB'   , 35],
      ['TSM_DATE_PERIOD_BEGIN'  , 36],
      ['TSM_BALANCE_ADD'        , 37],
      ['TSM_BALANCE_SUB'        , 38]
    ]
  ],

  [
    "Yearly terminal stats",
    [
      ['TSY_TRANS_NUMBER'       , 39],
      ['TSY_TRANS_NUMBER_ADD'   , 40],
      ['TSY_TRANS_NUMBER_SUB'   , 41],
      ['TSY_DATE_PERIOD_BEGIN'  , 42],
      ['TSY_BALANCE_ADD'        , 43],
      ['TSY_BALANCE_SUB'        , 44]
    ]
  ],

  [
    "All times terminal stats",
    [
      ['TSE_TRANS_NUMBER'       , 45],
      ['TSE_TRANS_NUMBER_ADD'   , 46],
      ['TSE_TRANS_NUMBER_SUB'   , 47],
      ['TSE_DATE_PERIOD_BEGIN'  , 48],
      ['TSE_BALANCE_ADD'        , 49],
      ['TSE_BALANCE_SUB'        , 50]
    ]
  ],

  [
    "Other",
    [
      ['OTH_RANDOM_NUMBER_100'  , 51],
      ['OTH_DATE'               , 52],
      ['OTH_TIME'               , 53],
      ['OTH_DAY_IN_WEEK_MASK'   , 54]
    ]
  ],

  [
    "Trigger",
    [
      ['COUNT_DAY'              , 55],
      ['COUNT_MONTH'            , 56],
      ['COUNT_YEAR'             , 57],
      ['COUNT_EVER'             , 58]
    ]
  ],

  [
    "Generated value",
    [
      ['GDATA_0'                , 59],
      ['GDATA_1'                , 60],
      ['GDATA_2'                , 61],
      ['GDATA_3'                , 62],
      ['GDATA_4'                , 63]
    ]
  ],

  [
    "From transaction",
    [
      ['FT_EFFECTIVE_RATE'      , 64],
      ['FT_SOLD_TRANSACTION'    , 65],
      ['FT_CODE_TRANSACTION'    , 66],
      ['FT_PURCHASE_VALUE'      , 67],
      ['USM_SOLD_AMOUNT'        , 68],
      ['USY_SOLD_AMOUNT'        , 69],
      ['USE_SOLD_AMOUNT'        , 70],
      ['OC_ID_ASCII_1'          , 71],
      ['OC_ID_ASCII_2'          , 72],
      ['OC_ID_ASCII_3'          , 73],
      ['OC_ID_ASCII_4'          , 74],
      ['OC_ID_ASCII_5'          , 75],
      ['OC_ID_ASCII_6'          , 76],
      ['OC_ID_ASCII_7'          , 77],
      ['OC_ID_ASCII_8'          , 78]
    ]
  ],

  [
    "Value for test",
    [
      ['TEST_1'                 , 101],
      ['TEST_2'                 , 102],
      ['TEST_3'                 , 103],
      ['TEST_4'                 , 104],
      ['TEST_5'                 , 105]
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
      React.createElement("span", {ref: "varPicker"}, 
        React.createElement("a", {className: "dropdown-btn btn el-code", href: "#", "data-activates": activates, ref: "trigger"}, name), 
        React.createElement("ul", {id: activates, className: "dropdown-content"}, 
          variableOptions
        )
      )
    );
  }

});


var VariablePicker = React.createClass({displayName: "VariablePicker",

  render: function() {

    var variableGroups = this.props.variables.map( function(variableGroup, index){

      var groupName       = variableGroup[0];
      var groupVariables  = variableGroup[1];

      return (
        React.createElement(VariableGroup, {key: index, variables: groupVariables, name: groupName, idx: index})
      );
    }, this);


    return (
      React.createElement("div", {className: "card-panel"}, variableGroups)
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
        React.createElement("a", {key: key, onClick: this.handleClick.bind(this, index, operationName), 
          "data-position": dataPosition, "data-tooltip": dataTooltip, 
          className: klassName}, operationName)
      );

    }, this);


    return (
      React.createElement("div", {ref: "operationPicker", className: "card-panel"}, operations)
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
      submitButton = React.createElement("button", {className: "btn waves-effect waves-light", type: "submit", name: "action", onClick: this.handleSubmit}, 
        "Submit", 
        React.createElement("i", {className: "material-icons right"}, "send")
      )
    }

    var variablePicker = null;
    var operationPicker = null;

    // starting -> first-term-added -> operand-added -> second-term-added

    if (this.state.manual || this.state.fsm == "starting" || this.state.fsm == "operand-added"){
      variablePicker = React.createElement(VariablePicker, {variables: variables})
    }
    if (this.state.manual || this.state.fsm == "first-term-added" || this.state.fsm == "second-term-added"){
      var ops = (! this.state.manual && this.state.fsm == "second-term-added") ? logicalOperations : operations;
      operationPicker = React.createElement(OperationPicker, {operations: ops, operationTooltips: operationTooltips})
    }

    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "card-panel"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "input-field col s12"}, 
              React.createElement("input", {id: "final-expression", className: validityClassName, type: "text", value: expr, placeholder: "Expression with verbose variable names", onChange: this.handleChange}), 
              React.createElement("label", {htmlFor: "final-expression", className: "active", "data-error": errorMessage}, "Expression with verbose variable names")
            )
          ), 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "input-field col s12"}, 
              React.createElement("input", {id: "expression-with-names", type: "text", value: exprWithCodes, placeholder: "Final expression", readOnly: "1"}), 
              React.createElement("label", {htmlFor: "expression-with-names", className: "active"}, "Final expression")
            )
          ), 
          React.createElement("p", null, 
            submitButton
          )
        ), 
        variablePicker, 
        operationPicker
      )
    );
  }

});

$( document ).ready(function(){
  React.render(
    React.createElement(ExpressionLanguageEditor, {
      variables: variables, 
      logicalOperations: logicalOperations, 
      operations: operations, 
      operationTooltips: operationTooltips}),

    document.getElementById('expression-language-editor')
  );
});