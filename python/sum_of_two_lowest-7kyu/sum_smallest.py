def sum_two_smallest_numbers(numbers):

    """ return sum of the smallest two integers in a list
    >>> sum_two_smallest_numbers([37,51,95,23])
    60
    >>> sum_two_smallest_numbers([5, 8, 12, 18, 22])
    13
    >>> sum_two_smallest_numbers([7, 15, 12, 18, 22])
    19
    >>> sum_two_smallest_numbers([25, 42, 12, 18, 22])
    30

    >>> sum_two_smallest_numbers([5, 8, 12, .18, 22])
    Traceback (most recent call last):
     ...
    TypeError: all list members must be integers
    >>> sum_two_smallest_numbers([5, 8, 12])
    Traceback (most recent call last):
     ...
    ValueError: input list must have length at least 4
    >>> sum_two_smallest_numbers('hello')
    Traceback (most recent call last):
     ...
    TypeError: input must be integer list
    """

    if not isinstance(numbers, list):
        raise TypeError('input must be integer list')
    if len(numbers) < 4:
        raise ValueError('input list must have length at least 4')
    for x in range(len(numbers)):
        if not isinstance(numbers[x], int):
            raise TypeError('all list members must be integers')
        else:
            pass

    numbers.sort()
    return numbers[0] + numbers[1]
