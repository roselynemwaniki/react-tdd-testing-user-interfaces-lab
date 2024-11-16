import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text identifying the content of the image", () => {
  // Arrange
  render(<App />);

  // Act
  const image = screen.getByAltText(/portfolio photo/i);

  // Assert
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "https://via.placeholder.com/150");
});

test("displays a second-level heading with the text `About Me`", () => {
  // Arrange
  render(<App />);

  // Act
  const aboutMeHeading = screen.getByRole("heading", {
    name: /about me/i,
    exact: false,
    level: 2,
  });

  // Assert
  expect(aboutMeHeading).toBeInTheDocument();
});

test("displays a paragraph for the biography", () => {
  // Arrange
  render(<App />);

  // Act
  const paragraph = screen.getByText(/I am a web developer with a passion/i);

  // Assert
  expect(paragraph).toBeInTheDocument();
});

test("displays two links to GitHub and LinkedIn", () => {
  // Arrange
  render(<App />);

  // Act
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  // Assert
  expect(githubLink).toHaveAttribute("href", "https://github.com");
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com");
});
