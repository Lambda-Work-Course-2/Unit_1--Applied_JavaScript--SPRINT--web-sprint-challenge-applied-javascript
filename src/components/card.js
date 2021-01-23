import axios from 'axios';
const Card = (article) => {
//Create Elements
     const mainDiv = document.createElement('div'); // <div class="card">
     const headlineDiv = document.createElement('div'); //   <div class="headline">{ headline }</div>
     const authorDiv = document.createElement('div');//   <div class="author">
     const imgDiv = document.createElement('div');  //     <div class="img-container">
     const cardImg = document.createElement('img');//       <img src={ authorPhoto }>
     const bylineSpan = document.createElement('span');//     <span>By { authorName }</span>
//adding some class
     mainDiv.classList.add('card'); 
     headlineDiv.classList.add('headline');
     authorDiv.classList.add('author');
     imgDiv.classList.add('img-container');
//Add content
     headlineDiv.textContent= article.headline; 
     cardImg.src = article.authorPhoto;       
     console.log('file: card.js ~ line 18 ~ Card ~ cardImg.src', cardImg.src);

     bylineSpan.textContent= article.authorName;
//Append the childs
     mainDiv.appendChild(headlineDiv);
     mainDiv.appendChild(authorDiv);
     authorDiv.appendChild(imgDiv);
     authorDiv.appendChild(bylineSpan);
//Add event Listener
     mainDiv.addEventListener('click', ()=>{
          console.log(article.headline);
     })
     //return the thing!
     return(mainDiv);
}

const cardAppender = (selector) => {
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(returnedData => { //then give the returned data a name so we can do things with it. 
          console.log('file: card.js ~  returnedData', returnedData.data.articles);	//console log to see what is returned   
     const parent= document.querySelector(selector);    
     const dataKeys = Object.keys(returnedData.data.articles); 

          for (let i = 0; i <dataKeys.length; i++) { //loops over object
          const type = dataKeys[i]; 
          returnedData.data.articles[`${type}`].forEach(article => {
          parent.appendChild(Card(article))})
     }})
.catch(error =>{
     console.log('file: card.js ~ error', error);
     })
.finally(()=>{
     console.log("file: card.js ~ Done")
}); 

}
export { Card, cardAppender }
