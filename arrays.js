var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, element){
  var newArray = [1]
  newArray = ["foo", ...newArray]
  return newArray
  }



function destructivelyAddElementToBeginningOfArray(array, element){
  var array = [1]
  array.unshift("foo")
  console.log(array)
}

function destructivelyAddElementToEndOfArray(array, element){
  var array = [1, "foo"]
  array.push()
  return array
}

function addElementToEndOfArray(array, element){
  var newArray = [1]
  newArray = [...newArray, "foo"]
  return newArray
  }

  function accessElementInArray (array, index){
      var array = [3]
        console.log(array[0])
  }

  function destructivelyRemoveElementFromBeginningOfArray(array){
    var array = [1, 2, 3]
    array.shift()
    return array
  }

  function removeElementFromBeginningOfArray(array){
    var array = [2, 3]
    array.slice(-1)
    return array
  }

function destructivelyRemoveElementFromEndOfArray(array){
  var array = [1, 2, 3]
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
    var array = [1, 2]
    array.slice(0, array.length - 1)
    return array
  }
