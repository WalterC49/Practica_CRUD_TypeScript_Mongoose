import expressApp from "@config/express";
import { createServer } from "http";

const server = createServer(expressApp);

export default server;
