sumOfSquares = 0
sumSquared = 0
for i in range(1, 100):
    import pdb
    pdb.set_trace()
    temp = i
    temp *= temp
    sumOfSquares += temp

for i in range(1, 100):
    sumSquared += i

sumSquared *= sumSquared
difference = sumSquared-sumOfSquares
print(sumOfSquares)
print(sumSquared)
print(difference)
