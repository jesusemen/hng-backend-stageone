const express = require('express');
const app = express();
const port = 3000;

app.get('/endpoint', (req, res) => {
    const { param1, param2 } = req.query;

    const response = {
        slack_name: 'Jesusemen Ehimiyein',
        current_day: new Date().toLocaleDateString(),
        utc_time: new Date().toUTCString(),
        track: 'backend',
        github_file_url: param1,
        github_repo_url: param2,
        status_code: res.statusCode
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});