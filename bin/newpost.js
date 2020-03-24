const readline = require('readline');
const exec = require('child_process').execSync;
const fs = require('fs');


const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout
});

const postData = {};

rl.question('Title: ', answer1 => {
  postData['title'] = answer1;
  rl.question('Description: ', answer2 => {
    postData['description'] = answer2;
    rl.question('Platzi user: ', answer3 => {
      postData['platziUser'] = answer3;
      rl.close();
    });
  });
});


rl.on('close', () => {
  const now = new Date();
  const regexDigitsInDate = /([0-9]{2})/g;
  const DigitsInDate = now.toISOString().match(regexDigitsInDate);
  const slug = postData.title.toLowerCase().replace(/ /g, '-').substr(0, 39);

  postData['fileName'] = `${DigitsInDate[2]}${DigitsInDate[3]}-${slug}.md`;
  postData['date'] = now.toISOString();

  try {
    postData['author'] = exec('git config --get user.name').toString().split('\n');
    postData['email'] = exec('git config --get user.email').toString().split('\n');
  } catch (err) {
    postData['author'] = '';
    postData['email'] = '';
  }

  try {
    fs.statSync(`content/${DigitsInDate[0]}${DigitsInDate[1]}`);
  } catch (err) {
    fs.mkdirSync(`content/${DigitsInDate[0]}${DigitsInDate[1]}`);
  }

  try {
    fs.statSync(`content/${DigitsInDate[0]}${DigitsInDate[1]}/${postData.fileName}`) 
    console.error('Error!!: The post has already been created');
  } catch(err) {
    fs.writeFileSync(`content/${DigitsInDate[0]}${DigitsInDate[1]}/${postData.fileName}`, `---
title: '${postData.title}'
date: '${postData.date}'
description: '${postData.description}'
author: '${postData.author}'
email: '${postData.email}'
platziUser: '${postData.platziUser}'
---`);
    console.log(`Success!!: content/${DigitsInDate[0]}${DigitsInDate[1]}/${postData.fileName} was created`);
  }
});
