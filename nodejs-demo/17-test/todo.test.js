#!/usr/bin/node

var assert = require('assert');
var Todo = require('./todo');

var todo = new Todo();
var testCompleted = 0;

deleteTest();
addTest();
throwTest();
doAsyncTest(function(){
  console.log('Completed %d tests', testCompleted)
})

function deleteTest(){
  console.log('test delete function');
  todo.add('Delete Me');
  assert.equal(todo.getCount(), 1, '1 item should exist');
  todo.deleteAll();
  assert.equal(todo.getCount(), 0, 'No item shoule exist');
  testCompleted++;
}

function addTest(){
  console.log('test add function');
  todo.deleteAll();
  todo.add('Added');
  assert.notEqual(todo.getCount(), 0, '1 item should exist');
  assert.equal(todo.getCount(), 1, '1 item should exist');
  testCompleted++;
}

function throwTest(){
  console.log('test add function');
  assert.throws(todo.add, /require/);
  testComleted++;
}

function doAsyncTest(cb){
  console.log('test doAsync function');
  todo.doAsyncTest(function(value){
    assert(value, 'callback should be passed true');
    cb();
  });
}



