#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const install_1 = require("./commands/install");
const uninstall_1 = require("./commands/uninstall");
const list_1 = require("./commands/list");
const version = "0.0.1";
const [, , command, ...args] = process.argv;
switch (command) {
    case "install":
        (0, install_1.install)(args);
        break;
    case "uninstall":
        (0, uninstall_1.uninstall)(args);
        break;
    case "list":
        (0, list_1.list)();
        break;
    case "-h":
    case "--help":
        console.log(`
      Usage: bnpm <command> [options]

      Commands:
        install <package>    Install a package
        uninstall <package>  Uninstall a package
        list                 List installed packages

      Options:
        -h, --help           Show help
        -v, --version        Show version number
    `);
        break;
    case "-v":
    case "--version":
        console.log(`Version: ${version}`);
        break;
    default:
        console.log(`Unknown command: ${command}`);
        break;
}
