import db from "../config/database.js";

export const getUsers = (result) => {
    db.query("SELECT * FROM user", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getUserById = (id, result) => {
    db.query("SELECT * FROM user WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

export const insertUser = (data, result) => {
    db.query("INSERT INTO user SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const updateUserById = (data, id, result) => {
    db.query("UPDATE user SET user_name = ?, user_age = ? WHERE id = ?",
        [data.user_name, data.user_age, id],
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
}

export const deleteUserById = (id, result) => {
    db.query("DELETE FROM user WHERE id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}