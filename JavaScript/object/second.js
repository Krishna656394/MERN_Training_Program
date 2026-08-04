// console.log(this); why the output change in console and terminal
// Because in console there is a global object which is called window which is available but in terminal there is no any global object so it 
// it give {} curlly bracket .


const deployment = {
    code : "Frontend",
    backcode : "backend",
    server : "host",
    // deploy(){
    //     console.log(`accessing the property of form ${this.code} and ${this.backcode}`);
    // }
}

// deployment.deploykey();


// function newFun(){ // this function return undefined because it is outside the scope.
//     console.log(this.code)
// }

// newFun();

function book(author, bookname, title, year ){
    this.title = title;
    this.author = author;
    this.bookname = bookname;
    this.year = year;
}

const shinchandbook = new book("Krishna", "Wings of Fire", "xyz", 2020);

for(let key in shinchandbook){
    console.log(`${key} : ${shinchandbook[key]}`);
}

