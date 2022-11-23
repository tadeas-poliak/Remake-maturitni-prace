async function send_form_data(button,path)
{
    //get container of form with data to be send (container must contain class name "form-container")
    let container = button.closest(".form-container")
    //Getting all inputs from container
    let inputs = container.querySelectorAll("input");
    //excluding buttons
    
    //Passwords need atleast 5 chars

    console.log(inputs[0].getAttribute("type"))

    //Getting answer from controller (true or false) 
    let answer = await (await fetch(path,
    {
        method:"POST",
        body:JSON.stringify({
            test:"ahoj"
        })
    }
    )).json(); 
    answer = answer.answer
    console.log(answer)   
    //Printing answer into log
    if(answer == true)
        container.querySelector("#log").innerHTML = "Everything went right."
    if(answer == false)
        container.querySelector("#log").innerHTML = "Something went wrong."
    return answer;
}