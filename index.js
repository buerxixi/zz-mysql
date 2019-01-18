const mysql = require('mysql');
const Connection = require('mysql/lib/Connection.js');


// 修改为异步
Connection.prototype.asyncQuery = function (sql, values) {
    return new Promise((resolve, reject) => {
        this.query(sql, values, (err, res) => {
            if (err) {
                reject && reject(err);
                return;
            }
            resolve && resolve(res);
        })
    })
};

module.exports = {
    mysql
};
