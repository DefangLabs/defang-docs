#!/bin/bash

set -e

cd defang/src/cmd/gendocs && go run main.go ../../../defang-docs/docs/cli
cd -
node scripts/prep-cli-docs.js
node scripts/prep-samples.js
