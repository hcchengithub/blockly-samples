/**
 * 在這個網頁建立新的 block
 * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html
 * Block Definition (JSON) 複製貼上到這個 array 裡面
 * Generator stub (JavaScript) 複製貼上到這個檔案底部
 */

Blockly.defineBlocksWithJsonArray([
  {
    "type": "activity_mouse_click",
    "message0": "<ActivityMouseClick /> %1 description %2 label %3 defer %4 timeout %5 %6 maxRetryCount %7 retryInterval %8 %9 terminateIfFail %10 cleanup %11 executionMode %12 %13 %14",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_input",
        "name": "description",
        "text": ""
      },
      {
        "type": "field_input",
        "name": "label",
        "text": ""
      },
      {
        "type": "field_number",
        "name": "defer",
        "value": 0,
        "min": 0,
        "precision": 0.1
      },
      {
        "type": "field_number",
        "name": "timeout",
        "value": 180,
        "min": -1,
        "precision": 0.1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "maxRetryCount",
        "value": 0,
        "min": 0,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "retryInterval",
        "value": 0,
        "min": 0,
        "precision": 0.1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "terminateIfFail",
        "checked": false
      },
      {
        "type": "field_checkbox",
        "name": "cleanup",
        "checked": false
      },
      {
        "type": "field_dropdown",
        "name": "executionMode",
        "options": [
          [
            "Synchronous",
            "Sync"
          ],
          [
            "Asynchronous",
            "Async"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "children",
        "check": [
          "click",
          "window_specification",
          "xy_axis_index_filter"
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "click",
    "message0": "<Click /> %1 clickCount %2 clickInterval %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "clickCount",
        "value": 0,
        "min": 0,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "clickInterval",
        "value": 1,
        "min": 0,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_specification",
    "message0": "<WindowSpecification /> %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "children",
        "check": [
          "parent_window",
          "descendant_window"
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "parent_window",
    "message0": "<ParentWindow /> %1 class name %2 control type %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "className",
        "check": "class_name"
      },
      {
        "type": "input_statement",
        "name": "controlType",
        "check": "control_type"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "descendant_window",
    "message0": "<DescendantWindow /> %1 automation id %2 control type %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "automationId",
        "check": "automation_id"
      },
      {
        "type": "input_statement",
        "name": "controlType",
        "check": "control_type"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 20,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "class_name",
    "message0": "<ClassName> %1 </ClassName>",
    "args0": [
      {
        "type": "field_input",
        "name": "value",
        "text": ""
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "control_type",
    "message0": "<ControlType> %1 </ControlType>",
    "args0": [
      {
        "type": "field_input",
        "name": "value",
        "text": ""
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "automation_id",
    "message0": "<<AutomationId>> %1",
    "args0": [
      {
        "type": "field_number",
        "name": "value",
        "value": 0,
        "min": 0,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "xy_axis_index_filter",
    "message0": "<XYAxisIndexFilter /> %1 xIndex %2 yIndex %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_number",
        "name": "xIndex",
        "value": 0,
        "precision": 1
      },
      {
        "type": "field_number",
        "name": "yIndex",
        "value": 0,
        "precision": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['activity_mouse_click'] = function(block) {
  var text_description = block.getFieldValue('description');
  var text_label = block.getFieldValue('label');
  var number_defer = block.getFieldValue('defer');
  var number_timeout = block.getFieldValue('timeout');
  var number_maxretrycount = block.getFieldValue('maxRetryCount');
  var number_retryinterval = block.getFieldValue('retryInterval');
  var checkbox_terminateiffail = block.getFieldValue('terminateIfFail') == 'TRUE';
  var checkbox_cleanup = block.getFieldValue('cleanup') == 'TRUE';
  var dropdown_executionmode = block.getFieldValue('executionMode');
  var statements_children = Blockly.JavaScript.statementToCode(block, 'children');
  return '<Activity handler="AutoFlow.InputDevice.ActivityMouseClick"'
    + (text_description ? ` description="${text_description}"` : '')
    + (text_label ? ` label="${text_label}"` : '')
    + (number_defer !== 0 ? ` defer="${number_defer}"` : '')
    + (number_timeout !== 180 ? ` timeout="${number_timeout}"` : '')
    + (number_maxretrycount !== 0 ? ` maxRetryCount="${number_maxretrycount}"` : '')
    + (number_retryinterval !== 0 ? ` retryInterval="${number_retryinterval}"` : '')
    + (checkbox_terminateiffail ? ` terminateIfFail="${checkbox_terminateiffail}"` : '')
    + (checkbox_cleanup ? ` cleanup="${checkbox_cleanup}"` : '')
    + (dropdown_executionmode !== 'Sync' ? ` executionMode="${dropdown_executionmode}"` : '')
    + '>\n'
    + statements_children
    + '</Activity>\n';
};

Blockly.JavaScript['click'] = function(block) {
  var number_clickcount = block.getFieldValue('clickCount');
  var number_clickinterval = block.getFieldValue('clickInterval');
  return '<Click'
    + ` clickCount="${number_clickcount}"`
    + ` clickInterval="${number_clickinterval}"`
    + ' />\n';
};

Blockly.JavaScript['window_specification'] = function(block) {
  var statements_children = Blockly.JavaScript.statementToCode(block, 'children');
  return '<WindowSpecification>\n'
    + statements_children
    + '</WindowSpecification>\n';
};

Blockly.JavaScript['parent_window'] = function(block) {
  var statements_classname = Blockly.JavaScript.statementToCode(block, 'className');
  var statements_controltype = Blockly.JavaScript.statementToCode(block, 'controlType');
  return '<ParentWindow>\n'
    + statements_classname
    + statements_controltype
    + '</ParentWindow>\n';
};

Blockly.JavaScript['descendant_window'] = function(block) {
  var statements_automationid = Blockly.JavaScript.statementToCode(block, 'automationId');
  var statements_controltype = Blockly.JavaScript.statementToCode(block, 'controlType');
  return '<DescendantWindow>\n'
    + statements_automationid
    + statements_controltype
    + '</DescendantWindow>\n';
};

Blockly.JavaScript['class_name'] = function(block) {
  var text_value = block.getFieldValue('value');
  return '<ClassName>'
    + text_value
    + '</ClassName>\n';
};

Blockly.JavaScript['control_type'] = function(block) {
  var text_value = block.getFieldValue('value');
  return '<ControlType>'
    + text_value
    + '</ControlType>\n';
};

Blockly.JavaScript['automation_id'] = function(block) {
  var number_value = block.getFieldValue('value');
  return '<AutomationId>'
    + number_value
    + '</AutomationId>\n';
};

Blockly.JavaScript['xy_axis_index_filter'] = function(block) {
  var number_xindex = block.getFieldValue('xIndex');
  var number_yindex = block.getFieldValue('yIndex');
  return '<XYAxisIndexFilter'
    + ` xIndex="${number_xindex}"`
    + ` yIndex="${number_yindex}"`
    + ' />\n';
};
