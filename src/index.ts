#! /usr/bin/env node

const figlet = require("figlet");
import { Command } from "commander";
import { teams } from "./Teams";

const program = new Command()
program.version('0.0.1')
    .description('Premier League Scores for your terminal')
    .option('-t, --team <value>', 'Get scores/fixtures for a team')
    .option('-a, --all', 'Get all scores/fixtures for a team')
    .parse(process.argv);

const options = program.opts();

if (options.team) {
    const team = typeof options.team === "string" ? options.team : 'no team';
    const foundTeam = teams.find(t => t.hasName(team));
    if (foundTeam) {
        fetch(`http://127.0.01:5000/fixtures/${foundTeam.queryName}`).then((data) => {
            return data.json();
        }).then((fixtures: string[]) => {
            fixtures.forEach(f => {
                console.log(f);
            })
        })
    } else {
        console.error('No Team found with name: ' + team);
    }
}

if (options.all) {
    fetch('http://127.0.01:5000/fixtures').then((data) => {
        return data.json();
    }).then((fixtures: string[]) => {
        fixtures.forEach(f => {
            styleOutput(f);
        })
    })
}

function styleOutput(fixture: string){
    if(fixture.includes('Full time')){
        return console.log('\x1b[41m%s\x1b[0m', 'Ended: ' + fixture);
    }
    if(fixture.includes("'")){
        return console.log('\x1b[42m%s\x1b[0m', 'Active: ' + fixture);
    }
    if(fixture.includes('Half time')){
        return console.log('\x1b[43m%s\x1b[0m', 'Active: ' + fixture);
    }
    return console.log('Scheduled: ' + fixture);
}
