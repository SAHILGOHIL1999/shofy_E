import dotenv from "dotenv";
import dns from "dns";
import app from "./app.js";
import DBconnect from "./src/config/db.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config({ path: "./.env" });

DBconnect();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Start : http://localhost:${port}`);
});
