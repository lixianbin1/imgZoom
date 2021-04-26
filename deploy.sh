#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# push
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:lixianbin1/imgZoom.git master:gh-pages

# 删除dist文件夹
# cd ../
# rm -rf build

# 退出
cd -