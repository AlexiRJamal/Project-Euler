import math


def pythagorean(num1, num2):
    return num1**2 + num2**2


def checkPythagorean(a, b, c):
    return pythagorean(a, b) == c**2


PERMIMETER = 1000
for a in range(1, PERMIMETER):
    for b in range(a+1, PERMIMETER):
        c = math.sqrt(pythagorean(a, b))
        if checkPythagorean(a, b, c) == True:
            if(a+b+c == 1000):
                print("a is", a)
                print("b is", b)
                print("c is", c)
