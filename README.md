# docker-dive README

A VSCode extension to run `dive` command on a Docker image. The `dive` command lets you explore the layers in a Docker image. See [dive](https://github.com/wagoodman/dive) for details.

## Features

If the Docker \( ms-azuretools.vscode-docker \) extension is installed:

- If an image (i.e. specific tag node) is selected in the **Docker View:Images Viewlet** tree, the `dive` command is run on that image.

Otherwise, the extension first runs the `docker images` command to get a the list of known Docker images. Then the user is prompted to select a Docker image. Then the `dive` command is run on that docker image in a new terminal in editor area.

The `docker` commands is expected to be available on the PATH.

Uses the `dive` command from the path specified in settings. Default value is `dive`, in which case the `docker` commands is expected to be available on the PATH.

## Known Issues

No known issues.

## Release Notes

### 1.0.0

Initial release

### 1.0.1

Use configured `dive` command.
Create terminal if needed.
