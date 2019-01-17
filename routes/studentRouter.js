var express = require('express');
const app = express();
var router = express.Router();

const Student = require('../models/student');

router.get('/' , function(req , res){
    Student.find({})
        .populate("college","name -_id")
        .then(function(student){
            res.json(student);
        }).catch(function(err){
            console.log(err);
    });
});

router.post('/',function(req , res){
    var name = req.body.name;
    var email = req.body.email;
    var reg_no = req.body.reg_no;
    var college_id = req.body.college_id;

    console.log(req.body);

    var student = new Student({
        name : name,
        email : email,
        reg_no : reg_no,
        college_id : college_id
    });
    student.save().then(function(){
        res.json(student);
    });

});



router.get('/:id',function(req,res){
    Student.findone({_id : req.params.id} , function(err , student)
    {
        res.json(student);
    });
});

//to delete student frm database
router.delete('/:id' , function(req , res){
    Student.findOneAndDelete({_id : req.params.id},function(err , student){
        res.send('Deleted');
    });
});

module.exports = router;