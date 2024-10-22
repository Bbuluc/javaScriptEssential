let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("access level:",accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if (userRole === "admin") {
        userMessage = "Welcome admin"
    } else {
        userMessage = "welcome user"
    }
} else {
    userMessage = "please log in"
}

console.log("User message:", userMessage)

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "administrator";
        break;
    case "manager":
        userCategory = "manager";
        break;
    case "subscriber":
        userCategory = "subscriber";
        break;
    default:
        userCategory = "unknown";
}

console.log("user category:", userCategory)