// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const lambdaTab = document.querySelector('.tabs')
lambdaTab.appendChild(tabs())

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(data => {
         const topic =  data.data.topics
         console.log('this is data:', topic)
        })

    .catch(error => {
         console.log('ERROR, help is on the way:', error)
         })


 function tabs() {
       //create elements
    const tabs = document.createElement('div')

      //set class
    tabs.classList.add('tabs')

    //set content
    tabs.textContent = 'Topic here'
            
    return tabs
   }
