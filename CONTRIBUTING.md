# Contributing to PHINMA Education Media Directory

First off, thank you for considering contributing to the PHINMA Education Media Directory! It's people like you that make this project a valuable resource for the PHINMA community.

This document provides guidelines and best practices for contributing to this project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

---

## 📑 Table of Contents

1. [Code of Conduct](#-code-of-conduct)
2. [How Can I Contribute?](#-how-can-i-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Enhancements](#suggesting-enhancements)
    - [Pull Requests](#pull-requests)
3. [Development Process](#-development-process)
    - [Branching Strategy](#branching-strategy)
    - [Project Structure](#project-structure)
4. [Style Guides](#-style-guides)
    - [Git Commit Messages](#git-commit-messages)
    - [HTML & CSS Standards](#html--css-standards)
5. [Contact Information](#-contact-information)

---

## 🤝 Code of Conduct

We are committed to providing a welcoming and inspiring community for all. By participating in this project, you are expected to uphold our standard of mutual respect and professionalism. Please report any unacceptable behavior to the project maintainers.

---

## 💡 How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and contributors understand your report, reproduce the behavior, and find related bugs.

- **Check for existing issues:** Before opening a new issue, please search if it has already been reported.
- **Provide context:** Include your browser, OS, and the steps to reproduce the bug.
- **Expected vs Actual:** Clearly state what you expected to happen and what actually happened.

### Suggesting Enhancements

If you have an idea for a new feature or an improvement to an existing one, we'd love to hear it!

- **Use a clear title:** Describe the feature in a few words.
- **Provide a detailed description:** Explain why this enhancement would be useful and how it should work.
- **Mockups/Screenshots:** If applicable, visual aids are highly appreciated.

### Pull Requests

1. **Fork the repository** and create your branch from `stage`.
2. **If you've added code** that should be tested, add tests.
3. **If you've changed APIs**, update the documentation.
4. **Ensure the test suite passes**.
5. **Update the README.md** if your changes impact the project overview or roadmap.

---

## ⚙️ Development Process

### Branching Strategy

Our project follows a strict branching model to ensure stability:

- **`main`**: The production-ready branch. Only stable releases are merged here.
- **`stage`**: The integration branch. All feature branches should be merged here first for testing.
- **`feature/name-of-feature`**: For new features.
- **`fix/name-of-bug`**: For bug fixes.

### Project Structure

Understanding the file hierarchy is crucial for contributions:

- `/Assets`: Contains images, icons, and static media.
- `/Schools`: Directory-specific pages for various PHINMA institutions.
- `index.html`: The landing page and core directory hub.
- `style.css`: Global styles (we use modern CSS nesting and Flexbox/Grid).
- `script.js`: Core interactivity and UI logic.

---

## 🎨 Style Guides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature").
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
- Limit the first line to 72 characters or less.
- Prefix with a conventional type:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for formatting/CSS changes
  - `refactor:` for code restructuring

### HTML & CSS Standards

- **Semantic HTML:** Always use descriptive tags (`<header>`, `<main>`, `<section>`, etc.).
- **CSS Variable Usage:** Use global variables for colors and spacing to maintain consistency.
- **Mobile First:** Ensure all designs are responsive by default.
- **Modularity:** Keep CSS organized by component.

---

## 📧 Contact Information

For any inquiries or direct feedback, please reach out via:

- **GitHub Issues:** For technical reports and feature requests.
- **Team Lead:** Contact the student lead at Southwestern University PHINMA for institutional coordination.

---

<div align="center">
  <sub>Built with ❤️ by students for the PHINMA community.</sub>
</div>
