import tkinter as tk

print("Stage 1")


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


root.mainloop()






















