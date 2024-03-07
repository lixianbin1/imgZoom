# Contributing to imgZoom

Thank you for considering contributing to this project! Whether you want to report a bug, request a feature, or submit a pull request, your involvement is highly appreciated.

[Zh](./CONTRIBUTING.md) 

## Ways to Contribute

- **Reporting Bugs:** If you encounter any issues or unexpected behavior, please open a GitHub issue with detailed information about the problem, including steps to reproduce.
- **Requesting Features:** Feel free to submit a GitHub issue to suggest new features or improvements you'd like to see.
- **Submitting Pull Requests:** We welcome pull requests for bug fixes, enhancements, or new features. Make sure to follow the guidelines below when submitting a pull request.

## Introduction to the structure of the project

```
|—— lib/ //static resource
|—— log/ //changelog
|—— src/
  |—— IMG/           // Image
  |—— imgZoom.js     // main js
  |—— imgZoom.min.js //Compress js
  |—— index.html     //Main page
  |—— index.js       // Entry js
|—— CONTRIBUTING.md
|—— CONTRIBUTING_en.md
|—— deploy.sh        //Deploy sh
|—— package.json
|—— README.md    
|—— README_en.md
|—— webpack.config.js
```

If you want to contribute to imgZoom's functionality, you can modify the `src/imgZoom.js` on the `Next` branch, or modify the `imgZoom.js` on the `master` to run `npm run serve` for functional testing, or you can build your own project for testing. 

## Introduction to the branching of the project

```
master: The main branch of the project, which is used to introduce the project and tests

Next : The code for the next version

gh-pages: The gh-pages of the project

package: the current version of imgzoom-li
```

## Pull Request Guidelines

1. **Fork the Repository:** If you haven't already, fork the repository to your GitHub account and create a new branch for your feature or fix.
2. **Commit Guidelines:** Ensure your commits are descriptive and follow the project's conventions. 
3. **Code Style:** Maintain consistent code style with the rest of the project. If applicable, adhere to the coding standards specified in the project.
4. **Test Code:** If your contribution involves code changes, make sure to add tests and ensure existing tests pass.
5. **Submit Pull Request:** Once everything is ready, submit a pull request to the main repository's `Next` branch.

## Questions and Support

If you have any questions or need assistance, don't hesitate to reach out to [lixianbin1](xianbin.me@qq.com).

Thank you for contributing!

---

Feel free to customize the content to better fit your project's specific guidelines and requirements. Let me know if you need further assistance or adjustments!