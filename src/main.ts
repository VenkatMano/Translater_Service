import * as express from "express";
import * as bodyParser from "body-parser";

class App {
    greeting: string;
    app: any;
    constructor() {
        this.app = express();
        console.log("Compiled");
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

export default new App().app;
