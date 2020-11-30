const User = require('../models/User');// Schema
const jwt = require('jsonwebtoken');// Creates a token used for authorization for
                                    // secure communication between server and client
const bcrypt = require('bcrypt');// Library to hash passwords

// ???
const { createJWT , } = require("../utils/auth");

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Signup controller
exports.signup = (req, res, next) => {
  const verifyJWT = (user, time) => {
    let access_token = createJWT(
      user.email,
      user._id,
      time
    );
    jwt.verify(access_token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(500).json({ status: 500, errors: err });
      }
      // If success, send token in response with success status 200 and
      // user info
      if (decoded) {
          return res.status(200).json({
            success: true,
            token: access_token,
            message: user
          });
        }
    });
  }

  let { name, email, password, password_confirmation } = req.body;

  let errors = [];
  if (!name) {
    errors.push("name required" );
  }
  if (!email) {
    errors.push("email required");
  }
  if (!emailRegexp.test(email)) {
    errors.push("email invalid");
  }
  if (!password) {
    errors.push("password required");
  }
  if (!password_confirmation) {
    errors.push("password confirmation required"
    );
  }
  if (password != password_confirmation) {
    errors.push("password mismatch");
  }
  if (errors.length > 0) {
    return res.status(422).json({ status: 422, errors: errors });
  }

  User.findOne({email: email})
   .then(user => {
      if(user){
         return res.status(422).json({ status:422, errors: [ "email already exists" ] });
      } else {
        
        // Create new user
        const user = new User({
          name: name,
          email: email,
          password: password,
        });

        // Hash password before storing in db
        bcrypt.genSalt(10, function(err, salt) { bcrypt.hash(password, salt, function(err, hash) {
         if (err) throw err;
         user.password = hash;

         // save data
         user.save()
             .then(response => {
                // res.status(200).json({
                //   success: true,
                //   result: response
                // })
                verifyJWT(user, 3600);
             })
             .catch(err => {
               res.status(500).json({
                  errors: [{ error: err }]
               });
            });
         });
      });
     }
  }).catch(err =>{
      res.status(500).json({
        errors: [{ error: 'Something went wrong' }]
      });
  })
}

// Signin controller
exports.signin = (req, res) => {
      let { email, password } = req.body;

      let errors = [];
      if (!email) {
        errors.push("email required" );
      }
      if (!emailRegexp.test(email)) {
        errors.push("invalid email");
      }
      if (!password) {
        errors.push("password required");
      }
      if (errors.length > 0) {
        return res.status(422).json({ /*body: req.body,*/ status: 422, errors: errors });
      }

      User.findOne({ email: email }).then(user => {
        if (!user) {
          return res.status(404).json({
            status: 404,
            errors: ["user not found"],
          });
        } else {
          bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) {
                return res.status(400).json({ status: 400, errors: ["password incorrect"] });
            }

        // Sign JWT and set JWT token expiration time
        let access_token = createJWT(
          user.email,
          user._id,
          3600// token expiration time
        );

        jwt.verify(access_token, process.env.TOKEN_SECRET, (err, decoded) => {
          if (err) {
            res.status(500).json({ status: 500, errors: err });
          }
          // If success, send token in response with success status 200 and
          // user info
          if (decoded) {
              return res.status(200).json({
                success: true,
                token: access_token,
                message: user
              });
            }
          });
        }).catch(err => {
          res.status(500).json({ errors: err });
        });
      }
    }).catch(err => {
      res.status(500).json({ errors: err });
    });
}