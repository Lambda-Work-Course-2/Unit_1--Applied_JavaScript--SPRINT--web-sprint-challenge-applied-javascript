import axios from 'axios';
const Tabs = (topics) => {
     //create elements to append too
          const tabMainDiv = document.createElement('div');
          tabMainDiv.classList.add('topics');
     //Loop to create the tab divs
          topics.forEach(tabItem => {
          const tab = document.createElement('div'); //make the tab div
          tab.classList.add('tab');
          tab.textContent = tabItem; // give the link a name
          tabMainDiv.appendChild(tab);  //add the item to the list
     })
     //return the thing!
          return(tabMainDiv);  
     };
const tabsAppender = (selector) => {
     axios.get('https://lambda-times-api.herokuapp.com/topics')
          .then(returnedData => { //then give the returned data a name so we can do things with it. 
               parent= document.querySelector(selector);
               parent.appendChild(Tabs(returnedData.data.topics));
          })
          .catch(error =>{
               console.log('file: tab.js ~ error', error);
               })
          .finally(()=>{
               console.log("file: tab.js ~ Done")
          })     
};
export { Tabs, tabsAppender }
