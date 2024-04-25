// select div html element with id 'element'
let element = document.getElementById("element");
// set counter to 0
let counter = 0;

// save setInterval to variable
let interval = setInterval(() => {

    counter += 1; //Incrementing => Going Up/Adding

    // Add 'Hello' to the innerHTML property of div
    element.innerHTML += "Hello"
    // set the color css property to red. This will change the text color to red
    element.style.color = "red";

    // Logic for when counter is 5
    if (counter === 5) {
        // set the color property to green
        element.style.color = "green";
        // add a class(es) to the element. These classes from the css file (style.css)
        element.className = "added border";

        //You can change the styling of the document using the body property of the document
        //Changing the background color of the body to blue
        document.body.style.backgroundColor = "blue";
        //clearInterval takes in the setInterval variable as the argument.
        //This will stop the interval
        clearInterval(interval); 
    }
}, 1000); //Trigger the callback function functionality every 1 second.