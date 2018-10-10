'use strict'

const skiingsEvents = require('./auth/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#form-createSkiing').hide()
  $('#get-allSkiings').hide()
  $('#form-updateSkiing').hide()

  // ADD AUTH
  $('.pass-change').hide()
  $('#form-signUp').on('submit', skiingsEvents.onFormSignUp)
  $('#form-signIn').on('submit', skiingsEvents.onFormSignIn)
  $('#change-password').on('submit', skiingsEvents.onChangePassword)
  $('#sign-out').on('click', skiingsEvents.onSignOut)

  $('#form-createSkiing').on('submit', skiingsEvents.onCreateSkiing)
  $('#get-allSkiings').on('click', skiingsEvents.onShowAllSkiings)
  $('#skiing-content').on('click', '.remove-button', skiingsEvents.onDeleteShownSkiings)

  $('#skiing-content').on('submit', '.form-updateskiing', skiingsEvents.onUpdateShownSkiings)
  $('body').on('click', '.cancel-btns', (event) => {
    $('form input').val('')
  })
})
