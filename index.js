const app = require('./app');


let portName = 3000;
app.listen(portName, () => {
    console.log('Listening at port ' + portName);
});



