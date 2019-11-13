'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as child_process from 'child_process';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.docker-dive', dockerDive);

    context.subscriptions.push(disposable);

}

// this method is called when your extension is deactivated
export function deactivate() {
}

function dockerDive(uri) {
    if (vscode.window.activeTerminal) {
        const config = vscode.workspace.getConfiguration('docker-dive');
        let diveCommand = 'dive';
        if (config && config.diveCommand) {
            diveCommand = config.diveCommand;
        }

        if (uri && uri.fullTag) {
            dive(vscode.window.activeTerminal, uri.fullTag);
        } else {
            child_process.exec(`docker images --format "{{.Repository}}:{{.Tag}}"`,
            async (err, stdout, stderr) => {
                const dockerImages = stdout.split('\n');
                const dockerImage = await vscode.window.showQuickPick(dockerImages, {
                    placeHolder: 'Select docker image'
                });
                if (dockerImage) {
                    dive(vscode.window.activeTerminal, dockerImage);
                }
            });
        }
    }
}

function dive(terminal: vscode.Terminal, dockerImage: string) {
   terminal.show;
   terminal.sendText(`dive "${dockerImage}"`);
}