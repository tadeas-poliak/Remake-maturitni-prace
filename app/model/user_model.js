const jsondb = require("simple-json-db");
const path = require("path");

const user_db = new jsondb(path.join(__dirname, "..", "..", "db", "users.json"));



exports.is_username_in_database = (name) => {
    if (name == undefined)
        return true;

    let db = get_users();

    for (let u in db) {
        if (db[u].name.toLowerCase() == name.toLowerCase())
            return true;
    }
    return false;
}
 
exports.is_user_in_database = (name,password) =>
{
    if(this.is_username_in_database(name) == false)
    {
        console.log("neni")
        return false
    }
    let u_id = this.get_user_id_by_name(name)
    console.log(u_id)
    return get_users()[u_id].password == password
}

function get_users()
{
    let db = user_db.JSON();
    delete db["next_id"];
    for(u in db)
        db[u].id = u
    return db;
}
//returns -1 if not found
exports.get_user_id_by_name = (name) =>
{
    let users = get_users()
    for(u in users)
    {
        console.log(users)
        if(users[u].name == name)
            return users[u].id
    }
    return -1
}

//Returns true if everything went fine
exports.add_user = (name,password) =>
{
    if(this.is_username_in_database(name) == true)
        return false;
    let new_user = {name:name,password:password}
    let next_id = user_db.get("next_id");
    user_db.set(next_id,new_user);
    user_db.set("next_id",++next_id); 
    return true;
}

