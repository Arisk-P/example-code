let username = 'admin'
let password = '1234'

let inputUsername = prompt('Username:')
let inputPassword = prompt('Password:')

// let allow // global scope

if (username == inputUsername && password == inputPassword) {
    // hoist
    var allow = true // local scope
    alert('Ok')
} else {
    var allow = false
    alert('Not ok')
}

// 
// 
// 

alert(allow)
