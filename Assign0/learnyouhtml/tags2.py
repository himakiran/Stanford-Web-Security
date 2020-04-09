#!/usr/bin/python

import sys
import os
os.system('rm -f tags2.html')
f = open("tags2.html", "a")
f.write("<!DOCTYPE html><html><head><meta charset='utf-8'><title>")
s = '<'*long(sys.argv[1])
f.write(s)
f.close()

os.system('learnyouhtml run tags2.html')
