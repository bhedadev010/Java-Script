// 2a. At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. 
//     Use JavaScript to calculate the cost of the order.

10+(8*3)+5
39

// 2b. You're at a restaurant with 2 friends (3 people in total) and make the same order as 2a.
//     Calculate how much each person pays.

a/3
13

// 2c. Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).

18.50+(7.50*2)
33.5

// 2d. Calculate a 10% tax for the total in exercise 2c.

(18.50+(7.50*2))*1/10
3.35

// 2e. Calculate a 20% tax for the total in 2c (remember that 1% = 1/100, so 20% = 20/100 = 0.2).

(18.50+(7.50*2))*0.2
6.7

// 2f. Calculate the cost of the products (before shipping and taxes).
//     Hint: calculate in cents to avoid inaccuracies.

a = ((1899)+2095+799)/100
47.93

// 2g. Calculate the Total before tax.

a+=4.99
52.92

// 2h. Calculate the 10% tax exactly.

Math.round((2095 + 799 + 1899 + 499)*1/10)/100
5.29

// 2j. Let's say we want to always round a number down (2.8 => 2)
//     Using Google or an A.I. tool, search for the code to do this.

Math.floor(2.8)
2

// 2k. Let's always round a number up (2.2 => 3). Search how to do this.

Math.ceil(2.2)
38