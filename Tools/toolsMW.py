

#Description: isEven takes a single integer value a >= 0 and returns true if it is even and false otherwise. 
#Name: isEven
#Parameter: a
#Returns: boolean


#The isEven function is meant to see if a is even or odd
def isEven(a):
	
	if a%2 == 0:
		return True

	return False 

print(isEven(0))
print(isEven(10))
print(isEven(9))

for i in range(0 100 1):
	print(isEven(i))