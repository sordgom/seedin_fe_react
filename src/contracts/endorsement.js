export class Endorsement {
    constructor({ contractId, walletToUse }) {
      this.contractId = contractId;
      this.wallet = walletToUse;    
    }
    
    async getToken() {
        return await this.wallet.viewMethod({ contractId: this.contractId, method: 'nft_token' });
    }

    async getMetadata() {
        return await this.wallet.viewMethod({ contractId: this.contractId, method: 'nft_metadata' });
    }

    async mintNft(tokenId, Metadata, receiverId) {
        return await this.wallet.callMethod({ contractId: this.contractId, method: 'nft_mint', args: { token_id: tokenId, metadata: Metadata, receiver_id: receiverId } });
    }
}