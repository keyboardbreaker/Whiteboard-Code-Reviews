function getAge() {
    return this.age;
}

let user = { age: 19 };
console.log(getAge.call(user));