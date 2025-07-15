// Performance monitoring utility
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startTimer(name: string): void {
    this.metrics.set(`${name}_start`, performance.now());
  }

  endTimer(name: string): number {
    const startTime = this.metrics.get(`${name}_start`);
    if (!startTime) {
      console.warn(`Timer ${name} was not started`);
      return 0;
    }

    const endTime = performance.now();
    const duration = endTime - startTime;
    this.metrics.set(name, duration);
    
    // Log performance data in development
    if (import.meta.env.DEV) {
      console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`);
    }

    return duration;
  }

  getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  getAllMetrics(): Record<string, number> {
    const result: Record<string, number> = {};
    this.metrics.forEach((value, key) => {
      if (!key.endsWith('_start')) {
        result[key] = value;
      }
    });
    return result;
  }

  // Track Core Web Vitals
  trackCoreWebVitals(): void {
    if ('PerformanceObserver' in window) {
      // Track Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.set('LCP', lastEntry.startTime);
        
        if (import.meta.env.DEV) {
          console.log(`🎯 LCP: ${lastEntry.startTime.toFixed(2)}ms`);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Track First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.set('FID', entry.processingStart - entry.startTime);
          
          if (import.meta.env.DEV) {
            console.log(`⚡ FID: ${(entry.processingStart - entry.startTime).toFixed(2)}ms`);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Track Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.set('CLS', clsValue);
            
            if (import.meta.env.DEV) {
              console.log(`📐 CLS: ${clsValue.toFixed(4)}`);
            }
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }

  // Track bundle size
  trackBundleSize(): void {
    if (import.meta.env.PROD) {
      const scripts = document.querySelectorAll('script[src]');
      let totalSize = 0;
      
      scripts.forEach((script) => {
        const src = script.getAttribute('src');
        if (src && src.includes('assets/')) {
          // This is a simplified approach - in a real app you'd want to
          // track actual download sizes via Resource Timing API
          console.log(`📦 Script loaded: ${src}`);
        }
      });
    }
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();

// Auto-start performance tracking
if (typeof window !== 'undefined') {
  performanceMonitor.trackCoreWebVitals();
  performanceMonitor.trackBundleSize();
}