const jsondb = require("simple-json-db");
const path = require("path");


const draw_db = new jsondb(path.join(__dirname, "..", "..", "db", "draw_items.json"));
const drawed_db = new jsondb(path.join(__dirname, "..", "..", "db", "drawed_items.json"));


exports.is_in_draw_database = (name) => {
    if (name == undefined)
        return true;

    let draw_items = draw_db.JSON();

    for (let u in draw_items) {
        if (draw_items[u].name == undefined)
            continue;

        if (draw_items[u].name.toLowerCase() == name.toLowerCase())
            return true;
    }
    return false;
}

exports.is_in_drawed_database = (drawed) => {
    if (drawed.name_1 == undefined || drawed.name_2 == undefined)
        return true;

    let drawed_items = drawed_db.JSON();

    for (let u in drawed_items) {
        if (drawed_items[u].name_1 == undefined || drawed_items[u].name_2 == undefined )
            continue;

        if (drawed_items[u].name_1.toLowerCase() == drawed.name_1.toLowerCase() && 
            drawed_items[u].name_2.toLowerCase() == drawed.name_2.toLowerCase())
            return true;
    }
    return false;
}

exports.get_draw_items = () =>
{
    let db = draw_db.JSON();
    delete db["next_id"];
    return db;
}

exports.add_draw_item = (item_name) => {
    let id = draw_db.get("next_id");
    if (this.is_in_draw_database(item_name) == true)
        return false;

    let draw_item = { name: item_name };
    draw_db.set(id, draw_item);
    draw_db.set("next_id", ++id);
    return true;
};

exports.delete_draw_item_by_id = (id) => {
    draw_db.delete(id);
};

exports.delete_draw_item_by_name = (name) => {
    let db = draw_db.JSON();
    delete db["next_id"]
    for (let i in db) {
        if (db[i].name == name) {
            draw_db.delete(i);
            return true;
        }
    }
    return false;
};


//======DRAWED=======
exports.add_drawed_items = (drawed) => {
    let id = drawed_db.get("next_id");
    if(this.is_in_drawed_database(drawed) == true)
        return false;
    drawed_db.set(id, drawed);
    drawed_db.set("next_id", ++id);
    return true;
};

exports.delete_drawed_item_by_id = (id) => {
    drawed_db.delete(id);
};
exports.delete_drawed_items_by_name = (drawed) => {
    let db = drawed_db.JSON();
    delete db["next_id"]

    for (let i in db) 
    {
        if (db[i].name_1 == drawed.name_1 &&  db[i].name_2 == drawed.name_2) {
            drawed_db.delete(i);
            return true;
        }
    }
    return false;
};

exports.get_drawed_items = () =>
{
    let db = drawed_db.JSON();
    delete db["next_id"];
    return db;
}
