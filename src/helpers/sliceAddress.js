function sliceAddress(address) {
    return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''
}

export default sliceAddress;
