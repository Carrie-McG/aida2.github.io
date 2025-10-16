#!/usr/bin/env python3
"""
Create a simple demonstration video from the AIDA dashboard prototype screenshots
"""
import subprocess
import os

# Define the sequence of images for the navigation flow
images = [
    ("01_home_page.webp", 3.0),
    ("02_signin_page.webp", 3.0),
    ("03_dashboard_mvp.webp", 4.0),
    ("04_cases_review_expanded.webp", 4.0),
    ("03_dashboard_mvp.webp", 2.0),
    ("05_recently_resolved_expanded.webp", 4.0),
    ("03_dashboard_mvp.webp", 2.0),
    ("06_all_pending_expanded.webp", 4.0),
    ("07_review_case.webp", 5.0),
    ("08_review_case_dropdown.webp", 4.0),
    ("03_dashboard_mvp.webp", 3.0),
]

output_dir = "/home/ubuntu/video_demo"
os.chdir(output_dir)

# Create a text file listing all images with durations
with open("filelist.txt", "w") as f:
    for img, duration in images:
        f.write(f"file '{img}'\n")
        f.write(f"duration {duration}\n")
    # Add the last image again (ffmpeg requirement)
    f.write(f"file '{images[-1][0]}'\n")

# Create the video using ffmpeg with smooth transitions
cmd = [
    "ffmpeg", "-y",
    "-f", "concat",
    "-safe", "0",
    "-i", "filelist.txt",
    "-vf", "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=white,fps=30",
    "-c:v", "libx264",
    "-pix_fmt", "yuv420p",
    "-preset", "medium",
    "-crf", "20",
    "-movflags", "+faststart",
    "aida_dashboard_navigation_demo.mp4"
]

print("Creating AIDA Dashboard Navigation Demo Video...")
print(f"Total duration: {sum(d for _, d in images)} seconds")
print(f"Number of scenes: {len(images)}")
print()

result = subprocess.run(cmd, capture_output=True, text=True)

if result.returncode == 0:
    print("✓ Video created successfully!")
    print(f"  Output: aida_dashboard_navigation_demo.mp4")
    size = os.path.getsize("aida_dashboard_navigation_demo.mp4") / (1024 * 1024)
    print(f"  File size: {size:.2f} MB")
    print(f"  Duration: {sum(d for _, d in images)} seconds")
    print()
    print("Navigation Flow:")
    print("  1. Home Page → Sign In")
    print("  2. Sign In Page → Dashboard")
    print("  3. Dashboard → Cases to Review (expanded)")
    print("  4. Dashboard → Recently Resolved Cases (expanded)")
    print("  5. Dashboard → All Pending Cases (expanded)")
    print("  6. Dashboard → Review & Edit Frozen Cases")
    print("  7. Review Case → Send to Examiner (dropdown)")
    print("  8. Return to Dashboard")
else:
    print("✗ Error creating video:")
    print(result.stderr)

