function sliceAddress(address?: string): string {
    return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''
}

export default sliceAddress;
