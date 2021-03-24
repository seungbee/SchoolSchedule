const clock = document.getElementById("clock")
let scheduleData
let classn = "09"

const url = new URL("https://open.neis.go.kr/hub/misTimetable")
const params = {
    KEY: "4fa427d3a1ba4311b3f0c0316e500b96",
    method: 'GET',
    Type: 'json',
    ATPT_OFCDC_SC_CODE: 'B10',
    SD_SCHUL_CODE: '7130194',
    AY: '2021',
    SEM: '1',
    ALL_TI_YMD: '20210324',
    GRADE: '2',
    CKASS_NM: '09'
}
url.search = new URLSearchParams(params).toString()

async function req(){
    const responce = fetch(url)
    const data = await (await responce).json()

    scheduleData = data["misTimetable"][1]["row"]

    scheduleData.forEach(elem => {
        if (elem["CLASS_NM"] === classn) {
            console.log(elem["ITRT_CNTNT"])
        }
    });
}

req()

setInterval(() => {
    //loop

    //clock
    let d = new Date()
    clock.innerHTML = d.getHours() + " : " + d.getMinutes()
    if (d.getMinutes().toString().length === 1) { clock.innerHTML = d.getHours() + " : 0" + d.getMinutes() }

    //api
    
}, 1000)