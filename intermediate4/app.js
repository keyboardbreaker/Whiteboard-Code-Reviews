let user1 = {
    age: 25,
    getAge: function(discount1, discount2) {
        return this.age - (discount1 + discount2);
    }
}; //these semicolons are missing

let user2 = {
age: 32,
getAge: 
    function(discount1, discount2) {
        return (this.age - 2 - 
            (discount1 + discount2));
    }
}; //these semicolons are missing

console.log(user1.getAge.call(user2, 1, 2));   
//result: 29
//undefined when console.log