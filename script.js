let nameBox = document.querySelector("#name")
let professionBox = document.querySelector("#Profession")
let ageBox = document.querySelector("#Age")
let addUserBtn = document.querySelector("#addUser")
let errorblk = document.querySelector("#error")
let successblk = document.querySelector("#success")
let employeeNote = document.querySelector("#para2")
let employees = document.querySelector("#employeesList")


let ID = 0
let employeeArr = []


addUserBtn.addEventListener("click", addUser)
function addUser() 
{
    if (nameBox.value != "" && professionBox.value != "" && ageBox.value != "") {
        errorblk.classList.add("hide")
        let obj = {
            "id": ID++,
            "Name": nameBox.value,
            "Profession": professionBox.value,
            "Age": ageBox.value
        }
        employeeArr.push(obj)
        //ID = ID + 1
        console.log(employeeArr)
        successblk.classList.remove("hide")
        employeeNote.classList.add("hide")

        let element = document.createElement("div")
        element.className = "element"

        let employeeList = document.createElement("div")
        employeeList.className = "employee"
        let person = employeeArr.map(value => { return value })
        employeeList.innerHTML = `${ID}. \u00A0 \u00A0  Name : ${person[ID - 1].Name}  \u00A0 \u00A0 Profession : ${person[ID - 1].Profession}  \u00A0 \u00A0 Age : ${person[ID - 1].Age}`
        let deleteBtn = document.createElement("button")
        deleteBtn.className = "delete"
        deleteBtn.innerText = "Delete User"
        deleteBtn.setAttribute("id", ID)
        element.append(employeeList)
        element.append(deleteBtn)
        employees.append(element)

        deleteBtn.addEventListener("click", ()=>{
            let id = deleteBtn.getAttribute("id")
            delete employeeArr[id - 1]
            if(element.innerHTML.includes(id))
            {element.remove()}
        })

    }
    else 
    {
        errorblk.classList.remove("hide")
    }

}


