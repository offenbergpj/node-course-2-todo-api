const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$8HL3NEf1i2qi.irXUxAKIuRwMBCZwsmBcdCbb3g2YrLm.5fO4w3AC';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

//var data = {
//    id: 10
//};

//var token = jwt.sign(data, 'yourSecret123');
//console.log(token);

//var decoded = jwt.verify(token, 'yourSecret123');
//console.log('decoded',decoded);

//var message = 'I am user number 3'
//var hash = SHA256(message).toString();

//console.log(`message: ${message}`);
//console.log(`hash: ${hash}`);

//var data = {
//    id: 4
//};

//var token = {
//    data,
//    hash: SHA256(JSON.stringify(data) + 'somesecret').toString();
//}

// man in the middle:
//token.data.id = 5;
//token.hash = SHA256(JSON.stringify(token.data)).toString();
// the secret is only on the server, and therefor not available for the man in the middle

// to validate
//var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

//if (resultHash === token.hash) {
//    console.log('Data was not changed');
//} else {
//    console.log('Data was changed. do not trust!');
//}
