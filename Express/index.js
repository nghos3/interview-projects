const express = require("express")
const app = express();


//creates a middleware
app.use(express.json());

const courses = [
    {id: 1, name: "math"},
    {id: 2, name: "science"},
    {id: 3, name: "math"},
    {id: 4, name: "social science"},
    {id: 5, name: "physics"},
    {id: 6, name: "math"}
]
app.get('/',(req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id',(req, res) => {
    // eg http://localhost:9000/courses/1
    const result = courses.find(e => {return e.id === parseInt(req.params.id)})
    if(!result) {
        res.status(404).send('course unavailable');
    }
    res.send(result);
    // res.send(req.params.id);
});

app.get('/api/year/:year/:months', (req, res) => {
    // eg http://localhost:9000/api/year/2018/1
    res.send(req.params)
});

app.get('/api/year', (req, res) => {
    // eg http://localhost:9000/api/year?sortBy=1
    res.send(req.query)
});


app.post('/api/courses', (req,res)=> {
    if(!req.body.name || req.body.name.length < 3) {
        res.status(400).send(`should have a min length of 3 char ${req.body.name}`);
    }
    const course = {
        id: courses.length +1,
        course: req.body.name
    }

    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    // valid input or not
    //able to locate the id
    //post the updated result
    const course = courses.filter(e => e.id === parseInt(req.params.id));
    if(!course) {
        res.status(400).send(`should have a valid id`);
    }
    if(!req.body.name || req.body.name.length < 3) {
        res.status(400).send(`should have a min length of 3 char ${req.body.name}`);
    }

    course[0].name =  req.body.name;
    res.send(course);
});

const port = process.env.port || 9000;

app.listen(port , ()=> {
    console.log('listening to port.....', port);
});