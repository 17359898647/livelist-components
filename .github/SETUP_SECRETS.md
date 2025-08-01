# Setting up GitHub Secrets for Automated Release

To enable automated npm publishing through GitHub Actions, you need to set up the following secret:

## NPM_TOKEN

1. Generate an npm access token:
   - Go to https://www.npmjs.com/
   - Log in to your account
   - Click on your profile picture → Access Tokens
   - Click "Generate New Token" → "Classic Token"
   - Select type: "Automation"
   - Copy the generated token (starts with `npm_`)

2. Add the token to GitHub repository secrets:
   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste your npm token
   - Click "Add secret"

## How the Release Workflow Works

1. When you push to the `main` branch, the workflow automatically runs
2. If there are changesets, it creates a PR to bump versions
3. When you merge that PR, it automatically publishes to npm
4. If there are no changesets, it does nothing

## Creating a Release

1. Create changesets for your changes:
   ```bash
   pnpm changeset
   ```

2. Commit and push your changes along with the changeset

3. The workflow will create a "Version Packages" PR

4. Review and merge the PR to trigger the npm publish