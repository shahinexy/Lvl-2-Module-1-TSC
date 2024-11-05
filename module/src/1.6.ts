{
// Learning Function

// Normal Function
function add(num1 : number, num2: number): number{
    return num1 + num2
}

// add(2, 'shahin') error
// add(2, true) error
add(5,10)


// Arrow function
const addArrow = (num1 : number, num2: number): number => num1 - num2



// object --> function --> Method

const newUser ={
    aName : 'shain',
    balance : 20,
    addBlance (balance: number): string{
        return `My New Blance is ${this.balance + balance}`;
    }
}


//map 
const arr : number[] = [1,2,5,7];

const newArr : number[] = arr.map((element: number): number => element*element);


}
