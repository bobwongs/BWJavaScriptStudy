// function test10() {
//     alert('test10');
// }

var test = function () {
    // alert('new test10');

    this.prototype.publicMethod = function () {
        console.log('public method');
    }
}

function test10() {
    test().publicMethod();
}
