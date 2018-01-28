function test0() {
    alert('hi')
}

// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//             setTimeout(resolve, ms, 'done');
//     });
// }
//
// function test1() {
//     timeout(1000).then((value) => {
//         console.log(value)
//     });
// }

function test2() {
    console.log('test2')
}


// 用Promise对象实现的 Ajax 操作的例子
const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject){
        const handler = function() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        const client = new XMLHttpRequest();
        client.open("POST", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

    });

    return promise;
};

function test3() {
    let url = "http://127.0.0.1:8000/account/login"
    getJSON(url).then(function(json) {
        console.log('Contents: ' + json);
    }, function(error) {
        console.error('出错了', error);
    });
}


function test4() {
    let url = "http://localhost:8000/account/login"

    var bodyData = {
        account: 'myAccount',
        password: 'myPassword',
    }

    var bodyJSONString = JSON.stringify(bodyData);

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: bodyJSONString,
    }).then(function(response) {
        // response.status     //=> number 100–599
        // response.statusText //=> String
        // response.headers    //=> Headers
        // response.url        //=> String

        // response.text().then(function(responseText) { ... })

        console.log('my_res: ' + response)

    }, function(error) {
        // error.message //=> String

        console.log('my_error: ' + error)
    })
}

function test5() {
    var bodyData = {
        account: 'myAccount',
        password: 'myPassword',
    }

    var bodyJSONString = JSON.stringify(bodyData);
    console.log(bodyJSONString);
}

function test6() {
    // let url = "https://www.baidu.com/";
    //
    // fetch(url)
    //     .then(function(response) {
    //         return response.text()
    //     }).then(function(body) {
    //     document.body.innerHTML = body
    // });
}

var test7 = function () {
    alert('test7');
}

function test7() {
    alert('test71');
}