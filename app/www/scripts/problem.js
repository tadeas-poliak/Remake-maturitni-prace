async function send_new_problem(button)
{
    let container = button.closest(".form-container")
    let title = container.querySelector("#title").value
    let description = container.querySelector("#description").value
    if(title == "" || description == "")
    {
        log_message("All inputs must be filled.")
        return
    }
    //Getting answer from controller (true or false) 
    let answer = await (await fetch("/problem/add",
        {
            method:"POST",
            headers:{'Content-type': "application/json"},
            body:JSON.stringify({
                title,
                description
            })
        }
        )).json(); 
    if(answer == true)
        log_message("Problem posted succesfully.")
    else
        log_message("Problem was NOT posted.")
}
async function edit_problem(button)
{
    let container = button.closest(".form-container")
    let title = container.querySelector("#title").value
    let description = container.querySelector("#description").value
    let problem_id = window.location.href.split("/")[window.location.href.split("/").length-1]
    if(title == "" || description == "")
    {
        log_message("All inputs must be filled.")
        return
    }
    //Getting answer from controller (true or false) 
    let answer = await (await fetch("/problem/change/"+problem_id,
        {
            method:"POST",
            headers:{'Content-type': "application/json"},
            body:JSON.stringify({
                title,
                description
            })
        }
        )).json(); 
    if(answer == true)
        log_message("Problem posted succesfully.")
    else
        log_message("Problem was NOT posted.")
}