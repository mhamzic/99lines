let friends = ["John", "Mary", "Brad", "Ann", "Steve"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].toLocaleUpperCase() + ":");
  for (let j = 100; j >= 1; j--) {
    if (j > 1) {
      console.log(
        `${j} lines of code in the file, ${j} lines of code; ${
          friends[i]
        } strikes one out, clears it all out, ${j -
          1} lines of code in the file`
      );
    } else {
      console.log(
        `${j} line of code in the file, ${j} line of code; ${
          friends[i]
        } strikes one out, clears it all out, ${j - 1} line of code in the file`
      );
    }
  }
}
