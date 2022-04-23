function calcularTemp() {
    const data = document.forms[0];
    const temperatura = data["temperatura"].value;
    const unidade = data["unidade"].value;

    fetch(`./index.php?temperatura=${temperatura}&unidade=${unidade}`, {
        method: 'get',
        mode:"no-cors",
        headers: {  
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        },
    })
        .then(response => response.json())
        .then(jsonData => preencherTemp(jsonData))
        .catch(err => {
            console.error(err);
        });
}

function preencherTemp(jsonData) {
    let tempValue = document.createElement("h1");
    tempValue.innerHTML = jsonData.temperatura;
    document.body.appendChild(tempValue);
}