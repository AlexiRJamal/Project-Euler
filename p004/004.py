import time
start = time.time()


def checkPalindrome(num):
    final = 0
    temp = num
    while(num > 0):
        rem = num % 10
        num = int(num/10)
        final = final*10+rem
    if(final == temp):
        return True
    else:
        return False


for i in range(100, 1000):
    for j in range(100, 1000):
        if(checkPalindrome(i*j)):
            maxi = i*j

print(maxi)
end = time.time()
print("Execution time:", end-start)
