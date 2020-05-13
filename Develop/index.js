const fs = require('fs')
const inquirer = require('inquirer')
const generatePage = require('./page-template')

const promptUser = () => {
    return inquirer
    .prompt([
        {
            // title of the read me
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('please enter your projects name');
                    return false;
                }
            }
        },
        {
            // description
            type: 'input',
            name: 'description',
            message: 'Please describe what this project does!',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please describe what this project does!');
                    return false;
                }
            }
        },
        {
            // installation instructions
            type: 'install',
            name: 'installInst',
            message: 'Would you like to enter installation instructions?',
            default: true,
            validate: installInstInput => {
                if (installInstInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions.');
                    return false;
                }
            }
        },
        {
            // useage information
            type: 'useage',
            name: 'useageInfo',
            message: 'Please provide instructions and examples for use:',
            validate: useageInput => {
                if (useageInput) {
                    return true;
                } else {
                    console.log('Please include examples.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'what did you this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
            validate: languageInput => {
                if (languageInput) {
                    return true;
                } else {
                    console.log('Please describe what this project does!');
                    return false;
                }
            }
        },
        {
            // contribution 
            type: 'collab',
            name: 'collaborators',
            message: 'Please list your collaborators, if any, with links to their GitHub profiles, any third-party assets, or tutorials with links:',
            validate: collabInput => {
                if (collabInput) {
                    return true;
                } else {
                    console.log('No collaborators?');
                    return false;
                }
            }
        },
        {
           // choose a license from list of options provided
            type: 'license',
            // badge for the license is added to the read me entitled 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log("Please choose a license")
                    return false;
                }
            }
        },
        {
            // github 
            type: 'input',
            name: 'link',
            message: 'please enter your github username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your github username');
                    return false;
                }
            }
        },
        {
            // enter email - save to the read me section 'questions
            type: 'input',
            name: 'email',
            message: 'The best email to reach you: ',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email');
                    return false;
                }
            }
        },
        
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if(projectData.confirmAddProject) {
            return gitQuestions(portfolioData);
        } else {
            return portfolioData;
        }
    })
};

// call
questions().then(answers => 
    fs.writeFile('./README.md', generateReadme(answers), err => {
        if (err) throw new Error(err);
        console.log('README.md file created !')
    })
)


// function to write README file
// // function writeToFile(fileName, data) {
//     promptUser()
//         .then(promptProject)
//         .then(portfolioData => {
//     const pageHTML = generatePage(portfolioData);

//     // fs.writeFile('./index.html', pageHTML, err => {
//     //   if (err) throw new Error(err);
//     //   console.log('Page created! Check out index.html in this directory to see it!');
//     // });
//   });




// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
