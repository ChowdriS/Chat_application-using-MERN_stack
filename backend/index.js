const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import Axios library

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-Key": "4f2e510b-ecfb-415e-aaad-7e646912e646" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.error(e); // Log the error for debugging
    return res.status(500).json({ error: "Internal server error" }); // Return a generic error response
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
