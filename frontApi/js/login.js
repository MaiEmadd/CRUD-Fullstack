const baseURL = 'http://localhost:3000'

$("#signin").click(() => {
    const email = $("#email").val();
    const password = $("#password").val();
    const data = {
        email,
        password
    }
    axios({
        method: 'post',
        url: `${baseURL}/signin`,
        data: data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        console.log({ response });
        const { message, result } = response.data
        if (message == "Done") {
            localStorage.setItem('userID', result[0].id);
            window.location.replace("E:/Route 38/Backend/Assignments/Assignment 4/frontApi/index.html");
        } else {
            alert("In-valid email or password")
        }
    }).catch(function (error) {
        console.log(error);
    });
})






