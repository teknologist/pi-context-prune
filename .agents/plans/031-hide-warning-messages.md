---
name: 031-hide-warning-messages
description: Add an opt-in setting for pruner Warning messages.
steps:
  - phase: discovery
    steps:
      - "- [x] step 1: refresh CodeSight artifacts"
      - "- [x] step 2: inspect config, settings overlay, and warning notifications"
  - phase: implementation
    steps:
      - "- [x] step 1: add a default-hidden warning config field"
      - "- [x] step 2: expose the setting in the existing TUI settings overlay"
      - "- [x] step 3: gate pruner warning notifications through the setting"
  - phase: validation
    steps:
      - "- [x] step 1: run the project verification command"
      - "- [x] step 2: review the final diff"
---

# 031-hide-warning-messages

## Phase 1 — Discovery
- [x] step 1: refresh CodeSight artifacts
- [x] step 2: inspect config, settings overlay, and warning notifications

## Phase 2 — Implementation
- [x] step 1: add a default-hidden warning config field
- [x] step 2: expose the setting in the existing TUI settings overlay
- [x] step 3: gate pruner warning notifications through the setting

## Phase 3 — Validation
- [x] step 1: run the project verification command
- [x] step 2: review the final diff
