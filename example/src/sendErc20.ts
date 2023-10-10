import { StarknetWindowObject } from "get-starknet"
import "starknet"

export const sendErc20Transaction = async (wallet: StarknetWindowObject) => {
  let account = wallet.account

  const response = await account.invokeFunction(
    {
      contractAddress:
        "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
      calldata: [
        "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
        "10",
        "0",
      ],
      entrypoint: "transfer",
    },
    {
      maxFee: 0,
    },
  )

  console.log("erc20 response is =-=----->", response)
}
