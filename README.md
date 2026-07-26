# JavaScript Interview Prep

A dedicated workspace to practice JavaScript data structures, algorithms, and common interview questions using Quokka.js or direct Node execution.

## Folder Structure
- `arrays/` - Questions related to Array manipulation, searches, sorting, etc.
- `strings/` - Questions related to string manipulation, regex, parsing, etc.

## How to Run & Verify Solutions

### Approach 1: Quokka.js (Live Execution - Recommended)
Quokka.js aapke code ko editor ke andar hi instantly execute karke outputs aur intermediate loops print karta hai.

1. **Install Extension**: VS Code Extensions panel (`Ctrl + Shift + X`) kholiye aur **Quokka.js** search karke install kariye.
2. **Start Quokka**: Koi bhi file open karein (jaise `arrays/01_two_sum.js`), aur shortcut dabayein:
   - `Ctrl + K, Q` (Windows/Linux)
   - `Cmd + K, Q` (Mac)
   - *Alternately*: `Ctrl + Shift + P` dabakar `Quokka.js: Start on Current File` select karein.
3. **Live Output**: Aapko direct screen par variables aur `console.log()` ke aage live output dikhne lagega.

### Approach 2: Node.js (Standard Terminal Run)
Ye bilkul real-world compiler ki tarah execute karega:
```bash
node arrays/01_two_sum.js
```
