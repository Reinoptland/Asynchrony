const documents = {
    1: {content: "I am a document", authorId: 1},
    2: {content: "I am also a document", authorId: 2},
    3: {content: "You guessed it!", authorId: 2}
}
const authors = {
    1: {name: "Adam"},
    2: {name: "Dave"}
}

function getDocument(documentId, callback) {
    function loadComplete() {
        callback(documents[documentId])
    }
    setTimeout(loadComplete, 2000)
}

function getAuthor(authorId, callback) {
    function loadComplete() {
        callback(authors[authorId])
    }
    
    setTimeout(loadComplete, 100)
}

getDocument(2, (document) => {
    console.log(document)
    getAuthor(document.authorId, (author) => {
        console.log(author.name.toUpperCase())
    })
})

getDocument(2) // undefined.then()
    .then(document => console.log(document))


