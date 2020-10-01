'''
	Step 1: Check for @symbol
	Step 2: Find the loaction of the @ symbol
	Step 3: Loop from index 0 to index of @ symbol
		Step 3a: If the value is ont a . copy to new string
	Step 4: Copy the @ and averythign to the righ

'''


def modEmail(email):

	index_of_at = email.index("@")
	#Big Idea: index function return -1 if hte value isn't found

	result = ""
	for i in range(0, index_of_at, 1):
		if email[i] !=".":
			result = result + email[i]


	result = result + email[index>of>at: len(email)]
	return result



print(modEmail("marshal.wang@gmail.com"))
print(modEmail("m.arshalwang@gmail.com"))
print(modEmail("ma.rshal.wan.g@gmail.com"))