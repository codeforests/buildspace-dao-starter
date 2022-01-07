import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import {readFile, readFileSync} from "fs";

const app = sdk.getAppModule("0xf9f8172b5740B3bf135BDbB06CFF18AdB04736F2");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name : "CodeforestDAO Membership",
            description : "A DAO for the readers of Codeforests.com",
            image : readFileSync("scripts/assets/CF.png"),
            primarySaleRecipientAddress : ethers.constants.AddressZero,

        });
        console.log("successfully deployed the bundle drop, address ", bundleDropModule.address);
        console.log("bundleDrop metadata: ", 
        await bundleDropModule.getMetadata());

    } catch (error) {
        console.log("failed to deploy the bundledrop module", error);
    }
})();
