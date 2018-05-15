"use strict";
exports.__esModule = true;
var WebSocket = require("ws");
function bootstrap() {
    var options = {
        port: 8080
    };
    var server = new WebSocket.Server(options, function () {
        console.log('Server listening on port 8080');
    });
}
exports.bootstrap = bootstrap;
//# sourceMappingURL=server.js.map