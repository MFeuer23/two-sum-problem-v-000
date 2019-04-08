function bruteForceTwoSum (array, sum) {
  let sums = []
  let x;
  for (x = 0; x < array.length; x++) {
    if (array.includes(sum - array[x])) {
      sums.push([array[x], sum - array[x]])
      array.splice( array.indexOf(sum - array[x]), 1 )
    }
  }
  return sums
}

function binarySearchTwoSum (array, sum) {
  return array.sort()
}