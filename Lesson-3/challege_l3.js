// 3k. Using interpolation, create the first line of text (use math to calculate the numbers 4 and 57.88).

`Items(${2+2}) : $${(2095+2095+799+799)/100}`
'Items(4) : $57.88'

// 3l. Create second line of text: "Shipping & handling: $9.98" (use math).

`Shipping and handling : $${(4.99*2)}`
'Shipping and handling : $9.98'

// 3m. Create third line: "Total before tax: $67.86" (use math).

`Total before tax : $${9.98+((2095+2095+799+799)/100)}`
'Total before tax : $67.86'

// 3n. Create fourth line of text: "Estimated tax (10%): $6.79" (use math and Math.round()) 
//     to calculate the exact number.

`Estimated tax(10%) : $${Math.round((2095+2095+799+799+(499*2))/10)/100}`
'Estimated tax(10%) : $6.79'