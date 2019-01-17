function displayColleges() {
    fetch("http://localhost:3000/api/colleges" , {method : "GET"})
    .then(function(response){
        return response.json();
    }).then(function(data) {
        var bodyRows = "";

        for(var i=0;i<data.length;i++) {

            bodyRows +="<tr>";
            bodyRows += "<td>" + data[i].name + "</td>";
            bodyRows += "</tr>";
        }
        console.log(bodyRows);

        document.getElementById("collegeList").innerHTML = bodyRows;
    });
}

function addCollege() {
    var college = document.getElementById('college').value;
    var college_name = {
        name : college
    };
    console.log(college_name);

    fetch("http://localhost:3000/api/colleges",
    {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },

        body : JSON.stringify(college_name)
    }).then(function(response){
        console.log("response",response);
        if(response.status == 200){
            window.location = "collegelist.html"
        }
    });
}

function fun() {
    // console.log("table loaded");
    fetch("http://localhost:3000/api/students",{method : "GET"}
    ).then(function(response) {
        return response.json() ;
    }).then(function(data) {
        var bodyRows = "";
        console.log(data);
        for(var i=0 ; i<data.length ; i++) {
            bodyRows += "<tr>";
            bodyRows += "<td>" + "<a href='details.html?id=" + data[i]._id + "'>" +data[i].name + "</a>" + "</td>";
            bodyRows += "<td>" + data[i].reg_no + "</td>";
            bodyRows += "<td>" + data[i].email + "</td>";
            bodyRows += "<td>" + data[i].college_id + "</td>";
            bodyRows += "</tr>";
        }

        console.log(bodyRows);

        document.getElementById('table').innerHTML = bodyRows;
    });
}

function userform() {
    //console.log("hello");
     var info = document.getElementById('form');
     //console.log(info.name.value);
     var name = info.name.value;
     var reg_no = info.reg_no.value;
     var college_id = info.college.value;
    // console.log('111111111111111');
     var email = info.email.value;
    // console.log("hello222222222222222");
     var student = {
         name : name,
         reg_no : reg_no,
         email : email,
         college_id : college_id
     };
     //console.log('3333333333333333');
     //console.log(student);
     fetch('http://localhost:3000/api/students' , 
     {
         method : "POST",
        headers : {
            'Content-Type' : 'application/json'

        },
        body : JSON.stringify(student)
    }).then(function(response){
        console.log("student detail response"  , response);
        if(response.status == 200) {
            window.location = "index.html"
        }
    });
}

function discolleges() {
    var form = document.getElementById("form");
        var dropdown = form.college;

        fetch("http://localhost:3000/api/colleges" , {method : "GET"})
        .then(function(response) {
            return response.json();

        }).then(function(data) {
            var options = "";
           // console.log(data);
            for(var i=0; i<data.length;i++) {
                options += "<option value=" + data[i]._id + ">" + data[i].name + "</option>";
            }
            //console.log(options);
            dropdown.innerHTML = options;
        });
}

function studentDetail() {
    var url = new URL(window.location.href);
    console.log(url);
    var id = url.searchParams.get("id");
    console.log(id);

    // fetch("http://localhost:3000/api/students/" + id, { method: "GET" })
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(data) {
    //     console.log(data);
    //     var display =
    //       "<p>Name :" +
    //       data.name +
    //       "</p>" +
    //       "<p>Reg No :" +
    //       data.reg_no +
    //       "</p>" +
    //       "<p>Email :" +
    //       data.email +
    //       "</p>" +
    //       "<p>College :" +
    //       data.college_id +
    //       "</p>" +
    //       "<button class='btn btn-primary' onclick='deleteStudent(\"" +
    //       data._id +
    //       "\")'>Delete</button>";

    //     document.getElementById("details").innerHTML = display;
    //   });
}

function deleteStudent(id) {}