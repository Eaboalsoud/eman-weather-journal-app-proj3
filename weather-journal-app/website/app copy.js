/* Global Variables */
let baseURL =  `http://api.openweathermap.org/data/2.5/weather?zip=`
let apiKey = ",us&appid=f4c51fac335032b01346acc3abf36e19";

let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
    const newZip=  document.getElementById('zip').value;
    const feelings=document.getElementById('feelings').value;
    getWeather(baseURL,newZip,apiKey)
    .then(function(data){
      console.log(data);
      postData("/postData",
      {temp:data.temp,date:newDate,feelings:feelings});

    
   

    /*const response=await fetch(baseURL+newZip+apiKey);
    try {
      const data = await response.json();
      data.feelings=feelings;
      data.date=  newDate;
      data.temp=temp;
      await postData('/',data);*/
      updateUI()
      /*console.log(data)
        return data;
      }  catch(error) {
        console.log("error", error);
      }
    }
  
  };*/
})
  }


  
   
    
// Async POST
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

}; 

// Async GET
const getData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const Data = await request.json()
  return data;
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

const getWeather = async (baseURL,newZip,apiKey)=>{
  const res = await fetch(baseURL+newZip+apiKey)
  try {
  const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
  }
}

const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      document.getElementById('date').innerHTML = allData[0].newDate;
      document.getElementById('temp').innerHTML = allData[0].temp;
      document.getElementById('content').innerHTML = allData[0].feelings;
  
    }catch(error){
      console.log("error", error);
    }
};





