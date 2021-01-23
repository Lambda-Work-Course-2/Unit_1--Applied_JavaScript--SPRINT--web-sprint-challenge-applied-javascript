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
     //TODO: REMOVE   
     console.log('file: tabs.js ~ line 28 ~ Tabs ~ tabMainDiv', tabMainDiv);   
     //return the thing!
          return(tabMainDiv);  
     };

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
     axios.get('https://lambda-times-api.herokuapp.com/topics') 
          .then(returnedData => { //then give the returned data a name so we can do things with it. 
               console.log('file: index.js ~  returnedData', returnedData);	//console log so to see what is returned   
               parent= document.querySelector(selector);
               parent.appendChild(Tabs(returnedData.data.topics));
          })
          .catch(error =>{
               console.log('file: index.js ~ error', error);
               })

          .finally(()=>{
               console.log("Done")     
          });
   
     
}

export { Tabs, tabsAppender }