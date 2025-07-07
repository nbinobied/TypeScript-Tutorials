// Boolean
var paidAccount = false;
// Number
var age = 33;
var taxRate = 3.3;
// String
var fullName = "Nasser BinObied";
// Array
var ages = [33, 28, 1];
// Tuple
var player;
player = [3, "Nasser", 0.33, 33];
// Enum
var Approval;
(function (Approval) {
    Approval[Approval["Approved"] = 0] = "Approved";
    Approval[Approval["Pending"] = 1] = "Pending";
    Approval[Approval["Rejected"] = 2] = "Rejected";
})(Approval || (Approval = {}));
;
var job = Approval.Approved;
// Any
var data = [123, "jordan", false];
// Void
function printOut(message) {
    console.log(message);
}
//# sourceMappingURL=007_types.js.map