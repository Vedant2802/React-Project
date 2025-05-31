const conf = {
  appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteCollectioID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;

/*
  JavaScript/Node.js: Has the global object process.env that holds environment variables from the operating system.

React: Runs in the browser, which doesn’t have process.env by default. React projects rely on bundlers (like Webpack or Vite) to inject env vars at build time.

dotenv package: Runs only in Node.js (usually at build time or server-side). It reads .env files and loads them into process.env so your Node.js scripts or build tools can access those variables.

Why do we use dotenv then?
OS environment variables can be tricky to manage locally.

.env files are easy to create and keep secrets/configs out of your code.

dotenv reads those files automatically so you don’t have to manually set environment variables on your machine or CI/CD system every time.

So in short:
dotenv = development convenience tool, not built-in.

It helps inject env vars into Node’s process.env at runtime.

It does not run in the browser or inside React code itself.

React uses bundlers to inject those variables during build, often with different tools.

*/
