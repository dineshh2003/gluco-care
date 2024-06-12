require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const loginRouter=require('./routes/login')

const app = express();

app.use(cors());
app.use(express.json());


const port = process.env.PORT || 5000;
// const mongoUrl = process.env.MONGO_URL_FORM;


if (!mongoUrl) {
  throw new Error('MONGO_URL_FORM environment variable is not set');
}

mongoose.connect(mongoUrl)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error: ', err);
  });



app.use('/', loginRouter);

// Start the server
app.listen(port, () => {
  console.log(`The app is running at port ${port}`);
});




































// // server.js
// const express = require('express');
// const session = require('express-session');
// const auth = require('./middleware/auth');
// const app = express();

// const loggedInUsers = new Map(); // In-memory store for logged-in users

// app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

// app.use(auth);

// app.get('/login', auth.login);

// app.get('/callback', auth.callback, (req, res) => {
//   if (req.user) {
//     loggedInUsers.set(req.user.id, req.user);
//     res.redirect('/users');
//   } else {
//     res.redirect('/');
//   }
// });

// app.get('/logout', (req, res) => {
//   if (req.user) {
//     loggedInUsers.delete(req.user.id);
//     req.logout();
//   }
//   res.redirect('/');
// });

// const adminMiddleware = (req, res, next) => {
//   if (req.user && req.user.role === 'admin') {
//     next();
//   } else {
//     res.status(403).send('Forbidden');
//   }
// };

// app.get('/users', adminMiddleware, (req, res) => {
//   res.json([...loggedInUsers.values()]);
// });

// app.listen(3000, () => {
//   console.log('Server started on http://localhost:3000');
// });
