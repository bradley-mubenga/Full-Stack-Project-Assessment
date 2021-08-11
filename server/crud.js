//Express Modules
var express = require('express');
var router = express.Router();

//Third Party Modules
const { v4: uuidv4 } = require('uuid');

//
let videoData = require('./exampleresponse.json');

//GET Endpoint Route Handler ('/')
router.get('/', (req, res) => {
    res.json(videoData)
});

//POST Endpoint Route Handler ('/')
router.post('/', (req, res) => {
    if (req.body && req.body.title && req.body.url) {
        let newVideo = {
            "id": uuidv4(),
            "title": req.body.title,
            "url": req.body.url,
            "rating": 0
        }

        let newVideoData = [...videoData];
        newVideoData.unshift(newVideo);

        res.status(200).json({
            "id": newVideo.id
        })
    }

    else {
        res.status(400).json(
            {
                "result": "failure",
                "message": "Video could not be saved"
            }
        )
    }
});

//DELETE Endpoint Route Handler ('/:id')
router.delete('/:id', (req, res) => {
    if (req.params.id) {
        let newVideoData = videoData.filter(video => video.id != req.params.id);
        res.status(200).json({})
    }

    else {
        res.status(400).json({
            "result": "failure",
            "message": "Video could not be deleted"
        })
    }
})

module.exports = router;