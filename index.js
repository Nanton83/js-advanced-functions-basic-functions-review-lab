// Your code here
function saturdayFun(activity="roller-skate") {
   return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(string="*") {
    return function(param="special") {
        return `You are ${string}${param}${string}!`
    }
}

let Calculator = {
    add: function(a,b) {
        return a + b
    },

    subtract: function(a,b) {
        return a - b
    },

    multiply: function(a,b) {
        return a*b
    },

    divide: function(a,b) {
        return a/b
    }
}

let actionApplyer = function(integer, array) {
    let a = integer
    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
    }
    return a
  }