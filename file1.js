const aa = () => {
    return { user: "name" };
};
console.log(aa());
const bb = () => [1, 2, 3, 4, 5, 6];
console.log(bb());
const user = {
    name: "aj",
    age: 23,
    welcome: function () {
        console.log(`hello ${this.name}`);
        console.log(this);
    }
};

user.welcome();

user.name = "ajay";
user.welcome();
// Temporary comment to force Git to detect change
