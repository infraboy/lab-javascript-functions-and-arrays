// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
  return num1 >= num2? num1: num2;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(arr) {
  max = ""
  if(arr.length === 0) {
    return null
  }
  arr.forEach(element => {
    if (element.length > max.length) {
      max = element
    }
  });
  return max
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(arr) {
  sum = 0
  arr.forEach((element) => {
    sum += element
  })
  return sum
}

//bonus 3.1
function add(arr) {
  sum = 0
  arr.forEach((element) => {
    if(typeof(element) == "string") {
      sum += element.length
    } else if(typeof(element) == "number" || typeof(element) == "boolean") {
      sum += element
    } else {
      throw new Error("Unsupported data type sir or ma'am")
    }
  })
  return sum
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(arr) {
  if(arr.length == 0){
    return null
  }
  average = 0
  arr.forEach((element) => {
    average += element
  })
  return average/arr.length
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arr) {
  if (arr.length == 0) {
    return null
  }
  average = 0
  arr.forEach((element) => {
    average += element.length
  })
  return average/arr.length
}

//bonus 4.3
function avg(arr) {
  if(arr.length == 0) {
    return null
  }
  average = 0
  arr.forEach((element) => {
    if(typeof(element) == "string") {
      average += element.length
    } else if(typeof(element) == "number" || typeof(element) == "boolean") {
      average += element
    } else {
      throw new Error("Unsupported data type sir or ma'am")
    }
  })
  return parseInt((average/arr.length)*100)/100
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(arr) {
  if(arr.length == 0) {
    return null
  }
  u = []
  arr.forEach((element) => {
    if(!u.includes(element)) {
      u.push(element)
    }
  })
  return u
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr, key) {
  if(arr.length == 0) {
    return null
  }
  for(const i in arr) {
    if(key == arr[i]) {
      return true
    }
  }
  return false
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(arr, key) {
  if(arr.length == 0) {
    return 0
  }
  count = 0
  arr.forEach((element) => {
    if(key == element) {
      count++
    }
  })
  return count
}

// Progression #8: Bonus
function maximumProduct(matrix) {
  let p = 1
  for(let i = 0; i < matrix.length - 3; i++) {
    p = 1
    for(let j = 0; j < matrix[i].length - 3; j++) {
      h = matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]*matrix[i][j+3]
      v = matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j]
      if(p < h){
        p = h
      }
      if(p < v) {
        p = v
      }
    }
  }
  return p
}

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
