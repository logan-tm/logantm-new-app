#!/bin/bash

# Define the base URL of your site
BASE_URL="https://example.com"

# Define output directory (default to current directory if not specified)
OUTPUT_DIR=${1:-.}

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Output file paths
sitemap_file="$OUTPUT_DIR/sitemap.xml"
robots_file="$OUTPUT_DIR/robots.txt"

# Remove existing files if they exist
if [ -f "$sitemap_file" ]; then
    echo "Removing existing sitemap..."
    rm "$sitemap_file"
fi

if [ -f "$robots_file" ]; then
    echo "Removing existing robots.txt..."
    rm "$robots_file"
fi

# Array of routes (add your routes here)
routes=(
    "/"
)

# Create sitemap with XML declaration and opening tag
cat > "$sitemap_file" << EOL
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
EOL

# Get current date in W3C format
current_date=$(date -u +"%Y-%m-%d")

# Add each URL to the sitemap
for route in "${routes[@]}"; do
    # Remove trailing slash if present (except for root)
    if [ "$route" != "/" ]; then
        route="${route%/}"
    fi
    
    # Create full URL
    url="${BASE_URL}${route}"
    
    # Add URL entry to sitemap
    cat >> "$sitemap_file" << EOL
    <url>
        <loc>${url}</loc>
        <lastmod>${current_date}</lastmod>
    </url>
EOL
done

# Add closing tag to sitemap
echo "</urlset>" >> "$sitemap_file"

# Create robots.txt
cat > "$robots_file" << EOL
# Robots.txt file for $BASE_URL
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow paths
Disallow: /private/
Disallow: /admin/
Disallow: /api/
EOL

# Set proper permissions
# chmod 644 "$sitemap_file"
# chmod 644 "$robots_file"

echo "Sitemap generated successfully at $sitemap_file"
echo "Robots.txt generated successfully at $robots_file"