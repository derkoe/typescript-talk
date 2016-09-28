class MyClass {
  @measure()
  doSomething(name: string, times = 0) {
    let counter = 0;
    for (let i = 1; i < times; i++) {
      counter += i;
    }
    console.log(`Hello ${name} (${counter})`);
  }
}

function measure() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalFunction = descriptor.value;
    descriptor.value = function (...args: any[]) {
      let start = Date.now();
      originalFunction.apply(target, args);
      console.log(`${propertyKey} with params "${args}" took ${Date.now() - start}ms`);
    }
  }
}

var myClass = new MyClass();
myClass.doSomething('Warmup');
myClass.doSomething('Warmup');
myClass.doSomething('Christian', 9000000);
myClass.doSomething('Christian');
