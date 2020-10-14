var person = {
    firstname: "tom",
    lastname: "hanks",
    sayEcho: function () {
        console.log("sayEcho");
    },
    phones: ["010", "02"]
};
console.log(person.firstname);
console.log(person.lastname);
person.sayEcho();
console.log(person.phones[0], person.phones[1]);
