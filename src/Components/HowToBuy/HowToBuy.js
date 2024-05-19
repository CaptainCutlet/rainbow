import React from 'react';
import './HowToBuy.css';

const HowToBuy = () => {
    return (
        <div className="how-to-buy">
            <h2>How to Buy</h2>
            <ol>
                <li>Create a Solana wallet and top it with some SOL.</li>
                <li>Log into Raydium or any other Solana DEX that supports $RAINBOW.</li>
                <li>Enter our contract address in the swap field.</li>
                <li>SImply swap SOL for $RAINBOW.</li>
            </ol>
        </div>
    );
}

export default HowToBuy;
