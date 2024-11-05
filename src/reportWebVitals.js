/**
 * Function to report web vitals metrics when a performance entry type is detected.
 * It collects metrics like CLS, FID, FCP, LCP, and TTFB.
 * @param {function} onPerfEntry - Callback function to handle the metrics when reported.
 */
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    /**
     * This function dynamically imports the 'web-vitals' module and utilizes its getCLS, getFID, getFCP, getLCP, and getTTFB functions. Each of these retrieved functions is then invoked with the 'onPerfEntry' callback function.
     * @param {function} onPerfEntry - A callback function that will be passed to each of the 'web-vitals' module functions (getCLS, getFID, getFCP, getLCP, getTTFB).
     */
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
