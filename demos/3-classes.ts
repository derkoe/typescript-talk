namespace classes {

  class Person {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    getName(): string {
      return this.firstName + ' ' + this.lastName;
    }
  }

  let person = new Person("Chris", "Köberl");
  person.getName(); // Chris Köberl

////////////////////////////////////////////

  class Employee extends Person {
    employeeNo: number;

    constructor(firstName: string, lastName: string, employeeNo: number) {
      super(firstName, lastName);
      this.employeeNo = employeeNo;
    }

    getName() {
      return super.getName() + '(' + this.employeeNo + ')';
    }
  }

  let employee = new Employee('first', 'last', 123);
  // ERROR: employee.employeeNo = 1;

////////////////////////////////////////////

  class PersonShort {
    constructor(private firstName: string, private lastName: string) {
    }

    getName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

}