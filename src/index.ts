import { install } from "./commands/install";
import { uninstall } from "./commands/uninstall";
import { list } from "./commands/list";

const version = "0.0.1";

const [, , command, ...args] = process.argv;

switch (command) {
  case "install":
    install(args);
    break;
  case "uninstall":
    uninstall(args);
    break;
  case "list":
    list();
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
