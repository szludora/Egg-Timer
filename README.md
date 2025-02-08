# Egg Timer - Electron Version
https://github.com/user-attachments/assets/49d6f0be-97fe-4641-a820-9b087c858cb9

Egg Timer is a fun and interactive desktop application built with **Electron**. The application allows users to select different egg hardness levels and visually see the transitions between them. Using smooth animations, the app mimics the process of cooking an egg to different levels of doneness.

## Features

- Selectable egg hardness levels (soft, medium, hard).
- Smooth animations for transitioning between different egg positions.
- Real-time feedback with visual updates.

## Technologies Used

- **Electron** for creating a cross-platform desktop application.
- **HTML5** for structuring the page.
- **CSS3** for styling and animations.
- **JavaScript (React)** for handling user interaction and state management.

## Getting Started

Follow these steps to get Egg Timer running on your local machine.

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your computer.

- [Download and install Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/szludora/Egg-Timer.git
```
2. Navigate to the project directory:
```bash
cd Egg-Timer
```
3. Install the required dependencies:
```bash
npm install
```
4. Build the Electron app:
```bash
npx run dist:win
```
5. Start the electron application:
```bash
npx run dev:electron
```
## How It Works

- The user selects one of the predefined egg hardness levels (soft, medium, hard).
- Based on the selection, the egg icon transitions smoothly to the corresponding position.
- The app uses CSS animations (`@keyframes`) to control the transitions between the egg positions, simulating the cooking process.

### Made with React + Vite and Electron


