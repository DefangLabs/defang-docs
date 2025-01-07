#!/bin/bash

set -e

CWD=$(pwd)
CLI_DOCS_PATH=$(readlink -f docs/cli)

# In CI (github actions), the defang and samples repositories must be cloned
# into the working directory of the `defang-docs` repository.
# In local development, however, the defang and samples repositories are cloned
# into the parent directory of the `defang-docs` repository.
if [ -d "../defang" ]; then
  DEFANG_PATH=$(readlink -f ../defang)
else
  DEFANG_PATH=$(readlink -f ./defang)
fi

cd "$DEFANG_PATH/src/cmd/gendocs" && go run main.go "$CLI_DOCS_PATH"
cd "$CWD"
node scripts/prep-cli-docs.js
