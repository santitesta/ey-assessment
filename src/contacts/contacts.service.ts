import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class ContactsService {
  async testAssessment(text: string): Promise<string> {
    // Step 1: Remove spaces from the input text
    const cleanedText = text.replace(/\s/g, '');
    const L = cleanedText.length;

    // Step 2: Determine optimal dimensions (rows and columns)
    // Initialize rows and columns based on the square root of L.
    // We aim to find dimensions such that rows * columns >= L and rows <= columns.
    let rows = Math.floor(Math.sqrt(L));
    let columns = Math.ceil(Math.sqrt(L));

    // Adjust rows and columns to ensure the smallest valid area.
    while (rows * columns < L) {
      if (rows < columns) {
        rows++; // Prefer incrementing rows if rows < columns to minimize area
      } else {
        columns++; // Increment columns otherwise
      }
    }
    // At the end of this loop, rows * columns >= L and we have the minimum area satisfying this condition.

    // Step 3: Chunk the cleaned text into rows
    // Split the cleaned text into rows of 'columns' size.
    const rowsData = _.chunk(cleanedText.split(''), columns);

    // Step 4: Transpose rows to columns
    // Using lodash's `zip` to transpose the rows into columns.
    // This ensures we can read the table column by column as per the requirement.
    const transposed = _.zip(...rowsData);

    // Step 5: Construct the result
    // Flatten the transposed array, join each column, and insert spaces between columns.
    const result = transposed
      .map((column) => column.join('')) // Combine characters in each column
      .join(' '); // Join columns with a space

    return result;
  }
}
