const documents = {
    1: {content: "I am a document", authorId: 1},
    2: {content: "I am also a document", authorId: 2},
    3: {content: "You guessed it!", authorId: 2}
}
const authors = {
    1: {name: "Adam"},
    2: {name: "Dave"}
}

function getDocument(documentId) {
    return new Promise((resolve, reject) => {
        function loadComplete() {
            if(documents[documentId] === undefined){
                return reject('404 document not found')
            }
            resolve(documents[documentId])
        }
    
        setTimeout(loadComplete, 2000)

    })    
}

function getAuthor(authorId) {
    return new Promise((resolve, reject) => {
        function loadComplete() {
            resolve(authors[authorId])
        }
        
        setTimeout(loadComplete, 100)
    })
}

getDocument(99)
    .then(document => {
        return getAuthor(document.authorId)   
    })
    .then(author => console.log(author))
    .catch(error => console.log(error))