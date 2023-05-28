// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "defdeclswitcher" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('defdeclswitcher.switch', () => {
    
    // Grab the current editor 
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showWarningMessage('No active text editor found');
      return;
    }

    // Grab the filepath of the current editor
    const currentFilePath = editor.document.fileName;
    let newFilePath = currentFilePath;
    let is_def = false;
    let is_decl = false;

    // If somebody's file is named "_def.hpp_def.hpp" something weird will probably happen
    // Swap depending on whether currentFilePath is a def or decl
    if(currentFilePath.includes("_def.hpp")) {
      is_def = true;
      newFilePath = newFilePath.replace("_def.hpp","_decl.hpp");
    } else if(currentFilePath.includes("_decl.hpp")) {
      is_decl = true;
      newFilePath = newFilePath.replace("_decl.hpp","_def.hpp");
    } else {
      vscode.window.showWarningMessage(`The current file is neither a def nor decl file!\nCurrent File: ${currentFilePath}`);
    }

    // Try to open the file
    fs.access(newFilePath, fs.constants.F_OK, (err) => {
      if (err) {
        if(is_def)
          vscode.window.showErrorMessage(`_decl.hpp file not found: ${newFilePath}`);
        else if(is_decl)
          vscode.window.showErrorMessage(`_def.hpp file not found: ${newFilePath}`);
      } else {
        vscode.workspace.openTextDocument(newFilePath).then((doc) => {
          vscode.window.showTextDocument(doc);
        });
      }
    });
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
