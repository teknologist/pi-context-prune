---
name: 032-verify-patch-push
description: Prove the warning setting works, bump patch version, commit, and push.
steps:
  - phase: verification
    steps:
      - "- [x] step 1: inspect current changes and auth state"
      - "- [x] step 2: add executable verification for warning suppression"
      - "- [x] step 3: run verification commands"
  - phase: release prep
    steps:
      - "- [x] step 1: bump package version to next patch"
      - "- [x] step 2: review final diff and status"
  - phase: publish
    steps:
      - "- [x] step 1: commit focused changes"
      - "- [x] step 2: push to origin with teknologist account"
---

# 032-verify-patch-push

## Phase 1 — Verification
- [x] step 1: inspect current changes and auth state
- [x] step 2: add executable verification for warning suppression
- [x] step 3: run verification commands

## Phase 2 — Release prep
- [x] step 1: bump package version to next patch
- [x] step 2: review final diff and status

## Phase 3 — Publish
- [x] step 1: commit focused changes
- [x] step 2: push to origin with teknologist account
