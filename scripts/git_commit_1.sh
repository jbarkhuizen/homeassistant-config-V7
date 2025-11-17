#!/bin/bash
#===============================================================================
# Git Snapshot Script for Home Assistant /config
# - Reads commit message from /config/.last_commit_message (one line)
# - Commits changes if any, then attempts to push
# - Safe to run even if /config is not a git repo or no changes exist
#===============================================================================
set -euo pipefail

CONFIG_DIR="/config"
MSG_FILE="${CONFIG_DIR}/.last_commit_message"
LOG_PREFIX="[git_snapshot]"

echo "${LOG_PREFIX} Starting snapshot..."

if [ ! -d "${CONFIG_DIR}" ]; then
  echo "${LOG_PREFIX} ERROR: ${CONFIG_DIR} not found."
  exit 0
fi

cd "${CONFIG_DIR}"

# Ensure repository exists
if [ ! -d ".git" ]; then
  echo "${LOG_PREFIX} INFO: Not a git repository (${CONFIG_DIR}). Skipping commit."
  exit 0
fi

# Read commit message or default
if [ -f "${MSG_FILE}" ]; then
  COMMIT_MSG="$(tr -d '\r' < "${MSG_FILE}")"
else
  COMMIT_MSG="Auto snapshot $(date +'%Y-%m-%d %H:%M')"
fi

# Configure user if not set yet
if ! git config user.name >/dev/null; then
  git config user.name "Home Assistant"
fi
if ! git config user.email >/dev/null; then
  git config user.email "ha@local"
fi

# Stage changes
git add -A

# If no staged changes, skip commit
if git diff --cached --quiet; then
  echo "${LOG_PREFIX} No changes to commit."
  # Attempt push anyway to keep remotes in sync (won't harm if up-to-date)
  set +e
  git push 2>&1 | sed "s/^/${LOG_PREFIX} /"
  set -e
  echo "${LOG_PREFIX} Done."
  exit 0
fi

# Commit
echo "${LOG_PREFIX} Commit message: ${COMMIT_MSG}"
git commit -m "${COMMIT_MSG}"

# Try push (do not fail the script if push fails)
set +e
git push 2>&1 | sed "s/^/${LOG_PREFIX} /"
PUSH_RC=$?
set -e
if [ ${PUSH_RC} -ne 0 ]; then
  echo "${LOG_PREFIX} WARN: git push failed (non-fatal)."
fi

echo "${LOG_PREFIX} Snapshot complete."
exit 0