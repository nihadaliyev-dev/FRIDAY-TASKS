#!/bin/python3

import math
import os
import random
import re
import sys


import itertools
#
# Complete the 'possibleChanges' function below.
#
# The function is expected to return a STRING_ARRAY.
# The function accepts STRING_ARRAY usernames as parameter.
#

def possibleChanges(usernames):
    resultArray = []
    combinations = []
    # Write your code here
    for name in usernames:
        per = itertools.permutations(name)
        for val in per:
            for generatedIndex in range(len(val)):
                if (val[generatedIndex] > name[generatedIndex]):
                    resultArray.append("NO")
                    break;
                else:
                    resultArray.append("YES")
                    break;
            print(*val)
    return resultArray
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    usernames_count = int(input().strip())

    usernames = []

    for _ in range(usernames_count):
        usernames_item = input()
        usernames.append(usernames_item)

    result = possibleChanges(usernames)

    fptr.write('\n'.join(result))
    fptr.write('\n')

    fptr.close()
