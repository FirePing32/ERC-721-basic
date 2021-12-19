async function main() {
  // We get the contract to deploy
  const NagarPalika = await ethers.getContractFactory("NagarPalika");
  const nagarPalika = await NagarPalika.deploy();

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });