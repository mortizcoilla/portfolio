export function setupDeviceDetection() {
    const isMobileDevice = () => /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(navigator.userAgent.toLowerCase());
    const isTabletDevice = () => {
      const screenWidth = window.innerWidth;
      return screenWidth >= 768 && screenWidth <= 1024;
    };
  
    if (isMobileDevice()) {
      console.log("Dispositivo móvil detectado.");
      document.body.classList.add("mobile");
    } else if (isTabletDevice()) {
      console.log("Tablet detectada.");
      document.body.classList.add("tablet");
    } else {
      console.log("Dispositivo de escritorio detectado.");
      document.body.classList.add("desktop");
    }
  }
  