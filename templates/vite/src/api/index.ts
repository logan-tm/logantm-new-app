import express, { Request, Response } from "express";
import cors, { CorsOptions } from "cors";

const app = express();
const port = process.env.VITE_API_PORT || 3000;

// Define the allowed origin
const allowedOrigin = "http://localhost";

// Configure CORS
const corsOptions: CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    if (origin === allowedOrigin || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// Define a simple route
app.get("/", (_req: Request, res: Response) => {
  // res.setHeader("Content-Type", "application/json");
  res.json({ msg: "Hello, world!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
