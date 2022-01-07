import { ThirdwebSDK }  from "@3rdweb/sdk";
import { ethers } from "ethers";

import dotenv from "dotenv";
dotenv.config();

if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === "") {
    console.log("private key not found");
}

if (!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL === "") {
    console.log("ALCHEMY_API_URL not found");
}
if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS === "") {
    console.log("WALLET_ADDRESS not found");
}

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.PRIVATE_KEY,
        ethers.getDefaultProvider(process.env.ALCHEMY_API_URL),
    ),
);

(async () => {
    try {
        const apps = await sdk.getApps();
        console.log("your app address is ", apps[0].address);
        //0xf9f8172b5740B3bf135BDbB06CFF18AdB04736F2
    } catch(error) {
        console.error("failed to get apps from the sdk", error);
        process.exit(1);
    }
})()

export default sdk;