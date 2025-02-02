#!/usr/bin/env node

// Graciously taken from this blog post:
// https://ankitbrahmbhatt.medium.com/create-your-own-command-line-tool-like-create-react-app-the-detailed-guide-18f72c429189

import { program } from "commander";
import chalk from "chalk";
import shell from "shelljs";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

function setup(projectName, relativeTemplatePath) {
  const projectPath = path.join(process.cwd(), projectName);
  if (fs.existsSync(projectPath)) {
    console.log(chalk.red('Project already exists'));
    process.exit(1);
  }
  fs.mkdirSync(projectPath);
  console.log(chalk.green('Creating project...'));
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const templatePath = path.join(__dirname, relativeTemplatePath);
  shell.cp('-R', `${templatePath}/*`, projectPath);         // Normal files
  shell.cp('-R', `${templatePath}/.*`, projectPath);        // Hidden files
  shell.cd(projectPath);
  shell.exec('git init --quiet');
  shell.exec('chmod +x scripts/init.sh');
  console.log(chalk.green('Setting git hooks...'));
  shell.exec('bash scripts/init.sh');
  
  console.log(chalk.green('Installing dependencies...'));
  shell.exec('npm install --silent');
  shell.exec(`sed -i 's/project_name/${projectName}/g' package.json`);
  console.log(chalk.green('Project setup complete!'));
  console.log(`\nTo get started:`);
  console.log(chalk.cyan(`\n\tcd ${projectName}\n\tnpm run dev`));
  console.log(chalk.green(`\nBefore you build, update the following files:`));
  console.log(chalk.cyan(`\t- scripts/generate-sitemap.sh`));
}

program
  .version((() => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const packageJsonPath = path.join(__dirname, './package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    return packageJson.version;
  })())
  .description('CLI tool to create a basic React app with some accommodations.');
program
  .command('vite <projectName>')
  .description('Initialize a new Vite project')
  .action(async (projectName) => {
    setup(projectName, './templates/vite');
  });
program.parse(process.argv);