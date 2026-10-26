const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


const users = [
    {
        "id": "USR001",
        "name": "Rahim Ahmed",
        "email": "rahim@example.com",
        "password": "Rahim@123"
    },
    {
        "id": "USR002",
        "name": "Karim Hasan",
        "email": "karim@example.com",
        "password": "Karim@123"
    },
    {
        "id": "USR003",
        "name": "Nusrat Jahan",
        "email": "nusrat@example.com",
        "password": "Nusrat@123"
    },
    {
        "id": "USR004",
        "name": "Sadia Islam",
        "email": "sadia@example.com",
        "password": "Sadia@123"
    },
    {
        "id": "USR005",
        "name": "Tanvir Hossain",
        "email": "tanvir@example.com",
        "password": "Tanvir@123"
    }
]


app.get("/api/users", async (req, res) => {
    res.send(users);
})

app.post("/api/users", async (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})
