import math

def areaOfCircle():
	x1 = input()
	x1 = float(x1)

	y1 = input()
	y1 = float(y1)

	x2 = input()
	x2 = float(x2)

	y2 = input()
	y2 = float(y2)


	r = ((x2-x1)**2 + (y2-y1)**2)**0.5

	a = 3.14159*r*r

	print(a)

areaOfCircle()