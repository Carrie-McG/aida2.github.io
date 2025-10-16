#!/usr/bin/env python3
"""
Create a demonstration video from the AIDA dashboard prototype screenshots
"""
import subprocess
import os

# Define the sequence of images for the navigation flow
images = [
    ("01_home_page.webp", 3.0, "Home Page - Starting point"),
    ("02_signin_page.webp", 3.0, "Sign In Page - Click Sign In button"),
    ("03_dashboard_mvp.webp", 4.0, "Dashboard MVP - Main dashboard view"),
    ("04_cases_review_expanded.webp", 4.0, "Cases to Review - Expanded section"),
    ("03_dashboard_mvp.webp", 2.0, "Back to Dashboard"),
    ("05_recently_resolved_expanded.webp", 4.0, "Recently Resolved Cases - Expanded section"),
    ("03_dashboard_mvp.webp", 2.0, "Back to Dashboard"),
    ("06_all_pending_expanded.webp", 4.0, "All Pending Cases - Expanded section"),
    ("07_review_case.webp", 5.0, "Review & Edit Frozen Cases - Case details page"),
    ("08_review_case_dropdown.webp", 4.0, "Send to Examiner - Dropdown expanded"),
    ("03_dashboard_mvp.webp", 3.0, "Return to Dashboard - Complete flow"),
]

output_dir = "/home/ubuntu/video_demo"
os.chdir(output_dir)

# Create a text file listing all images with durations
with open("filelist.txt", "w") as f:
    for img, duration, description in images:
        # Each image will be shown for the specified duration
        f.write(f"file '{img}'\n")
        f.write(f"duration {duration}\n")
    # Add the last image again (ffmpeg requirement)
    f.write(f"file '{images[-1][0]}'\n")

# Create the video using ffmpeg
cmd = [
    "ffmpeg", "-y",
    "-f", "concat",
    "-safe", "0",
    "-i", "filelist.txt",
    "-vf", "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,fps=30",
    "-c:v", "libx264",
    "-pix_fmt", "yuv420p",
    "-preset", "medium",
    "-crf", "23",
    "aida_dashboard_demo.mp4"
]

print("Creating video demonstration...")
print(f"Total duration: {sum(d for _, d, _ in images)} seconds")
print(f"Number of scenes: {len(images)}")

result = subprocess.run(cmd, capture_output=True, text=True)

if result.returncode == 0:
    print("\n✓ Video created successfully: aida_dashboard_demo.mp4")
    # Get file size
    size = os.path.getsize("aida_dashboard_demo.mp4") / (1024 * 1024)
    print(f"  File size: {size:.2f} MB")
else:
    print("\n✗ Error creating video:")
    print(result.stderr)

# Create a version with text overlays
print("\nCreating annotated version with text overlays...")

# Build filter complex for text overlays
filter_parts = []
prev_label = "[0:v]"

for i, (img, duration, description) in enumerate(images):
    # Calculate time offset
    time_offset = sum(d for _, d, _ in images[:i])
    
    # Create text overlay
    text_filter = f"drawtext=text='{description}':fontsize=32:fontcolor=white:box=1:boxcolor=black@0.7:boxborderw=10:x=(w-text_w)/2:y=h-80:enable='between(t,{time_offset},{time_offset + duration})'"
    
    if i == 0:
        filter_parts.append(f"{prev_label}{text_filter}[v{i}]")
    else:
        filter_parts.append(f"[v{i-1}]{text_filter}[v{i}]")

filter_complex = ";".join(filter_parts)
final_label = f"[v{len(images)-1}]"

cmd_annotated = [
    "ffmpeg", "-y",
    "-f", "concat",
    "-safe", "0",
    "-i", "filelist.txt",
    "-vf", f"scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,fps=30,{filter_complex.replace('[v0]', '').replace(final_label, '')}",
    "-c:v", "libx264",
    "-pix_fmt", "yuv420p",
    "-preset", "medium",
    "-crf", "23",
    "aida_dashboard_demo_annotated.mp4"
]

result = subprocess.run(cmd_annotated, capture_output=True, text=True)

if result.returncode == 0:
    print("✓ Annotated video created successfully: aida_dashboard_demo_annotated.mp4")
    size = os.path.getsize("aida_dashboard_demo_annotated.mp4") / (1024 * 1024)
    print(f"  File size: {size:.2f} MB")
else:
    print("✗ Error creating annotated video:")
    print(result.stderr)

print("\nVideo demonstration complete!")

