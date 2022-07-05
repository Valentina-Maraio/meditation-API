const { application } = require('express');
var express = require('express');

var router = express.Router();

var database = require('../app');

router.get("/", function(request, response, next){
    var query = "SELECT * FROM book_log.logs";

    application.query(query, function(error, data){

        if(error){
            throw error;
        } else {
            response.render('data_from_db', {
                title:'Author from DB',
                action: 'list',
                dataFromDB: data
            })
        }
    })
})