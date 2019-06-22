num = 600851475143
divisor = 2

while(num > divisor):
    if(num % divisor == 0):
        num /= divisor
        divisor = 2
    else:
        divisor += 1
print("The lpf is", divisor)
