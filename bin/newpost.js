const readline = require('readline');
const exec = require('child_process').execSync;
const fs = require('fs');

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

console.info('Welcome to command line interface to creating new post!\n');

const postData = {};
let finish = false;

rl.question('Post title: ', answer1 => {
  postData['title'] = answer1;
  rl.question('Short description: ', answer2 => {
    postData['description'] = answer2;
    rl.question('Your Platzi user: @', answer3 => {
      postData['platziUser'] = answer3;
      finish = true;
      rl.close();
    });
  });
});

rl.on('close', () => {
  const now = new Date();
  const regexDigitsInDate = /([0-9]{2})/g;
  const DigitsInDate = now.toISOString().match(regexDigitsInDate);
  const slug = textToSlug(postData.title);

  postData['fileName'] = `${DigitsInDate[2]}${DigitsInDate[3]}-${slug}.md`;
  postData['date'] = now.toISOString();

  try {
    postData['author'] = exec('git config --get user.name').toString().slice(0,-1);
    postData['email'] = exec('git config --get user.email').toString().slice(0,-1);
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
<<<<<<< HEAD
    fs.statSync(`content/${DigitsInDate[0]}${DigitsInDate[1]}/${postData.fileName}`);
    console.error('Error!!: The post has already been created');
=======
    fs.statSync(`content/${DigitsInDate[0]}${DigitsInDate[1]}/${postData.fileName}`)
    console.error('\nError!: The post has already been created');
>>>>>>> bae41bae3f28f8b39a052c7d1fbee5dca2903953
  } catch (err) {
    fs.writeFileSync(`content/${DigitsInDate[0]}${DigitsInDate[1]}/${postData.fileName}`, `---
title: '${postData.title}'
date: '${postData.date}'
description: '${postData.description}'
author: '${postData.author}'
email: '${postData.email}'
platziUser: '${postData.platziUser}'
---`);
    console.info(`\nSuccess!!: content/${DigitsInDate[0]}${DigitsInDate[1]}/${postData.fileName} was created`);
  }
});
<<<<<<< HEAD
=======

rl.on('SIGINT', () => rl.pause() );

rl.on('pause', () => {
  if (!finish) console.log('\nBye!\n');
});

const textToSlug = text => {
  return encodeURI(text
    .replace(/Á/gi, "a")
    .replace(/É/gi, "e")
    .replace(/Í/gi, "i")
    .replace(/Ó/gi, "o")
    .replace(/Ú/gi, "u")
    .replace(/À/gi, "a")
    .replace(/È/gi, "e")
    .replace(/Ì/gi, "i")
    .replace(/Ò/gi, "o")
    .replace(/Ù/gi, "u")
    .replace(/ñ/gi, "n")
    .replace(/\?/gi, "")
    .replace(/¿/gi, "")
    .replace(/!/gi, "")
    .replace(/¡/gi, "")
    .replace(/ /g, '-')
    .toLowerCase()
    .substr(0, 39));
}
>>>>>>> bae41bae3f28f8b39a052c7d1fbee5dca2903953
