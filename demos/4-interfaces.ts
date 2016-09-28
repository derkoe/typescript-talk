namespace interfaces {

  interface Person {
    firstName: string;
    lastName: string;
    dateOfBirth?: Date;
  }

  class Employee implements Person {
    constructor(public firstName: string, public lastName: string) {
    }
  }

////////////////////////////////////////////

  let person: Person = {
    firstName: 'Chris',
    lastName: 'Kö'
  };
  person.dateOfBirth = new Date();

////////////////////////////////////////////

  function savePerson(p: Person) {
    // ...
  }

  savePerson(person);

  class Student {
    constructor(public firstName: string, public lastName: string) {
    }
  }

  savePerson(new Student("The", "Student"));

}