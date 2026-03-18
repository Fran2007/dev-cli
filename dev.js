#!/usr/bin/env node

const { execSync } = require("child_process");
const inquirer = require("inquirer");
const chalk = require("chalk");

const args = process.argv.slice(2);

const frameworks = {
  react: "npm create vite@latest my-react-app -- --template react",

  vite: "npm create vite@latest",

  next: "npx create-next-app@latest",

  vue: "npm create vue@latest",

  svelte: "npm create svelte@latest",

  astro: "npm create astro@latest",

  express: "npx express-generator",
};

const libraries = {
  tailwind: "npm install -D tailwindcss postcss autoprefixer",

  axios: "npm install axios",

  framer: "npm install framer-motion",

  shadcn: "npx shadcn-ui@latest init",
};

function showBanner() {
  console.log(
    chalk.cyan(`
██████╗ ███████╗██╗   ██╗
██╔══██╗██╔════╝██║   ██║
██║  ██║█████╗  ██║   ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝
██████╔╝███████╗ ╚████╔╝
╚═════╝ ╚══════╝  ╚═══╝

Developer CLI
`),
  );
}

async function createProject() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: "Selecciona un framework:",
      choices: Object.keys(frameworks),
    },
  ]);

  const cmd = frameworks[answer.framework];

  console.log(chalk.green(`\nCreando proyecto con ${answer.framework}...\n`));

  execSync(cmd, { stdio: "inherit" });
}

async function installLibrary() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "lib",
      message: "Selecciona una librería:",
      choices: Object.keys(libraries),
    },
  ]);

  const cmd = libraries[answer.lib];

  console.log(chalk.yellow(`\nInstalando ${answer.lib}...\n`));

  execSync(cmd, { stdio: "inherit" });
}

async function mainMenu() {
  showBanner();

  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Selecciona una acción:",
      choices: ["Crear proyecto", "Instalar librería", "Salir"],
    },
  ]);

  if (answer.action === "Crear proyecto") {
    await createProject();
  } else if (answer.action === "Instalar librería") {
    await installLibrary();
  } else {
    process.exit();
  }
}

async function start() {
  if (args[0] === "create") {
    const framework = args[1];

    const cmd = frameworks[framework];

    if (!cmd) {
      console.log("Framework no soportado");
      return;
    }

    execSync(cmd, { stdio: "inherit" });
  } else if (args[0] === "add") {
    const lib = args[1];

    const cmd = libraries[lib];

    if (!cmd) {
      console.log("Librería no soportada");
      return;
    }

    execSync(cmd, { stdio: "inherit" });
  } else {
    await mainMenu();
  }
}

start();
