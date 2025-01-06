const express = require('express');
const { spawn } = require('child_process');
const router = express.Router();

router.post('/analyze', (req, res) => {
    const pythonProcess = spawn('python3', ['./services/pose_estimation.py']);

    pythonProcess.stdout.on('data', (data) => {
        res.json({ message: 'Pose analyzed successfully', output: data.toString() });
    });

    pythonProcess.stderr.on('data', (error) => {
        res.status(500).json({ error: error.toString() });
    });
});

module.exports = router; // Ensure the router is exported
