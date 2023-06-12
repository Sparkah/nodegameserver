

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testdb ', {useNewUrlParser: true});

var Schema = mongoose.Schema;

var ChatLineSchema = new Schema({
    username: String,
    chatLine: String
});

var ChatLine = mongoose.model('ChatLine', ChatLineSchema);

ChatLine.create({
    username: "pie",
    chat: "Hello g"
})
.then(chatLine => {
    console.log(chatLine);
})
.catch(error => {
    console.log("error was " + error);
});
