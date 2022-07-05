#!/bin/bash

for dir in ./bit-components/node_modules/@awesome-backbone/*
do
    ln -s ../."$dir" ./node_modules/@awesome-backbone
done