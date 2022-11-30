const jsondb = require("simple-json-db");
const path = require("path");

const problem_db = new jsondb(path.join(__dirname, "..", "..", "db", "problems.json"));



function get_problems()
{
    let db = problem_db.JSON();
    delete db["next_id"];
    for(u in db)
        db[u].id = u
    return db;
}

exports.get_problem_by_id = (id) =>
{
    let problems = get_problems()
    return problems[id]
}

exports.get_user_problems = (user_id) =>
{
    let problems = get_problems()
    let out = []
    for(p in problems)
        if(problems[p].user_id = user_id)
            out.push(problems[p])

    return out
}


exports.change_problem = (problem_id,title,description) =>
{
    if(problem_db.has(problem_id) == false)
        return false
    let current_problem = this.get_problem_by_id(problem_id)
    current_problem.title = title
    current_problem.description = description
    problem_db.set(problem_id,current_problem)
    return true
}

//Returns true if everything went fine
exports.add_problem = (user_id,title,description) =>
{
    let new_problem = {user_id,title,description,vote_rate:0}
    let next_id = problem_db.get("next_id");
    problem_db.set(next_id,new_problem);
    problem_db.set("next_id",++next_id); 
    return true;
}

