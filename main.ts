async function main() {
  const meno = process.argv[2];

  if (!meno) {
    console.log("Prosím, zadaj meno ako argument.");
    console.log(" Použitie: node main.js <meno>");
    process.exit(1);
  }

  console.log(`Ahoj, ${meno}!`);
}

main();

