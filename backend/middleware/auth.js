// middleware/auth.js
const kindeAuth = require('kinde-auth-sdk');
const express = require('express');
const { KIND_SECRET, KIND_CLIENT_ID, KIND_DOMAIN } = process.env;

const auth = kindeAuth({
  clientId: KIND_CLIENT_ID,
  clientSecret: KIND_SECRET,
  domain: KIND_DOMAIN,
  redirectUri: 'http://localhost:3000/callback',
});

module.exports = auth;
