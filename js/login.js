const btnLogin = document.querySelector('.login')
//console.log(btnLogin);

btnLogin.addEventListener('click', login)

async function login() {
    const email = document.querySelector('#email').value
    const psw = document.querySelector('#psw').value
    console.log(email, psw);

    const response = await fetch('https://127.0.0.1:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, psw }),
        credentials: 'include'
    })

    const data = await response.json()
    if (response.ok) {
        window.location.href='../html/home.html'
    } else if (data.errors) {

        let errorMessage=''
        data.errors.forEach(hiba => {
            errorMessage +=  `${hiba.error}\n`
        });
    } else if (data.error) {
        alert(data.error)
    }
    else{
        alert("Ismeretlen hiba")
    }
}


