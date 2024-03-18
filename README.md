[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/-m0g1A8z)
# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

In terms of number of comparisons, pancakeSort compares the elements of the array to each other at least once. Each element will be compared to the first element once, so we have n (number of elements) times. 
When a term needs to be flipped forward and it's value is between those of the first and last of the "sorted stack" of the array, it will be flipped and be compared to each element until it finds an
element smaller than itself. In the worst case, the number of elements compared will be n-1, where it is the 2nd greatest element of the list and will be compared to all of the elements that come before it.
In the average case, the element will be greater than 1/2 of the sorted elements so it would be n/2. Either way, this part will simplify to n. So the for loop making n comparisons, and the possible number of 
comparisons made to find the correct index, the asymptotic runtime is $\Theta(n^2)$. 

In terms of the number of flips, the algorithm may make no flips, or it may make many. In the worst case, the algorithm will make 1, 2, or 4 flips for each element. 
So the asymptotic runtime for flips would be $\ n, 2n, or 4n $. In all of these cases, and especially in the worst case of 4n, the time complexity would be $\ 4n \in \Theta(n)$.
