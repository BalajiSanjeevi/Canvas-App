import readline from 'readline';
import commandHandler from './CommandHandler';
import write from './io/OutputWriter';
import {EXIT_THANK_YOU_MESSAGE, WELCOME_MESSAGE, QUESTION} from './constants/MessageConstant';

/*
 * Readline is the node module which provide the function createInterface
 * and takes the process.stdin for reading from the console and process.stdOut to write to the console.
 * The readline has been used to read the user commands.
 * https://nodejs.algolia.com/readline.html
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 *   Below function is called recursively to get the command from the console until the user opts to quit with the command 'Q'
 */
const getCommand = () => {
    rl.question(QUESTION, (answer) => {
        const shouldContinue = commandHandler(answer);
        shouldContinue ? getCommand() : quitApp();
    })
}

/*
 * The function is invoked to exit from the application.
 */

const quitApp = () => {
    write(EXIT_THANK_YOU_MESSAGE);
    rl.close();
}

/*
 * This is the main function which starts with Canvas App.
 */
const startCanvasApp = () => {
    write(WELCOME_MESSAGE);
    getCommand();
}

/*
 * The function is invoked immediately to start the application.
 */
export default startCanvasApp();