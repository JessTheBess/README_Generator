const readMeGen = (data) => {
    return `# 
    ${data.name}
    ## lisence:
    ![license](https://img.shields.io/badge/license-${data.license}-blue.svg) 
    
    ## table of contents:
    - [License](#license)
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributors](#contributors)
    - [Github](#github)
    - [Email](#email)
    - [Tests](#tests)
    
    ## description:
    ${data.desc}
    ## installation:
    ${data.install}
    ## usage:
    ${data.usage}
    ## contributors:
    ${data.cont}
    ## github:
    ${data.github}
    ## email:
    ${data.email}
    ## tests:
    ${data.tests}
    `;
};

module.exports = readMeGen;