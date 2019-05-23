// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {

    constructor(domElement) {
        // debugger
        // assign this.domElement to the passed in domElement
        this.domElement = domElement;

        // create a reference to the ".expandButton" class. 
        this.expandButton = this.domElement.querySelector('.expandButton');

        // Using your expandButton reference, update the text on your expandButton to say "expand"
        this.expandButton.textContent = 'Show';

        // Set a click handler on the expandButton reference, calling the expandArticle method.
        this.expandButton.addEventListener('click', this.expandArticle.bind(this));
    }
    expandArticle() {
        // debugger
        // console.log(this.domElement);
        this.domElement.classList.toggle('article-open');
        // TweenMax.to('.article', 1, { y: 100, repeat: 1, yoyo: true });
        this.domElement.style.backgroundColor = 'lightgrey'
        this.expandButton.textContent = 'Hide'
        this.expandButton.style.fontWeight = 'bold'
        this.expandButton.addEventListener('click', this.contractArticle.bind(this));
    }
    contractArticle() {
        this.domElement.style.backgroundColor = 'white'
        this.expandButton.textContent = 'Show'
        this.expandButton.style.fontWeight = 'bold'
    }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles.forEach((article) => {
    new Article(article);
})