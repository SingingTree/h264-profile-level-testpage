import os
import subprocess
import sys

# Takes a input media file as an argument then calls ffmpeg to generate media
# files for the repo. ffmpeg needs to be on path for this to work.

if len(sys.argv) < 2:
    print("The script requires an input file name")
    exit()

profiles = [
    "baseline",
    "main",
    "high",
    "high10",
    "high422",
    "high444",
]

levels = [
    "1",
    "1b",
    "1.1",
    "1.2",
    "1.3",
    "2",
    "2.1",
    "2.2",
    "3",
    "3.1",
    "3.2",
    "4",
    "4.1",
    "4.2",
    "5",
    "5.1",
    "5.2",
    "6",
    "6.1",
    "6.2",
]

for profile in profiles:
    for level in levels:
        # Encode the first 5 seconds of the input using different profiles and levels.
        subprocess.call(["ffmpeg", "-i", sys.argv[1], "-t", "5", "-profile:v", profile, "-level:v", level, "-c:a", "copy", "{}-{}.mp4".format(profile, level)])
