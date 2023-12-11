/* Code modified from Blender's website, via:
 * Code modified from VLC's website.
 * https://code.videolan.org/VideoLAN.org/websites/-/blob/master/www.videolan.org/include/os-specific.php
 */

function getOS() {
  var OS = "windows"; //Default

  if (navigator.appVersion.indexOf("Win") != -1) {
    if (navigator.userAgent.indexOf('Windows NT 5.0') == -1 &&
      navigator.userAgent.indexOf('Windows NT 5.1') == -1 &&
      (navigator.userAgent.indexOf('Win64') > -1 ||
        navigator.platform == 'Win64' ||
        navigator.userAgent.indexOf('x86_64') > -1 ||
        navigator.userAgent.indexOf('x86_64') > -1 ||
        navigator.userAgent.indexOf('amd64') > -1 ||
        navigator.userAgent.indexOf('AMD64') > -1 ||
        navigator.userAgent.indexOf('WOW64') > -1
      )) {
      OS = "windows-64";
    } else {
      if (window.external && window.external.getHostEnvironmentValue && window.external.getHostEnvironmentValue('os-architecture').indexOf("ARM64") !== -1) {
        OS = "windows-arm";
      } else {
        try {
          var canvas = document.createElement('canvas');
          var gl = canvas.getContext('webgl');

          var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
          var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
          if (renderer.indexOf("Qualcomm") !== -1)
            OS = "windows-arm";
        } catch (e) {}
      }
    }
  }

  //MacOS, MacOS X, macOS
  if (navigator.appVersion.indexOf("Mac") != -1) {
    if (navigator.platform.indexOf("MacPPC") != -1 || navigator.platform.indexOf("PowerPC") != -1) {
      OS = "macos-PPC";
    } else if (navigator.userAgent.indexOf("OS X 10.5") != -1 ||
      navigator.userAgent.indexOf("OS X 10.6") != -1) {
      OS = "macos-32";
    } else {
      OS = "macos";
      try {
        var glcontext = document.createElement("canvas").getContext("webgl");
        var debugrenderer = glcontext ? glcontext.getExtension('WEBGL_debug_renderer_info') : null;
        var renderername = debugrenderer && glcontext.getParameter(debugrenderer.UNMASKED_RENDERER_WEBGL) || "";
        if (renderername.match(/Apple M/) || renderername.match(/Apple GPU/)) {
          OS = "macos-apple-silicon";
        }
      } catch (e) {}
    }
  }
  if (navigator.platform.indexOf("Linux") != -1) {
    if ((navigator.userAgent.indexOf("Ubuntu") != -1) ||
      (navigator.userAgent.indexOf("ubuntu") != -1)) OS = "linux-ubuntu";
    else if (navigator.userAgent.indexOf("Debian") != -1) OS = "linux-debian";
    else if (navigator.userAgent.indexOf("Android") != -1) OS = "linux-android";
    else if (navigator.userAgent.indexOf("Mandriva") != -1) OS = "linux-mandriva";
    else if (navigator.userAgent.indexOf("Red Hat") != -1) OS = "linux-redhat";
    else if (navigator.userAgent.indexOf("Fedora") != -1) OS = "linux-fedora";
    else if (navigator.userAgent.indexOf("SUSE") != -1) OS = "linux-suse";
    else if (navigator.userAgent.indexOf("Gentoo") != -1) OS = "linux-gentoo";
    else OS = "linux";
  }

  if (navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPod") != -1) {
    OS = "ios";
  }
  if (navigator.platform.indexOf("freebsd") != -1) OS = "freebsd";
  if (navigator.platform.indexOf("FreeBSD") != -1) OS = "freebsd";

  return OS;
}
