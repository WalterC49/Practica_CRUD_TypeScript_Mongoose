import { connectDB } from "@config/database";
import "@config/env";
import server from "@config/http";

(async () => {
  await connectDB();
  server.listen(process.env.PORT);
  console.log(`Server at http://localhost:${process.env.PORT}/api/diaries`);
})();
