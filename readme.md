Dev CLI

Dev CLI is a professional, lightweight Node.js command line tool for running developer
workflows from the terminal. It provides interactive prompts, clean output formatting,
and update notifications so teams can ship faster with fewer manual steps.

Highlights
- Interactive prompts that guide users through common tasks
- Clear, colored output for fast scanning in terminals and CI logs
- Update notifications to keep the tool current
- Designed to be installed locally or globally

Requirements
- Node.js 16+ (LTS recommended)
- npm 8+ (or compatible package manager)

Installation
- Local install (recommended for project use):
`npm install`
- Global install (to use the `dev` command anywhere):
`npm install -g .`

Getting Started
- Run locally:
`node dev.js`
- Run globally (after global install):
`dev`

Common Tasks
- Start the interactive prompt and select a workflow.
- Follow the on-screen steps to complete the task.
- Review output and any next-step instructions shown.

Configuration
- This CLI is implemented in `dev.js`.
- You can customize prompts, commands, and output there to match your workflow.

Project Structure
- `dev.js`: main CLI entry
- `package.json`: dependencies and `bin` entry for the `dev` command

Screenshots
- `![Main prompt](/images/dev01.png)`
- `![Example output](/images/dev02.png)`
- 
- `![Main prompt](/images/dev03.png)`
- `![Example output](/images/dev04.png)`

Troubleshooting
- If `dev` is not found after a global install, ensure your npm global bin folder is in `PATH`.
- If prompts are missing, verify that `inquirer` is installed.

License
- ISC
