# Donation Campaign

<h3> React is a powerful library for building dynamic and interactive web applications. Here are three project features that showcase some of React's capabilities.</h3>

 - `LocalStorage Data Retrieval:`
   
 The code uses the localStorage API to retrieve donation data stored in the user's browser. It specifically looks for data stored under the "donation" key.

- `State Management:`
  
 It utilizes the useState hook to manage the countLength state variable. This variable represents the number of donations, and it's used to determine the size of the "Your Donation" slice in the pie chart.

- `Rendering a Pie Chart:`
  
The code uses the VictoryPie component from the Victory library to render a pie chart. This chart has two slices: "Your Donation" and "Total Donation." "Your Donation" is dynamically sized based on the countLength variable, while "Total Donation" is fixed at a value of 12.

- `Effect on Component Mount:`
  
The useEffect hook is employed to run a side effect when the component mounts. In this case, it retrieves data from local storage and updates the countLength state variable accordingly.

- `Data Handling:`
  
While the code retrieves and displays donation data, it doesn't include any user interaction for adding or updating donations. You might consider adding features to allow users to make donations and update the chart dynamically.

- `Error Handling:`

  The code currently assumes that data retrieved from local storage is valid JSON. You might want to include error handling to gracefully handle cases where the data is invalid or missing.


  
# <h1>Resources</h1>

CSS Framework -> [Tailwind](https://tailwindcss.com/) , [Daisyui](https://daisyui.com/)

Sweet Alert -> [Link](https://www.npmjs.com/package/sweetalert)

React Router -> [ReactRouter](https://reactrouter.com/en/main/start/tutorial)

Pie Chart  -> [Victory-Pie](https://www.npmjs.com/package/victory-pie)
