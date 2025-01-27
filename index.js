#!/usr/bin/env node

// Graciously taken from this blog post:
// https://ankitbrahmbhatt.medium.com/create-your-own-command-line-tool-like-create-react-app-the-detailed-guide-18f72c429189

import { program } from "commander";
import chalk from "chalk";
import shell from "shelljs";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

program
  .version('1.0.0')
  .description('CLI tool to create a basic React app with some accommodations.');
program
  .command('vite <projectName>')
  .description('Initialize a new Vite project')
  .action(async (projectName) => {
    const projectPath = path.join(process.cwd(), projectName);
    if (fs.existsSync(projectPath)) {
      console.log(chalk.red('Project already exists'));
      process.exit(1);
    }
    fs.mkdirSync(projectPath);
    console.log(chalk.green('Creating project...'));
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const templatePath = path.join(__dirname, './templates/vite');
    shell.cp('-R', `${templatePath}/*`, projectPath);
    shell.cd(projectPath);
    console.log(chalk.green('Installing dependencies...'));
    shell.exec('npm install');
    console.log(chalk.green('Project setup complete!'));
    console.log(`\nTo get started:`);
    console.log(chalk.cyan(`\ncd ${projectName}\nnpm run dev\n`))
  });
program
  .command('next <projectName')
  .description('Initialize a new Nextjs project (coming sometime in the future)')
  .action(async () => {
    console.log(chalk.red('Nextjs is currently unsupported.'));
    process.exit(1);
  });
program.parse(process.argv);