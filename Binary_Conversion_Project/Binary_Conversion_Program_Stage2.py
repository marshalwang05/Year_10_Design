import tkinter as tk

print("Stage 2")


def process(*args):
	print("process")

	val= ent_value.get()
	print(val)




	#Ensure that all digits are either 0 or 1


	#If val is valid
		#Remove leftmost 0
		#Conversions
		#Update display wiht conversions

	#Else
		#Display Error

	ent_value.delete(0, tk.END)


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











