let club =[
    {vards : "Jānis", uzvards: "liepa", loma: "leader", hour:1},
    {vards : "Janka", uzvards: "dzirnava", loma: 'leader', hour:3},
    {vards : "Kevins", uzvards: "Gilovs", loma: member, hour:2},
    {vards : "Sergejs", uzvards: "pods", loma: member, hour:1},
    {vards : "Andrejs", uzvards: "brivna", loma: member, hour:7},
    {vards : "Peters", uzvards: "merkurijs", loma: member, hour:3},
    {vards : "Vitols", uzvards: "garāža", loma: member, hour:2},
]
for( i = "leader" ; i < club.loma; i++ ) {
    club.loma ="leader";
    console.log(i);
}
console.log("kopā ir 19 stundas")