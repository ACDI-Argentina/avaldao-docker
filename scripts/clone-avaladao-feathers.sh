#!/bin/bash
REPO=https://github.com/ACDI-Argentina/avaldao-feathers.git
BRANCH=feature-cu-firmar-conformidad-de-contrato-de-aval
TARGET_DIR=./feathers/app

rm -rf ${TARGET_DIR}
git clone --branch ${BRANCH} ${REPO} ${TARGET_DIR}