wCount = 0

a = input()
b = input ()
c = input ()
d = input ()
e = input ()
f = input ()


if (a == 'W'):
	wCount = wCount+1
if (b == 'W'):
	wCount = wCount+1
if (c == 'W'):
	wCount = wCount+1
if (d == 'W'):
	wCount = wCount+1
if (e == 'W'):
	wCount = wCount+1
if (f == 'W'):
	wCount = wCount+1

if (wCount == 6 or wCount == 5):
	print (1);
elif (wCount == 4 or wCount == 3):
	print (2)
elif (wCount == 2 or wCount == 1):
	print (3)
else:
	print (-1)