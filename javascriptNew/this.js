const Student = {
    name : "Krishna",
    age : 21,
    eng : 95,
    math : 90,
    phy : 80,
    getAvg() {
        console.log(this); // reffer to the current object.
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

Student.getAvg();
console.log(this); // by default reffer to the window object.
