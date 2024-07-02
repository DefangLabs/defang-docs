const fs = require('fs');
const path = require('path');
const YAML = require('yaml');

const samplesDir = path.join(__dirname, '..', 'samples', 'samples');

// categories are directories in the current directory (i.e. we're running in samples/ and we might have a samples/ruby/ directory)
const directories = fs.readdirSync(samplesDir).filter(file => fs.statSync(path.join(samplesDir, file)).isDirectory());

let jsonArray = [];

directories.forEach((sample) => {
    const directoryName = sample;
    let readme;
    try {
        readme = fs.readFileSync(path.join(samplesDir, sample, 'README.md'), 'utf8');
    } catch (error) {
        readme = `# ${sample}`;
    }

    // The readme should contain lines that start with the following:
    // Title: 
    // Short Description: 
    // Tags: 
    // Languages: 
    // 
    // We want to extract the title, short description, tags, and languages from the readme. Tags and languages are comma separated lists.
    const title = readme.match(/Title: (.*)/)[1];
    const shortDescription = readme.match(/Short Description: (.*)/)[1];
    const tags = readme.match(/Tags: (.*)/)[1].split(',').map(tag => tag.trim());
    const languages = readme.match(/Languages: (.*)/)[1].split(',').map(language => language.trim());

    let configs = [];
    try {
        composeFile = fs.readFileSync(path.join(samplesDir, sample, 'compose.yaml'), 'utf8');
        compose = YAML.parse(composeFile);

        for (var name in compose.services) {
            service = compose.services[name]
            if (Array.isArray(service.environment)) {
                service.environment.forEach(env => {
                    if (!env.includes("=")) {
                        configs.push(env);
                    }
                });
            } else {
                for (var name in service.environment) {
                    value = service.environment[name];
                    if (value === null || value === undefined || value === "") {
                        configs.push(name);
                    }
                }
            }
        }
    } catch (error) {
        // Ignore if the sample doesn't have a compose file
        if (error.code != 'ENOENT') {
            console.log(`failed to parese compose for configs for sample`, sample, error);
        }
    }

    const sampleSummary = {
        name: directoryName,
        category: languages?.[0],
        readme,
        directoryName,
        title,
        shortDescription,
        tags,
        languages,
    };
    if (configs.length > 0) {
        sampleSummary.configs = configs;
    }
    jsonArray.push(sampleSummary);

    console.log(`@@ Added ${sample}`);
});

const stringified = JSON.stringify(jsonArray, null, 2);

// fs.writeFileSync(path.join(__dirname, '..', 'samples.json'), stringified);

// we're going to open up the ../docs/samples.md file and replce [] with the stringified JSON

// const samplesMd = path.join(__dirname, '..', 'docs', 'samples.md');
// let samplesMdContents = fs.readFileSync(samplesMd, 'utf8');
// samplesMdContents += `<Samples samples={${stringified}} />`;
// fs.writeFileSync(samplesMd, samplesMdContents);

// save the json to the samples.json file in static
fs.writeFileSync(path.join(__dirname, '..', 'static', 'samples-v2.json'), stringified);
