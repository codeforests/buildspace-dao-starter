import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule("0xf9f8172b5740B3bf135BDbB06CFF18AdB04736F2");

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            name : "Codeforests' first proposals",
            votingTokenAddress : "0x05172578BBeeC92B151D9c998C471e3A36C2402c",
            proposalStartWaitTimeInSeconds: 0,
            proposalVotingTimeInSeconds: 24 * 60 * 60,
            votingQuorumFraction: 0,
            minimumNumberOfTokensNeededToPropose: "0",
        });

        console.log("successfully deployed vote module, address ", voteModule.address);
    } catch(error) {
        console.error("failed to deploy voting module ", error);
    }
})();
