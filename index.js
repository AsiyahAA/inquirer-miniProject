const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where do you live?',
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Write a short bio:',
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'What is your LinkedIn URL?',
      },
      {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub URL?',
      },
  ])
  .then(ans=>{
    console.log(ans)
    const htmlString = `<!DOCTYPE html>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Mini-Project Portfolio</title>
</head>
<body>
    <h1>My Portfolio</h1>

    <h2>${ans.name}</h2>

    <h2>${ans.location}</h2>

    <h2>${ans.bio}</h2>

    <h2>${ans.linkedIn}</h2>

    <h2>${ans.gitHub}</h2>`
    const lower = ans.name
    const lowerCase = lower.toLowerCase()
    fs.writeFile(`./output/${lowerCase}.html`,
    htmlString, (err,data) => {if(err){throw err}
    // console.log(success)
})
    // const htmlString =

//     `<!DOCTYPE html>
//     <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="style.css">
//     <title>Mini-Project Portfolio</title>
// </head>
// <body>
//     <h1>My Portfolio</h1>

//     <h2>${ans.name}</h2>

//     <h2>${ans.location}</h2>

//     <h2>${ans.bio}</h2>

//     <h2>${ans.linkedIn}</h2>

//     <h2>${ans.gitHub}</h2>`
  })