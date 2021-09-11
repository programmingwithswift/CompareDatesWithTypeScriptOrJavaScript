const dateOne = new Date('2021-05-10')
const dateTwo = new Date('2021-05-10')

console.log(dateOne)
console.log(dateTwo)

/*
Direct date comparison
*/
function directDateComparison() {
  console.log('\ngetTimeDateComparison')
  console.log('=====================\n')

  // 1. Abstract equality check
  if (dateOne == dateTwo) {
    console.log('Dates are the same: Abstract equality')
  } else {
    console.log('Date are not the same: Abstract equality')
  }

  // 2. Strict equality check
  if (dateOne === dateTwo) {
    console.log('Dates are the same: Strict equality')
  } else {
    console.log('Date are not the same: Strict equality')
  }

  // 3. Greater than check 
  if (dateOne > dateTwo) {
    console.log('dateOne is greater than dateTwo')
  } else {
    console.log('dateOne is not greater than dateTwo')
  }

  // 4. Less than check 
  if (dateOne < dateTwo) {
    console.log('dateOne is less than dateTwo')
  } else {
    console.log('dateOne is not less than dateTwo')
  }
}

directDateComparison()

// ISO String comparison
function isoStringDateComparison() {
  console.log('\nisoStringDateComparison')
  console.log('=====================\n')
  
  // 1. Abstract equality check toISOString()
  if (dateOne.toISOString() == dateTwo.toISOString()) {
    console.log('dateOne is equal to dateTwo: Abstract equality - toISOString()')
  } else {
    console.log('dateOne is not equal to dateTwo: Abstract equality - toISOString()')
  }

  // 2. Strict equality check toISOString()
  if (dateOne.toISOString() === dateTwo.toISOString()) {
    console.log('dateOne is equal to dateTwo: Strict equality - toISOString()')
  } else {
    console.log('dateOne is not equal to dateTwo: Strict equality - toISOString()')
  }

  // 3. Greater than check toISOString()
  if (dateOne.toISOString() > dateTwo.toISOString()) {
    console.log('dateOne is greater than dateTwo: toISOString()')
  } else {
    console.log('dateOne is not greater than dateTwo: toISOString()')
  }

  // 4. Less than check toISOString()
  if (dateOne.toISOString() < dateTwo.toISOString()) {
    console.log('dateOne is less than dateTwo: toISOString()')
  } else {
    console.log('dateOne is not less than dateTwo: toISOString()')
  }
}

isoStringDateComparison()

// Time date comparison
function getTimeDateComparison() {
  console.log('\ngetTimeDateComparison')
  console.log('=====================\n')
  
  // 1. Abstract equality check getTime()
  if (dateOne.getTime() == dateTwo.getTime()) {
    console.log('dateOne is equal to dateTwo: Abstract eqaulity - getTime()')
  } else {
    console.log('dateOne is not equal to dateTwo: Abstract eqaulity - getTime()')
  }

  // 2. Strict equality check getTime()
  if (dateOne.getTime() === dateTwo.getTime()) {
    console.log('dateOne is equal to dateTwo: Strict eqaulity - getTime()')
  } else {
    console.log('dateOne is not equal to dateTwo: Strict eqaulity - getTime()')
  }

  // 3. Greater than check getTime()
  if (dateOne.getTime() > dateTwo.getTime()) {
    console.log('dateOne is greater than dateTwo: getTime()')
  } else {
    console.log('dateOne is not greater than dateTwo: getTime()')
  }

  // 4. Less than check getTime()
  if (dateOne.getTime() < dateTwo.getTime()) {
    console.log('dateOne is less than dateTwo: getTime()')
  } else {
    console.log('dateOne is not less than dateTwo: getTime()')
  }
}

getTimeDateComparison()