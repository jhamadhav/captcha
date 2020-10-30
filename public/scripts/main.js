window.onload = () => {
    addClickToBtn();
}

const addClickToBtn = () => {
    let btn = document.getElementById("resetBtn");

    btn.onclick = async () => {
        let url = "/api/captcha";
        let data = {
            msg: "send captcha"
        };
        let responseData = await fetchData(url);

        // change image
        let img = document.getElementById("captchaImg");
        img.src = responseData["imgData"];
    }
}

const fetchData = async (url) => {
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}