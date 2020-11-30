// Service layer?
// Make a method to sign a JWT toke including payload, expiry time, and token secret
const jwt = require("jsonwebtoken");
exports.createJWT = (email, userId, duration) => {
	// necessary data sent to create JWT
   	const payload = {
     	email,
     	userId,
     	duration
  	};
  	return jwt.sign(payload, process.env.TOKEN_SECRET, {
    	expiresIn: duration,
  	});
};