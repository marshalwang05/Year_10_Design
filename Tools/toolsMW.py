

#Description: isEven takes a single integer value a >= 0 and returns true if it is even and false otherwise. 
#Name: isEven
#Parameter: a
#Returns: boolean


#The isEven function is meant to see if a is even or odd
def isEven(a):
	
	if a%2 == 0:   #If no remainder it's even
		return True

	return False 

print(isEven(0))
print(isEven(10))
print(isEven(9))

for i in range(0, 100, 1):
	print(isEven(i))  #Checks every number from 0-99 to see if it's even or odd




def missing_char(str, n):
  
  #Given a non-empty string and an int n, return a new string where the char at index n has been removed. 
  #The value of n will be a valid index of a char in the original 
  #string (i.e. n will be in the range 0..len(str)-1 inclusive).
  #missing_char('kitten', 1) → 'ktten'
  #missing_char('kitten', 0) → 'itten'
  #missing_char('kitten', 4) → 'kittn'

  #Solution 1
  front = str[:n]
  back = str[n+1:]
  return front + back
  
  #Solution 2
  newStr = ""
  newStr = str[0:n] + str[n+1:len(str)]
  return newStr
  
  #Solution 3
  newStr = ""
  newStr = str[0:n] + str[n+1:]
  

  return newStr
  #0:n goes from 0-(n-1) and n+1: signifies to the end



#List takes nums

def first_last6(nums):
  
  if(nums[0]==6 or nums[len(nums)-1]==6):
    return True
  
  return False


#Concatenation

def hello_name(a):

	#Add hello to a given name 


	



