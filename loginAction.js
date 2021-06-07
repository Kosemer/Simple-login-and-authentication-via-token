const loginAction = async() => {

    var body = {
        'user': document.getElementById('adminUser').value,
        'password': document.getElementById('adminPassword').value
    }

    const response = await fetch('http://localhost/login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Accept": "*"
        }
    });


    if (response.status == 200) {

        const token = await response.json();

        const getDataAction = async() => {
            const response = await fetch('http://localhost/data', {
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json",
                    'x-api-key': token
                }
            });

            if (response.status == 200) {
                //Data.html redirecting
                document.getElementById("cont").style.display = "none";
                document.getElementById("table").style.display = "table";
                const dataRows = await response.json()
                JSON.parse(dataRows).forEach(sor => {

                    var table = document.getElementById("table");
                    var row = table.insertRow();
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell1.innerHTML = sor["id"];
                    cell2.innerHTML = sor["text"];

                    
                });

            } else {
                alert("Unauthorized!!!")
            }
        }


        await getDataAction();
    } else {
        document.getElementById("pass_error").style.display = "block";
    }
}
