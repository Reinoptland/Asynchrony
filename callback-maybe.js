// users.map((user) => { console.log(user)})

function callBackMaybe(callback, greeting){
    callback(greeting)
}

callBackMaybe((input) => { console.log(input) }, 'Hey I just met you')
callBackMaybe((input) => { console.log(input.toUpperCase()) }, 'Hey I just met you')

