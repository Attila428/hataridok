window.addEventListener("DOMContentLoaded",FetchData());

async function FetchData(){
    const response = await fetch('forras/data.json')
    const json = await response.json();
    console.log(json);
    DisplayData(json)
    setInterval(() => {
        DisplayData(json)
    }, 1000);
    
}

function DisplayData(json){
    const tarolo = document.getElementById('tarolo')
    tarolo.innerHTML=""
    json.forEach(element => {
        const now = new Date();
        const date = new Date(element.date);
        const diff = date-now;
        const diffdate = new Date(diff)
        const nap =Math.floor(diff/(1000*60*60*24));
        const ora=diffdate.getUTCHours();
        const perc=diffdate.getUTCMinutes();
        const mp=diffdate.getUTCSeconds();
        tarolo.innerHTML+=kartya(element.title,nap,ora,perc,mp)
    });
}

function kartya(cim,nap,ora,perc,mp){
    if (nap <=30) {
        return `
    <div class="col">
            <div class="h-100 rounded shadow p-4 blur piros">
                <div class="text-center fw-bold">${cim}</div>
                <div class="row cols-4">
                    <div class="col">
                        <div class="fs-1 fw-bold">${nap}</div>
                        <div class="fs-5">nap</div>
                    </div>
                    <div class="col">
                        <div class="fs-1 fw-bold">${ora}</div>
                        <div class="fs-5">óra</div>
                    </div>
                    <div class="col">
                        <div class="fs-1 fw-bold">${perc}</div>
                        <div class="fs-5">perc</div>
                    </div>
                    <div class="col">
                        <div class="fs-1 fw-bold">${mp}</div>
                        <div class="fs-5">mp</div>
                    </div>
                </div>
            </div>
        </div>
    `
    }
    else if (nap > 30 && nap < 60) {
        return `
    <div class="col">
            <div class="h-100 rounded shadow p-4 blur sarga">
                <div class="text-center fw-bold">${cim}</div>
                <div class="row cols-4">
                    <div class="col">
                        <div class="fs-1 fw-bold">${nap}</div>
                        <div class="fs-5">nap</div>
                    </div>
                    <div class="col">
                        <div class="fs-1 fw-bold">${ora}</div>
                        <div class="fs-5">óra</div>
                    </div>
                    <div class="col">
                        <div class="fs-1 fw-bold">${perc}</div>
                        <div class="fs-5">perc</div>
                    </div>
                    <div class="col">
                        <div class="fs-1 fw-bold">${mp}</div>
                        <div class="fs-5">mp</div>
                    </div>
                </div>
            </div>
        </div>
    `
    }
    else{
        return `
    <div class="col">
            <div class="h-100 rounded shadow p-4 blur zold">
                <div class="text-center fw-bold">${cim}</div>
                <div class="row cols-4">
                    <div class="col">
                        <div class="fs-1 fw-bold">${nap}</div>
                        <div class="fs-5">nap</div>
                    </div>
                    <div class="col">
                        <div class="fs-1 fw-bold">${ora}</div>
                        <div class="fs-5">óra</div>
                    </div>
                    <div class="col">
                        <div class="fs-1 fw-bold">${perc}</div>
                        <div class="fs-5">perc</div>
                    </div>
                    <div class="col">
                        <div class="fs-1 fw-bold">${mp}</div>
                        <div class="fs-5">mp</div>
                    </div>
                </div>
            </div>
        </div>
    `
    }
   
}