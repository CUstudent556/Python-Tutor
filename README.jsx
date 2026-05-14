import { useState, useEffect, useRef } from "react";

const UNITS = [
  {
    id: 1,
    title: "Unit 1: Introduction & Data Structures",
    color: "#1D9E75",
    topics: [
      { id: "basics", label: "Python Basics & Syntax" },
      { id: "datatypes", label: "Data Types & Variables" },
      { id: "control", label: "Control Structures" },
      { id: "lists", label: "Lists" },
      { id: "tuples", label: "Tuples" },
      { id: "dicts", label: "Dictionaries" },
      { id: "sets", label: "Sets" },
      { id: "indexing", label: "Indexing, Slicing & Iteration" },
    ],
  },
  {
    id: 2,
    title: "Unit 2: Functions, Modules & File Handling",
    color: "#378ADD",
    topics: [
      { id: "functions", label: "Function Definitions & Parameters" },
      { id: "returnvals", label: "Return Values & Scope" },
      { id: "modules", label: "Modules & Imports" },
      { id: "fileops", label: "File Operations (read/write)" },
      { id: "filemodes", label: "File Modes & File Objects" },
      { id: "errorhandling", label: "Error Handling" },
    ],
  },
  {
    id: 3,
    title: "Unit 3: OOP & Error Handling",
    color: "#D4537E",
    topics: [
      { id: "oop", label: "OOP Principles & Classes" },
      { id: "objects", label: "Objects & Instantiation" },
      { id: "inheritance", label: "Inheritance" },
      { id: "encapsulation", label: "Encapsulation" },
      { id: "polymorphism", label: "Polymorphism" },
      { id: "exceptions", label: "Try-Except & Raising Exceptions" },
    ],
  },
  {
    id: 4,
    title: "Unit 4: Libraries & Data Analysis",
    color: "#BA7517",
    topics: [
      { id: "numpy", label: "NumPy Basics" },
      { id: "pandas", label: "Pandas – Series & DataFrames" },
      { id: "datacleaning", label: "Data Cleaning & Transformation" },
      { id: "matplotlib", label: "Matplotlib Basics" },
      { id: "pip", label: "Installing via pip" },
    ],
  },
  {
    id: 5,
    title: "Unit 5: Web Development with Flask",
    color: "#7F77DD",
    topics: [
      { id: "flaskbasics", label: "Flask Basics & Setup" },
      { id: "routing", label: "Routing & URL Rules" },
      { id: "requesthandling", label: "Request Handling (GET/POST)" },
      { id: "templates", label: "Template Rendering (Jinja2)" },
      { id: "integration", label: "Integration & Project Structure" },
    ],
  },
];

const TOPIC_CONTENT = {
  basics: {
    title: "Python Basics & Syntax",
    explanation: `Python is a high-level, interpreted, dynamically-typed programming language known for its clean, readable syntax.

**Key features:**
• Interpreted — runs line by line, great for debugging
• Dynamically typed — no need to declare variable types
• Indentation-based — blocks are defined by spaces/tabs (4 spaces is standard)
• Case-sensitive — \`name\` and \`Name\` are different variables

**Comments:**
Use \`#\` for single-line comments. Python ignores everything after \`#\` on that line.

**print() function:**
The most basic output function. It prints anything you pass to it.`,
    code: `# This is a comment - Python ignores it

# Basic print statements
print("Hello, World!")
print(42)
print(3.14)
print(True)

# Multiple values in one print
print("Name:", "Param", "Age:", 24)

# f-strings (formatted strings) - most modern way
name = "Param"
age = 24
print(f"My name is {name} and I am {age} years old.")

# Python is case-sensitive
Name = "Alice"
name = "Bob"
print(Name)  # Alice
print(name)  # Bob`,
    tip: "Python uses indentation (4 spaces) to define code blocks — NOT curly braces like C/Java. Mixing spaces and tabs causes errors!",
  },
  datatypes: {
    title: "Data Types & Variables",
    explanation: `Variables are containers for storing data. Python automatically detects the type.

**Built-in Data Types:**
• \`int\` — whole numbers: \`42\`, \`-10\`, \`0\`
• \`float\` — decimal numbers: \`3.14\`, \`-0.5\`
• \`str\` — text: \`"hello"\`, \`'world'\`
• \`bool\` — True or False
• \`NoneType\` — represents absence of value: \`None\`

**Type Conversion (Casting):**
Convert between types using \`int()\`, \`float()\`, \`str()\`, \`bool()\`

**Checking type:**
Use \`type(variable)\` to find what type a variable is.`,
    code: `# Integer
age = 24
print(type(age))       # <class 'int'>

# Float
gpa = 8.5
print(type(gpa))       # <class 'float'>

# String
name = "Param"
print(type(name))      # <class 'str'>

# Boolean
is_student = True
print(type(is_student))  # <class 'bool'>

# None
result = None
print(type(result))    # <class 'NoneType'>

# Type Conversion
x = "42"
print(int(x) + 8)      # 50  (string to int)
print(float("3.14"))   # 3.14
print(str(100))        # "100"

# Multiple assignment
a, b, c = 1, 2, 3
print(a, b, c)         # 1 2 3

# Swap variables (Python trick!)
a, b = b, a
print(a, b)            # 2 1`,
    tip: "Python is dynamically typed — you don't declare types. But types matter! '5' + 5 causes a TypeError because you can't add string to int.",
  },
  control: {
    title: "Control Structures",
    explanation: `Control structures decide the flow of your program.

**if / elif / else:**
Execute code only if a condition is True.

**for loop:**
Iterate over a sequence (list, string, range, etc.)

**while loop:**
Repeat as long as a condition is True.

**break & continue:**
• \`break\` — exit the loop immediately
• \`continue\` — skip current iteration, go to next

**Comparison operators:** \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`
**Logical operators:** \`and\`, \`or\`, \`not\``,
    code: `# if / elif / else
marks = 85

if marks >= 90:
    print("Grade: A+")
elif marks >= 80:
    print("Grade: A")    # This runs!
elif marks >= 70:
    print("Grade: B")
else:
    print("Grade: C or below")

# for loop with range
for i in range(5):        # 0,1,2,3,4
    print(i, end=" ")
print()                   # newline

# for loop over list
fruits = ["apple", "mango", "banana"]
for fruit in fruits:
    print(fruit)

# while loop
count = 0
while count < 3:
    print(f"Count: {count}")
    count += 1

# break and continue
for i in range(10):
    if i == 3:
        continue          # skip 3
    if i == 6:
        break             # stop at 6
    print(i, end=" ")     # 0 1 2 4 5`,
    tip: "range(start, stop, step) — range(1, 10, 2) gives 1,3,5,7,9. The stop value is NEVER included.",
  },
  lists: {
    title: "Lists",
    explanation: `Lists are ordered, mutable (changeable) collections that can hold any data type.

**Key properties:**
• Ordered — elements maintain their position
• Mutable — can add, remove, change elements
• Allow duplicates
• Zero-indexed — first element is index 0

**Common methods:**
• \`append(x)\` — add x to end
• \`insert(i, x)\` — insert x at position i
• \`remove(x)\` — remove first occurrence of x
• \`pop(i)\` — remove and return element at index i
• \`sort()\` — sort in place
• \`reverse()\` — reverse in place
• \`len(list)\` — get length`,
    code: `# Creating lists
nums = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty = []

# Accessing elements (indexing)
print(nums[0])     # 1 (first)
print(nums[-1])    # 5 (last)
print(nums[-2])    # 4 (second from last)

# Slicing [start:stop:step]
print(nums[1:4])   # [2, 3, 4]
print(nums[:3])    # [1, 2, 3]
print(nums[2:])    # [3, 4, 5]
print(nums[::-1])  # [5, 4, 3, 2, 1] (reversed)

# Modifying
nums.append(6)         # [1,2,3,4,5,6]
nums.insert(0, 0)      # [0,1,2,3,4,5,6]
nums.remove(3)         # removes first 3
popped = nums.pop()    # removes last, returns it
nums.sort()
nums.sort(reverse=True)

# Useful operations
print(len(nums))       # length
print(3 in nums)       # True if 3 exists
print(nums.count(2))   # count occurrences
print(nums.index(4))   # find index of 4

# List comprehension (powerful!)
squares = [x**2 for x in range(1, 6)]
print(squares)         # [1, 4, 9, 16, 25]

evens = [x for x in range(20) if x % 2 == 0]
print(evens)`,
    tip: "List comprehension [expression for item in iterable if condition] is faster and more Pythonic than writing a for loop + append.",
  },
  tuples: {
    title: "Tuples",
    explanation: `Tuples are ordered, immutable (unchangeable) collections.

**Key properties:**
• Ordered — elements maintain position
• Immutable — once created, cannot be changed
• Allow duplicates
• Faster than lists for read-only data
• Used for fixed data (coordinates, RGB colors, database records)

**When to use tuples vs lists:**
• Use tuple when data should NOT change (e.g. coordinates)
• Use list when data will be modified

**Tuple unpacking:**
Assign multiple variables from a tuple at once — very useful!`,
    code: `# Creating tuples
coords = (10, 20)
rgb = (255, 128, 0)
single = (42,)       # Note the trailing comma!
empty = ()

# Accessing (same as lists)
print(coords[0])     # 10
print(rgb[-1])       # 0

# Slicing
t = (1, 2, 3, 4, 5)
print(t[1:4])        # (2, 3, 4)

# Tuples are IMMUTABLE — this causes TypeError:
# coords[0] = 99    ← ERROR!

# Tuple unpacking (very useful!)
x, y = coords
print(f"x={x}, y={y}")   # x=10, y=20

a, b, c = (1, 2, 3)
print(a, b, c)       # 1 2 3

# Swap using tuple unpacking
a, b = b, a          # Python's elegant swap!

# Useful methods
t = (3, 1, 4, 1, 5, 9, 2, 6, 1)
print(t.count(1))    # 3 (how many 1s)
print(t.index(5))    # 4 (index of first 5)
print(len(t))        # 9

# Tuple to list and back
lst = list(t)        # convert to list
tpl = tuple(lst)     # convert back

# Named tuple (advanced but useful)
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 4)
print(p.x, p.y)      # 3 4`,
    tip: "A tuple with one element needs a trailing comma: (42,) — without it, (42) is just the integer 42 in parentheses!",
  },
  dicts: {
    title: "Dictionaries",
    explanation: `Dictionaries store data as key-value pairs. Like a real dictionary — look up a word (key) to get its definition (value).

**Key properties:**
• Keys must be unique and immutable (strings, numbers, tuples)
• Values can be anything
• Ordered (Python 3.7+)
• Mutable — can add, update, delete

**Common methods:**
• \`dict.keys()\` — all keys
• \`dict.values()\` — all values
• \`dict.items()\` — all key-value pairs as tuples
• \`dict.get(key, default)\` — safe access with fallback
• \`dict.update()\` — merge another dict`,
    code: `# Creating dictionaries
student = {
    "name": "Param",
    "age": 24,
    "grade": "A"
}

empty = {}
also_empty = dict()

# Accessing values
print(student["name"])          # Param
print(student.get("age"))       # 24
print(student.get("city", "N/A"))  # N/A (safe!)

# Add / Update
student["city"] = "Lucknow"    # add new key
student["age"] = 25            # update existing

# Delete
del student["grade"]
popped = student.pop("city")   # removes & returns

# Methods
print(student.keys())          # dict_keys(['name','age'])
print(student.values())        # dict_values(['Param', 25])
print(student.items())         # dict_items([...])

# Iterating
for key in student:
    print(key, ":", student[key])

for key, val in student.items():
    print(f"{key} = {val}")

# Nested dictionary
school = {
    "student_1": {"name": "Param", "age": 24},
    "student_2": {"name": "Arjun", "age": 22}
}
print(school["student_1"]["name"])  # Param

# Dict comprehension
squares = {x: x**2 for x in range(5)}
print(squares)   # {0:0, 1:1, 2:4, 3:9, 4:16}

# Merge dicts (Python 3.9+)
d1 = {"a": 1}
d2 = {"b": 2}
merged = d1 | d2
print(merged)    # {'a':1, 'b':2}`,
    tip: "Always use .get() instead of [] when you're not sure if a key exists. dict['missing_key'] raises a KeyError; dict.get('missing_key') returns None safely.",
  },
  sets: {
    title: "Sets",
    explanation: `Sets are unordered collections of unique elements. Perfect for removing duplicates and set math operations.

**Key properties:**
• Unordered — no index, no slicing
• No duplicates — automatically removes them
• Mutable — can add/remove
• Very fast membership testing (O(1))

**Set operations (like in math):**
• Union \`|\` — all elements from both sets
• Intersection \`&\` — elements in BOTH sets
• Difference \`-\` — in first but NOT in second
• Symmetric difference \`^\` — in either but not both`,
    code: `# Creating sets
my_set = {1, 2, 3, 4, 5}
from_list = set([1, 2, 2, 3, 3, 3])  # duplicates removed!
print(from_list)       # {1, 2, 3}

empty_set = set()      # NOT {} — that's a dict!

# Add and remove
my_set.add(99)
my_set.remove(3)       # KeyError if not found
my_set.discard(100)    # safe — no error if missing
popped = my_set.pop()  # removes random element

# Membership test (very fast!)
print(5 in my_set)     # True or False

# Set operations
set1 = {1, 2, 3, 4, 5, 6}
set2 = {4, 5, 6, 7, 8, 9}

print(set1 | set2)     # Union:  {1,2,3,4,5,6,7,8,9}
print(set1 & set2)     # Intersection: {4,5,6}
print(set1 - set2)     # Difference: {1,2,3}
print(set1 ^ set2)     # Sym Diff: {1,2,3,7,8,9}

# Subset / Superset
a = {1, 2}
b = {1, 2, 3, 4}
print(a.issubset(b))   # True — a ⊆ b
print(b.issuperset(a)) # True — b ⊇ a

# Real use case: remove duplicates from list
names = ["Param", "Arjun", "Param", "Neha", "Arjun"]
unique = list(set(names))

# Find unique words in text
text = "to be or not to be that is the question"
words = set(text.split())
print(f"Unique words: {len(words)}")`,
    tip: "Sets are unordered — you can't do set[0]. Use sets when: (1) you need unique values, (2) you need fast membership testing, (3) you need set math operations.",
  },
  indexing: {
    title: "Indexing, Slicing & Iteration",
    explanation: `Indexing, slicing, and iteration are fundamental to working with sequences (strings, lists, tuples).

**Indexing:**
• Positive: 0 = first, 1 = second...
• Negative: -1 = last, -2 = second-to-last...

**Slicing: \`sequence[start:stop:step]\`**
• start: inclusive (default 0)
• stop: exclusive (default end)
• step: how many to skip (default 1)

**Iteration:**
• \`for x in sequence\` — simple iteration
• \`enumerate()\` — get index AND value
• \`zip()\` — iterate over multiple sequences together
• \`range()\` — generate number sequences`,
    code: `s = "Python"
lst = [10, 20, 30, 40, 50]

# --- INDEXING ---
print(s[0])       # P (first)
print(s[-1])      # n (last)
print(lst[2])     # 30
print(lst[-2])    # 40

# --- SLICING [start:stop:step] ---
print(s[0:4])     # Pyth  (stop is exclusive)
print(s[:3])      # Pyt   (from beginning)
print(s[3:])      # hon   (to end)
print(s[::-1])    # nohtyP (reverse!)
print(s[::2])     # Pto   (every 2nd char)

print(lst[1:4])   # [20, 30, 40]
print(lst[::-1])  # [50, 40, 30, 20, 10]

# --- ITERATION ---

# Basic for loop
for char in "Hi":
    print(char)   # H then i

# enumerate — get index AND value
fruits = ["apple", "mango", "banana"]
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
# 0: apple, 1: mango, 2: banana

# zip — iterate two lists together
names = ["Param", "Arjun"]
scores = [90, 85]
for name, score in zip(names, scores):
    print(f"{name}: {score}")

# range(start, stop, step)
for i in range(0, 10, 2):
    print(i, end=" ")   # 0 2 4 6 8

# List comprehension = for + expression
squared = [x**2 for x in range(1, 6)]
print(squared)    # [1, 4, 9, 16, 25]`,
    tip: "s[::-1] reverses any sequence — works on strings, lists, tuples! This is one of Python's most elegant tricks.",
  },
  functions: {
    title: "Function Definitions & Parameters",
    explanation: `Functions are reusable blocks of code. Define once, use many times.

**Syntax:** \`def function_name(parameters):\`

**Types of parameters:**
• Positional — order matters
• Default — has a fallback value
• \`*args\` — variable number of positional args (tuple)
• \`**kwargs\` — variable number of keyword args (dict)

**Scope:**
• Local — variable inside function
• Global — variable outside function
• Use \`global\` keyword to modify global var inside function`,
    code: `# Basic function
def greet(name):
    print(f"Hello, {name}!")

greet("Param")    # Hello, Param!

# Return value
def add(a, b):
    return a + b

result = add(3, 5)
print(result)     # 8

# Default parameters
def power(base, exp=2):
    return base ** exp

print(power(4))      # 16  (uses default exp=2)
print(power(2, 10))  # 1024

# *args — accept any number of positional args
def total(*numbers):
    return sum(numbers)

print(total(1, 2, 3))       # 6
print(total(10, 20, 30, 40)) # 100

# **kwargs — accept any keyword arguments
def display(**info):
    for key, val in info.items():
        print(f"{key}: {val}")

display(name="Param", age=24, city="Lucknow")

# Scope
x = 100          # global

def show():
    x = 50       # local (different from global x)
    print(x)     # 50

show()
print(x)         # 100 (global unchanged)

# Modify global inside function
counter = 0
def increment():
    global counter
    counter += 1

increment()
print(counter)   # 1`,
    tip: "Keep functions small — one function should do ONE thing. A function that does many things is hard to test and reuse.",
  },
  returnvals: {
    title: "Return Values & Scope",
    explanation: `The \`return\` statement exits the function and sends a value back.

**Key points:**
• A function without \`return\` returns \`None\`
• \`return\` can return multiple values (as a tuple)
• Once \`return\` runs, the function exits immediately

**Scope rules (LEGB):**
• L — Local (inside current function)
• E — Enclosing (outer function, for nested functions)
• G — Global (module level)
• B — Built-in (Python's built-in names like \`print\`, \`len\`)

Python searches in this order: L → E → G → B`,
    code: `# Single return value
def square(n):
    return n ** 2

print(square(5))     # 25

# Multiple return values (returns a tuple)
def min_max(lst):
    return min(lst), max(lst)

lo, hi = min_max([3, 1, 4, 1, 5, 9])
print(lo, hi)        # 1 9

# Early return
def is_positive(n):
    if n > 0:
        return True   # exits here if n > 0
    return False

# Equivalent (more Pythonic):
def is_positive(n):
    return n > 0

# No return = returns None
def say_hi():
    print("Hi!")

result = say_hi()
print(result)        # None

# LEGB scope demonstration
x = "global"

def outer():
    x = "enclosing"
    def inner():
        x = "local"
        print(x)     # local (L wins)
    inner()
    print(x)         # enclosing (E)

outer()
print(x)             # global (G)

# nonlocal (modify enclosing scope)
def make_counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter = make_counter()
print(counter())     # 1
print(counter())     # 2`,
    tip: "Python functions are first-class objects — you can pass them as arguments, return them from other functions, and store them in variables!",
  },
  modules: {
    title: "Modules & Imports",
    explanation: `A module is a file containing Python code (functions, classes, variables). Modules let you organize and reuse code.

**Import styles:**
• \`import module\` — import whole module
• \`from module import name\` — import specific item
• \`from module import *\` — import everything (avoid in large projects)
• \`import module as alias\` — use a nickname

**Built-in modules worth knowing:**
• \`math\` — mathematical functions
• \`random\` — random number generation
• \`os\` — operating system interactions
• \`sys\` — system-specific parameters
• \`datetime\` — date and time
• \`json\` — JSON encode/decode`,
    code: `# Import entire module
import math
print(math.pi)           # 3.14159...
print(math.sqrt(25))     # 5.0
print(math.floor(3.7))   # 3
print(math.ceil(3.2))    # 4

# Import specific items
from math import sqrt, pi
print(sqrt(16))          # 4.0 (no math. prefix)

# Import with alias
import math as m
print(m.factorial(5))    # 120

# random module
import random
print(random.randint(1, 100))     # random int 1-100
print(random.random())            # random float 0-1
print(random.choice(["a","b","c"])) # random element
lst = [1,2,3,4,5]
random.shuffle(lst)               # shuffle in place

# datetime module
from datetime import datetime, date
now = datetime.now()
print(now.year, now.month, now.day)
print(now.strftime("%d-%m-%Y"))   # formatted date

# os module
import os
print(os.getcwd())         # current directory
files = os.listdir(".")    # list files
os.mkdir("new_folder")     # create directory

# Creating your own module
# File: mymath.py
# def add(a, b): return a + b
# def sub(a, b): return a - b

# Then in another file:
# import mymath
# print(mymath.add(3, 5))`,
    tip: "The __name__ == '__main__' pattern: code inside this block only runs when you execute the file directly, not when it's imported as a module.",
  },
  fileops: {
    title: "File Operations (read/write)",
    explanation: `Python can read from and write to files using the built-in \`open()\` function.

**Always use \`with\` statement:**
It automatically closes the file even if an error occurs.

**Reading methods:**
• \`read()\` — entire file as one string
• \`readline()\` — one line at a time
• \`readlines()\` — all lines as a list

**Writing methods:**
• \`write(str)\` — write a string
• \`writelines(list)\` — write a list of strings`,
    code: `# --- READING FILES ---

# Read entire file
with open("data.txt", "r") as f:
    content = f.read()
    print(content)

# Read line by line (memory efficient for large files)
with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())   # strip() removes \\n

# Read all lines into a list
with open("data.txt", "r") as f:
    lines = f.readlines()
    print(lines[0])    # first line

# --- WRITING FILES ---

# Write (overwrites existing content!)
with open("output.txt", "w") as f:
    f.write("Hello, World!\\n")
    f.write("Second line\\n")

# Write multiple lines
lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
with open("output.txt", "w") as f:
    f.writelines(lines)

# Append (adds to existing content)
with open("output.txt", "a") as f:
    f.write("Appended line\\n")

# --- JSON FILES ---
import json

data = {"name": "Param", "age": 24, "city": "Lucknow"}

# Write JSON
with open("data.json", "w") as f:
    json.dump(data, f, indent=4)

# Read JSON
with open("data.json", "r") as f:
    loaded = json.load(f)
print(loaded["name"])   # Param`,
    tip: "ALWAYS use 'with open(...) as f:' — it guarantees the file is closed properly. Never use open() without with in production code.",
  },
  filemodes: {
    title: "File Modes & File Objects",
    explanation: `The mode tells Python HOW to open the file.

**File Modes:**
• \`'r'\` — read only (default). Error if file doesn't exist.
• \`'w'\` — write. Creates file if not exists. OVERWRITES if exists!
• \`'a'\` — append. Creates if not exists. Adds to end.
• \`'x'\` — create. Error if file already exists.
• \`'r+'\` — read and write.
• \`'b'\` — binary mode (add to others: \`'rb'\`, \`'wb'\`)

**File object methods:**
• \`f.read(n)\` — read n bytes
• \`f.seek(pos)\` — move cursor to position
• \`f.tell()\` — get current cursor position
• \`f.flush()\` — write buffer to disk`,
    code: `# 'r' - Read (default)
with open("notes.txt", "r") as f:
    print(f.read())

# 'w' - Write (overwrites!)
with open("notes.txt", "w") as f:
    f.write("New content\\n")

# 'a' - Append
with open("notes.txt", "a") as f:
    f.write("Added line\\n")

# 'x' - Create new (fails if exists)
try:
    with open("new_file.txt", "x") as f:
        f.write("Brand new file")
except FileExistsError:
    print("File already exists!")

# Binary mode (for images, videos, etc.)
with open("image.png", "rb") as f:
    data = f.read()

# Read with encoding
with open("arabic.txt", "r", encoding="utf-8") as f:
    content = f.read()

# File cursor operations
with open("notes.txt", "r") as f:
    print(f.tell())      # 0 (start)
    f.read(5)            # read 5 chars
    print(f.tell())      # 5
    f.seek(0)            # go back to start
    print(f.read(3))     # read first 3 chars again

# Check if file exists before opening
import os
if os.path.exists("data.txt"):
    with open("data.txt", "r") as f:
        print(f.read())
else:
    print("File not found!")`,
    tip: "'w' mode DESTROYS existing content! Use 'a' to add to a file. Use 'x' if you want to guarantee you're creating a new file.",
  },
  errorhandling: {
    title: "Error Handling",
    explanation: `Errors (Exceptions) stop your program. Error handling lets you catch them and respond gracefully.

**try-except-else-finally:**
• \`try\` — code that might fail
• \`except\` — what to do if it fails
• \`else\` — runs if no exception occurred
• \`finally\` — ALWAYS runs (cleanup code)

**Common exceptions:**
• \`ValueError\` — wrong value type
• \`TypeError\` — wrong data type
• \`KeyError\` — dict key doesn't exist
• \`IndexError\` — list index out of range
• \`FileNotFoundError\` — file doesn't exist
• \`ZeroDivisionError\` — divide by zero`,
    code: `# Basic try-except
try:
    x = int("abc")       # ValueError!
except ValueError:
    print("That's not a number!")

# Multiple except blocks
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Can't divide by zero!")
except ValueError as e:
    print(f"Value error: {e}")
except Exception as e:    # catch-all
    print(f"Unexpected error: {e}")

# else (runs only if no exception)
try:
    num = int("42")
except ValueError:
    print("Not a number")
else:
    print(f"Successfully converted: {num}")   # runs!

# finally (always runs - use for cleanup)
try:
    f = open("data.txt", "r")
    content = f.read()
except FileNotFoundError:
    print("File not found!")
finally:
    print("This always runs!")  # cleanup code here

# Raising exceptions manually
def set_age(age):
    if age < 0:
        raise ValueError(f"Age cannot be negative: {age}")
    return age

try:
    set_age(-5)
except ValueError as e:
    print(e)     # Age cannot be negative: -5

# Custom exception class
class InsufficientFundsError(Exception):
    def __init__(self, amount):
        super().__init__(f"Insufficient funds. Need: {amount}")

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(amount)
    return balance - amount`,
    tip: "Don't use bare 'except:' — it catches EVERYTHING including KeyboardInterrupt (Ctrl+C). Always specify which exception you're catching.",
  },
  oop: {
    title: "OOP Principles & Classes",
    explanation: `Object-Oriented Programming (OOP) organizes code around objects — entities that have data (attributes) and behavior (methods).

**4 Pillars of OOP:**
1. **Encapsulation** — bundling data and methods together, hiding internal details
2. **Inheritance** — a class can inherit from another class
3. **Polymorphism** — same interface, different implementations
4. **Abstraction** — hiding complex implementation details

**Class vs Object:**
• Class = blueprint/template
• Object = instance created from the blueprint

**\`self\`:**
Refers to the current object instance. Must be the first parameter of every method.`,
    code: `# Class definition
class Student:
    # Class variable (shared by all instances)
    school = "MIT"
    
    # __init__ = constructor (called when creating object)
    def __init__(self, name, age, grade):
        # Instance variables (unique to each object)
        self.name = name
        self.age = age
        self.grade = grade
    
    # Instance method
    def introduce(self):
        return f"I'm {self.name}, age {self.age}."
    
    def get_grade(self):
        return self.grade
    
    # __str__ = how object prints
    def __str__(self):
        return f"Student({self.name}, {self.age})"

# Creating objects (instances)
s1 = Student("Param", 24, "A")
s2 = Student("Arjun", 22, "B")

print(s1.name)          # Param
print(s1.introduce())   # I'm Param, age 24.
print(s1)               # Student(Param, 24)

# Accessing class variable
print(Student.school)   # MIT
print(s1.school)        # MIT

# Modify instance attribute
s1.age = 25
print(s1.age)           # 25

# Check type
print(type(s1))              # <class '__main__.Student'>
print(isinstance(s1, Student))  # True`,
    tip: "__init__ is NOT a constructor in the traditional sense — Python actually creates the object before __init__ is called. __init__ just initializes the attributes.",
  },
  objects: {
    title: "Objects & Instantiation",
    explanation: `When you create an object from a class, Python:
1. Allocates memory for the object
2. Calls \`__init__\` to set up attributes

**Special methods (dunder methods):**
• \`__init__\` — initialize
• \`__str__\` — string representation (print)
• \`__repr__\` — official representation
• \`__len__\` — len()
• \`__eq__\` — == comparison
• \`__add__\` — + operator

These let you make your objects work with Python's built-in operations.`,
    code: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self._transactions = []    # _ = "private by convention"
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.balance += amount
        self._transactions.append(("deposit", amount))
        return self.balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount
        self._transactions.append(("withdraw", amount))
        return self.balance
    
    def get_history(self):
        return self._transactions
    
    def __str__(self):
        return f"Account({self.owner}: ₹{self.balance})"
    
    def __repr__(self):
        return f"BankAccount('{self.owner}', {self.balance})"
    
    def __eq__(self, other):
        return self.balance == other.balance
    
    def __add__(self, other):
        # Merge two accounts
        merged = BankAccount("Merged")
        merged.balance = self.balance + other.balance
        return merged

# Usage
acc = BankAccount("Param", 1000)
acc.deposit(500)
acc.withdraw(200)
print(acc)           # Account(Param: ₹1300)
print(acc.get_history())

acc2 = BankAccount("Arjun", 2000)
combined = acc + acc2
print(combined)      # Account(Merged: ₹3300)`,
    tip: "Prefix attributes with _ (single underscore) for 'protected by convention' and __ (double underscore) for name mangling (harder to access from outside).",
  },
  inheritance: {
    title: "Inheritance",
    explanation: `Inheritance lets a class (child) inherit attributes and methods from another class (parent).

**Types:**
• Single — one parent
• Multiple — multiple parents (Python supports this)
• Multilevel — A → B → C

**\`super()\`:**
Call the parent class's method. Essential in \`__init__\` to avoid rewriting parent setup code.

**Method Overriding:**
Child class redefines a method from parent — the child's version takes precedence.`,
    code: `# Parent class
class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound
    
    def speak(self):
        return f"{self.name} says {self.sound}"
    
    def __str__(self):
        return f"Animal({self.name})"

# Child class — inherits from Animal
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Woof")   # call parent __init__
        self.breed = breed
    
    # Override parent method
    def speak(self):
        return f"{self.name} ({self.breed}) barks: Woof woof!"
    
    def fetch(self):
        return f"{self.name} fetches the ball!"

class Cat(Animal):
    def __init__(self, name, indoor=True):
        super().__init__(name, "Meow")
        self.indoor = indoor
    
    def speak(self):
        base = super().speak()   # get parent's version
        return base + " (softly)"

# Usage
dog = Dog("Bruno", "Labrador")
cat = Cat("Whiskers")

print(dog.speak())     # Bruno (Labrador) barks: Woof woof!
print(cat.speak())     # Whiskers says Meow (softly)
print(dog.fetch())

# isinstance checks
print(isinstance(dog, Dog))     # True
print(isinstance(dog, Animal))  # True! (is also an Animal)

# Multiple inheritance
class FlyingAnimal:
    def fly(self):
        return f"{self.name} is flying!"

class Parrot(Animal, FlyingAnimal):
    def __init__(self, name):
        super().__init__(name, "Squawk")

polly = Parrot("Polly")
print(polly.speak())
print(polly.fly())`,
    tip: "Always call super().__init__() in a child class unless you specifically want to replace all parent initialization. Forgetting it is a very common bug!",
  },
  encapsulation: {
    title: "Encapsulation",
    explanation: `Encapsulation bundles data and methods together and restricts direct access to internal state.

**Access levels in Python (by convention):**
• \`attribute\` — public (anyone can access)
• \`_attribute\` — protected (shouldn't access from outside, but Python won't stop you)
• \`__attribute\` — private (name mangling, harder to access)

**Properties (\`@property\`):**
A Pythonic way to create getters and setters. Looks like attribute access but runs a method.`,
    code: `class Circle:
    def __init__(self, radius):
        self._radius = radius    # "protected"
    
    # Getter using @property
    @property
    def radius(self):
        return self._radius
    
    # Setter using @property.setter
    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self):
        import math
        return math.pi * self._radius ** 2
    
    @property
    def diameter(self):
        return 2 * self._radius

c = Circle(5)
print(c.radius)    # 5  (calls getter)
print(c.area)      # 78.53...
print(c.diameter)  # 10

c.radius = 10      # calls setter (validates!)
# c.radius = -1    # ← raises ValueError!

# Private with name mangling
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # private
    
    def get_balance(self):
        return self.__balance
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

acc = BankAccount(1000)
print(acc.get_balance())   # 1000
# print(acc.__balance)     # AttributeError!
# But name mangling allows (not recommended):
print(acc._BankAccount__balance)  # 1000`,
    tip: "@property is Python's elegant way to add validation without changing the interface — code that uses c.radius still works whether it's a simple attribute or a property.",
  },
  polymorphism: {
    title: "Polymorphism",
    explanation: `Polymorphism means "many forms" — the same method name works differently on different objects.

**Types in Python:**
1. **Method Overriding** — child redefines parent method
2. **Duck Typing** — "if it walks like a duck, it's a duck" — Python doesn't care about the type, only about whether the method exists
3. **Operator Overloading** — redefine how operators (+, -, ==) work with your class

Duck typing is Python's most common polymorphism — functions work on any object that has the right methods.`,
    code: `# Method overriding polymorphism
class Shape:
    def area(self):
        raise NotImplementedError("Subclass must implement area()")
    
    def describe(self):
        return f"I am a {type(self).__name__} with area {self.area():.2f}"

class Circle(Shape):
    def __init__(self, r):
        self.r = r
    def area(self):
        import math
        return math.pi * self.r ** 2

class Rectangle(Shape):
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return self.w * self.h

class Triangle(Shape):
    def __init__(self, b, h):
        self.b, self.h = b, h
    def area(self):
        return 0.5 * self.b * self.h

# Polymorphism in action
shapes = [Circle(5), Rectangle(4, 6), Triangle(3, 8)]
for shape in shapes:
    print(shape.describe())   # each calls its OWN area()

# Duck typing
class Duck:
    def sound(self): return "Quack"

class Person:
    def sound(self): return "I'm quacking like a duck"

def make_it_quack(obj):
    # doesn't care what type obj is — just needs .sound()
    print(obj.sound())

make_it_quack(Duck())    # Quack
make_it_quack(Person())  # I'm quacking like a duck

# Operator overloading
class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(2, 3)
v2 = Vector(1, 5)
print(v1 + v2)   # Vector(3, 8)`,
    tip: "Duck typing is why Python is so flexible. Write functions that accept any object with the required methods — don't check types explicitly unless absolutely necessary.",
  },
  exceptions: {
    title: "Try-Except & Raising Exceptions",
    explanation: `We covered basic error handling in Unit 2. Here in Unit 3, we go deeper — creating custom exceptions and using OOP to build robust error hierarchies.

**Custom Exception classes:**
Inherit from \`Exception\` (or any built-in exception). Add custom attributes for more info.

**Exception hierarchy:**
BaseException → Exception → (all standard exceptions)
You can catch a parent to catch all children: \`except Exception\` catches most errors.

**Best practices:**
• Be specific — catch the exact exception
• Don't swallow exceptions silently
• Log errors in production
• Use custom exceptions for domain-specific errors`,
    code: `# Custom exception hierarchy
class AppError(Exception):
    """Base exception for our app"""
    pass

class ValidationError(AppError):
    def __init__(self, field, message):
        self.field = field
        super().__init__(f"Validation failed on '{field}': {message}")

class DatabaseError(AppError):
    def __init__(self, query, reason):
        self.query = query
        super().__init__(f"DB error on query '{query}': {reason}")

# Using custom exceptions
def validate_age(age):
    if not isinstance(age, int):
        raise ValidationError("age", "must be an integer")
    if age < 0 or age > 150:
        raise ValidationError("age", f"{age} is out of valid range")
    return age

try:
    validate_age(-5)
except ValidationError as e:
    print(e)              # Validation failed on 'age': -5 out of range
    print(f"Field: {e.field}")

# Catching exception hierarchy
try:
    validate_age("abc")
except ValidationError:
    print("Caught ValidationError (specific)")
except AppError:
    print("Caught AppError (parent)")
except Exception:
    print("Caught generic Exception")

# Re-raising exceptions
def process(data):
    try:
        result = risky_operation(data)
    except DatabaseError as e:
        print(f"Logging error: {e}")
        raise    # re-raise the same exception

# Context manager for cleanup
class DBConnection:
    def __enter__(self):
        print("Connecting...")
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Disconnecting...")
        return False  # don't suppress exceptions

with DBConnection() as db:
    print("Using DB")`,
    tip: "Custom exceptions make your code self-documenting. 'except ValidationError' tells a reader exactly what can go wrong — much better than 'except Exception'.",
  },
  numpy: {
    title: "NumPy Basics",
    explanation: `NumPy (Numerical Python) is the foundation of scientific computing in Python. It provides fast multi-dimensional arrays.

**Why NumPy?**
• Python lists are slow for math; NumPy arrays are C-optimized and extremely fast
• Vectorized operations — apply math to entire arrays without loops
• Foundation for Pandas, Matplotlib, scikit-learn, etc.

**ndarray:**
NumPy's main data structure. All elements must be the same type (unlike Python lists).`,
    code: `import numpy as np

# Creating arrays
a = np.array([1, 2, 3, 4, 5])
b = np.array([[1, 2, 3], [4, 5, 6]])   # 2D array

print(a.shape)     # (5,)
print(b.shape)     # (2, 3)
print(a.dtype)     # int64

# Array creation functions
zeros = np.zeros((3, 4))           # 3x4 array of 0s
ones = np.ones((2, 3))             # 2x3 array of 1s
eye = np.eye(3)                    # 3x3 identity matrix
rng = np.arange(0, 10, 2)         # [0, 2, 4, 6, 8]
lin = np.linspace(0, 1, 5)        # 5 evenly spaced values

# Vectorized math (no loops needed!)
x = np.array([1, 2, 3, 4, 5])
print(x * 2)       # [2, 4, 6, 8, 10]
print(x ** 2)      # [1, 4, 9, 16, 25]
print(np.sqrt(x))  # [1, 1.41, 1.73, 2, 2.23]

# Array operations
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(a + b)        # [5, 7, 9]
print(a * b)        # [4, 10, 18] (element-wise)
print(np.dot(a, b)) # 32 (dot product)

# Statistics
data = np.array([3, 1, 4, 1, 5, 9, 2, 6, 5, 3])
print(np.mean(data))   # mean
print(np.median(data)) # median
print(np.std(data))    # standard deviation
print(np.min(data))    # min
print(np.max(data))    # max

# Indexing and slicing (like lists but more powerful)
m = np.array([[1,2,3],[4,5,6],[7,8,9]])
print(m[1, 2])       # 6 (row 1, col 2)
print(m[:, 1])       # [2, 5, 8] (all rows, col 1)
print(m[0:2, 0:2])   # top-left 2x2 sub-matrix`,
    tip: "NumPy operations are vectorized — NEVER write a Python for loop to do math on arrays. np.sum(arr) is 100x faster than sum(arr) for large arrays.",
  },
  pandas: {
    title: "Pandas – Series & DataFrames",
    explanation: `Pandas is built on NumPy and provides labeled, tabular data structures.

**Series:**
1D labeled array — like a column in a spreadsheet.

**DataFrame:**
2D table with labeled rows and columns — like a spreadsheet or SQL table.

**Key concepts from your reference material:**
• \`loc\` — label-based indexing
• \`iloc\` — position-based indexing
• Boolean indexing — filter rows by condition
• \`query()\` — SQL-like string filtering`,
    code: `import pandas as pd

# --- SERIES ---
s = pd.Series([88, 98, 72, 91],
              index=['Aditi', 'Arjun', 'Param', 'Rohan'],
              name='Score')
print(s["Arjun"])    # 98
print(s.mean())      # 87.25

# --- DATAFRAME ---
df = pd.DataFrame({
    "Name":  ["Aditi", "Arjun", "Kavya", "Shiva"],
    "Score": [80, 95, 73, 91],
    "City":  ["Mumbai", "Delhi", "Mumbai", "Chennai"]
})

# Access column
print(df["Score"])          # returns Series

# Access multiple columns
print(df[["Name", "City"]])

# loc — label-based
print(df.loc[0])            # first row (by label)
print(df.loc[1:3])          # rows 1 to 3 (inclusive!)

# iloc — position-based
print(df.iloc[0])           # first row (by position)
print(df.iloc[0:2])         # rows 0 and 1 (exclusive!)

# Boolean indexing
high_scorers = df[df["Score"] > 85]
mumbai_high = df[(df["City"] == "Mumbai") & (df["Score"] > 75)]

# query() method — more readable
result = df.query("Score > 65 and City == 'Mumbai'")

# Quick inspection
print(df.shape)     # (rows, cols)
print(df.dtypes)    # data types
print(df.info())    # summary
print(df.describe())# stats (mean, std, min, max...)
print(df.head(3))   # first 3 rows
print(df.tail(2))   # last 2 rows

# Read from CSV/Excel
df = pd.read_csv("data.csv")
df = pd.read_excel("data.xlsx", sheet_name="Sheet1")

# Write to CSV/Excel
df.to_csv("output.csv", index=False)`,
    tip: "loc[1:3] is INCLUSIVE of 3; iloc[0:2] is EXCLUSIVE of 2. This inconsistency trips up almost every beginner — remember it!",
  },
  datacleaning: {
    title: "Data Cleaning & Transformation",
    explanation: `Real-world data is messy. Data cleaning is often 80% of a data analyst's work.

**Common issues:**
• Missing values (NaN)
• Duplicates
• Wrong data types
• Inconsistent categories (e.g., "North", "north", "N")
• Outliers

**Key methods from your Pandas reference:**
• \`isnull()\`, \`dropna()\`, \`fillna()\` — handle missing values
• \`drop_duplicates()\` — remove duplicates
• \`astype()\`, \`to_numeric()\`, \`to_datetime()\` — fix types
• \`str.strip()\`, \`str.lower()\`, \`str.replace()\` — fix strings`,
    code: `import pandas as pd

df = pd.read_csv("sales.csv")

# --- AUDIT FUNCTION ---
def audit(df):
    print(f"Shape: {df.shape}")
    print(f"Missing: {df.isnull().sum().sum()}")
    print(f"Duplicates: {df.duplicated().sum()}")
    print(df.isnull().sum()[df.isnull().sum() > 0])

# --- MISSING VALUES ---
df.isnull().sum()           # count NaN per column

# Drop rows with any NaN
df.dropna(inplace=True)

# Drop rows where specific columns are NaN
df.dropna(subset=["quantity", "total"])

# Fill with constant
df["region"] = df["region"].fillna("Unknown")

# Fill with statistics
df["quantity"] = df["quantity"].fillna(df["quantity"].mean())

# Fill multiple columns at once
df.fillna({"quantity": 0, "total": df["total"].median()})

# --- DUPLICATES ---
print(df.duplicated().sum())    # how many?
df.drop_duplicates(inplace=True)
df.drop_duplicates(subset=["order_id"])  # by key column

# --- WRONG TYPES ---
df["unit_price"] = pd.to_numeric(df["unit_price"], errors="coerce")
df["order_date"] = pd.to_datetime(df["order_date"])

# Date parts
df["year"] = df["order_date"].dt.year
df["month"] = df["order_date"].dt.month
df["weekday"] = df["order_date"].dt.day_name()

# --- STRING CLEANING ---
df["name"] = df["name"].str.strip()    # remove spaces
df["name"] = df["name"].str.title()   # Title Case

# Standardize categories
df["region"] = df["region"].str.strip().str.title().replace({
    "N": "North", "S": "South", "E": "East", "W": "West"
})

# --- GROUPBY & AGGREGATION ---
result = df.groupby("region").agg(
    total_rev=("total", "sum"),
    avg_price=("unit_price", "mean"),
    order_count=("order_id", "count")
).reset_index()`,
    tip: "Always run an audit() function at the start of data cleaning to understand what you're dealing with. Know your data before you clean it!",
  },
  matplotlib: {
    title: "Matplotlib Basics",
    explanation: `Matplotlib is Python's primary plotting library. It creates static, animated, and interactive visualizations.

**Key concepts:**
• \`plt.plot()\` — line chart
• \`plt.scatter()\` — scatter plot
• \`plt.bar()\` — bar chart
• \`plt.hist()\` — histogram
• \`plt.pie()\` — pie chart
• \`plt.subplots()\` — multiple plots in one figure

**Always add:**
• \`plt.xlabel()\`, \`plt.ylabel()\` — axis labels
• \`plt.title()\` — chart title
• \`plt.legend()\` — legend
• \`plt.show()\` — display the plot`,
    code: `import matplotlib.pyplot as plt
import numpy as np

# --- LINE PLOT ---
x = np.linspace(0, 2 * np.pi, 100)
y = np.sin(x)

plt.figure(figsize=(8, 4))
plt.plot(x, y, color="blue", linestyle="--", label="sin(x)")
plt.plot(x, np.cos(x), color="red", label="cos(x)")
plt.xlabel("x (radians)")
plt.ylabel("y")
plt.title("Sine and Cosine")
plt.legend()
plt.grid(True)
plt.show()

# --- BAR CHART ---
categories = ["East", "West", "North", "South"]
values = [45000, 38000, 52000, 41000]

plt.figure(figsize=(8, 5))
plt.bar(categories, values, color=["#1D9E75","#378ADD","#D4537E","#BA7517"])
plt.xlabel("Region")
plt.ylabel("Sales (₹)")
plt.title("Sales by Region")
plt.show()

# --- HISTOGRAM ---
data = np.random.normal(60, 15, 500)   # mean=60, std=15
plt.figure(figsize=(8, 4))
plt.hist(data, bins=30, color="teal", edgecolor="white")
plt.xlabel("Marks")
plt.ylabel("Frequency")
plt.title("Marks Distribution")
plt.show()

# --- SUBPLOTS (multiple plots) ---
fig, axes = plt.subplots(1, 3, figsize=(15, 4))

axes[0].plot(x, y)
axes[0].set_title("Line Plot")

axes[1].scatter(np.random.rand(50), np.random.rand(50))
axes[1].set_title("Scatter Plot")

axes[2].bar(["A","B","C"], [30, 50, 20])
axes[2].set_title("Bar Chart")

plt.tight_layout()
plt.savefig("charts.png", dpi=150)  # save to file
plt.show()`,
    tip: "plt.tight_layout() automatically adjusts spacing between subplots to prevent overlap. Always call it when using subplots.",
  },
  pip: {
    title: "Installing via pip",
    explanation: `pip is Python's package manager — it downloads and installs packages from PyPI (Python Package Index).

**Virtual environments:**
A virtual environment is an isolated Python environment for a project. It prevents conflicts between different projects that need different library versions.

**Essential commands:**
• \`pip install package\` — install
• \`pip install package==1.2.3\` — specific version
• \`pip uninstall package\` — remove
• \`pip list\` — list installed packages
• \`pip freeze\` — list with versions (for requirements.txt)`,
    code: `# In your terminal (not Python code!):

# --- VIRTUAL ENVIRONMENT ---
# Create virtual environment
python -m venv myenv

# Activate (Windows)
myenv\\Scripts\\activate

# Activate (Mac/Linux)
source myenv/bin/activate

# Deactivate
deactivate


# --- PIP COMMANDS ---

# Install packages
pip install numpy
pip install pandas
pip install matplotlib
pip install flask

# Install specific version
pip install pandas==2.0.0

# Install multiple at once
pip install numpy pandas matplotlib

# Upgrade a package
pip install --upgrade numpy

# Uninstall
pip uninstall numpy

# List all installed packages
pip list

# Save dependencies to file
pip freeze > requirements.txt

# Install from requirements file (share with teammates!)
pip install -r requirements.txt


# --- COMMON EXAM PACKAGES ---
# pip install numpy        → np
# pip install pandas       → pd
# pip install matplotlib   → plt
# pip install flask        → Flask
# pip install scikit-learn → sklearn
# pip install requests     → requests (HTTP)
# pip install sqlalchemy   → db ORM`,
    tip: "ALWAYS create a virtual environment before starting a project. Never install packages globally — it causes version conflicts between projects.",
  },
  flaskbasics: {
    title: "Flask Basics & Setup",
    explanation: `Flask is a lightweight Python web microframework. "Micro" means minimal built-in features — you add what you need.

**Flask vs Django:**
• Flask: minimal, flexible, you choose tools
• Django: "batteries included", opinionated, everything built-in

**The minimal Flask app:**
Just 5 lines! Flask handles HTTP routing, request/response, and the development server.

**WSGI:**
Web Server Gateway Interface — the standard interface between Python web apps and web servers. Flask is WSGI-compliant.`,
    code: `# app.py — Minimal Flask application
from flask import Flask

app = Flask(__name__)    # __name__ tells Flask where to look for templates

@app.route("/")
def home():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(debug=True)  # debug=True: auto-reload + error details

# --- RUNNING ---
# In terminal: python app.py
# Visit: http://localhost:5000


# --- PROJECT STRUCTURE ---
# my_flask_app/
# ├── app.py              ← main application
# ├── templates/          ← HTML files (Jinja2)
# │   ├── base.html
# │   └── index.html
# ├── static/             ← CSS, JS, images
# │   ├── style.css
# │   └── script.js
# ├── requirements.txt    ← dependencies
# └── config.py           ← configuration settings


# --- CONFIGURATION ---
class Config:
    DEBUG = False
    SECRET_KEY = "your-secret-key"

class DevelopmentConfig(Config):
    DEBUG = True
    DATABASE_URL = "sqlite:///dev.db"

class ProductionConfig(Config):
    DEBUG = False
    DATABASE_URL = "postgresql://..."

# In app.py:
app.config.from_object("config.DevelopmentConfig")

# Or from environment variables:
import os
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "fallback")`,
    tip: "Never run Flask with debug=True in production — it allows arbitrary code execution! The debug mode is ONLY for development.",
  },
  routing: {
    title: "Routing & URL Rules",
    explanation: `Routing maps URLs to Python functions. When a user visits a URL, Flask finds the matching route and calls its function.

**Dynamic routes:**
Use \`<variable_name>\` in the URL to capture values. Add \`<type:name>\` to enforce data types.

**URL converters:**
• \`string\` — default, accepts any text without slash
• \`int\` — positive integers
• \`float\` — positive floats
• \`path\` — like string but accepts slashes`,
    code: `from flask import Flask, url_for, redirect

app = Flask(__name__)

# Static route
@app.route("/")
def home():
    return "Home Page"

@app.route("/about")
def about():
    return "About Us"

# Dynamic route — string
@app.route("/profile/<username>")
def profile(username):
    return f"Profile of {username}"

# Dynamic route — integer type converter
@app.route("/post/<int:post_id>")
def show_post(post_id):
    return f"Post #{post_id}"    # post_id is int, not string

# Dynamic route — float
@app.route("/price/<float:amount>")
def show_price(amount):
    return f"Price: ₹{amount:.2f}"

# Multiple URL rules for same function
@app.route("/home")
@app.route("/index")
@app.route("/")
def index():
    return "Welcome!"

# url_for — generate URLs programmatically
with app.test_request_context():
    print(url_for("home"))              # /
    print(url_for("profile", username="Param"))   # /profile/Param
    print(url_for("show_post", post_id=5))        # /post/5

# Redirect
@app.route("/old-page")
def old_page():
    return redirect(url_for("home"))   # redirect to home

# Trailing slash behavior
@app.route("/projects/")   # with slash — acts like folder
def projects():
    return "Projects"
# /projects → redirects to /projects/

@app.route("/contact")     # no slash — strict
def contact():
    return "Contact"
# /contact/ → 404 Not Found`,
    tip: "Use url_for() to generate URLs instead of hardcoding them. If you rename a route function, url_for() still works — hardcoded strings would break.",
  },
  requesthandling: {
    title: "Request Handling (GET/POST)",
    explanation: `HTTP defines methods (verbs) that tell the server what to do.

**Main methods:**
• GET — retrieve data. URL params visible in address bar. Cached, bookmarkable.
• POST — send data to server. Hidden in request body. Used for forms.
• PUT — update entire resource
• DELETE — delete resource
• PATCH — partial update

**Flask request object:**
The \`request\` object contains all info about the incoming HTTP request.`,
    code: `from flask import Flask, request, jsonify

app = Flask(__name__)

# GET only (default)
@app.route("/search")
def search():
    # Get query parameter: /search?q=python&page=2
    query = request.args.get("q", "")      # default ""
    page = request.args.get("page", 1, type=int)
    return f"Search: '{query}', Page: {page}"

# Handle both GET and POST
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return "Show login form"
    
    # POST request
    username = request.form.get("username")
    password = request.form.get("password")
    
    if username == "admin" and password == "secret":
        return "Login successful!"
    return "Invalid credentials", 401

# JSON API endpoint
@app.route("/api/users", methods=["GET"])
def get_users():
    users = [
        {"id": 1, "name": "Param"},
        {"id": 2, "name": "Arjun"}
    ]
    return jsonify(users)

@app.route("/api/users", methods=["POST"])
def create_user():
    data = request.get_json()       # parse JSON body
    name = data.get("name")
    return jsonify({"created": name}), 201  # 201 = Created

# request object attributes
@app.route("/info")
def info():
    return {
        "method": request.method,          # GET, POST, etc
        "url": request.url,                # full URL
        "path": request.path,              # /info
        "host": request.host,              # localhost:5000
        "headers": dict(request.headers),  # HTTP headers
        "args": dict(request.args),        # URL params
        "form": dict(request.form),        # POST form data
    }`,
    tip: "GET vs POST: GET params appear in URL (?key=val) — visible in browser history, logs, and URLs. Never send passwords via GET! Always use POST for sensitive data.",
  },
  templates: {
    title: "Template Rendering (Jinja2)",
    explanation: `Jinja2 is Flask's template engine. It lets you write HTML with embedded Python-like syntax.

**Jinja2 syntax:**
• \`{{ variable }}\` — output variable value
• \`{% if condition %}\` — control flow
• \`{% for item in list %}\` — loops
• \`{# comment #}\` — comment

**Template inheritance:**
Create a base template with blocks, then extend it in child templates — like OOP inheritance for HTML!

**\`render_template()\`:**
Renders an HTML file from the \`templates/\` folder.`,
    code: `# --- app.py ---
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", 
                          title="Home",
                          name="Param")

@app.route("/students")
def students():
    students = [
        {"name": "Param", "grade": "A", "score": 95},
        {"name": "Arjun", "grade": "B", "score": 82},
        {"name": "Kavya", "grade": "C", "score": 74},
    ]
    return render_template("students.html", students=students)


# --- templates/base.html ---
"""
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My Site{% endblock %}</title>
</head>
<body>
    <nav>
        <a href="/">Home</a> | 
        <a href="/students">Students</a>
    </nav>
    
    {% block content %}
    <!-- child templates fill this -->
    {% endblock %}
    
    <footer>© 2026 My Flask App</footer>
</body>
</html>
"""

# --- templates/index.html ---
"""
{% extends "base.html" %}

{% block title %}{{ title }} - My Site{% endblock %}

{% block content %}
    <h1>Welcome, {{ name }}!</h1>
    
    {% if name == "Param" %}
        <p>Hey, I know you!</p>
    {% else %}
        <p>Nice to meet you!</p>
    {% endif %}
{% endblock %}
"""

# --- templates/students.html ---
"""
{% extends "base.html" %}

{% block content %}
<table border="1">
    <tr><th>Name</th><th>Grade</th><th>Score</th></tr>
    {% for student in students %}
    <tr>
        <td>{{ student.name }}</td>
        <td>{{ student.grade }}</td>
        <td>{{ student.score }}</td>
    </tr>
    {% endfor %}
</table>
{% endblock %}
"""`,
    tip: "Template inheritance with {% extends %} is key to DRY (Don't Repeat Yourself) HTML. Define the common layout once in base.html, override only what changes.",
  },
  integration: {
    title: "Integration & Project Structure",
    explanation: `A real Flask application integrates all concepts together: routes, templates, forms, file handling, and OOP.

**Application Factory Pattern:**
Create the Flask app inside a function — makes it easy to create multiple app instances (useful for testing).

**Blueprints:**
Organize a large Flask app into modular components — like Python packages for Flask routes.

**This ties everything together from all 5 units!**`,
    code: `# --- PROJECT STRUCTURE ---
# student_portal/
# ├── app/
# │   ├── __init__.py     ← app factory
# │   ├── routes.py       ← route handlers
# │   ├── models.py       ← data classes (OOP!)
# │   ├── templates/
# │   │   ├── base.html
# │   │   └── students.html
# │   └── static/
# ├── run.py              ← entry point
# └── requirements.txt

# --- app/__init__.py — Application Factory ---
from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "your-secret-key"
    
    from .routes import main
    app.register_blueprint(main)
    
    return app

# --- app/models.py — OOP from Unit 3 ---
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score
    
    @property
    def grade(self):
        if self.score >= 90: return "A+"
        if self.score >= 80: return "A"
        if self.score >= 70: return "B"
        return "C"
    
    def to_dict(self):
        return {"name": self.name, "score": self.score, "grade": self.grade}

# --- app/routes.py — Using Pandas from Unit 4 ---
from flask import Blueprint, render_template, request, jsonify
import pandas as pd
from .models import Student

main = Blueprint("main", __name__)

students_db = [
    Student("Param", 95),
    Student("Arjun", 82),
    Student("Kavya", 74)
]

@main.route("/")
def home():
    return render_template("base.html", title="Student Portal")

@main.route("/students")
def list_students():
    data = [s.to_dict() for s in students_db]
    df = pd.DataFrame(data)
    avg = df["score"].mean()
    return render_template("students.html", 
                          students=data, average=avg)

@main.route("/api/students")
def api_students():
    return jsonify([s.to_dict() for s in students_db])

# --- run.py ---
from app import create_app
app = create_app()
if __name__ == "__main__":
    app.run(debug=True)`,
    tip: "The Application Factory pattern is the professional way to build Flask apps. It solves circular import issues and makes testing much easier.",
  },
};

const QUIZ_QUESTIONS = [
  { q: "What is the output of: print(type(42))?", o: ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'num'>"], a: 0, unit: 1 },
  { q: "Which of these creates an empty set?", o: ["s = {}", "s = set()", "s = []", "s = ()"], a: 1, unit: 1 },
  { q: "What does lst[-1] return?", o: ["First element", "Last element", "Error", "None"], a: 1, unit: 1 },
  { q: "What is the output of [1,2,3][1:3]?", o: ["[1,2]", "[2,3]", "[1,2,3]", "[3]"], a: 1, unit: 1 },
  { q: "Which data type is immutable?", o: ["list", "dict", "tuple", "set"], a: 2, unit: 1 },
  { q: "What is the result of 5 // 2 in Python?", o: ["2.5", "2", "3", "2.0"], a: 1, unit: 1 },
  { q: "Which method adds an element to the END of a list?", o: ["add()", "insert()", "append()", "push()"], a: 2, unit: 1 },
  { q: "What does dict.get('key', 'default') return if key doesn't exist?", o: ["None", "KeyError", "'default'", "False"], a: 2, unit: 1 },
  { q: "What is set1 & set2 in Python?", o: ["Union", "Intersection", "Difference", "Complement"], a: 1, unit: 1 },
  { q: "What does range(2, 10, 3) produce?", o: ["[2,5,8]", "[2,3,4,5,6,7,8,9]", "[2,4,6,8]", "[2,5,8,11]"], a: 0, unit: 1 },
  { q: "A variable defined inside a function is:", o: ["Global", "Local", "Class-level", "Module-level"], a: 1, unit: 2 },
  { q: "What does *args allow?", o: ["Keyword arguments", "Any number of positional arguments", "Default arguments", "Named arguments"], a: 1, unit: 2 },
  { q: "Which mode opens a file for APPENDING?", o: ["'r'", "'w'", "'a'", "'x'"], a: 2, unit: 2 },
  { q: "What does the 'finally' block do?", o: ["Runs only on error", "Runs only if no error", "Always runs", "Runs once"], a: 2, unit: 2 },
  { q: "Which import style is: 'from math import sqrt'?", o: ["Import module", "Import specific item", "Import all", "Alias import"], a: 1, unit: 2 },
  { q: "What does pip freeze > requirements.txt do?", o: ["Installs packages", "Lists all packages with versions to a file", "Removes packages", "Updates packages"], a: 1, unit: 2 },
  { q: "What is 'w' mode in file opening?", o: ["Read only", "Write (overwrites)", "Append", "Create new only"], a: 1, unit: 2 },
  { q: "What does return multiple values create?", o: ["A list", "A dict", "A tuple", "An error"], a: 2, unit: 2 },
  { q: "What is the keyword to modify a global variable inside a function?", o: ["local", "global", "nonlocal", "extern"], a: 1, unit: 2 },
  { q: "Which built-in exception is raised for wrong data type?", o: ["ValueError", "TypeError", "KeyError", "NameError"], a: 1, unit: 2 },
  { q: "What is __init__ in a Python class?", o: ["Destructor", "Constructor (initializer)", "Class method", "Static method"], a: 1, unit: 3 },
  { q: "What does 'self' refer to in a class method?", o: ["The class itself", "The current object instance", "The parent class", "The module"], a: 1, unit: 3 },
  { q: "Which OOP pillar means hiding internal details?", o: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], a: 2, unit: 3 },
  { q: "What does super().__init__() do?", o: ["Creates a new class", "Calls parent class constructor", "Deletes parent", "Inherits methods only"], a: 1, unit: 3 },
  { q: "Which decorator creates a getter property?", o: ["@staticmethod", "@classmethod", "@property", "@getter"], a: 2, unit: 3 },
  { q: "Duck typing means:", o: ["Only ducks can call methods", "Type is checked at compile time", "Python checks methods, not types", "Strict type checking"], a: 2, unit: 3 },
  { q: "What does isinstance(obj, ClassName) check?", o: ["If obj is the class", "If obj is an instance of ClassName or its subclasses", "If obj equals ClassName", "If ClassName exists"], a: 1, unit: 3 },
  { q: "Which attribute naming makes it 'private' in Python?", o: ["one underscore _", "double underscore __", "CAPS_LOCK", "No difference"], a: 1, unit: 3 },
  { q: "What is the difference between raise and raise ExceptionType()?", o: ["No difference", "raise re-raises, raise Exc() creates new", "raise creates new", "raise Exc() re-raises"], a: 1, unit: 3 },
  { q: "Polymorphism allows:", o: ["One class only", "Same method name to work differently on different objects", "Only inherited methods", "Type checking"], a: 1, unit: 3 },
  { q: "What does np.zeros((3,4)) create?", o: ["3 zeros", "4x3 array of zeros", "3x4 array of zeros", "Array of 12 zeros"], a: 2, unit: 4 },
  { q: "What is a pandas DataFrame?", o: ["1D labeled array", "2D tabular data structure", "NumPy array", "A Python list"], a: 1, unit: 4 },
  { q: "What is the difference between loc and iloc?", o: ["No difference", "loc is label-based, iloc is position-based", "iloc is faster", "loc uses integers only"], a: 1, unit: 4 },
  { q: "What does df.dropna() do?", o: ["Drop duplicate rows", "Drop rows with NaN values", "Drop all rows", "Drop columns"], a: 1, unit: 4 },
  { q: "Which method fills missing values?", o: ["fillna()", "dropna()", "replace()", "impute()"], a: 0, unit: 4 },
  { q: "What does df.describe() show?", o: ["Column names only", "Statistical summary (mean, std, min, max...)", "First 5 rows", "Data types"], a: 1, unit: 4 },
  { q: "What is pip used for?", o: ["Running Python code", "Installing Python packages", "Creating virtual environments", "Debugging"], a: 1, unit: 4 },
  { q: "What does pd.to_numeric(..., errors='coerce') do?", o: ["Raises error", "Converts to int", "Converts to number, replaces errors with NaN", "Drops non-numeric rows"], a: 2, unit: 4 },
  { q: "Which pandas method merges two DataFrames?", o: ["join()", "merge()", "combine()", "concat()"], a: 1, unit: 4 },
  { q: "What does df.groupby('region')['total'].sum() do?", o: ["Sort by region", "Sum total for each unique region", "Count rows per region", "Filter regions"], a: 1, unit: 4 },
  { q: "Flask is best described as:", o: ["Full-stack framework", "Database ORM", "Micro web framework", "Template engine"], a: 2, unit: 5 },
  { q: "What decorator defines a Flask route?", o: ["@flask.route", "@app.route", "@route", "@url"], a: 1, unit: 5 },
  { q: "Which object contains POST form data in Flask?", o: ["request.args", "request.form", "request.data", "request.params"], a: 1, unit: 5 },
  { q: "What is Jinja2?", o: ["A database", "A Python web framework", "Flask's template engine", "A testing library"], a: 2, unit: 5 },
  { q: "What is {{ variable }} in Jinja2?", o: ["A comment", "A block", "Outputs the variable value", "An if statement"], a: 2, unit: 5 },
  { q: "What does render_template() do?", o: ["Creates a route", "Renders an HTML template and returns it", "Redirects user", "Reads a file"], a: 1, unit: 5 },
  { q: "Which HTTP method is used for form submission that modifies data?", o: ["GET", "POST", "HEAD", "OPTIONS"], a: 1, unit: 5 },
  { q: "What does request.args.get('q') retrieve?", o: ["POST form data", "URL query parameter ?q=...", "JSON body", "File upload"], a: 1, unit: 5 },
  { q: "WSGI stands for:", o: ["Web Server General Interface", "Web Standard Gateway Interface", "Web Server Gateway Interface", "World Server Gateway Integration"], a: 2, unit: 5 },
  { q: "What does {% extends 'base.html' %} do in Jinja2?", o: ["Imports base.html", "The template inherits layout from base.html", "Includes base.html content", "Replaces base.html"], a: 1, unit: 5 },
  { q: "What symbol starts a single-line comment in Python?", o: ["//", "/*", "#", "--"], a: 2, unit: 1 },
  { q: "What is the correct way to create a virtual environment?", o: ["pip create venv", "python -m venv myenv", "flask create env", "env create myenv"], a: 1, unit: 2 },
  { q: "Which is NOT a valid Python data type?", o: ["int", "float", "char", "bool"], a: 2, unit: 1 },
  { q: "What does enumerate() do?", o: ["Counts elements", "Returns (index, value) pairs", "Sorts elements", "Reverses a list"], a: 1, unit: 1 },
  { q: "What does the 'with' statement ensure for file handling?", o: ["Faster reading", "File is always closed after use", "File is opened in binary mode", "File is encrypted"], a: 1, unit: 2 },
  { q: "In Flask, where are HTML templates stored?", o: ["static/ folder", "templates/ folder", "views/ folder", "html/ folder"], a: 1, unit: 5 },
  { q: "What does df.shape return?", o: ["Column names", "(number of rows, number of columns)", "Data types", "Number of NaN values"], a: 1, unit: 4 },
  { q: "Which OOP concept allows a class to inherit from multiple parents?", o: ["Single inheritance", "Multiple inheritance", "Multilevel inheritance", "Hybrid inheritance"], a: 1, unit: 3 },
  { q: "What is the purpose of __str__ in a class?", o: ["Compare objects", "Define string representation when using print()", "Convert to integer", "Create a copy"], a: 1, unit: 3 },
  { q: "What does zip([1,2], ['a','b']) produce?", o: ["[1,2,'a','b']", "[(1,'a'),(2,'b')]", "{1:'a',2:'b'}", "Error"], a: 1, unit: 1 },
  { q: "Which is the correct f-string syntax?", o: ["'Hello {name}'", "f'Hello {name}'", "f'Hello (name)'", "'Hello' + name"], a: 1, unit: 1 },
  { q: "What does df.value_counts() return?", o: ["Sorted DataFrame", "Count of each unique value in a column", "Sum of values", "Mean values"], a: 1, unit: 4 },
  { q: "What is the output of bool(0)?", o: ["True", "False", "0", "None"], a: 1, unit: 1 },
  { q: "Which set operation gives elements in A but NOT in B?", o: ["A | B (union)", "A & B (intersection)", "A - B (difference)", "A ^ B (sym diff)"], a: 2, unit: 1 },
  { q: "What does the 'pass' keyword do?", o: ["Ends the program", "Skips a loop iteration", "Does nothing (placeholder)", "Returns None"], a: 2, unit: 1 },
  { q: "In Flask, how do you capture <int:id> in a route?", o: ["request.id", "As a parameter in the view function", "request.args['id']", "url.params['id']"], a: 1, unit: 5 },
  { q: "What does pd.read_csv() return?", o: ["A list", "A dict", "A DataFrame", "A Series"], a: 2, unit: 4 },
  { q: "What does nonlocal do in Python?", o: ["Declares a global variable", "Modifies a variable in the enclosing (outer) function's scope", "Creates a new variable", "Deletes a variable"], a: 1, unit: 2 },
  { q: "What is the output of: print('hello'[::-1])?", o: ["hello", "olleh", "Error", "h"], a: 1, unit: 1 },
  { q: "Which Pandas method detects duplicate rows?", o: ["find_duplicates()", "duplicated()", "is_duplicate()", "check_duplicates()"], a: 1, unit: 4 },
  { q: "What does @app.route('/') with methods=['GET','POST'] mean?", o: ["Route handles only GET", "Route handles only POST", "Route handles both GET and POST", "Route is disabled"], a: 2, unit: 5 },
  { q: "What is the correct way to handle a KeyError safely in a dict?", o: ["try-except KeyError", "dict.get(key, default)", "Both A and B", "dict.find(key)"], a: 2, unit: 1 },
  { q: "What does json.dump() do?", o: ["Reads JSON from file", "Writes Python object to JSON file", "Parses JSON string", "Validates JSON"], a: 1, unit: 2 },
  { q: "In Jinja2, {% for student in students %} is used to:", o: ["Import a module", "Loop through a list in HTML", "Define a function", "Create a route"], a: 1, unit: 5 },
  { q: "What is np.dot(a, b)?", o: ["Element-wise multiplication", "Dot product (sum of products)", "Matrix transpose", "Array concatenation"], a: 1, unit: 4 },
  { q: "What does list.sort() vs sorted(list) differ in?", o: ["No difference", "sort() modifies in place, sorted() returns new list", "sorted() is faster", "sort() returns new list"], a: 1, unit: 1 },
  { q: "Which HTTP status code means 'Not Found'?", o: ["200", "301", "404", "500"], a: 2, unit: 5 },
  { q: "What does pd.merge(df1, df2, on='id', how='inner') do?", o: ["Keeps all rows from df1", "Keeps only matching rows from both", "Keeps all rows from df2", "Keeps all rows from both"], a: 1, unit: 4 },
  { q: "What is the purpose of __init__.py in a Python package?", o: ["Runs on install", "Marks a directory as a Python package", "Stores configuration", "Imports all modules"], a: 1, unit: 2 },
  { q: "What does 'raise' keyword without arguments do inside an except block?", o: ["Creates a new exception", "Re-raises the current exception", "Silently ignores the error", "Exits the program"], a: 1, unit: 2 },
  { q: "Which of these is True about Python sets?", o: ["Sets are ordered", "Sets allow duplicates", "Sets support indexing", "Sets automatically remove duplicates"], a: 3, unit: 1 },
  { q: "What does df.pivot_table() create?", o: ["A sorted DataFrame", "A summary table with aggregated values", "A merged DataFrame", "A filtered DataFrame"], a: 1, unit: 4 },
  { q: "What is returned by a Flask view function?", o: ["Only strings", "A Response object (string, tuple, or response object)", "Only HTML", "Only JSON"], a: 1, unit: 5 },
  { q: "What does Abstract Base Class (ABC) enforce?", o: ["Prevents instantiation of parent class", "Makes all methods public", "Forces child classes to implement certain methods", "Automatically inherits all methods"], a: 2, unit: 3 },
  { q: "What is the difference between '==' and 'is' in Python?", o: ["No difference", "'==' compares values, 'is' compares identity (memory address)", "'is' compares values", "'==' compares memory"], a: 1, unit: 1 },
  { q: "What does df.astype(int) do?", o: ["Converts all columns to int", "Converts selected column to int", "Drops non-integer columns", "Rounds all values"], a: 0, unit: 4 },
  { q: "In Flask, url_for() is used to:", o: ["Redirect to external URL", "Generate URLs from function names", "Parse URL parameters", "Validate URLs"], a: 1, unit: 5 },
  { q: "What is a lambda function?", o: ["A named function", "A class method", "An anonymous one-line function", "A recursive function"], a: 2, unit: 2 },
  { q: "What does the 'in' operator check for lists?", o: ["Index of element", "Count of element", "Whether element exists in list", "Type of element"], a: 2, unit: 1 },
  { q: "What does df.isnull().sum().sum() return?", o: ["Count of NaN in one column", "Total count of all NaN values in DataFrame", "Number of columns with NaN", "True or False"], a: 1, unit: 4 },
  { q: "Which Flask extension helps with form validation and CSRF protection?", o: ["Flask-SQL", "Flask-WTF", "Flask-Form", "Flask-Secure"], a: 1, unit: 5 },
  { q: "What is multiple assignment in Python?", o: ["Assigning same value to multiple variables: a = b = 5", "Assigning multiple values: a, b = 1, 2", "Both A and B", "Declaring variable twice"], a: 2, unit: 1 },
  { q: "What does os.getcwd() return?", o: ["File contents", "Current working directory path", "List of files", "OS name"], a: 1, unit: 2 },
  { q: "What is the Blueprint in Flask?", o: ["A project documentation file", "A way to organize routes into modular components", "A database schema", "A template file"], a: 1, unit: 5 },
  { q: "What is 'method overloading' support in Python?", o: ["Fully supported like Java", "Not natively supported — use default args instead", "Only for built-in methods", "Only with decorators"], a: 1, unit: 3 },
  { q: "What does df.query(\"Score > 80\") do?", o: ["Deletes rows where Score > 80", "Returns rows where Score > 80", "Updates Score to 80", "Counts rows where Score > 80"], a: 1, unit: 4 },
  { q: "What is a context manager in Python?", o: ["A function that manages variables", "An object that manages resources using with statement", "A class for file operations", "A module for memory"], a: 1, unit: 2 },
  { q: "Which Jinja2 tag is used for template inheritance?", o: ["{% import %}", "{% extends %}", "{% include %}", "{% inherit %}"], a: 1, unit: 5 },
  { q: "What does str.split('-') do?", o: ["Join strings with -", "Split string at each - into a list", "Replace - with space", "Count occurrences of -"], a: 1, unit: 1 },
  { q: "What is Encapsulation in OOP?", o: ["Inheriting from parent", "Hiding internal state and bundling data+methods", "Multiple implementations of same interface", "Abstract representation"], a: 1, unit: 3 },
];

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PythonTutor() {
  const [screen, setScreen] = useState("home");
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [quizName, setQuizName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [quizDone, setQuizDone] = useState(false);
  const [leaderboard, setLeaderboard] = useState(() => {
    try { return JSON.parse(localStorage.getItem("pytutor_lb") || "[]"); }
    catch { return []; }
  });
  const [activeTab, setActiveTab] = useState("explain");
  const messagesEndRef = useRef(null);

  const saveLeaderboard = (lb) => {
    setLeaderboard(lb);
    try { localStorage.setItem("pytutor_lb", JSON.stringify(lb)); } catch {}
  };

  const startQuiz = () => {
    const q = shuffleArray(QUIZ_QUESTIONS).slice(0, 10);
    setQuizQuestions(q);
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setAnswered(false);
    setQuizDone(false);
    setScreen("quiz");
  };

  const handleAnswer = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === quizQuestions[currentQ].a) setScore(s => s + 10);
  };

  const nextQuestion = () => {
    if (currentQ + 1 >= quizQuestions.length) {
      setQuizDone(true);
    } else {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const submitScore = () => {
    const finalScore = score + (selected === quizQuestions[currentQ].a && !quizDone ? 10 : 0);
    const entry = { name: quizName, score: finalScore, date: new Date().toLocaleDateString("en-IN") };
    const updated = [...leaderboard, entry].sort((a, b) => b.score - a.score).slice(0, 20);
    saveLeaderboard(updated);
    setScreen("leaderboard");
  };

  const askAI = async () => {
    if (!question.trim() || !selectedTopic) return;
    setLoading(true);
    setAiResponse("");
    try {
      const topic = TOPIC_CONTENT[selectedTopic.id];
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: `You are a friendly Python tutor teaching a college student. They are studying: "${topic.title}". Answer this question in a clear, beginner-friendly way with a short code example if helpful. Keep it under 300 words.\n\nQuestion: ${question}`
          }]
        })
      });
      const data = await res.json();
      setAiResponse(data.content?.map(b => b.text || "").join("\n") || "Sorry, couldn't get a response.");
    } catch {
      setAiResponse("Error connecting to AI. Please try again.");
    }
    setLoading(false);
  };

  const unitColor = selectedUnit ? UNITS.find(u => u.id === selectedUnit)?.color : "#1D9E75";

  if (screen === "quiz" && !quizDone) {
    const q = quizQuestions[currentQ];
    return (
      <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", maxWidth: 700, margin: "0 auto", padding: "1.5rem 1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <button onClick={() => setScreen("home")} style={{ background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 8, padding: "6px 14px", cursor: "pointer", color: "var(--color-text-secondary)", fontSize: 13 }}>← Exit Quiz</button>
          <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>Question {currentQ + 1} / {quizQuestions.length} · Score: <strong>{score}</strong></div>
        </div>
        <div style={{ background: "var(--color-background-secondary)", borderRadius: 12, padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: "#1D9E75", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>Unit {q.unit}</div>
          <div style={{ fontSize: 17, fontWeight: 500, color: "var(--color-text-primary)", lineHeight: 1.5 }}>{q.q}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {q.o.map((opt, i) => {
            let bg = "var(--color-background-primary)";
            let border = "0.5px solid var(--color-border-tertiary)";
            let color = "var(--color-text-primary)";
            if (answered) {
              if (i === q.a) { bg = "#E1F5EE"; border = "1.5px solid #1D9E75"; color = "#0F6E56"; }
              else if (i === selected && i !== q.a) { bg = "#FCEBEB"; border = "1.5px solid #E24B4A"; color = "#A32D2D"; }
            } else if (selected === i) { border = "1.5px solid var(--color-border-primary)"; }
            return (
              <div key={i} onClick={() => handleAnswer(i)} style={{ background: bg, border, borderRadius: 10, padding: "0.875rem 1.25rem", cursor: answered ? "default" : "pointer", color, fontSize: 15, transition: "all 0.15s", fontWeight: answered && i === q.a ? 500 : 400 }}>
                <span style={{ fontWeight: 500, marginRight: 10, color: "inherit" }}>{["A","B","C","D"][i]}.</span>{opt}
              </div>
            );
          })}
        </div>
        {answered && (
          <div style={{ marginTop: "1rem", textAlign: "right" }}>
            <button onClick={nextQuestion} style={{ background: "#1D9E75", color: "white", border: "none", borderRadius: 10, padding: "10px 28px", fontSize: 15, cursor: "pointer", fontWeight: 500 }}>
              {currentQ + 1 >= quizQuestions.length ? "See Result →" : "Next →"}
            </button>
          </div>
        )}
        <div style={{ marginTop: "1.5rem", background: "var(--color-border-tertiary)", height: 4, borderRadius: 4 }}>
          <div style={{ width: `${((currentQ + (answered ? 1 : 0)) / quizQuestions.length) * 100}%`, background: "#1D9E75", height: "100%", borderRadius: 4, transition: "width 0.3s" }} />
        </div>
      </div>
    );
  }

  if (screen === "quiz" && quizDone) {
    const finalScore = score;
    const pct = (finalScore / 100) * 100;
    return (
      <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", maxWidth: 500, margin: "0 auto", padding: "2rem 1rem", textAlign: "center" }}>
        <div style={{ fontSize: 60, marginBottom: 8 }}>{pct >= 80 ? "🏆" : pct >= 60 ? "⭐" : "📚"}</div>
        <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 4px", color: "var(--color-text-primary)" }}>Quiz Complete!</h2>
        <p style={{ color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>You scored {finalScore} out of 100</p>
        <div style={{ background: "var(--color-background-secondary)", borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ fontSize: 48, fontWeight: 700, color: pct >= 80 ? "#1D9E75" : pct >= 60 ? "#BA7517" : "#E24B4A" }}>{finalScore}</div>
          <div style={{ color: "var(--color-text-secondary)", fontSize: 14 }}>{pct >= 80 ? "Excellent! Exam ready!" : pct >= 60 ? "Good, review weak areas" : "Keep studying!"}</div>
        </div>
        {!nameInput ? (
          <div>
            <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 10 }}>Enter your name to save to leaderboard:</p>
            <input value={quizName} onChange={e => setQuizName(e.target.value)} placeholder="Your name" style={{ width: "100%", marginBottom: 10, padding: "10px 14px", borderRadius: 8, border: "0.5px solid var(--color-border-secondary)", fontSize: 15, boxSizing: "border-box", background: "var(--color-background-primary)", color: "var(--color-text-primary)" }} />
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <button onClick={submitScore} disabled={!quizName.trim()} style={{ background: "#1D9E75", color: "white", border: "none", borderRadius: 10, padding: "10px 24px", fontSize: 15, cursor: "pointer", fontWeight: 500, opacity: quizName.trim() ? 1 : 0.5 }}>Save Score</button>
              <button onClick={() => setScreen("home")} style={{ background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 10, padding: "10px 24px", fontSize: 15, cursor: "pointer", color: "var(--color-text-secondary)" }}>Skip</button>
            </div>
          </div>
        ) : null}
        <button onClick={startQuiz} style={{ marginTop: 12, background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 10, padding: "10px 24px", fontSize: 14, cursor: "pointer", color: "var(--color-text-secondary)" }}>Try Again</button>
      </div>
    );
  }

  if (screen === "leaderboard") {
    return (
      <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", maxWidth: 600, margin: "0 auto", padding: "1.5rem 1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
          <button onClick={() => setScreen("home")} style={{ background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 8, padding: "6px 14px", cursor: "pointer", color: "var(--color-text-secondary)", fontSize: 13 }}>← Back</button>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>🏆 Leaderboard</h2>
        </div>
        {leaderboard.length === 0 ? <p style={{ color: "var(--color-text-secondary)", textAlign: "center" }}>No scores yet. Take the quiz!</p> : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {leaderboard.map((entry, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, background: i === 0 ? "#E1F5EE" : "var(--color-background-secondary)", borderRadius: 10, padding: "12px 16px", border: i === 0 ? "1.5px solid #1D9E75" : "0.5px solid var(--color-border-tertiary)" }}>
                <span style={{ fontSize: 20, minWidth: 32, textAlign: "center" }}>{i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i+1}`}</span>
                <span style={{ flex: 1, fontWeight: 500, color: "var(--color-text-primary)" }}>{entry.name}</span>
                <span style={{ fontWeight: 700, color: i === 0 ? "#0F6E56" : "var(--color-text-primary)", fontSize: 18 }}>{entry.score}</span>
                <span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{entry.date}</span>
              </div>
            ))}
          </div>
        )}
        <div style={{ display: "flex", gap: 10, marginTop: "1.5rem", justifyContent: "center" }}>
          <button onClick={startQuiz} style={{ background: "#1D9E75", color: "white", border: "none", borderRadius: 10, padding: "10px 24px", fontSize: 14, cursor: "pointer", fontWeight: 500 }}>Take Quiz</button>
          <button onClick={() => { saveLeaderboard([]); }} style={{ background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 10, padding: "10px 16px", fontSize: 13, cursor: "pointer", color: "var(--color-text-secondary)" }}>Clear</button>
        </div>
      </div>
    );
  }

  if (screen === "topic" && selectedTopic) {
    const content = TOPIC_CONTENT[selectedTopic.id];
    if (!content) return (
      <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", maxWidth: 700, margin: "0 auto", padding: "1.5rem 1rem" }}>
        <button onClick={() => setScreen("unit")} style={{ background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 8, padding: "6px 14px", cursor: "pointer", color: "var(--color-text-secondary)", fontSize: 13, marginBottom: "1rem" }}>← Back</button>
        <p>Content coming soon for this topic.</p>
      </div>
    );

    return (
      <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", maxWidth: 720, margin: "0 auto", padding: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
          <button onClick={() => setScreen("unit")} style={{ background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 8, padding: "6px 14px", cursor: "pointer", color: "var(--color-text-secondary)", fontSize: 13 }}>← Back</button>
          <div style={{ fontSize: 11, fontWeight: 500, color: unitColor, textTransform: "uppercase", letterSpacing: "0.06em" }}>Unit {selectedUnit}</div>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 600, margin: "0 0 1rem", color: "var(--color-text-primary)" }}>{content.title}</h1>

        <div style={{ display: "flex", gap: 0, marginBottom: "1rem", background: "var(--color-background-secondary)", borderRadius: 10, padding: 4 }}>
          {["explain", "code", "ask"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex: 1, padding: "8px", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: activeTab === tab ? 500 : 400, fontSize: 13, background: activeTab === tab ? "var(--color-background-primary)" : "transparent", color: activeTab === tab ? "var(--color-text-primary)" : "var(--color-text-secondary)", transition: "all 0.15s" }}>
              {tab === "explain" ? "📖 Explanation" : tab === "code" ? "💻 Code" : "🤖 Ask AI"}
            </button>
          ))}
        </div>

        {activeTab === "explain" && (
          <div>
            <div style={{ background: "var(--color-background-secondary)", borderRadius: 12, padding: "1.25rem", marginBottom: "1rem", whiteSpace: "pre-wrap", fontSize: 14, lineHeight: 1.7, color: "var(--color-text-primary)" }}>
              {content.explanation.split("**").map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
            </div>
            {content.tip && (
              <div style={{ background: "#E1F5EE", borderLeft: "3px solid #1D9E75", borderRadius: "0 10px 10px 0", padding: "0.875rem 1rem", fontSize: 13, color: "#0F6E56" }}>
                <strong>💡 Exam Tip:</strong> {content.tip}
              </div>
            )}
          </div>
        )}

        {activeTab === "code" && (
          <div style={{ background: "#1a1a2e", borderRadius: 12, padding: "1.25rem", overflow: "auto" }}>
            <pre style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: "#e2e8f0", fontFamily: "'Fira Code', 'Consolas', monospace", whiteSpace: "pre-wrap" }}>
              {content.code.split("\n").map((line, i) => {
                const isComment = line.trim().startsWith("#");
                const isString = line.includes('"') || line.includes("'");
                return <div key={i} style={{ color: isComment ? "#68d391" : "inherit" }}>{line}</div>;
              })}
            </pre>
          </div>
        )}

        {activeTab === "ask" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: "1rem" }}>
              <input value={question} onChange={e => setQuestion(e.target.value)} onKeyDown={e => e.key === "Enter" && askAI()} placeholder={`Ask anything about ${content.title}...`} style={{ flex: 1, padding: "10px 14px", borderRadius: 10, border: "0.5px solid var(--color-border-secondary)", fontSize: 14, background: "var(--color-background-primary)", color: "var(--color-text-primary)" }} />
              <button onClick={askAI} disabled={loading || !question.trim()} style={{ background: unitColor, color: "white", border: "none", borderRadius: 10, padding: "10px 18px", fontSize: 14, cursor: "pointer", fontWeight: 500, opacity: loading ? 0.6 : 1, minWidth: 70 }}>
                {loading ? "..." : "Ask"}
              </button>
            </div>
            {aiResponse && (
              <div style={{ background: "var(--color-background-secondary)", borderRadius: 12, padding: "1.25rem", fontSize: 14, lineHeight: 1.7, color: "var(--color-text-primary)", whiteSpace: "pre-wrap" }}>
                {aiResponse}
              </div>
            )}
            {!aiResponse && !loading && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["What is this used for?", "Give me a tricky example", "What are common mistakes?", "How is this tested in exams?"].map(q => (
                  <button key={q} onClick={() => { setQuestion(q); }} style={{ fontSize: 12, padding: "6px 12px", borderRadius: 20, border: "0.5px solid var(--color-border-secondary)", background: "none", cursor: "pointer", color: "var(--color-text-secondary)" }}>{q}</button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  if (screen === "unit" && selectedUnit) {
    const unit = UNITS.find(u => u.id === selectedUnit);
    return (
      <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", maxWidth: 680, margin: "0 auto", padding: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
          <button onClick={() => setScreen("home")} style={{ background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 8, padding: "6px 14px", cursor: "pointer", color: "var(--color-text-secondary)", fontSize: 13 }}>← Back</button>
        </div>
        <div style={{ borderLeft: `3px solid ${unit.color}`, paddingLeft: "1rem", marginBottom: "1.5rem" }}>
          <h2 style={{ margin: "0 0 4px", fontSize: 20, fontWeight: 600, color: "var(--color-text-primary)" }}>{unit.title}</h2>
          <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-secondary)" }}>Select a topic to study</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
          {unit.topics.map(topic => (
            <button key={topic.id} onClick={() => { setSelectedTopic(topic); setActiveTab("explain"); setAiResponse(""); setQuestion(""); setScreen("topic"); }} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 12, padding: "1rem", cursor: "pointer", textAlign: "left", transition: "all 0.15s", color: "var(--color-text-primary)" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = unit.color}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-border-tertiary)"}>
              <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>{topic.label}</div>
              <div style={{ fontSize: 11, color: unit.color, marginTop: 6, fontWeight: 500 }}>Study →</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Home screen
  if (screen === "quizname") {
    return (
      <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", maxWidth: 440, margin: "0 auto", padding: "3rem 1rem", textAlign: "center" }}>
        <div style={{ fontSize: 56, marginBottom: "0.75rem" }}>🐍</div>
        <h2 style={{ fontSize: 22, fontWeight: 600, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Ready to test yourself?</h2>
        <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: "2rem" }}>10 random questions from 100 question bank across all 5 units</p>
        <input value={quizName} onChange={e => setQuizName(e.target.value)} placeholder="Enter your name" style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "0.5px solid var(--color-border-secondary)", fontSize: 16, marginBottom: 12, boxSizing: "border-box", background: "var(--color-background-primary)", color: "var(--color-text-primary)" }} autoFocus />
        <button onClick={() => { if (quizName.trim()) startQuiz(); }} disabled={!quizName.trim()} style={{ width: "100%", background: "#1D9E75", color: "white", border: "none", borderRadius: 12, padding: "13px", fontSize: 16, cursor: "pointer", fontWeight: 500, opacity: quizName.trim() ? 1 : 0.5 }}>Start Quiz →</button>
        <button onClick={() => setScreen("home")} style={{ marginTop: 10, background: "none", border: "none", color: "var(--color-text-secondary)", cursor: "pointer", fontSize: 13 }}>← Back</button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", maxWidth: 720, margin: "0 auto", padding: "1rem" }}>
      <div style={{ textAlign: "center", padding: "1.25rem 0 1.5rem" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#E1F5EE", borderRadius: 30, padding: "6px 18px", marginBottom: "0.75rem" }}>
          <span style={{ fontSize: 18 }}>🐍</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#0F6E56", letterSpacing: "0.08em", textTransform: "uppercase" }}>Python Exam Tutor</span>
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 6px", color: "var(--color-text-primary)" }}>Learn Python. Pass Your Exam.</h1>
        <p style={{ color: "var(--color-text-secondary)", fontSize: 14, margin: "0 0 1.25rem" }}>Complete coverage of all 5 units from your syllabus</p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => setScreen("quizname")} style={{ background: "#1D9E75", color: "white", border: "none", borderRadius: 10, padding: "10px 22px", fontSize: 14, cursor: "pointer", fontWeight: 500 }}>🧠 Take Quiz</button>
          <button onClick={() => setScreen("leaderboard")} style={{ background: "none", border: "0.5px solid var(--color-border-secondary)", borderRadius: 10, padding: "10px 22px", fontSize: 14, cursor: "pointer", color: "var(--color-text-secondary)" }}>🏆 Leaderboard</button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {UNITS.map(unit => (
          <button key={unit.id} onClick={() => { setSelectedUnit(unit.id); setScreen("unit"); }} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 14, padding: "1.125rem 1.25rem", cursor: "pointer", textAlign: "left", transition: "all 0.15s", display: "flex", alignItems: "center", gap: 14 }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--color-background-primary)"; e.currentTarget.style.borderColor = unit.color; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--color-background-secondary)"; e.currentTarget.style.borderColor = "var(--color-border-tertiary)"; }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: unit.color + "22", display: "flex", alignItems: "center", justifyContent: "center", color: unit.color, fontWeight: 700, fontSize: 15, flexShrink: 0 }}>{unit.id}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: "var(--color-text-primary)", marginBottom: 3 }}>{unit.title}</div>
              <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{unit.topics.length} topics · {["Understand","Apply","Create","Analyze","Evaluate"][unit.id-1]}</div>
            </div>
            <div style={{ color: unit.color, fontSize: 16, fontWeight: 300 }}>→</div>
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginTop: "1.25rem" }}>
        {[["100", "Quiz questions"], ["5", "Units covered"], ["30+", "Code examples"]].map(([n, l]) => (
          <div key={l} style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "0.875rem", textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#1D9E75" }}>{n}</div>
            <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
