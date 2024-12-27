# Text Encoding Challenge

## Problem Description

This exercise involves encoding a given text according to specific rules. The process includes removing spaces, arranging the text into a table, and then encoding the text column by column. The detailed steps and requirements are as follows:

### Rules:

1. **Remove Spaces:**

   - The spaces in the input text must be removed.

2. **Arrange the Text in a Table:**

   - Let $L$ be the length of the cleaned text (after removing spaces).
   - Arrange the characters in a table such that:
     - $\lfloor \sqrt{L} \rfloor \leq \text{rows} \leq \text{columns} \leq \lceil \sqrt{L} \rceil,$, where $\lfloor x \rfloor$ is the floor function and $\lceil x \rceil$ is the ceiling function.
   - Ensure that $\text{rows} \times \text{columns} \geq L$
   - If multiple table configurations satisfy these conditions, choose the configuration with the minimum area (i.e., smallest $\text{rows} \times \text{columns}$).

3. **Generate the Encoded Text:**
   - Read the table column by column.
   - Insert a space after each column.
   - Concatenate the results to produce the encoded message.

---

## Examples

### Example Input:

we the people of the united states in order to form a more perfect union etc

### Example Steps:

1. **Cleaned Text:** `wethepeopleoftheunitedstatesinordertoforamoreperfectunionetc` Length ($L = 61$).

2. **Determine Table Dimensions:**
   $\lfloor \sqrt{61} \rfloor = 7,\ \lceil \sqrt{61} \rceil = 8.$
   Table dimensions: $8 \times 8$ (minimum area).

3. **Arrange Text in Table:**
   wethepeo pleofthe unitedst atesinor dertofor mamorepe rfectuni onetc

4. **Read Column by Column:**
   Encoded result:
   wpuadmro elnteafn teiermee hotstoct efeiortc ptdnfeu ehsoopn oetrrei

---

### Additional Examples

#### Input:

cheating is not allowed

#### Output:

cinl hnoo egtw aiae tsld

---

#### Input:

the rocks

#### Output:

trk hos ec

---

## Requirements

To solve the problem programmatically:

1. **Input:**
   - A string containing words and spaces.
2. **Output:**
   - Encoded text arranged as described above.

### Key Considerations:

- Ensure `rows * columns >= L`.
- Minimize the area of the table when multiple configurations are possible.
- Encode text column by column, inserting spaces between columns.

---

## How to Use the Solution

The solution can be implemented in any programming language. The logic involves:

1. Cleaning the input text.
2. Determining the optimal table dimensions.
3. Arranging the text in a table.
4. Reading and encoding the text column by column.

For the provided implementation:

- **Input**: Pass the string to the function (or API endpoint).
- **Output**: The encoded string as per the requirements.
