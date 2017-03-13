/**
 * Created by roy on 2017/2/4.
 */
"use strict"
var mysql = require('mysql')
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '173sf.com',
  database: '173sf'
})
var query = function (sql, callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      callback(err, null, null)
    } else {
      conn.query(sql, function (qerr, vals, fields) {
        //释放连接
        conn.release()
        //事件驱动回调
        callback(qerr, vals, fields)
      })
    }
  })
}
module.exports = query