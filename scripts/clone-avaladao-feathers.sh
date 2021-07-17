#!/bin/bash
REPO=https://github.com/ACDI-Argentina/avaldao-feathers.git
BRANCH=master
TARGET_DIR=./feathers/app

rm -rf ${TARGET_DIR}
git clone --branch ${BRANCH} ${REPO} ${TARGET_DIR}