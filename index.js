const fs = require('fs');
const WB = require('kryptokrona-wallet-backend-js');
const readline = require('readline');
const colors = require('colors');

// Function to clear the screen
function clearScreen() {
    process.stdout.write('\u001b[2J\u001b[0;0H');
}

// Function to get wallet info
async function getWalletInfo(wallet) {
    const primaryAddress = await wallet.getPrimaryAddress();
    if (!primaryAddress) {
        throw new Error("Primary address is undefined.");
    }

    console.log("Wallet Address:".green, primaryAddress);
    console.log('');

    const [publicSpendKey, privateSpendKey, err] = await wallet.getSpendKeys(primaryAddress);
    if (err) {
        throw new Error('Failed to get spend keys for address: ' + err.toString());
    }
    console.log('Public Spend Key:'.green, publicSpendKey);
    console.log('');
    console.log('Private Spend Key:'.green, privateSpendKey);
    console.log('');

    const [seed, error] = await wallet.getMnemonicSeedForAddress(primaryAddress);
    if (error) {
        console.log('Address does not belong to a deterministic wallet: ' + error.toString());
    } else {
        console.log("Mnemonic Seed:".green, seed);
        console.log('');
    }

    const privateViewKey = await wallet.getPrivateViewKey(primaryAddress);
    console.log("Private View Key:".green, privateViewKey);
    console.log('');

    // Takes the wallet info and converts it into a JSON string.
    const walletInfo = {
        walletAddress: primaryAddress,
        publicSpendKey,
        privateSpendKey,
        mnemonicSeed: seed,
        privateViewKey
    };

    const walletInfoString = JSON.stringify(walletInfo);

    return walletInfoString;
}

// Function to handle user input
function handleUserInput(wallet) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('Kryptokrona Cold Wallet Generator'.green);
    console.log('');
    rl.question('What do you want to do? (1. Print wallet info, 2. Exit): ', async (choice) => {
        if (choice === '1') {
            try {
                console.clear();
                const walletInfoString = await getWalletInfo(wallet); // Get wallet info
                rl.question('Do you want to save the wallet info? (1. Yes, 2. No): ', (saveChoice) => {
                    if (saveChoice === '1') {
                        fs.writeFileSync("walletinfo.json", walletInfoString); // Write to file
                        console.log('Succesfully saved wallet info!'.green);
                        rl.close();
                    } else if (saveChoice === '2') {
                    rl.close();
                    }
                });
            } catch (error) {
                console.error("Error:", error.message);
                rl.close();
            }
        } else if (choice === '2') {
            console.log('Exiting..');
            rl.close();
        } else {
            console.log('Invalid choice.');
            rl.close();
        }
    });
}

// Main function
async function main() {
    clearScreen();
    try {
        const daemon = new WB.Daemon('127.0.0.1', 11898);
        const wallet = await WB.WalletBackend.createWallet(daemon);
        handleUserInput(wallet);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Call the main function
main();
