read -p 'Title: ' title
read -p 'Description: ' description
read -p 'Platzi user: ' platziUser

file_name_date=$(date --utc +%d%m)
file_name_title=$(echo ${title// /-} | tr '[:upper:]' '[:lower:]')
file_name=$(echo "$file_name_date-$file_name_title.md")
folder_year=$(date +%Y)

if [ -f $PWD/content/$folder_year/$file_name ]; then
  echo -e "\033[31;40mError!!\033[39;49m: The post has already been created"
  exit 1
fi

touch $PWD/content/$folder_year/$file_name

created_date=$(echo $(date --utc +%FT%T.%3NZ))
author=$(git config --get user.name)
email=$(git config --get user.email)

echo "---
title: '$title'
date: '$created_date'
description: '$description'
author: '$author'
email: '$email'
platziUser: '$platziUser'
---
" >> $PWD/content/$folder_year/$file_name

echo -e "\033[92;40mSuccess!!\033[39;49m: content/$folder_year/$file_name was created"
exit 0