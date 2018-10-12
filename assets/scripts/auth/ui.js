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
  $('#form-createSkiing').hide()
  $('#get-allSkiings').hide()
  $('.pass-change').hide()
  $('#skiing-content').hide()
  $('.form-group').show()
  document.getElementById('form-createSkiing').reset()
  document.getElementById('change-password').reset()
}

const signOutFail = function (data) {
  $('#user-message-signOut').html('try again')
}
// RESOURCE CREATE ACTIVITY

const createSkiingSuccess = function (data) {
  $('#create-skiing-message').html('You have Successfully created your Activity').fadeIn().delay(3000).fadeOut()
  $('#form-createSkiing').show()
  document.getElementById('form-createSkiing').reset()
}
const createSkiingFail = function (data) {
  $('#create-skiing-message').html('Your Activity was not successful created')
}

// SHOW LISTING IF SUCCESS

const showSkiingsSuccess = (data) => {
  // console.log('data is', data)
  if (data.skiings.length !== 0) {
    const showSkiingsHtml = showSkiingsTemplate({ skiings: data.skiings })
    $('.content').html(showSkiingsHtml).fadeIn()
  } else {
    $('.content').html('You dont have any activity yet').fadeIn().delay(1500).fadeOut()
    $('#get-allSkiings').show()
  }
  // console.log(data.skiings.length)
}
const clearSkiings = () => {
  $('.content').empty()
}

const showSkiingsFail = () => {
  $('#user-message-Unsuccess-create-skiing').html('Your Activity was not successful shown')
  // console.log(error(error))
}

module.exports = {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePasswordSuccess,
  changePasswordFail,
  signOutSuccess,
  signOutFail,
  createSkiingSuccess,
  createSkiingFail,
  showSkiingsSuccess,
  showSkiingsFail,
  clearSkiings
}
