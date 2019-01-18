const randomNumberInAPromise = Promise.resolve(Math.random())
randomNumberInAPromise.then(number => console.log(number))

function partyHard(name, timeout){
    const guestList = ['Beyonce', 'Snoopy']
    return new Promise((resolve, reject) => {
        if(guestList.includes(name)){
            return setTimeout(() => resolve(name), timeout)    
        }
        
        reject(name)
    })
}


partyHard("Rein", 200)
    .then(value => console.log("Hey!", value))
    .catch(value => console.log(value, "GET OUT!"))

partyHard("Mimi", 400)
    .then(value => console.log("Hey!", value), value => console.log(value, "GET OUT!"))
    
partyHard("Snoopy", 10000).then(value => console.log("Hey!", value))
partyHard("Beyonce", 2000).then(value => console.log("Hey!", value))
