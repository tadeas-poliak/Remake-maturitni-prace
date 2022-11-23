let app = require(__dirname+"/app/app.js");

const port = 3333;
const address = "localhost";

app.listen(port,address, () => {
    console.log("Server bezi " + address + ":" + 3333);
});
