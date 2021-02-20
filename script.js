document.getElementById('button').addEventListener('click', myFunction)

function myFunction () {
  let input = document.getElementById('userinput').value
  input = parseInt(input)
  let answer = 'If you are ' + input + ', then '
  if (input >= 18) {
    answer = answer + 'you are allowed to drive only if you are licensed to do so.'
  } else if (input >= 16) {
    answer = answer + 'you are allowed to drive only if a licensed adult is in the vehicle with you.'
  } else {
    answer = answer + 'you are not allowed to drive by yourself until ' + (18 - input) + ' years have passed.'
  }
  document.getElementById('answer').innerHTML = answer
}
