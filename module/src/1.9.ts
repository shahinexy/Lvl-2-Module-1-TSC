{
    // type Alias

    // Type Alias in object
type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string
}

const student1 : Student = {
    name: 'Shahin',
    age: 20,
    contactNo: '01609729909',
    gender: 'male',
    address: "adamjee"
}

const student2 : Student = {
    name: 'Khalil',
    age: 21,
    gender: 'male',
    address: "Narayanganj"
}

// type Alias in variable
type UserName = string;
type IsAdmin = boolean;

const userName: UserName = 'Shahin';
const isAdmin: IsAdmin = true;

const userName2 : UserName = "Khalil";
const isAdmin2 : IsAdmin = false;

// type Alias in function
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;


}