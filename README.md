# Webcam NodeJS server

Webcam live-streaming solution using Livecam npm package

## Installation

To obtain livecam module, type in `npm install livecam`. You also need **GStreamer 1.3+** runtime installed on your machine.

#How to install GSTreamer 

#### Windows

Depending on your architecture, you may [download the latest runtimes provided and maintained by the GStreamer project](https://gstreamer.freedesktop.org/data/pkg/windows/). They usually come in MSI installer format. You do not need the development installers. Naming of the runtime package follows the `gstreamer-1.0-<arch>-<version>.msi` convention.

**Make sure you select COMPLETE installation and NOT typical.** If you go with typical, `ksvideosrc` plugin will not be available for you, and _livecam_ will not be able to use it.

After installation, make sure you have `GSTREAMER_1_0_ROOT_<arch>` environment variable defined in your system. This is a variable created by the MSI installer, pointing to where you installed the runtime package. You might need to restart your computer after installation for this variable to show up.

#### Linux

GStreamer might be already available on your machine. You may verify its existence by typing `gst-launch-1.0 --version` on your command line. If this command is not available, you can obtain GStreamer from your distro's package manager. For example on Ubuntu 16.04:

```
$ sudo apt install libgstreamer1.0-dev
$ sudo apt install libgstreamer-plugins-*1.0-dev
```

#### Mac OSX

You may obtain GStreamer runtime via [Homebrew](http://brew.sh/).

```
$ brew install gstreamer         # install gstreamer
$ brew install gst-plugins-good  # general plugins
$ brew install gst-plugins-bad   # mac video sources etc.
```

##Running server

After all previous steps to run webcam server you need just to write `npm run start` then open an index.html file, and you will see image from your webcam.

##How it works?

The Livecam server using a Gstreamer quickly sends images from camera via socket in the form of base64 ciphertext. The html page receives data from the socket and converts it back into an image.

You can also change broadcast address in .env file

##Possible errors
1
```
ERROR: Pipeline doesn't want to pause.

Setting pipeline to NULL ...
Freeing pipeline ...

ERROR: from element /GstPipeline:pipeline0/GstKsVideoSrc:ksvideosrc0: No video capture devices found
Additional debug info:
gstksvideosrc.c(490): gst_ks_video_src_open_device (): /GstPipeline:pipeline0/GstKsVideoSrc:ksvideosrc0

Webcam server exited: 4294967295
```

With this error, most likely you have problems connecting the webcam or the camera is not connected at all

2

```
======================================================
Unable to locate gst-launch executable.
...
======================================================
```

With this error, you need to make sure that GStreamer is installed, or if you are sure that it is installed, then check if the system knows the path to the package (check variables, etc.).

Also, do not forget that on some systems (such as Windows) you need to reboot the device every time for the changes to be applied. So you can also try restarting your device.

If the error still remains, just try restarting the script many times and maybe it will start work (I honestly don’t know how it works, but that’s how it worked for me)