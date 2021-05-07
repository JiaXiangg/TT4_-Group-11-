import React from 'react';

const AuthService = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
  },
  signout(cb) {
    this.isAuthenticated = false
  }
}

export default AuthService;