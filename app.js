const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const fetch = require("node-fetch");

app.get("/", (req, res) => {
	var ua = req.get("user-agent");

	fetch("https://hello-world-lively-dust-2774.dhanwaaninvestor.workers.dev/", {
		headers : {
			"user-agent" : `${ua}`
		}
	})
	.then(r => r.text())
	.then(r => res.type('html').send(r))
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
