const jsondb = require("simple-json-db");
const path = require("path");

const user_db = new jsondb(path.join(__dirname, "..", "..", "db", "users.json"));



exports.is_in_database = (name) => {
    if (name == undefined)
        return true;

    let db = get_users();

    for (let u in db) {
        if (db[u].name.toLowerCase() == name.toLowerCase())
            return true;
    }
    return false;
}


function get_users()
{
    let db = user_db.JSON();
    delete db["next_id"];
    return db;
}


//Returns true if everything went fine
exports.add_user = (name,password) =>
{
    if(this.is_in_database(name) == true)
        return false;
    let new_user = {name:name,password:password}
    let next_id = user_db.get("next_id");
    user_db.set(next_id,new_user);
    user_db.set("next_id",++next_id); 
    return true;
}