
x1 = 2
y1 = 2
x2 = 4
y2 = 8

r = Math.pow((y2-y1)*(y2-y1)-(x2-x1)*(x2-x1),0.5)

a = 3.14159*r*r
//Rounding

a=a*1000
a = Math.round(a)
a=a/1000