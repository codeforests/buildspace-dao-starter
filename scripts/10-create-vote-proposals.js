import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

// Our voting contract.
const voteModule = sdk.getVoteModule(
  "0x8112E5B2C11BAdA45e8e177d977902B2482bA695",
);

// Our ERC-20 contract.
const tokenModule = sdk.getTokenModule(
  "0x05172578BBeeC92B151D9c998C471e3A36C2402c",
);

(async () => {
    try {
      const amount = 420_000;
      await voteModule.propose(
        "Should the DAO mint an additional " + amount + " tokens into the treasury?",
        [
          {
            nativeTokenValue: 0,
            transactionData: tokenModule.contract.interface.encodeFunctionData(
              "mint",
              [
                voteModule.address,
                ethers.utils.parseUnits(amount.toString(), 18),
              ]
            ),
            toAddress: tokenModule.address,
          },
        ]
      );
  
      console.log("✅ Successfully created proposal to mint tokens");
    } catch (error) {
      console.error("failed to create first proposal", error);
      process.exit(1);
    }
  
    try {
      const amount = 6_900;
      await voteModule.propose(
        "Should the DAO transfer " +
        amount + " tokens from the treasury to " +
        process.env.WALLET_ADDRESS + " for being awesome?",
        [
          {
            nativeTokenValue: 0,
            transactionData: tokenModule.contract.interface.encodeFunctionData(
              "transfer",
              [
                process.env.WALLET_ADDRESS,
                ethers.utils.parseUnits(amount.toString(), 18),
              ]
            ),
  
            toAddress: tokenModule.address,
          },
        ]
      );
  
      console.log(
        "✅ Successfully created proposal to reward ourselves from the treasury"
      );
    } catch (error) {
      console.error("failed to create second proposal", error);
    }
  })();
  