
const name = 'Raghav';
const age = 23;
const gender = 'Male';

// short hand syntax if the key and value names are same no need to define as key/values
const user = {
    name,
    age,
    gender
};

console.log(user);

//Object destructuring

const address = {
    floor: 19,
    apartment: 'base park east',
    lane: 'Sukhumbvit 77'
};

// 10110 is default value since pincode is not present in address obj, however if its defined it wont be overridden

// for apartment this is another way of renaming property name to condominium to access in code

const {floor, apartment:Condominium, pincode = 10110} = address;

console.log(floor);
console.log(Condominium);
console.log(pincode);

// sample example of practical use

const userInfo = (tenantType, {apartment, lane}) =>{
    console.log(tenantType+ ' ' + apartment + ' ' + lane);
}

userInfo('rent',address)