const Student = {
    name : "Krishna",
    age : 21,
    eng : 95,
    prop : this, // Global Scope
    getName : function(){
        console.log(this); // Local Scope
        return this.name;
    },

    getMarks : ()=>{
        console.log(this); // Parent Scope means Window Object in this case
        return this.eng;
    },
    getInfo1 : function(){
        setTimeout(()=>{
           console.log(this);//Student Object
        }, 2000);
    }, 

    getInfo2 : function(){
        setTimeout(function(){
            console.log(this); // Window 
        }, 2000);
    },


}
Student.getInfo1();
Student.getInfo2();
