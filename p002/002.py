a, b = 0, 1

result = b
counter = 1
sumOfNums = 0
limit = 4000000

for x in range(limit):
    if(result % 2 == 0 and result <= limit):
        sumOfNums += result
        result = a+b
        a = b
        b = result
        counter += 1
    else:
        result = a+b
        a = b
        b = result

print("The sum is", str(sumOfNums))
