var = "5 10 1 3 10 4 2 3 1 2 8 5 3 3 5 0"
var = var.split()
print(var)

for i in range (0, len(var), 1):
	var[i] = int(var[i])

print (var)

rowsum1 = var[0]+var[1]+var[2]+var[3]
rowsum2 = var[4]+var[5]+var[6]+var[7]
rowsum3 = var[8]+var[9]+var[10]+var[11]
rowsum4 = var[12]+var[13]+var[14]+var[15]

colsum1 = var[0]+var[4]+var[8]+var[12]
colsum2 = var[1]+var[5]+var[9]+var[13]
colsum3 = var[2]+var[6]+var[10]+var[14]
colsum4 = var[3]+var[7]+var[11]+var[15]

if rowsum1 != rowsum2:
	print("not magic")
elif rowsum1 != rowsum3:
	print ("not magic")
elif rowsum1 != rowsum4:
	print ("not magic")
elif rowsum1 != colsum1:
	print ("not magic")
elif rowsum1 != colsum2:
	print ("not magic")
elif rowsum1 != colsum3:
	print ("not magic")
elif rowsum1 != colsum4:
	print ("not magic")
else:
    print("magic")
    

    
    
    