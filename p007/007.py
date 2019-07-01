import pdb
counter = 0
num = 2
prime = 0


def checkPrime(number):
    for i in range(2, number-1):
        if(number % i == 0):
            return False
        else:
            return True


while(counter < 6):
    pdb.set_trace()
    if(checkPrime(num) == True):
        counter += 1
        prime = num
        num += 1
    else:
        num += 1

print(prime)
