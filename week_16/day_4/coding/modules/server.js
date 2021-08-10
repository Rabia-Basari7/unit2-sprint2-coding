const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
app.use(express.json());

// app.get("/users", function (request, response) {
    // return response.send("Welcome to Home Page");
// })

app.get("/users", function (request, response) {
    return response.send({ data: users });
});

app.post('/users', function (request, response) {
    let add = request.body;
    users.push(add);
    return response.send(users);
})

let test = [
    {
        id: 1,
        name: "Rabia"
    },
    {
        id: 2,
        name: "Basari"
    }
]
app.patch("/users/:id", function (request, response) {
    let id1 = request.params.id;
    let body = request.body;
    let name = body.name;
    let resObj;

    for (var i = 0; i < users.length; i++) {
        if (test[i].id == id1) {
            resObj = test[i];
            break;
        }
    }

    resObj.name = name;
    response.status(200).json({
        updated_data: resObj
    })
    // return response.send("Testing Post");
    // console.log("Testing Post");
});

// app.post("/users", function (request, response) {
//     console.log("request.body", request.body);
//     return response.send("Testing Patch");
// });

app.delete("/users/:id", function (request, response) {
    let id1 = request.params.id;
    let { name } = request.body;
    console.log('name:', name);

    let resObj = test.filter((el) => {
        return el.id != id1;
    })

    test = resObj;
    console.log("resObj:", resObj);
    response.status(200).json({
        updated_data: test
    })
    return response.send("Testing Delete");
});

app.listen(7777, () => {
    console.log("Listening on port 7777");
})