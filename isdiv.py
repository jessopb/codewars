""" isdiv works thusly:
Create a function isDivisible(n, x, y)
that checks if a number n is divisible
by two numbers x AND y. All inputs are
positive, non-zero digits.
"""


# isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
# isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
# isDivisible(100,5,3)--> false because 100 is not divisible by 3
# isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5

def is_divisible(n,x,y):
    """is divisible checks if a number n is divisible
    by two numbers x AND y. All inputs are
    positive, non-zero digits.

    >>> is_divisible(3,1,3)
    True
    >>> is_divisible(12,2,6)
    True
    >>> is_divisible(100,5,3)
    False
    >>> is_divisible(12,7,5)
    False

    >>> is_divisible(0,1,1)
    Traceback (most recent call last):
     ...
    ValueError: Must be integer greater than 0
    >>> is_divisible(1,0,1)
    Traceback (most recent call last):
     ...
    ValueError: Must be integer greater than 0
    >>> is_divisible(1,1,0)
    Traceback (most recent call last):
     ...
    ValueError: Must be integer greater than 0
    """

    if n < 1 or x < 1 or y < 1:
        raise ValueError('Must be integer greater than 0')

    return n % x == 0 and n % y == 0
        
