# SwiftCash - Web Wallet

SWIFT's web wallet is an open-source wallet written in html, css and javascript. All signatures are handled on the client-side and private keys never leave the browser.
To secure the account of users who login with an email and password rather than a private key, the wallet hashes the email and passsword 144,000 times, and then uses the final hash to create an address and private key in the end.
The wallet also enforces very strong passwords using a password strength meter to further secure the accounts against brute-force attacks.

# Hosting
This web wallet is hosted on github, and can be accessed via the following links:

* https://swiftcashproject.github.io/webwallet/
* https://wallet.swiftcash.cc/

To avoid becoming a victim of phishing attacks, make sure you always double check the domain in your browser's address bar. You can also download the wallet and run it locally. But you're still going to need Internet in order to transact with the blockchain.

# License
Copyright (C) 2018 SwiftCash Developers <br />
This software is provided as is and with no gaurantee under the MIT license.

# Support
For support, join http://discord.swiftcash.cc
