# Git Team Sync Workflow

## 1. What did the rejected push error message tell you, and why did it happen?

The rejected push message said that the remote repository contained work that I did not have locally and that the push was rejected because it was not a fast-forward update. This happened because another clone had already pushed a different commit to the same feature branch. My local branch was therefore behind the remote branch, so Git required me to fetch and integrate the remote changes before pushing again.

## 2. What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?

In Task 3, I used a merge to combine the changes from Clone A and Clone B. Git created a merge commit that connected both lines of development, and I manually resolved the conflict so that both rounding and the VIP bonus behavior remained.

In Task 4, I used a rebase instead of a merge. I fetched the remote changes and replayed my new commit on top of the updated feature branch. This caused a conflict that I resolved manually. The result was a linear history where my new change was applied after the teammate's changes.

## 3. What one habit would have avoided both rejected pushes in this lab?

A useful habit would be to fetch or pull the latest changes from the shared remote before starting work and pushing. Checking the remote state first helps ensure that my local branch is up to date and reduces the chance of pushing a commit based on an outdated branch.

## 4. Which approach - merge or rebase - would you default to on a shared team branch, and why?

I would generally use merge on a shared team branch because it preserves the actual history of how different developers' work was combined and does not rewrite commits that other people may already have. Rebase can be useful for cleaning up a local branch before sharing it, but it changes commit history and therefore requires more care when working with commits that are already on a shared remote.