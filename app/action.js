"use server"

// Constants
const SERIES_LIMIT = 8;

// Imports
import connect from "./lib/db";
import Series from "./models/Serie";

// Function to get series with pagination
export const getSeries = async (pageNumber = 1) => {
    // Connect to the database
    await connect();

    try {
        // Calculate the skip value based on the page number
        const skip = (pageNumber - 1) * SERIES_LIMIT;

        // Fetch series data with a limit and skip
        const result = await Series.find().skip(skip).limit(SERIES_LIMIT);

        // Convert MongoDB object to plain object
        const plainObject = JSON.parse(JSON.stringify(result));

        // Return the result
        return plainObject;
    } catch (error) {
        // Log or handle the error
        console.error('Failed to fetch series:', error);

        // Return an error response
        return { error: 'Failed to fetch series!' };
    }
};
