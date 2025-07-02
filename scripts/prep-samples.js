const fs = require('fs');
const path = require('path');
const YAML = require('yaml');

const samplesDir = process.argv[2];
let samplesMdContent = ''

// Inspired by https://github.com/compose-spec/compose-go/blob/main/template/template.go
const interpolationRegex =
  /(?<!\$)\$(?:{([_a-z][_a-z0-9]*)}|([_a-z][_a-z0-9]*))/gi; // [1] = ${var}, [2] = $var

function interpolatedVars(str) {
    return Array.from(str.matchAll(interpolationRegex), (match) => match[1] || match[2]);
}

// categories are directories in the current directory (i.e. we're running in samples/ and we might have a samples/ruby/ directory)
const directories = fs.readdirSync(samplesDir).filter(file => fs.statSync(path.join(samplesDir, file)).isDirectory());

let jsonArray = [];

directories.forEach((sample) => {
    const directoryName = sample;
    console.log(`@@ Adding ${sample}`);
    let readme;
    try {
        readme = fs.readFileSync(path.join(samplesDir, sample, 'README.md'), 'utf8');
        // replace the text after the first `#` with a link to the sample
        // readme = readme.replace(/^# (.*)/, `# [$1](https://github.com/DefangLabs/samples/tree/main/samples/${sample})`);
        readme = readme.replace(/^# (.*)/, (match, p1) => {
            return `# [${p1}](https://github.com/DefangLabs/samples/tree/main/samples/${sample})`;
        });
        samplesMdContent += readme + "\n\n";
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
    let title, shortDescription, tags, languages;
    try {
        title = readme.match(/Title: (.*)/)[1];
        shortDescription = readme.match(/Short Description: (.*)/)[1];
        tags = readme.match(/Tags: (.*)/)[1].split(',').map(tag => tag.trim());
        languages = readme.match(/Languages: (.*)/)[1].split(',').map(language => language.trim());
    } catch (error) {
        console.log(`@@ Failed to parse readme for sample ${sample}`, error);
        return;
    }

    let configs = new Set();
    try {
        composeFile = fs.readFileSync(path.join(samplesDir, sample, 'compose.yaml'), 'utf8');
        compose = YAML.parse(composeFile);

        for (var name in compose.services) {
            service = compose.services[name]
            if (Array.isArray(service.environment)) {
                service.environment.forEach(env => {
                    if (!env.includes("=")) {
                        configs.add(env);
                    }
                    interpolatedVars(env).forEach(v => {
                        configs.add(v);
                    });
                });
            } else {
                for (var name in service.environment) {
                    value = service.environment[name];
                    if (value === null || value === undefined || value === "") {
                        configs.add(name);
                    }
                    if (typeof value === 'string') {
                        interpolatedVars(value).forEach(v => {
                            configs.add(v);
                        });
                    }
                }
            }
        }
    } catch (error) {
        // Ignore if the sample doesn't have a compose file
        if (error.code != 'ENOENT') {
            console.log(`failed to parse compose for configs for sample`, sample, error);
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
    if (configs.size > 0) {
        sampleSummary.configs = Array.from(configs);
    }
    jsonArray.push(sampleSummary);

    console.log(`@@ Added ${sample}`);
});

const stringified = JSON.stringify(jsonArray, null, 2);

// exclude any lines which start with '---'
samplesMdContent = samplesMdContent.replace(/---.*\n/g, '');
// exclude any lines which include markdown images `![`
samplesMdContent = samplesMdContent.replace(/^.*!\[.*\]\(.*\).*\n?/gm, '');

// increase the header level of all headers in the markdown content
samplesMdContent = samplesMdContent.replace(/^(#{1,6})\s/gm, (match) => {
    const headerLevel = match.length - 1; // number of '#' characters
    const newHeaderLevel = Math.min(headerLevel + 1, 6);
    return '#'.repeat(newHeaderLevel) + ' ';
});

const frontMatter = `---
sidebar_class_name: hidden
title: Samples
description: A collection of sample applications and configurations for Defang Labs.
---
`;
// prefix samplesMdContent with the front matter
samplesMdContent = frontMatter + "\n\n" + samplesMdContent;

const samplesMd = path.join(__dirname, '..', 'docs', 'samples.md');
console.log(`@@ Writing samples markdown to ${samplesMd}`);
fs.writeFileSync(samplesMd, samplesMdContent);

// save the json to the samples.json file in static
fs.writeFileSync(path.join(__dirname, '..', 'static', 'samples-v2.json'), stringified);
