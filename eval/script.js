let tdata=document.querySelector("#table-body")

let depart=document.querySelector("#depart")

let getdata=(Url)=>{
    fetch(Url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res.data)
        showdata(res.data)
    })
}

function showdata(data){
    tdata.innerHTML="";
    data.forEach(function(ele){
        let row = document.createElement("tr");
        row.innerHTML= `
        <td>${ele.id}</td>
        <td>${ele.name}</td>
        <td>${ele.gender}</td>
        <td>${ele.department}</td>
        <td>${ele.salary}</td>
        `;
        tdata.appendChild(row)
    });
};

// depart.addEventListener("change",(data)=>{
//     let sel =depart.value;
//     let fildata = data.filter(function(ele){
//         return ele.depart==sel
//     })
//     showdata(fildata)
  
// });
function fildep(data){
    let fil=depart.value
    let fildata = fillter(data,fil);
    
    showdata(fildata)
}
function fillter(data,role){
    return data.filter(function(ele){
            ele.role==role
            })
}
depart.addEventListener("change",fildep)

getdata("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")