#!/usr/bin/env sh

cd ./docs/.vuepress/components;
rm -rf ./txt;
cp -r demo txt;
cd txt;
sudo apt install rename;
rename "s/.vue/.txt/" *;