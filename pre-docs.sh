#!/usr/bin/env zsh

cd ./docs/.vuepress/components;
rm -rf ./txt;
cp -r demo txt;
cd txt;
autoload -U zmv;
zmv '(*).vue' '$1.txt'