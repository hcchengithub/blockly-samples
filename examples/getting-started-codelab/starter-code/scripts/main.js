/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
 (function() {

  let currentButton;

  function handlePlay(event) {
    loadWorkspace(event.target);

    /**
     * Workspace: 編輯區
     * DOM: 就是一個 Object
     * Text: XML 格式的文字
     *
     * workspaceToDom -> 把當前編輯區轉成 DOM, 可以暫存
     * domToWorkspace -> 把暫存的 DOM 轉回可編輯狀態
     * domToText 或 domToPrettyText -> 把 DOM 轉成文字, 可以存成檔案 (永久保存)
     * textToDom -> 把文字轉成 DOM
     *
     * 更多資訊請參考
     * https://developers.google.com/blockly/reference/js/Blockly.Xml
     */
    const dom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());

    /**
     * Code: EzAuto Script
     *
     * workspaceToCode -> 把當前編輯區轉成 Code
     *
     * Blockly 預設 Generator 是 JavaScript
     * 所以這邊看到的 workspaceToCode 前綴 Blockly.JavaScript
     * 同時我們定義在 activity_blocks.js 裡面的 generator stubs 也都前綴 Blockly.JavaScript
     *
     * 也就是說, 程式以為它在產生 js code
     * 其實不是, 我們只是搭便車順著這條路, 來產生 EzAuto Script
     *
     * 更多資訊請參考
     * https://developers.google.com/blockly/reference/js/Blockly.Generator
     */
    const code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());

    alert(code);

    /**
     * console log for debugging
     */
    console.log("EzAuto DOM", dom);
    console.log("EzAuto Code", code);
  }

  function save(button) {
    button.blocklyXml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
  }

  function handleSave() {
    document.body.setAttribute('mode', 'edit');
    save(currentButton);
  }

  function loadWorkspace(button) {
    let workspace = Blockly.getMainWorkspace();
    workspace.clear();
    if (button.blocklyXml) {
      Blockly.Xml.domToWorkspace(button.blocklyXml, workspace);
    }
  }

  function enableEditMode() {
    document.body.setAttribute('mode', 'edit');
    document.querySelectorAll('.button').forEach(btn => {
      btn.removeEventListener('click', handlePlay);
      btn.addEventListener('click', enableBlocklyMode);
    });
  }

  function enableMakerMode() {
    document.body.setAttribute('mode', 'maker');
    document.querySelectorAll('.button').forEach(btn => {
      btn.addEventListener('click', handlePlay);
      btn.removeEventListener('click', enableBlocklyMode);
    });
  }

  function enableBlocklyMode(e) {
    document.body.setAttribute('mode', 'blockly');
    currentButton = e.target;
    loadWorkspace(currentButton);
  }

  document.querySelector('#edit').addEventListener('click', enableEditMode);
  document.querySelector('#done').addEventListener('click', enableMakerMode);
  document.querySelector('#save').addEventListener('click', handleSave);

  enableMakerMode();

  // class NominalConnectionChecker extends Blockly.ConnectionChecker {
  //   /**
  //    * @override
  //    */
  //   doTypeChecks(a, b) {
  //     console.log("EzAuto doTypeChecks", a, b);
  //     return false;
  //   }
  // }

  // Blockly.registry.register(
  //   Blockly.registry.Type.CONNECTION_CHECKER,
  //   'NominalConnectionChecker',
  //   NominalConnectionChecker
  // );

  Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    scrollbars: true
    // scrollbars: false,
    // plugins: {
    //   [Blockly.registry.Type.CONNECTION_CHECKER]: 'NominalConnectionChecker'
    // }
  });
})();
