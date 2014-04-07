#!/bin/bash
cd tests
node ../r.js -o build.js 

cd ..
grunt qunit