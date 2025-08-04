#!/bin/bash

set -e

# Check if Node.js is available
if ! command -v node &> /dev/null; then
  echo "Error: Node.js is required but not found"
  exit 1
fi

# Check if we're in the root directory
if [ ! -f "packages/core/package.json" ]; then
  echo "Error: Must run from project root directory"
  exit 1
fi

# Get the version from packages/core/package.json
VERSION=$(node -p "require('./packages/core/package.json').version" 2>/dev/null)

if [ -z "$VERSION" ]; then
  echo "Error: Could not extract version from package.json"
  exit 1
fi

TAG="v$VERSION"

# Check if tag already exists locally
if git rev-parse "$TAG" >/dev/null 2>&1; then
  echo "Error: Tag $TAG already exists locally"
  echo "To delete it: git tag -d $TAG"
  exit 1
fi

# Check if tag already exists on remote
if git ls-remote --tags origin | grep -q "refs/tags/$TAG"; then
  echo "Error: Tag $TAG already exists on remote"
  echo "To delete it: git push origin --delete $TAG"
  exit 1
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
  echo "Warning: You have uncommitted changes"
  read -p "Continue anyway? (y/N) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborted"
    exit 1
  fi
fi

echo "Creating and pushing tag: $TAG"

# Create the tag
git tag "$TAG" -m "Release version $VERSION"

# Push the tag to remote
if git push origin "$TAG"; then
  echo "Successfully created and pushed tag: $TAG"
else
  echo "Error: Failed to push tag $TAG"
  echo "The tag was created locally. To remove it: git tag -d $TAG"
  exit 1
fi