/* visitor finds a list of available freelancers
Each freelancer has a name, an occupation, and a starting price. 
On the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.
The visitor also finds a message that displays the average starting price of all the freelancers. In this example, the average starting price is $40.
A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50.
New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.
*/

const freelancers = [
    {name : "Alice", occupation: "Writer", price: 30},
    {name : "Bob", occupation: "Teacher", price: 50},
    {name : "Carol", occupation: "Programmer", price: 70},
];

const newFreelancers = [
    {name : "Sam", occupation: "Photographer", price: 90},
    {name : "Jesse", occupation: "Video Editor", price: 50},
    {name : "Jackie", occupation: "Artist", price: 45},
    {name: "Dr. Slice", occupation: "gardener", price: 25},
    {name: "Dr. Pressure", occupation: "programmer", price: 51},
    {name: "Prof. Possibility", occupation: "teacher", price: 43},
    {name: "Prof. Prism", occupation: "teacher", price: 81},
    {name: "Dr. Impulse", occupation: "teacher", price: 43},
    {name: "Prof. Spark", occupation: "programmer", price: 76},
    {name: "Dr. Wire", occupation: "teacher", price: 47},
    {name: "Prof. Goose", occupation: "driver", price: 72},
];

function calculateAvg(){
    const total = freelancers.reduce((sum, freelancer) => sum += freelancer.price, 0);
    return (total / freelancers.length).toFixed(2);
}

function displayList(){
    const listElement = document.querySelector("#freelancer-list");
    const averageElement = document.querySelector("#average-price");

    listElement.innerHTML = "";
    freelancers.forEach(freelancer => {
        const item = document.createElement("li");
        item.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
        listElement.appendChild(item);
    });

    averageElement.textContent = `The average statring price is $${calculateAvg()}`; 

}

displayList();

function addFreelancer(){
    const randomFreelancer = newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
    freelancers.push(randomFreelancer);
    displayList();
}

displayList();
setInterval(addFreelancer, 2000);