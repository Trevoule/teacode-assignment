# React Contacts List

## Overview

This React application displays a list of contacts fetched from a remote JSON endpoint. Users can view, filter, and select contacts with checkboxes, with selections logged to the console. The app is implemented with performance in mind, using memoization and context splitting to minimize re-renders in a large list.

## Tech Stack

- **React.js v19**
- **TypeScript**
- **Tailwind CSS**

## Requirements

- **Node.js** version ≥20 is required

## Features

### Contact Display

- Contacts are sorted alphabetically by `last_name`
- Each contact displays an avatar (or initials if avatar is missing)
- Shows first and last name
- Includes a selectable checkbox

### Filtering

- Text input allows filtering by first and last name (case-insensitive)
- Filtering does **NOT** reset or alter selected checkboxes

### Selection

- Clicking a contact toggles its checkbox on/off
- IDs of all selected contacts are logged to the console on each toggle

### Performance Optimization

- `UserItem` components memoized with `React.memo` to avoid unnecessary re-renders
- React Context split into separate Providers for user data and actions to reduce consumer re-renders
- Stable memoized callbacks (`useCallback`) and immutable state updates

## Getting Started

### Prerequisites

Ensure you have Node.js version 20 or higher installed on your system.

### Installation

1. **Clone this repository:**

   ```bash
   git clone https://github.com/Trevoule/teacode-assignment.git
   cd teacode-assignment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn run dev
   ```
