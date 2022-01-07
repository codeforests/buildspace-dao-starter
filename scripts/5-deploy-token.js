import sdk from "./1-initialize-sdk.js"

const app = sdk.getAppModule("0xf9f8172b5740B3bf135BDbB06CFF18AdB04736F2");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name : "Codeforest Governance Token",
            symbol : "CFGT",
        });

        console.log("successfully deployed token, address ", tokenModule.address);
    } catch(error) {
        console.error("failed to deploy token ", error);
    }
}) ();
