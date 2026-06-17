console.log(console)

// count:-
for(i=0;i<=5;i++){
console.count()
}

// console.clear()

// time:-
console.time()
for(i=0;i<=5;i++){
    console.log(i)
}
console.timeEnd()

// group:-
console.group("FE")
console.log('html')
console.log('css')
console.log('js')
console.groupEnd()

// error:-
console.error("error")

// warning:-
console.warn('warning')

var student = {
  name: "Radhika",
  age: 21
};
console.log(student);
console.dir(student);