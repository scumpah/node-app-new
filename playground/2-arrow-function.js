// const square = (x) => x*x;

// console.log(square(3));

// arrow functions dont bind their own 'this' values, they use it based on the context in which they were created in

const event = {
    name: 'My House',
    guestList: ['Raghav', 'Krishna', 'Pal'],
    printGuestList() {
        console.log("Incoming guests for " + this.name);
        this.guestList.forEach(guest => console.log( guest + " is attending the party " + this.name));
    }
}

event.printGuestList();