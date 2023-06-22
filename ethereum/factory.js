import web3 from "./web3";
import campaignfactory from './build/CampaignFactory.json'

const instance=new web3.eth.Contract(
    JSON.parse(campaignfactory.interface),
    "0x5C6751CE3f6F5818aCA3b671bb2902d7Bff5e6EF"
);

export default instance;