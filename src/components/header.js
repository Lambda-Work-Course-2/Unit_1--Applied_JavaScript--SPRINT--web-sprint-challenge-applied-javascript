const Header = (title, date, temp) => {
//Create Elements
     const headDiv = document.createElement('div'); //  <div class="header">
     const dateSpan = document.createElement('span');//    <span class="date">{ date }</span>
     const h1Title = document.createElement('h1');//    <h1>{ title }</h1>
     const tempSpan = document.createElement('span');//    <span class="temp">{ temp }</span>
//Add some Class
     headDiv.classList.add('header');
     dateSpan.classList.add('date');
     tempSpan.classList.add('temp');
//Add content
     dateSpan.textContent = date;
     h1Title.textContent = title;
     tempSpan.textContent = temp;
//Add to patents
     headDiv.appendChild(dateSpan);
     headDiv.appendChild(h1Title);
     headDiv.appendChild(tempSpan);
//return the thing!
     return(headDiv);
}
const headerAppender = (selector) => {
     parent= document.querySelector(selector);
     parent.appendChild(Header('TITLE', 'Today', 'cold'));
}
export { Header, headerAppender }
