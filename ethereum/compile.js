const path = require("path");
const fs = require("fs-extra");
const solc = require("solc");

const buildpath=path.resolve(__dirname,'build');
fs.removeSync(buildpath)

const campaignpath=path.resolve(__dirname,'contracts','campaign.sol')
const source=fs.readFileSync(campaignpath,'utf-8')
const output=solc.compile(source,1).contracts;

fs.ensureDirSync(buildpath);

console.log(output);
for(let contract in output){
    fs.outputJSONSync(
        path.resolve(buildpath,contract.replace(':','')+'.json'),
        output[contract]
    );
}