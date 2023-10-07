
# User Authentication Example

This is a simple TypeScript example demonstrating user authentication using functions. The application checks if a provided username and password match a predefined set of credentials and simulates login and logout functionality.

   **Code Result:**

   ```
   Login successful.
   Current User: { id: '1', username: 'testuser', password: 'password' }
   Logout successful.
   ```
## Files

- `index.ts`: The main TypeScript file containing the authentication logic and usage examples.
  
## Setup and Usage

1. Clone the repository or download the files.

2. Ensure you have [Node.js](https://nodejs.org/) and TypeScript installed globally. If not, install TypeScript using the following command:

   ```bash
   npm install -g typescript
   ```

3. Compile the TypeScript file (`index.ts`) to JavaScript using the TypeScript compiler (`tsc`):

   ```bash
   tsc index.ts
   ```

   This will generate an `index.js` file.

4. Run the compiled JavaScript file:

   ```bash
   node index.js
   ```


## Authentication Logic

- The authentication logic is handled in the `login`, `getCurrentUser`, and `logout` functions in `index.ts`.
- The `login` function checks if the provided username and password match predefined credentials (mocked for simplicity).
- The `getCurrentUser` function retrieves the current authenticated user.
- The `logout` function logs the user out by resetting the `currentUser`.

## Example Usage

- The `handleLogin` and `handleLogout` functions in `index.ts` demonstrate usage of the authentication logic.
- `handleLogin` simulates a user attempting to log in.
- `handleLogout` simulates a user logging out.

---

