# SwiftCash - Web Wallet

SWIFT's web wallet is an open-source wallet written in html, css and javascript. All signatures are handled on the client-side and private keys never leave the browser.
To secure the account of users who login with an email and password rather than a private key, the wallet hashes the email and passsword 144,000 times, and then uses the final hash to create an address and private key in the end.
The wallet also enforces very strong passwords using a password strength meter to further secure the accounts against brute-force attacks.

# Hosting
This web wallet is hosted on github, and can be accessed via the following links:

* https://swiftcashproject.github.io/webwallet/
* https://wallet.swiftcash.cc/

To avoid becoming a victim of phishing attacks, make sure you always double check the domain in your browser's address bar. You can also download the wallet and run it locally. But you're still going to need Internet in order to transact with the blockchain.

# BTC and LTC Support
Bitcoin and Litecoin transactions are created and signed locally and then sent to their own networks using api(s) provided by https://chain.so/ - https://www.blockcypher.com is also used for following up on transaction details.

# Logging in with your private key(s)
You can login with a SwiftCash, Bitcoin, or Litecoin private key. If you login with a SwiftCash private key, the wallet will generate a Btcoin and Litecoin address using your SwiftCash private key. If you login with a Bitcoin private key, the wallet will generate a SwiftCash and Litecoin address using your Bitcoin private key. And if you login with a Litecoin private key, the wallet will generate a SwiftCash and Bitcoin address using your Litecoin private key. It is however highly recommended to use email and password to login if you intend to stash all your cryptos in the same wallet and only use the private key login feature with your paper wallets.

# Transaction Fees
The wallet enforces a minimum of `0.002 SWIFT`, `0.0001 BTC`, and `0.001 LTC` transaction fees and allows users to increase this fee. To help avoid situations in which ridiculously high fees are paid by accident, the wallet enforces a maximum of `0.2 SWIFT`, `0.01 BTC`, and `0.1 LTC` transaction fees respectively.

# License
Copyright (C) 2018-2019 SwiftCash Developers <br />
This software is provided as is and with no guarantee under the MIT license.

# Support
For support, join http://discord.swiftcash.cc
