'use strict'
const store = require('../store')
const config = require('../config')

// THIS IS RESOURCES
const signUp = function (data) {
  // console.log('api URL is', config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    //  headers: {
    //    'Authorization': 'Token token=' + store.user.token
    // },
    data
  })
}
const signIn = function (data) {
  // console.log('api URL is', config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    //  headers: {
    //    'Authorization': 'Token token=' + store.user.token
    //  },
    data
  })
}
const changePassword = function (data) {
  // console.log('store in change password', store)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}
const signOut = function (data) {
  // console.log('api URL is', config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
const createSkiings = function (skiing) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/skiings',
    data: skiing,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// THIS IS SHOW RESOURCE HANDLEBARS

const showSkiings = function (skiing) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/skiings',
    data: skiing,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteSkiings = (skiingsId) => {
  return $.ajax({
    url: config.apiUrl + '/skiings/' + skiingsId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSkiings = (skiingsId, data) => {
  return $.ajax({
    url: config.apiUrl + '/skiings/' + skiingsId,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createSkiings,
  showSkiings,
  deleteSkiings,
  updateSkiings
}
