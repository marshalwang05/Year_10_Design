import tkinter as tk

print("Stage 2")


def process(*args):
	print("process")

	val= ent_value.get()
	print(val)




	#Ensure that all digits are either 0 or 1
	check = check01(val)
	print(check)



	if (check==True):
		#Remove leftmost 0
		val = remove0 (val)
		#Conversions
		#Update display wiht conversions
		lab_results.configure(text= "VALID INPUT " + val)
	else:

		lab_results.configure(text = "INVALID")
		#Display Error

	ent_value.delete(0, tk.END)

def remove0(str):
	for i in range(0, len(str), 1):
		if (str[i]=="1"):
			return (str[i:])

	return str



def check01(str):
	
	num_0 = str.count("0")
	num_1 = str.count("1")

	if num_0+num_1 == len(str):
		return True



root = tk.Tk()






#Construct the Widgets
lab_instructions = tk.Label(root, text = "Entry Binary")
ent_value = tk.Entry(root)
lab_results = tk.Label(root, text = "--")


#Configure the Widgets


#Add Widgets to the window
lab_instructions.pack()
ent_value.pack()
lab_results.pack()


root.bind("<Return>", process)
root.mainloop()











