#!/usr/bin/env python3
"""
Script to capture the navigation flow screenshots for video creation
"""
import os
import time
import glob

# Get all screenshots from the screenshots directory
screenshots_dir = "/home/ubuntu/screenshots"
output_dir = "/home/ubuntu/video_demo/frames"

os.makedirs(output_dir, exist_ok=True)

# List all existing screenshots
screenshots = sorted(glob.glob(f"{screenshots_dir}/*.webp"))

print(f"Found {len(screenshots)} screenshots")
for i, screenshot in enumerate(screenshots):
    print(f"{i+1}. {os.path.basename(screenshot)}")

print("\nScreenshots are ready for video compilation")

