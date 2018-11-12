import fetch from '../utils/request'

export function FromDataPost(url, data) {
  var qs = require('qs')
  return fetch({
    url: url,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  })
}

export function MultiFromPost(url, data) {
  return fetch({
    url: url,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: data
  })
}

export function UrlRequestGet(url) {
  return fetch({
    url: url,
    method: 'get'
  })
}

export function JsonPost(url, data) {
  return fetch({
    url: url,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  })
}

export function batchRemoveData(url, ids) {
  return fetch({
    url: url,
    method: 'post',
    data: ids
  })
}

export function fetchData(url, query) {
  var qs = require('qs')
  return fetch({
    url: url,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(query)
  })
}

export function updateData(url, data) {
  var qs = require('qs')
  return fetch({
    url: url,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  })
}

export function removeData(url) {
  return fetch({
    url: url,
    method: 'post'
  })
}

export function createData(url, data) {
  var qs = require('qs')
  return fetch({
    url: url,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  })
}

export function findById(url, query) {
  return fetch({
    url: url,
    method: 'get'
  })
}
