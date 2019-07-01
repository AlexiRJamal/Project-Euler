import math
s = 0


def checkPrime(num):
    root = math.sqrt(num)
    for i in range(2, root):  # todo: Fix this
        if(num % i == 0):
            return False
    return True


for i in range(2, 2000000):
    if checkPrime(i == True):
        s += i

print("Sum is", str(s))
