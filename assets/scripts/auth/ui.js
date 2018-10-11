'use strict'
const store = require('../store')
const showSkiingsTemplate = require('../templates/helpers/skiings-listing.handlebars')

// const event = require('.events.js')
// Response Message for User when SIGN UP
const signUpSuccess = function (data) {
  $('#user-message-signUp').html('You are Sign Up!').fadeIn().delay(3000).fadeOut()
  $('#form-signUp input').val('')
  // console.log(data)
}

const signUpFail = function (data) {
  // console.log(data)
  $('#user-message-signUp').html('not successful signup, try again!')
  $('#form-signUp input').val('')
}

// Response Message for User when SIGN IN

const signInSuccess = function (response) {
  store.user = response.user
  // console.log(response.user)
  document.getElementById('form-signIn').reset()
  $('#user-message-signIn').html('You are sign In!')

  // $('#myModal').modal('hide')
  $('#change-password').show()
  $('#sign-out').show()
  $('#form-createSkiing').show()
  $('#get-allSkiings').show()
  $('.signup-portal').hide()
  $('#sign-in-button').hide()
  $('.pass-change').show()
  $('#skiing-content').show()
  $('#user-message-signOut').html('')
  $('.form-group').hide()
  $('.content').html('')
}

const signInFail = function () {
  // console.log(error)
  document.getElementById('form-signIn').reset()
  $('#user-message-signIn').html('not successful signin, try again!')
}

// Response Message for User when CHANGE PASSWORD

const changePasswordSuccess = function (data) {
  // console.log(data)
  document.getElementById('change-password').reset()
  $('#user-message-passwordChange').html('You have changed your password')
}

const changePasswordFail = function (data) {
  // console.log(data)
  document.getElementById('change-password').reset()
  $('#user-message-passwordChange').html('password not changed, try again')
}
const signOutSuccess = function (data) {
  $('#user-message-signOut').html('You are sign Out!').fadeIn().delay(3000).fadeOut()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#user-message-signIn').html('')
  $('#sign-in-button').show()
  $('.signup-portal').show()
  // $('#form-createFood').hide()
  // $('#get-allFoods').hide()
  $('.pass-change').hide()
  // $('#food-content').hide()
  $('.form-group').show()
  document.getElementById('form-createSkiing').reset()
  document.getElementById('change-password').reset()
}

const signOutFail = function (data) {
  $('#user-message-signOut').html('try again')
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail
}
