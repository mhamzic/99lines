let friends = ["John", "Mary", "Brad", "Ann", "Steve"];

const lines = n => (n === 1 ? "line" : "lines");

for (let friend of friends) {
  console.log(friend.toLocaleUpperCase() + ":");
  for (let j = 10; j >= 1; j--) {
    console.log(
      `${j} ${lines(j)} of code in the file, ${friend} strikes one out; ${j - 1 ||
        "no more"} ${lines(j - 1)} of code in the file!`
    );
  }
}
