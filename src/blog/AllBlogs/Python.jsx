import React from "react";
import Footer from "../../layout/Footer";
import WorkBadge from "../../Components/WorkBadge";
import BlogHeading from "../BlogHeading";

const sections = [
  {
    title: "Print Function",
    description:
      "The print() function is one of the most essential built-in functions in Python. It is used to display output on the console (standard output stream). Almost every Python program uses print() for showing messages, results, debugging information, user instructions, and final outputs. You can print strings, numbers, variables, expressions, and even complex objects. In Python 3, print is a function (unlike Python 2 where it was a statement). It supports powerful parameters like sep (to define separator between values), end (to define what comes at the end, default is newline), file (to redirect output to a file or other stream), and flush (to force immediate output). Mastering print() with f-strings, .format(), and other formatting techniques is crucial for creating readable and professional-looking programs. In large applications, overusing print() can slow down performance, so developers often switch to logging modules in production. Improper use of print can also cause unwanted newlines or spacing issues.",
    code: `print("Hello World")
print("Python", "Programming", sep=" | ", end="\\n\\n")

name = "Joydeep"
age = 25
score = 95.75

print("Name:", name)
print("Age:", age)
print("Score:", score)

# Advanced formatting
print(f"Student {name} is {age} years old and scored {score:.2f}/100")

# Old style
print("Name: %s, Age: %d" % (name, age))

# Redirecting output
with open("log.txt", "w") as f:
    print("This is logged", file=f)`,
  },
  {
    title: "Variables",
    description:
      "Variables are fundamental containers that store data values during program execution. In Python, variables are dynamically typed, meaning you do not need to declare their data type explicitly. A variable can hold any type of data — string, integer, float, boolean, list, dictionary, or even functions and classes. Variables act as references to objects in memory. Key rules include: must start with a letter or underscore, can contain letters, numbers, and underscores, are case-sensitive, and cannot be reserved keywords. Understanding variable scope (local vs global), object identity (using id()), mutability, and memory management is extremely important. Bad variable naming or reusing variables for different purposes often leads to bugs that are hard to debug in large projects. Variables make code reusable, dynamic, and maintainable.",
    code: `name = "Joydeep"          # String
age = 25                 # Integer
height = 5.9             # Float
is_student = True        # Boolean
skills = ["Python", "JS"] # List
person = {"city": "Chittaranjan"} # Dictionary

# Multiple assignment
a, b, c = 10, 20, 30

# Unpacking
first, *rest = [1, 2, 3, 4, 5]

print(name, age, height, is_student)
print(type(name))`,
  },
  {
    title: "Output in Python",
    description:
      "Output refers to any information or result that a program displays or saves for the user or other systems. In Python, the most common way to produce output is using the print() function, but there are many other methods such as writing to files, logging with the logging module, returning JSON for web APIs, using rich libraries for beautiful terminal output, or even GUI-based output. Good output design improves user experience, helps in debugging, and makes data exchange easier between programs. You should learn different formatting styles including f-strings (most recommended), str.format(), and old % formatting. In real-world applications like data analysis, web development, or automation scripts, controlling output format, frequency, and destination is critical for performance and clarity.",
    code: `name = "Joydeep"
marks = 95

print("Student Name:", name)
print("Marks:", marks)

# f-string (recommended)
print(f"{name} scored {marks} marks")

# JSON style output
import json
data = {"name": name, "marks": marks}
print(json.dumps(data, indent=2))`,
  },
  {
    title: "Input in Python",
    description:
      "The input() function allows a program to take data from the user at runtime, making the program interactive. It displays a prompt message and waits for the user to type something and press Enter. Important point: input() always returns the data as a string, even if the user enters a number. Therefore, you must use type casting (int(), float(), etc.) for mathematical operations. Good input handling includes validation, error handling (try-except for ValueError), and user-friendly messages. For hidden input like passwords, use the getpass module. In real applications such as calculators, quizzes, login systems, and games, robust input management prevents crashes and improves security and user experience.",
    code: `name = input("Enter your name: ")
print("Welcome,", name)

age = int(input("Enter your age: "))   # type casting
height = float(input("Enter height in meters: "))

# Multiple inputs
x, y = map(int, input("Enter two numbers: ").split())

print("Age:", age, "Height:", height)`,
  },
  {
    title: "Comments in Python",
    description:
      "Comments are non-executable lines in code used to explain what the code does, why certain decisions were made, and to improve readability. Python completely ignores comments during execution. Single-line comments start with #. Multi-line comments are created using triple quotes (''' or \"\"\"), which are also used as docstrings for documenting functions, classes, and modules. Writing high-quality comments is a sign of professional programming. Good practice is to explain 'why' rather than 'what'. Over-commenting or outdated comments can confuse readers. Comments are extremely important in team projects, open-source contributions, and long-term code maintenance.",
    code: `# This is a single line comment

"""
This is a multi-line comment.
It can span multiple lines.
Used for detailed explanations.
"""

def add(a, b):
    """Add two numbers and return the result."""
    return a + b

print(add(10, 20))`,
  },
  {
    title: "String Data Type",
    description:
      "Strings are one of the most commonly used data types in Python. They are used to store and manipulate textual data such as names, messages, addresses, passwords, and large documents. Strings are immutable (cannot be changed after creation), ordered sequences of Unicode characters. You can create them using single quotes, double quotes, or triple quotes (for multi-line strings). Python provides a rich set of string methods like upper(), lower(), split(), join(), replace(), find(), strip(), etc. Understanding string slicing, concatenation, formatting (f-strings), raw strings (r''), and escape characters is very important. Strings are heavily used in web development, data processing, file handling, and natural language processing.",
    code: `name = "Joydeep Das"

print(name)
print(name.upper())
print(name.lower())
print(name.title())
print(name.split())        # splits into list
print(name.replace("Das", "Kumar"))

# Slicing
print(name[0:7])
print(name[-3:])

# f-string
age = 25
print(f"My name is {name} and I am {age} years old")`,
  },
  {
    title: "Integer Data Type",
    description:
      "Integers (int) represent whole numbers without any decimal point. They can be positive, negative, or zero. Python supports integers with unlimited precision, meaning you can work with extremely large numbers without any special declaration. Integers are used in counting, indexing, mathematical calculations, loops, and bitwise operations. Common operations include arithmetic (+, -, *, /, //, %, **), comparison, and bitwise (&, |, ^, ~). Understanding integer division vs floor division and modulo operation is essential to avoid logical errors in programs.",
    code: `a = 100
b = 25

print(a + b)
print(a - b)
print(a * b)
print(a // b)   # floor division
print(a % b)    # modulo
print(a ** 3)   # power

# Large number
big = 2 ** 100
print(big)`,
  },
  {
    title: "Boolean Data Type",
    description:
      "Boolean is a simple data type with only two possible values: True and False. It is mainly used for making decisions in if-else statements, loops, and logical operations. In Python, True and False are actually subclasses of int (True equals 1, False equals 0). Understanding truthy and falsy values is very important — empty containers, zero, None, and empty strings evaluate to False, while others evaluate to True. Booleans are the backbone of conditional logic, comparisons, and control flow in all Python programs.",
    code: `is_active = True
is_admin = False

print(is_active)
print(10 > 5)      # True
print(5 == 10)     # False

# Truthy / Falsy
print(bool(0))           # False
print(bool(""))          # False
print(bool([]))          # False
print(bool("Hello"))     # True`,
  },
  {
    title: "Float Data Type",
    description:
      "Float data type is used to represent real numbers with decimal points. They are essential for scientific calculations, measurements, percentages, financial applications, and graphics. However, floats have precision limitations due to how they are stored in binary (e.g., 0.1 + 0.2 is not exactly 0.3). For high-precision decimal arithmetic, the decimal module is recommended. Floats support all arithmetic operations and are commonly used with mathematical libraries like math and numpy.",
    code: `price = 99.99
height = 5.85
pi = 3.14159

print(price + 10)
print(height * 2)

# Precision issue example
print(0.1 + 0.2)

# Better precision
from decimal import Decimal
print(Decimal('0.1') + Decimal('0.2'))`,
  },
  {
    title: "Type Casting",
    description:
      "Type casting, also known as type conversion, is the process of converting one data type into another. It is extremely important because user input is always received as string, and many operations require specific data types. Python provides built-in functions like int(), float(), str(), bool(), list(), tuple(), set(), and dict() for conversion. Improper casting can raise ValueError or TypeError exceptions. Good understanding of type casting helps prevent runtime errors and ensures smooth data processing in real applications.",
    code: `age_str = "25"
age = int(age_str)

marks = 95
marks_float = float(marks)

value = 1
bool_value = bool(value)

print(type(age))
print(type(marks_float))
print(bool_value)

# List to string
numbers = [1, 2, 3]
print(" ".join(map(str, numbers)))`,
  },
  {
    title: "If Else Statement",
    description:
      "The if-else statement is the core of decision-making and conditional logic in Python. It allows the program to execute different blocks of code based on whether a condition is True or False. You can extend it with elif for multiple conditions. Conditions can combine logical operators (and, or, not) and comparison operators. Proper indentation is mandatory. This structure is used in almost every non-trivial program including validation, user authentication, game logic, and business rule implementation. Mastering if-else is essential for building intelligent and responsive programs.",
    code: `age = 20
score = 85

if age >= 18 and score >= 80:
    print("Eligible for scholarship")
elif age >= 18:
    print("Adult but no scholarship")
else:
    print("Not eligible")

# Ternary operator
status = "Adult" if age >= 18 else "Minor"
print(status)`,
  },
  {
    title: "Nested If Else",
    description:
      "Nested if-else refers to placing if-else statements inside other if or else blocks. It is used when multiple levels of conditions need to be checked sequentially. Common real-world examples include login systems (check username, then password, then role), grading systems, access control, and complex form validation. While powerful, too much nesting reduces code readability. Developers should try to keep nesting levels low and consider using early returns, elif chains, or separate functions for better maintainability.",
    code: `age = 20
has_id = True
has_permission = False

if age >= 18:
    if has_id:
        if has_permission:
            print("Access Granted")
        else:
            print("Permission Denied")
    else:
        print("ID required")
else:
    print("You are underage")`,
  },
  {
    title: "For Loop",
    description:
      "The for loop is used to iterate over a sequence (list, tuple, string, range, dictionary, set, etc.) and execute a block of code for each item. It is one of the most frequently used control structures. You can use range() for numeric iteration, enumerate() for index+value, zip() for parallel iteration, and items() for dictionaries. For loops also support an optional else clause that executes if the loop completes without a break. Mastering for loops with list comprehensions is key for efficient data processing and automation scripts.",
    code: `for i in range(1, 6):
    print("Number:", i)

fruits = ["Apple", "Banana", "Mango"]
for index, fruit in enumerate(fruits, start=1):
    print(index, fruit)

# With zip
names = ["Joydeep", "Soumika"]
ages = [25, 22]
for name, age in zip(names, ages):
    print(name, age)`,
  },
  {
    title: "While Loop",
    description:
      "The while loop repeatedly executes a block of code as long as a given condition remains True. It is ideal when the number of iterations is not known in advance, such as waiting for user input, processing data until end of file, or running until a certain condition is met. You must ensure the condition eventually becomes False to avoid infinite loops, which can crash programs. While loops support break, continue, and else clauses. They are very useful in interactive programs, simulations, and real-time systems.",
    code: `count = 1
while count <= 5:
    print("Count:", count)
    count += 1

# With break and else
i = 1
while i <= 10:
    if i == 7:
        break
    print(i)
    i += 1
else:
    print("Loop completed normally")`,
  },
  {
    title: "Lists in Python",
    description:
      "Lists are mutable, ordered, and versatile collection data types that can store items of different data types. They are one of Python's most powerful and widely used structures. Lists support indexing, slicing, appending, inserting, removing, sorting, and many other operations. They are dynamic in size. Understanding list comprehension, shallow vs deep copying, iteration patterns, and performance implications (especially with large data) is very important. Lists are heavily used in data analysis, web development, machine learning, and almost every Python project.",
    code: `fruits = ["Apple", "Banana", "Mango", "Orange"]

print(fruits[0])
print(fruits[-1])
print(fruits[1:3])

fruits.append("Grapes")
fruits.insert(2, "Cherry")
fruits.remove("Banana")
popped = fruits.pop()

print(fruits)

# List comprehension
squares = [x**2 for x in range(10) if x % 2 == 0]
print(squares)`,
  },
];

const Python = () => {
  return (
    <>
      <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
        <BlogHeading
          title="Core Python"
          highlight="Programming"
          description="Core Python remains essential for automation, backend development, AI, and modern software engineering."
          tags={[
            "Python Fundamentals",
            "Object Oriented Programming",
            "Data Structures",
          ]}
        />

        <main className="container mx-auto pb-20">
          <div className="max-w-8xl mx-auto md:px-16 px-4 space-y-14">
            <h1 className="heading-font text-2xl md:text-5xl mb-8 text-left">
              About Python
            </h1>

            <p className="pt-2 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed text-justify mb-8">
              Python is a high-level, general-purpose programming language that
              emphasizes code readability, simplicity, and ease-of-writing with
              the use of significant indentation,[38] "plain English" naming, an
              extensive ("batteries-included") standard library, and garbage
              collection. Python supports multiple programming paradigms but
              with an emphasis on object-oriented programming and dynamic
              typing.
              <br />
              Guido van Rossum began working on Python in the late 1980s as a
              successor to the ABC programming language. Python 3.0, released in
              2008, was a major revision and not completely backward-compatible
              with earlier versions. Beginning with Python 3.5,[39] capabilities
              and keywords for typing were added to the language, allowing
              optional static typing.[40] As of 2026, the Python Software
              Foundation supports Python 3.10, 3.11, 3.12, 3.13, and 3.14,
              following the project's annual release cycle and five-year support
              policy. Python 3.15 is currently in the alpha development phase,
              and the stable release is expected to launch in October 2026.[41]
              Earlier versions in the 3.x series have reached end-of-life and no
              longer receive security updates.
              <br />
              Python has gained extensive use in the machine learning
              community.[42][43][44][45] It is widely taught as an introductory
              programming language.[46] Since 2003, Python has consistently
              ranked among the top ten most popular programming languages in the
              TIOBE Programming Community Index, which ranks programming
              languages based on searches across 24 platforms.[47]
            </p>

            <p className="pt-2 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed text-justify mb-8">
              Python was conceived in the late 1980s[11] by Guido van Rossum at
              Centrum Wiskunde & Informatica (CWI) in the Netherlands.[48] It
              was designed as a successor to the ABC programming language, which
              was inspired by SETL,[49] capable of exception handling and
              interfacing with the Amoeba operating system.[18] Python
              implementation began in December 1989.[48] Van Rossum first
              released it in 1991 as Python 0.9.0.[48] Van Rossum assumed sole
              responsibility for the project, as the lead developer, until 12
              July 2018, when he announced his "permanent vacation" from
              responsibilities as Python's "benevolent dictator for life"
              (BDFL); this title was bestowed on him by the Python community to
              reflect his long-term commitment as the project's chief
              decision-maker.[50] (He has since come out of retirement and is
              self-titled "BDFL-emeritus".) In January 2019, active Python core
              developers elected a five-member Steering Council to lead the
              project.[51][52]
              <br />
              Python 2.0 was released on 16 October 2000, featuring many new
              features such as list comprehensions, cycle-detecting garbage
              collection, reference counting, and Unicode support.[54] Python
              2.7's end-of-life was initially set for 2015, and then postponed
              to 2020 out of concern that a large body of existing code could
              not easily be forward-ported to Python 3.[55][56] It no longer
              receives security patches or updates.[57][58] While Python 2.7 and
              older versions are officially unsupported, a different unofficial
              Python implementation, PyPy, continues to support Python 2, i.e.,
              "2.7.18+" (plus 3.11), with the plus signifying (at least some)
              "backported security updates".[59]
              <br />
              Python 3.0 was released on 3 December 2008, and was a major
              revision and not completely backward-compatible with earlier
              versions, with some new semantics and changed syntax. Python
              2.7.18, released in 2020, was the last release of Python 2.[60]
              Several releases in the Python 3.x series have added new syntax to
              the language, and made a few (considered very minor)
              backward-incompatible changes.
              <br />
              As of May 2026, Python 3.14.5 is the latest stable release. All
              older 3.x versions had a security update down to Python 3.9.24
              then again with 3.9.25, the final version in 3.9 series. Python
              3.10 is, since November 2025, the oldest supported branch.[61]
              Python 3.15 has an alpha released, and Android has an official
              downloadable executable available for Python 3.14. Releases
              receive two years of full support followed by three years of
              security support.
            </p>
            {sections.map((section, index) => (
              <div
                key={index}
                className=" md:flex gap-6  rounded-xl backdrop-blur-md"
              >
                <div className="md:w-1/2">
                  <h2 className="heading-font text-2xl md:text-5xl mb-8 text-left">
                    {section.title}
                  </h2>

                  <p className="pt-2 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed text-justify mb-8">
                    {section.description}
                  </p>
                </div>
                {/* Code Block UI Kept Same */}
                <div className="bg-black/60 md:w-1/2 rounded-2xl overflow-hidden border border-white/10">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>

                    <span className="ml-3 text-sm text-gray-400">
                      example.py
                    </span>
                  </div>

                  <pre className="p-6 overflow-x-auto text-sm md:text-base text-green-400">
                    <code>{section.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <WorkBadge />
      <Footer />
    </>
  );
};

export default Python;
