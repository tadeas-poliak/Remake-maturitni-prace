async function send_form_data(button,path)
{
    //get container of form with data to be send (container must contain class name "form-container")
    let container = button.closest(".form-container")
    //log container - where we print messeges for user
    let log = container.querySelector("#log") 
    //Getting all inputs from container
    let inputs = Array.from(container.querySelectorAll("input"));
    let passwords = []
    let name;
    //excluding buttons and getting passwords
    for(let i in inputs)
    {
        if(inputs[i].getAttribute("type") == "button")
        {
            inputs.splice(inputs.indexOf(inputs[i]) ,1);
            continue;
        }
        if(inputs[i].getAttribute("type") == "password")
            passwords.push(inputs[i])
        if(Array.from(inputs[i].classList).includes("name")==true)
            name = inputs[i];
    }
    console.log(name)
    //If there are more then 1 password inputs we need to check if are correct
    if(passwords.length > 1)
    {
        //Checking if all password match within one form-container
        for(p1 in passwords)
            for(p2 in passwords)
            {
                if(p1 == p2)
                    continue
                if(passwords[p1].value != passwords[p2].value)
                {
                    log.innerHTML = "Passwords need to match."
                    return false;
                }
            }
        //Passwords need atleast 5 chars
        let min_pass_lenght = 5;
        if(passwords[0].value.length < min_pass_lenght)
        {        
            log.innerHTML = "Passwords need to have atleast "+min_pass_lenght+" characters."
            return false;
        }
    }
    


    //Getting answer from controller (true or false) 
    let answer = await (await fetch(path,
    {
        method:"POST",
        headers:{'Content-type': "application/json"},
        body:JSON.stringify({
            name: name.value,
            password:passwords[0].value
        })
    }
    )).json(); 
    answer = answer.answer
    console.log(answer)   
    //Printing answer into log
    if(answer == true)
        log.innerHTML = "Everything went right."
    if(answer == false)
        log.innerHTML = "Something went wrong."
    return answer;
}