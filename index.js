var express = require('express'),
app = express(),
port = process.env.PORT || 4000;

app.get("/recent-tab-response", (req, res) => {
    let dummyData = {
        RECENT_TAB_RESPONSE: [{
            date: new Date("2017-11-24"),
            dayExists: true,
            dayType: 'Good',
            activeLevel: 'Full',
            treatment: [ 'Sumatriptan', 'Topiramate'],
            notes: ''
        }, 
        {
            date: new Date("2017-11-23"),
            dayExists: true,
            dayType: 'Good',
            activeLevel: 'Full',
            treatment: ['Sumatriptan', 'Running'],
            notes: ''
        },
        {
            date: new Date("2017-11-22"),
            dayExists: true,
            dayType: 'Good',
            activeLevel: 'Full',
            treatment: ['Sleeping', 'Lemon Tea'],
            notes: ''
        },
        {
            date: new Date("2017-11-21"),
            dayExists: true,
            dayType: 'Good',
            activeLevel: 'Full',
            treatment: ['Dark Room Rest'],
            notes: ''
        },
        {
            date: new Date("2017-11-20"),
            dayExists: true,
            dayType: 'Good',
            activeLevel: 'Full',
            treatment: [ ],
            notes: ''
        },
    ]}

    res.send(dummyData)
}) 

app.get("/settings-tab-response", (req, res) => {
    let dummyData = {
        SETTINGS_TAB_RESPONSE: [
            {
                name: 'Sumatriptan',
                customType: 'others',
                status: true,
            },
            {
                name: 'Topiramate',
                customType: 'preventative',
                status: true,
            },
            {
                name: 'Dark Room Rest',
                customType: 'relief',
                status: true,
            },
            {
                name: 'Lemon Tea',
                customType: 'relief',
                status: true
            },
            {
                name: 'Sleeping',
                customType: 'relief',
                status: false
            },
            {
                name: 'Running',
                customType: 'relief',
                status: false
            }
        ]
    }

    res.send(dummyData)
})

app.get("/", (req, res) => {
    console.log("Page Requested");
    res.send("Healint Server is running on port " + port);
})


app.listen(port);

console.log('healint-server started on port: ' + port);
