'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// THIS IS AUTH EVENTS For Skiings
const onGetSkiings = (event) => {
  event.preventDefault()
  api.getSkiings()
    .then(ui.getSkiingsSuccess)
    .catch(ui.failure)
}
// $('.content').data('id') // return skiing id
const onClearSkiings = (event) => {
  event.preventDefault()
  ui.clearSkiings()
}
const onRemoveSkiings = (event) => {
  event.preventDefault()
  const data = $(event.target).data('id')
  // console.log('click', data)
  api.deleteSkiings(data)
    .then(ui.removeSkiingsSuccess)
    .catch(ui.removeSkiingsFailure)
}
const onUpdateSkiings = (event) => {
  event.preventDefault()
  const data = $(event.target).data('id')
  // console.log('click', data)
  api.updateSkiings(data)
    .then(ui.updateSkiingsSuccess)
    .catch(ui.updateSkiingsFailure)
}

const onFormSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onFormSignIn = function (event) {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onChangePassword = function (skiingEvents) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}
// THIS IS RESOURCE EVENTS

const onCreateSkiing = function (event) {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  api.createSkiings(data)
    .then(ui.createSkiingSuccess)
    .catch(ui.createSkiingFail)
  // console.log(data)
}

// THIS IS HANDLEBARS FOR LISTING RESOURCE

const onShowAllSkiings = function (event) {
  // console.log('onShowAllGoal s')
  event.preventDefault()
  api.showSkiings()
    .then(ui.showSkiingsSuccess)
    .catch(ui.showSkiingsFail)
}

// THIS IS FOR DELETING A FOOD ON RESOURCE

const onDeleteShownSkiings = (event) => {
  event.preventDefault()
  // console.log('onDeleteShownGoals')
  const skiingId = $(event.target).closest('button').attr('data-id')
  // console.log(skiingId)
  api.deleteSkiings(skiingId)
    .then(() => { onShowAllSkiings(event) })
    .catch(ui.showSkiingsFail)
}

// FOR UPDATING A FOOD ON RESOURCE

const onUpdateShownSkiings = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const skiingId = $(event.target).attr('data-id')
  // console.log(skiingId)
  api.updateSkiings(skiingId, data)
    .then(() => onShowAllSkiings(event))
    .catch(ui.updateSkiingsFail)
}

const addHandlers = () => {
  $('#getSkiingsButton').on('click', onGetSkiings)
  $('#clearSkiingsButton').on('click', onClearSkiings)
  $('#content').on('click', '.remove-button', onRemoveSkiings)
}

module.exports = {
  onFormSignUp,
  onFormSignIn,
  onChangePassword,
  onSignOut,
  onCreateSkiing,
  onShowAllSkiings,
  onDeleteShownSkiings,
  onUpdateShownSkiings,
  addHandlers,
  onRemoveSkiings,
  onUpdateSkiings
}
