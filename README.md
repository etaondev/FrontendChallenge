# Countdown Timer App

This is an Angular application that allows users to set a countdown timer for a specific date. The application includes a form where users can input their title and select a date. Once the date is selected, the app displays a countdown timer that shows the time remaining until the specified date. The title and the selected date are stored in `localStorage` to persist between page reloads.

## Features

- User can enter their title.
- User can pick a date using a date picker.
- Displays a countdown timer for the selected date.
- Stores the title and date in `localStorage` for persistence.
- Changes size of title and countdown to match the parent width

## Demo
- Visit https://nc-fe-challenge.surge.sh/
- Important! It may be a bit buggy - the texts may not adjust correctly at first - just have some patience and play with it for awhile and the functionality should kick in.
- Due to lack of time and patience I could not address these issues in the end. I'm sure they could be resolved through some discussion.

## Installation

1. **Clone the repository:**
    ```bash
    git clone [https://github.com/etaondev/FrontendChallenge.git]
    cd frontendchallenge
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

## Running the Application

1. **Start the development server:**
    ```bash
    ng serve
    ```

2. **Open your browser and navigate to:**
    ```
    http://localhost:4200
    ```

## Application Structure

- **`app.component.html`**: The main component template that includes the router outlet and application structure.
- **`countdown-form.component.html`**: The form component template where users input their name and select a date.
- **`countdown-form.component.ts`**: The form component logic handling form submission and storing data in the service.
- **`countdown-timer.component.html`**: The countdown timer component template displaying the countdown.
- **`countdown-timer.component.ts`**: The countdown timer component logic calculating and displaying the remaining time.
- **`date.service.ts`**: The service handling storing and retrieving the date and title from `localStorage`.

## Key Components

### Countdown Form Component

This component contains a form where the user can input their title (i.e. Midsummer Eve) and select a date. The form uses Angular Material components for styling and user experience.

- **Form Fields**: 
  - Title: A text input for the title.
  - Date: A date picker for selecting the countdown target date.
  
- **Form Submission**: When the user selects a date, the countdown timer is automatically updated to show the time remaining until the selected date. The title and date are stored in `localStorage`.

### Countdown Timer Component

This component displays a live countdown timer showing the time remaining until the selected date.

- **Input Properties**: 
  - `targetDate`: The date to count down to.
  - `title`: The title for the event.

- **Logic**: Uses RxJS `interval` to update the timer every second and calculate the remaining time.

## Styling

- **Flexbox and Grid Layouts**: Used for responsive design and layout of form elements.
- **Angular Material**: Provides pre-built UI components for consistent and modern design.

## Persistent Data

The application uses `localStorage` to persist the title and selected date. This ensures that the countdown continues even if the page is reloaded.

## Conclusion

This Angular application provides a simple yet effective way to set a countdown timer for any event. It leverages Angular Material for a polished user interface and RxJS for real-time updates.

Feel free to contribute to this project by submitting issues or pull requests!

## License

This project is licensed under the MIT License.
