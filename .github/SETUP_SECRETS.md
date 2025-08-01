# GitHub Secrets Setup for Automated Publishing

To enable automated npm publishing with 2FA, you need to set up the following GitHub secret:

## Required Secret: NPM_TOKEN

Since your npm account has 2FA enabled, you need to create an automation token:

1. **Generate an Automation Token**:
   - Log in to [npmjs.com](https://www.npmjs.com/)
   - Click on your profile picture → Access Tokens
   - Click "Generate New Token"
   - Select "Automation" type (this bypasses 2FA for CI/CD)
   - Give it a descriptive name like "livelist-components-github-actions"
   - Copy the token immediately (you won't see it again)

2. **Add to GitHub Secrets**:
   - Go to your repository on GitHub
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste the automation token you generated
   - Click "Add secret"

## How It Works

- The CI workflow runs on all branches and pull requests to ensure code quality
- The Release workflow runs only on the main branch
- When changes are pushed to main:
  - If there are changesets, it creates a release PR
  - When the release PR is merged, it automatically publishes to npm
  - The automation token bypasses 2FA requirements

## Workflow Files

- `.github/workflows/ci.yml` - Runs linting, type checking, and builds on all PRs
- `.github/workflows/release.yml` - Handles automated releases and npm publishing