#!/bin/bash

# Define the source and target directories
SOURCE_DIR="scripts/git"
HOOKS_DIR=".git/hooks"

# Ensure we're in the root of a git repository
if [ ! -d ".git" ]; then
    echo "Error: This script must be run from the root of a git repository"
    exit 1
fi

# Create the source directory if it doesn't exist
mkdir -p "$SOURCE_DIR"

# Ensure the hooks directory exists
mkdir -p "$HOOKS_DIR"

# Array of standard git hooks
hooks=(
    "pre-commit"
    "prepare-commit-msg"
    "commit-msg"
    "post-commit"
    "pre-push"
    "pre-rebase"
    "post-checkout"
    "post-merge"
    "pre-receive"
    "update"
    "post-receive"
    "post-update"
)

# Function to create symlink for a hook
create_hook_symlink() {
    local hook=$1
    local source_file="$SOURCE_DIR/$hook"
    local target_file="$HOOKS_DIR/$hook"
    
    # If source script exists
    if [ -f "$source_file" ]; then
        # Remove existing hook or symlink if it exists
        if [ -f "$target_file" ] || [ -L "$target_file" ]; then
            rm "$target_file"
        fi
        
        # Create the symlink
        ln -s "../../$SOURCE_DIR/$hook" "$target_file"
        chmod +x "$source_file"
        # echo "Created symlink for $hook"
    fi
}

# Process each hook
for hook in "${hooks[@]}"; do
    create_hook_symlink "$hook"
done

# echo "Git hooks setup complete!"
# echo "Available hooks directory: $HOOKS_DIR"
# echo "Source scripts directory: $SOURCE_DIR"