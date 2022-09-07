const categories = [
    { 'title': 'education/training', coding: 1, hardware: 1, design: 1 },
    { 'title': 'fitness', coding: 1, hardware: 1, design: 1 },
    { 'title': 'financial planning', coding: 1, hardware: 0, design: 1 },
    { 'title': 'home security', coding: 1, hardware: 1, design: 1 },
    { 'title': 'events', coding: 1, hardware: 0, design: 1 },
    { 'title': 'quantified self', coding: 1, hardware: 1, design: 1 },
    { 'title': 'sports', coding: 1, hardware: 1, design: 1 },
    { 'title': 'food', coding: 1, hardware: 1, design: 1 },
    { 'title': 'leisure', coding: 1, hardware: 1, design: 1 },
    { 'title': 'civics', coding: 1, hardware: 1, design: 1 },
    { 'title': 'recruiting', coding: 1, hardware: 0, design: 1 },
    { 'title': 'culinary arts', coding: 1, hardware: 1, design: 1 },
    { 'title': 'dating', coding: 1, hardware: 1, design: 1 },
    { 'title': 'gardening', coding: 1, hardware: 1, design: 1 },
    { 'title': 'caregiving', coding: 1, hardware: 1, design: 1 },
];

const features = [
    { 'title': '3rd party api', coding: 1, hardware: 1, design: 0 },
    { 'title': 'gamification', coding: 1, hardware: 1, design: 1 },
    { 'title': 'real time chat', coding: 1, hardware: 0, design: 0 },
    { 'title': 'procedural generation', coding: 1, hardware: 0, design: 1 },
    { 'title': 'random events', coding: 1, hardware: 1, design: 1 },
    { 'title': 'at least one spell', coding: 1, hardware: 1, design: 1 },
    { 'title': 'videos', coding: 1, hardware: 0, design: 1 },
    { 'title': 'temperature guage', coding: 0, hardware: 0, design: 1 },
    { 'title': 'audio interface', coding: 1, hardware: 1, design: 0 },
    { 'title': 'gps', coding: 1, hardware: 1, design: 0 },
    { 'title': 'branching logical flows', coding: 1, hardware: 1, design: 0 },
    { 'title': 'memes', coding: 0, hardware: 0, design: 1 },
    { 'title': 'obfuscation', coding: 0, hardware: 0, design: 1 },
    { 'title': 'really easy to use', coding: 1, hardware: 1, design: 1 },
];

const users = [
    { 'title': 'vegans', coding: 1, hardware: 0, design: 1 },
    { 'title': 'people who dislike animation', coding: 1, hardware: 0, design: 1 },
    { 'title': 'homeowners', coding: 1, hardware: 1, design: 1 },
    { 'title': 'programmers', coding: 1, hardware: 1, design: 1 },
    { 'title': 'pedestrians', coding: 1, hardware: 1, design: 1 },
    { 'title': 'project managers', coding: 1, hardware: 1, design: 1 },
    { 'title': 'beginners', coding: 1, hardware: 1, design: 1 },
    { 'title': 'single mothers', coding: 1, hardware: 1, design: 1 },
    { 'title': 'moms', coding: 1, hardware: 1, design: 1 },
    { 'title': 'job seekers', coding: 1, hardware: 0, design: 1 },
    { 'title': 'students', coding: 1, hardware: 1, design: 1 },
    { 'title': 'gamers', coding: 1, hardware: 1, design: 1 },
    { 'title': 'hackers', coding: 1, hardware: 1, design: 1 },
    { 'title': 'business users', coding: 1, hardware: 1, design: 1 },
    { 'title': 'visually impaired', coding: 1, hardware: 0, design: 1 },
    { 'title': 'geeks', coding: 1, hardware: 1, design: 1 },
    { 'title': 'learners', coding: 1, hardware: 1, design: 1 },
    { 'title': 'athletes', coding: 1, hardware: 1, design: 1 },
    { 'title': 'recruiters', coding: 1, hardware: 1, design: 1 },
    { 'title': 'nature lovers', coding: 1, hardware: 1, design: 1 },
    { 'title': 'farmers', coding: 1, hardware: 1, design: 1 },
    { 'title': 'college students', coding: 1, hardware: 1, design: 1 },
    { 'title': 'grandparents', coding: 1, hardware: 1, design: 1 },
    { 'title': 'runners', coding: 1, hardware: 1, design: 1 },
];

const express = require('express');
const app = express();

const querystring = require('querystring');

require('dotenv').config();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let user_type = 'coding';
    if ( req.query.user_type ) {
        user_type = req.query.user_type;
    }

    res.render('index', {
        user_type: user_type,
        category: getRandom(categories, user_type),
        feature: getRandom(features, user_type),
        user: getRandom(users, user_type),
    });
});

app.listen(process.env.PORT || 3000);

function getRandom(arr, user_type) {
    let val = arr[ Math.floor(Math.random() * arr.length) ];
    while ( val[user_type] != 1 ) {
        val = arr[ Math.floor(Math.random() * arr.length) ];
    }
    return val;
}