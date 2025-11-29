<LanguageWarn/>

# Environment Setup

## Development Tools Preparation

Please prepare your preferred development environment, which requires Python 3.10.x and Git.

## Get the Source Code

First, open your browser and go to `https://github.com/BlueArchiveArisHelper/BAAH`

Click **Fork**, uncheck **Copy the main branch only**, and create your own Fork.

Then, choose your preferred location and open a terminal.

``` bash
git clone https://github.com/<your_username>/BAAH -b dev
```

The source code will be downloaded to this folder.

## Install Required Dependencies

``` bash
cd BAAH
pip install -r requirements.txt
```

## Start Development

For project file structure and class descriptions, please refer to subsequent documentation.

::: tip
Welcome to become a project contributor!

If you want to merge your developed content into the project's main branch, please open an issue on the BAAH project homepage, describing what functionality you want to improve and your existing ideas. Discuss and wait for the issue to be approved before starting development. This will help your PR to be approved **more smoothly**.
:::

## Packaging

You can use the packaging script to compile executable files.

### Windows EXE

Simply run the following command:
``` cmd
python package.py
```

### Linux Docker

Use `DockerFile` for packaging.