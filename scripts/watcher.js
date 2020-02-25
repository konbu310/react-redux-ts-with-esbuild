const chokidar = require("chokidar");
const path = require("path");
const debug = require("debug");
const { exec } = require("child_process");

const TARGET_DIRECTORY = path.resolve(__dirname, "../dist");
const info = debug("esbuild:watch");
const error = debug("esbuild:error");

const runScript = script =>
  exec(script, (err, stdout, stderr) => {
    if (err) {
      error(stderr);
      return;
    }
    info(stdout);
    info(`Build completed🤗`);
  });

const watcher = chokidar.watch(TARGET_DIRECTORY, {
  ignored: /[\/\\]\./,
  ignoreInitial: true,
  persistent: true
});

watcher
  .on("ready", () => {
    info("Initialize esbuild watcher🤩");
    runScript("yarn run build");
  })
  .on("add", (path, stats) => {
    runScript("yarn run build");
  })
  .on("change", (path, stats) => {
    runScript("yarn run build");
  })
  .on("close", () => {
    info("Close esbuild watcher😴");
  })
  .on("error", err => {
    error(err);
  });
