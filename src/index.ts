import "@config/env";
import server from "@config/http";

(() => {
  server.listen(process.env.PORT);
  console.log(`Server at http://localhost:${process.env.PORT}`);
})();
