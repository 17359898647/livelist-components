#!/bin/bash
set -e

# Set npm auth token
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc

# Change to core package directory and publish
cd packages/core
npm publish --access public