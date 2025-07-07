// Boolean
let paidAccount : boolean = false;

// Number
let age : number = 33;
var taxRate : number = 3.3;

// String
var fullName : string = "Nasser BinObied";

// Array
var ages : number[] = [33,28,1];

// Tuple
let player : [number, string, number, number];
player = [3, "Nasser", 0.33, 33];

// Enum
enum Approval { Approved, Pending, Rejected };
let job : Approval = Approval.Approved;

// Any
var data : any[] = [123, "jordan", false]

// Void
function printOut (message : string) : void {
    console.log(message);
}