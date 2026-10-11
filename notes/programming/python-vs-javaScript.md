# JavaScript vs Python

## 1. Multiple variable init on one line

JS declares multiple variables in one statement using comma separation; Python does true tuple-unpacking assignment.

| | JS | Python |
|---|---|---|
| Syntax | `let a = 1, b = 2, c = 3;` | `a, b, c = 1, 2, 3` |
| Mechanism | Comma-separated declarations | Tuple unpacking |

**Examples**
```js
let a = 1, b = 2, c = 3;
```
```python
a, b, c = 1, 2, 3
```

---

## 2. String interpolation

Both languages support embedding expressions directly in strings.

| | JS | Python |
|---|---|---|
| Syntax | Template literals, backticks: `` `...${expr}...` `` | f-strings: `f"...{expr}..."` |

**Examples**
```js
const msg = `Hello ${name}, you are ${age}`;
```
```python
msg = f"Hello {name}, you are {age}"
```

---

## 3. Underscore in numbers

Both languages allow underscores in numeric literals purely for readability — same syntax, no functional difference.

**Examples**
```js
let n = 1_000_000;
```
```python
n = 1_000_000
```

---

## 4. Comments

Both have single-line and multi-line comment forms, but Python's "multi-line comment" is actually a string literal used by convention (often as a docstring).

| | JS | Python |
|---|---|---|
| Single line | `// comment` | `# comment` |
| Multi line | `/* comment */` | `""" comment """` (a string, used as comment/docstring) |

---

## 5. Array/List methods vs operators/global functions

JS puts most array operations as methods on the array object. Python splits between list methods and global functions/comprehensions.

| | JS | Python |
|---|---|---|
| Add item | `arr.push(x)` | `arr.append(x)` |
| Transform | `arr.map(fn)` | `[f(x) for x in arr]` or `map(fn, arr)` |
| Length | `arr.length` (property) | `len(arr)` (global function) |

**Examples**
```js
arr.push(4);
const doubled = arr.map(x => x * 2);
console.log(arr.length);
```
```python
arr.append(4)
doubled = [x * 2 for x in arr]
print(len(arr))
```

---

## 6. For loop operators

JS distinguishes iterating keys/indices (`for...in`) from values (`for...of`), plus a `.forEach()` method. Python's `for` always iterates values directly; use `enumerate()` for index+value pairs.

| | JS | Python |
|---|---|---|
| Iterate values | `for (const x of arr)` | `for x in arr` |
| Iterate keys/indices | `for (const i in arr)` | n/a — use `enumerate(arr)` |
| Callback style | `arr.forEach(x => ...)` | n/a — use plain `for` loop |
| Index + value | `for (const [i, x] of arr.entries())` | `for i, x in enumerate(arr)` |

**Examples**
```js
for (const x of arr) { console.log(x); }
for (const i in arr) { console.log(i); }
```
```python
for x in arr:
    print(x)

for i, x in enumerate(arr):
    print(i, x)
```

---

## 7. elif vs else if

Same concept (chained conditional), different keyword/syntax.

| | JS | Python |
|---|---|---|
| Syntax | `else if (cond) { }` | `elif cond:` |

**Examples**
```js
if (x > 10) {
  // ...
} else if (x > 5) {
  // ...
}
```
```python
if x > 10:
    pass
elif x > 5:
    pass
```

---

## 8. Dictionary vs Object

JS objects support both dot and bracket access; Python dicts only support bracket access (dot access is reserved for attributes, not keys).

| | JS Object | Python Dict |
|---|---|---|
| Read | `obj.key` or `obj["key"]` | `d["key"]` only |
| Write | `obj.key = val` | `d["key"] = val` |
| Iterate keys | `for (let k in obj)` / `Object.keys(obj)` | `for k in d` / `d.keys()` |
| Iterate entries | `Object.entries(obj)` | `d.items()` |
| Iterate values | `Object.values(obj)` | `d.values()` |

**Examples**
```js
const obj = { key: "value" };
console.log(obj.key);
for (const [k, v] of Object.entries(obj)) {
  console.log(k, v);
}
```
```python
d = {"key": "value"}
print(d["key"])
for k, v in d.items():
    print(k, v)
```

---

## 9. Sets

Both have native Set types with similar purpose; syntax differs.

| | JS | Python |
|---|---|---|
| Create | `new Set([1, 2, 3])` | `{1, 2, 3}` or `set([1, 2, 3])` |

**Examples**
```js
const s = new Set([1, 2, 3]);
```
```python
s = {1, 2, 3}
```

---

## 10. Function return without explicit `return`

Both return a "nothing" value when no `return` is given, but differ in what that value is and whether an implicit-return shorthand exists.

| | JS | Python |
|---|---|---|
| No explicit return | returns `undefined` | returns `None` |
| Implicit-return shorthand | arrow fn w/ expression body: `x => x * 2` | none for `def`; only via `lambda x: x * 2` |

**Examples**
```js
function noReturn() {}
console.log(noReturn()); // undefined

const double = x => x * 2; // implicit return
```
```python
def no_return():
    pass

print(no_return())  # None

double = lambda x: x * 2  # implicit return
```

---

## 11. "Everything is an object"

JS primitives (number, string, boolean) are not objects, but get temporarily auto-boxed in wrapper objects to allow method calls; functions and arrays are objects. Python's object model is fully unified — literally everything, including ints, strings, `None`, functions, and classes, is an object with a type.

| | JS | Python |
|---|---|---|
| Primitives (number/string/bool) | Not objects; auto-boxed temporarily for method calls | True objects |
| Functions | Objects | Objects |
| Arrays | Objects | Objects (lists) |
| Type check | `typeof "abc"` → `"string"` | `type(5)` → `<class 'int'>` |

**Examples**
```js
console.log("abc".toUpperCase()); // works via temporary String wrapper
console.log(typeof "abc"); // "string", not "object"
```
```python
print("abc".upper())  # works because strings are true objects
print(type(5))  # <class 'int'>
```

---

## 12. Copy by value vs copy by reference

Both languages follow the same underlying rule — **primitives copy by value, objects copy by reference** — but differ in what counts as a "primitive" and in the reasoning behind it.

| | JS | Python |
|---|---|---|
| Copy by value | `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint` | `int`, `float`, `bool`, `str`, `tuple` — *because they're immutable*, not because they're stored differently |
| Copy by reference | `object`, `array`, `function` | `list`, `dict`, `set`, custom objects — mutable |
| Underlying model | Primitives genuinely stored by value | Everything is technically a reference (name bound to an object); immutable types just *behave* like values since any "change" creates a new object |

**Key nuance:** In Python, "copy by value" is really about mutability, not storage — immutable objects can't be changed in place, so they *appear* to copy by value even though names are always references under the hood.

**Examples — value vs reference behavior**
```javascript
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 — unaffected

let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 99;
console.log(obj1.x); // 99 — same object
```
```python
a = 5
b = a
b = 10
print(a)  # 5 — unaffected

lst1 = [1, 2, 3]
lst2 = lst1
lst2.append(4)
print(lst1)  # [1, 2, 3, 4] — same list
```

**Reassignment vs mutation:** both languages pass references *by value* — the reference itself is copied, so reassigning the local variable has no effect outside the function, but mutating the object it points to does.

```javascript
function reassign(arr) { arr = [9, 9, 9]; }  // no effect outside
function mutate(arr) { arr.push(9); }         // affects caller
```
```python
def reassign(lst): lst = [9, 9, 9]  # no effect outside
def mutate(lst): lst.append(9)       # affects caller
```

**Copying to avoid shared references** (shallow copies only protect the top level — nested objects/lists are still shared unless you go deep):

| | JS | Python |
|---|---|---|
| Shallow copy (array/list) | `[...arr]` | `list(lst)` or `lst.copy()` |
| Shallow copy (object/dict) | `{...obj}` | `dict.copy()` |
| Deep copy | `structuredClone(obj)` | `copy.deepcopy(obj)` |

---

## 13. Operator overloading

Python lets you redefine what `+`, `-`, `*`, etc. do for custom objects via dunder methods (`__add__`, `__sub__`, ...). JavaScript has **no true operator overloading** — `+`, `-`, `*` always fall back to numeric/string coercion; there's no per-operator method you can define. A stalled TC39 proposal exists but isn't part of the language.

| | JS | Python |
|---|---|---|
| True operator overloading | Not supported | Supported via dunder methods (`__add__`, `__mul__`, etc.) |
| Closest workaround | Custom methods (`.add()`), or `valueOf()` / `Symbol.toPrimitive` for numeric/string coercion | N/A — native support |
| Coercion control | `+` on objects always falls back to number/string coercion, never a custom per-operator method | Not applicable |

**Examples**
```js
// Workaround 1: explicit method
class Point {
  constructor(x, y) { this.x = x; this.y = y; }
  add(other) { return new Point(this.x + other.x, this.y + other.y); }
}

// Workaround 2: valueOf() — only gives numeric coercion, not a real "+" method
class Money {
  constructor(cents) { this.cents = cents; }
  valueOf() { return this.cents; }
}
const a = new Money(500), b = new Money(300);
console.log(a + b); // 800 (plain number, not a Money object)
```
```python
class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

p3 = Point(1, 2) + Point(3, 4)  # real operator overload, returns a Point
```

---

## 14. Unpacking vs destructuring

Python starred unpacking can collect intermediate values into a list while assigning the first and last values separately. JavaScript array destructuring can skip elements, but its rest element must be last, so it cannot collect the middle values in the same pattern.

| | JS | Python |
|---|---|---|
| Capture first, middle, and last | Not supported in one destructuring pattern | `first, *middle, last = values` |
| Skip middle elements | Array elisions, such as `[first, , last]` | Use `_` as a target if the skipped value must be unpacked |
| Rest values | `...rest` must be the final array-pattern element | `*rest` can appear between other targets |

**Examples**
```js
const [first, , last] = [1, 2, 3]; // skips 2
const [head, ...tail] = [1, 2, 3, 4]; // tail is [2, 3, 4]
// [first, ...middle, last] is invalid: ...middle must be last
```
```python
first, *middle, last = [1, 2, 3, 4]
# first is 1, middle is [2, 3], and last is 4
```
