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
    // when do we want this promise to resolve X
    // what do we want to resolve this promise with

    return new Promise((resolve) => {
        function loadComplete() {
            // callback(documents[documentId])
            resolve(documents[documentId])
        }
    
        setTimeout(loadComplete, 2000)

    })    
}

function getAuthor(authorId, callback) {
    function loadComplete() {
        callback(authors[authorId])
    }
    
    setTimeout(loadComplete, 100)
}

getDocument(1)
    .then(document => {
        console.log(document)
    })