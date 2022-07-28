# Setting up Smart Contract developement

- Clone the entire repository

- Install 

  [Truffle]: https://trufflesuite.com/docs/truffle/getting-started/installation/	"Truffle"
  [Ganache]: https://trufflesuite.com/ganache/	"Ganache"

- Install 

  [MetaMask]: https://metamask.io/	"Metamask"

   in your browser.

- Run `npm install` to get all the remaining local dependencies.

- You are ready to make changes to the local .sol files. Use vscode with solidity extensions for best experience. 

- Once you have made the necessary changes. Compile the solidity code using `truffle compile` .

- To deploy this code on the test blockchain of Ganache GUI use `truffle migrate --reset` .

- Copy the ABI to the frontend and proceed as mentioned in frontend.

- Use the remaining of your accounts in Ganache by adding them into metamask to test your changes using react frontend

- Also using the test script inside /test, you can test the contracts using `truffle test`

  