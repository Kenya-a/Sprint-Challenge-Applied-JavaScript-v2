// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles/`)
    .then(data => {
        const jsArticles = data.data.articles.javascript
        const bootStrap = data.data.articles.bootstrap
        const techArticle = data.data.articles.technology
        const jqueryArt = data.data.articles.jquery
        const nodeArt = data.data.articles.nodeArt

        const articles = [jsArticles, bootStrap, techArticle, jqueryArt, nodeArt]

        articles.forEach( article => {
            article.forEach(artic => {
                const cardContainer = document.querySelector('.cards-container')
                cardContainer.appendChild(createCards(artic))
            })
        })
        console.log('Working:', data)
    })
    .catch(error => {
        console.log('Error:', error)
    })

function createCards(par){
    //create elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const image = document.createElement('div')
    const img = document.createElement('href')
    const authorsName = document.createElement('span')
    ////const authorsDiv = document.createElement('div')

    //set class
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    image.classList.add('image-container')
    

    //set content

    headline.textContent = par.headline
    img.src = par.authorPhoto
    authorsName.textContent = par.authorName

    // organize
    image.appendChild(img)
    author.appendChild(image)
    author.appendChild(authorsName)
    card.appendChild(headline)
    card.appendChild(author)

    return card

}

