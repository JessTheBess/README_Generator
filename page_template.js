const readMeGen = (data) => {
    return `# 
    ${data.name}
    ## license:

    ![license](https://img.shields.io/badge/license-${data.license}-blue.svg) 
    
    ## table of contents:
    - [license](#license)
    - [description](#description)
    - [installation](#installation)
    - [usage](#usage)
    - [contributors](#contributors)
    - [github](#github)
    - [email](#email)
    - [tests](#tests)
    
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