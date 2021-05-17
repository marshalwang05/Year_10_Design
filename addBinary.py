# Function 1:
# Name: addBinary
# Parameters: Two Strings where each string is a valid binary representation
# Return: A string representing the sum of the two passed binary values as a binary number.

# First Number:  101101
# Second Number:   1001
# 1+1   = 0
# 0+0+1 = 1
# 1+0+0 = 1
# 1+1+0 = 0
# 0+1   = 1
# 1     = 1

a = "101101"
b = "1001"

int(a,2)+int(b,2)


(BASE10).toString(NEWBASE)
parseInt("BASEOTHERBASE", OTHERBASE)

a = (32767).toString(16)  // result: "7fff"
b = (255).toString(8)     // result: "377"
c = (1295).toString(36)   // result: "zz"
d = (127).toString(2)     // result: "1111111"