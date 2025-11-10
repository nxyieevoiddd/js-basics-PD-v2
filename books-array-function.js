let invetory = [
    {title: "Grega dienasgrāmata ", author: "deivs pilkejs", available: "nav"},
    {title: "Mazais pūķis Kokosrieksts", author: "nezināms", available: "ir"},
];
for( i = 1 ; i < invetory.length; i++ ) {
    invetory.length += i;
    console.log(i);
}
console.log(" Grega dienasgrāmata deivs pilkejs nav")