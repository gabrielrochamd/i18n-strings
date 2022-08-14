import fs from 'fs';

function createStringsFiles(path: string) {
    console.log('Creating strings/en.json...');
    fs.writeFile(`${path}/en.json`, '{}', (err) => {
        if (err) throw err;
        console.log(`Created file ${path}/en.json`);
    });
    console.log('Creating strings/pt-br.json...');
    fs.writeFile(`${path}/pt-br.json`, '{}', (err) => {
        if (err) throw err;
        console.log(`Created file ${path}/pt-br.json`);
    });
}

export function init() {
    let projectRoot = process.env.npm_config_local_prefix;
    if (projectRoot) {
        projectRoot = projectRoot.replace(/\\/g, '/');
        const stringsDirectory = `${projectRoot}/strings`;
        console.log('Initializing i18n-strings in the project');
        if (fs.existsSync(stringsDirectory)) {
            createStringsFiles(stringsDirectory);
        } else {
            fs.mkdirSync(stringsDirectory);
            createStringsFiles(stringsDirectory);
        }
    } else {
        console.error('Could not find project root');
    }
}