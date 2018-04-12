def sum_two_smallest_numbers(numbers):

    """ return sum of the smallest two integers in a list

    >>> sum_two_smallest_numbers([37,51,95,23])
    50
    >>> sum_two_smallest_numbers([5, 8, 12, 18, 22])
    13
    >>> sum_two_smallest_numbers([7, 15, 12, 18, 22])
    19
    >>> sum_two_smallest_numbers([25, 42, 12, 18, 22])
    30

    >>> sum_two_smallest_numbers()
    Traceback (most recent call last):
     ...
    TypeError: (input must be integer list with length at least 4)
    >>> sum_two_smallest_numbers([5, 8, 12, .18, 22])
    Traceback (most recent call last):
     ...
    TypeError: (input must be integer list with length at least 4)
    >>> sum_two_smallest_numbers([5, 8, 12])
    Traceback (most recent call last):
     ...
    TypeError: (input must be integer list with length at least 4)
    >>> sum_two_smallest_numbers('hello')
    Traceback (most recent call last):
     ...
    TypeError: (input must be integer list with length at least 4)
    """
    if not isinstance(s, list):
        raise TypeError('input must be integer list with length at least 4')
    if len(s) < 4:
        raise TypeError('input must be integer list with length at least 4')
    for x in range(len(s)):
        if not isinstance(s[x], int):
            raise TypeError('input must be integer list with length at least 4')
        else:
            pass
    else:
        pass


## raise TypeError('most recent call last')
