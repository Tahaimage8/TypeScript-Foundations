


// let myString : string = "Hey im Ibtasam"

// let myNumber : number = 433443

// let myBoolean : boolean = true || false

// let mySymbol : symbol = Symbol()

// let myBigInt : bigint = 100n




const addTwo = (a : number,b  : number) : number=>{
    return a+b
}

console.log(addTwo(70,30))






// array 

// const arr : string[] = ["hel", "34545"]
const arr : Array<string> = ["hel", "34545"]

const numArr : number[] =  [1,2,4]





// function optional ,default , rest parameters handel 

const fullName = (fName : string , lName?: String) =>{
    if(!lName){
        return fName
    }

    return fName + " " + lName
}

console.log(fullName("Nazrul"))


const gretings = (greeting : string , fullName: string ="nuha") =>{

    console.log(greeting + " " + fullName)
}

gretings("raha",)


// object type ,type alias and  interface 


const user :{
    name : string,
    age: number,
    isActive: boolean,
    action : ()=> void;
    badges : string[];
}= {};