const fs = require('fs');
const path = require('path');

const samplesDir = path.join(__dirname, '..', 'defang', 'samples');

// categories are directories in the current directory (i.e. we're running in samples/ and we might have a samples/ruby/ directory)
const directories = fs.readdirSync(samplesDir).filter(file => fs.statSync(path.join(samplesDir, file)).isDirectory());

let jsonArray = [];

directories.forEach((category) => {
    // in each category, we have a series of subdirectories that are the actual samples (which contain full programs, including a README.md)
    // we're going to loop through those directories and create a JSON object for each one
    const samples = fs.readdirSync(path.join(samplesDir, category))
        .filter(file => fs.statSync(path.join(samplesDir, category, file)).isDirectory());
    samples.forEach((sample) => {
        const name = sample;

        let readme;
        try {
            readme = fs.readFileSync(path.join(samplesDir, category, sample, 'README.md'), 'utf8');
        } catch (error) {
            readme = `# ${sample}`;
        }

        jsonArray.push({
            name,
            category,
            readme,
        });
        console.log(`@@ Added ${category}/${sample}`);
    });
});

const stringified = JSON.stringify(jsonArray, null, 2);

fs.writeFileSync(path.join(__dirname, '..', 'samples.json'), stringified);

// we're going to open up the ../docs/samples.md file and replce [] with the stringified JSON

const samplesMd = path.join(__dirname, '..', 'docs', 'samples.md');
let samplesMdContents = fs.readFileSync(samplesMd, 'utf8');
samplesMdContents += `<Samples samples={${stringified}} />`;
fs.writeFileSync(samplesMd, samplesMdContents);
