---
description: Commit and push changes to GitHub
---

# Git Commit & Push to GitHub

Stage, commit, and push all changes to the remote GitHub repository.

## Steps

1. Check current git status:
```
cd "/Users/rahulmalik/Desktop/Life Admin Agent"
git status
```

2. Stage all changes:
```
cd "/Users/rahulmalik/Desktop/Life Admin Agent"
git add .
```

3. Commit with a descriptive message (replace `<message>` with actual description):
```
cd "/Users/rahulmalik/Desktop/Life Admin Agent"
git commit -m "<message>"
```

4. Push to the main branch:
```
cd "/Users/rahulmalik/Desktop/Life Admin Agent"
git push origin main
```

## Tips

- Use a clear, concise commit message (e.g. `"Fix chatbot response handling"`)
- Run `git log --oneline -5` to verify the push was successful
- Never commit secrets — make sure `.env` is in `.gitignore`
