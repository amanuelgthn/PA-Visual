# This is frontend (NEXT.JS) repository

It uses pre-commit!

### _Instructions step by step to install pre-commit:_

- Step 1:

```
pip install pre-commit
```

- Step 2:

```
pre-commit install
```

- Step 2.1: (OPTIONAL IF ABOVE FAILED)

```
git config --unsert-al core.hooksPath
pre-commit install
```

- Step 3: Run it manually (OPTIONAL)

```
pre-commit run --all-files
```

### _How to commit since we have pre-commit?_

- Step 1:

```
git add .
```

- Step 2:

```
git commit -m "Prettier formatting"
```

- Step 3: (You need to add all files again after they formatted!)

```
git add .
```

- Step 4:

```
git commit -m "Commit message"
```

### _How to run the app_

```
npm install
```

```
npm run dev
```

### _How to build the app_

```
npm install
```

```
npm run build
```
