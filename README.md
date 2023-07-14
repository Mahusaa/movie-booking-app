# Movie Booking App

The Movie Booking App is a web application that allows users to book movie tickets and select seats from a list of available options. Users can also provide feedback by liking or disliking movies. The app provides an intuitive interface for browsing movies, selecting seats, and confirming bookings.

## Features

- Browse a list of available movies
- Select seats from a seating chart
- Like or dislike movies
- Confirm movie bookings
- User authentication for booking confirmation
- Interactive and user-friendly interface

## Technologies Used

- **Frontend**: React.js, Next.js, Tailwind CSS
- **State Management**: Redux
- **Backend**: Firebase Realtime Database
- **Authentication**: Firebase Authentication

## Getting Started

Follow the instructions below to get the app up and running on your local machine.

### Prerequisites

- Node.js (version 12 or above)
- npm (version 6 or above) or Yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

### Configuration
1. Create a Firebase project and set up a Realtime Database.
2. Configure Firebase Authentication with email/password authentication method.
3. Update the Firebase configuration in the project. Locate the Firebase configuration file (e.g., src/firebase/config.js) and replace the placeholder values with your own Firebase project configuration.

```bash
npm run dev
# or
yarn dev
```
The app will be accessible at http://localhost:3000 in your browser.

### Deployment
The app can be easily deployed using the Vercel platform, which supports Next.js deployments out of the box. Simply connect your repository to Vercel and follow the deployment steps.

For more details on Next.js deployment, refer to the Next.js Deployment Documentation.

### Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

### License
This project is licensed under the Usamah License.