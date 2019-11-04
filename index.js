function BoardMember(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
}

    
BoardMember.prototype.veto = function() {
    return "No, I must disagree"
}

BoardMember.prototype.approve = () => {
    return "You can do that!"
}

BoardMember.prototype.doCharity = () => {
    return "I like to help people."
}

BoardMember.prototype.releasePressStatement = () => {
    return "You will see great things from Scuber."
}

// // Odd the arrow notation of sayHi does not pass but the traditional syntax does...
// BoardMember.prototype.sayHi = () => {
//     return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
// }

BoardMember.prototype.sayHi = function () {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}