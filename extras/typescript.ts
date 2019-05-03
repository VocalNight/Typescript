// interface People {
//     name: string;
// }

// class Employee implements People {

//     name: string;
//     manager: Manager;
//     title: string

//     presentSelf():void {
//         console.log(
//             "I am", this.name, ". My job is title and my boss is", this.manager.name
//         )
//     }
// }

// class Manager extends Employee {
//     team:Employee[];

//     presentSelf(): void {
//         super.presentSelf();

//         console.log("I also manage", this.team.toString());
//     }
// }



// var a:Manager = new Manager();
// var b:Manager = new Manager();
// b.name = "ye";
// a.name = "ya";
// a.manager = b;
// a.title = "yu";

// a.presentSelf();


// var foo = 123;
// if (true) {
//     var foo = 456;
// }
// console.log(foo); // 456

// let foo = 123;

// if (true) {
//     let foo = 456;
// }
// console.log(foo); // 123


// Não fazer

// class User {
//     private name: string;
//     public getSetName(name?:string):any {
//         if(name !== undefined) {
//             this.name = name;
//         } else {
//             return this.name;
//         }
//     }
// }


// class User {
//     private name:_string = "ya";
//     get name():String {
//         return this._name;
//     }
//     set name(name:String) {
//         this._name = name;
//     }
// }

// class People{
//     gender: "male" | "female";
// }

