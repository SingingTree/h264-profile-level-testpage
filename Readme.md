This is a collection of media encoded using different h264 (avc) profiles and
levels. These can be used to test media play compatibility.

The media are generated from the Big Buck Bunny short file using the script
provided in the root of the repo. The original media is not included as it's
quite large, but the script should allow for reproducibility if it is needed.

---

Note that while some profiles support subsampling schemes aside from 4:2:0, and
bit depths greater than 8, they can still use 4:2:0 and 8 bit depth. If you
wish to explicitly exercise functionality such as 4:4:4 subsampling, be sure
to check the output of the `generate_media.py` script and modify the script as
needed. As it stands, the media generated for the repo is 4:2:0.