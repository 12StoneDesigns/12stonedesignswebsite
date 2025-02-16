import React, { useState, useEffect } from 'react';

interface CookieSettings {
  analytics: boolean;
  functional: boolean;
}

interface CookieSettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookieSettingsPanel: React.FC<CookieSettingsPanelProps> = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState<CookieSettings>({
    analytics: true,
    functional: true,
  });

  // Reference for focus trap
  const modalRef = React.useRef<HTMLDivElement>(null);
  const firstFocusableRef = React.useRef<HTMLButtonElement>(null);
  const lastFocusableRef = React.useRef<HTMLButtonElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  // Handle focus trap
  useEffect(() => {
    const handleTab = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstFocusableRef.current) {
            event.preventDefault();
            lastFocusableRef.current?.focus();
          }
        } else {
          if (document.activeElement === lastFocusableRef.current) {
            event.preventDefault();
            firstFocusableRef.current?.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleTab);
      firstFocusableRef.current?.focus();
      return () => document.removeEventListener('keydown', handleTab);
    }
  }, [isOpen]);

  const handleSave = () => {
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-settings-title"
    >
      <div 
        ref={modalRef}
        className="bg-black/95 border border-[#00F3FF]/30 rounded-lg p-6 max-w-md w-full mx-4"
        role="document"
        tabIndex={-1}
      >
        <h2 id="cookie-settings-title" className="text-2xl font-semibold text-[#00F3FF] mb-4">Cookie Settings</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[#00F3FF] font-medium">Essential Cookies</h3>
              <p className="text-[#00F3FF]/70 text-sm">Required for basic functionality</p>
            </div>
            <div className="bg-[#39FF14]/10 text-[#39FF14] px-2 py-1 rounded text-sm">Required</div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[#00F3FF] font-medium">Analytics Cookies</h3>
              <p className="text-[#00F3FF]/70 text-sm">Help us improve our website</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.analytics}
                onChange={(e) => setSettings(prev => ({ ...prev, analytics: e.target.checked }))}
                aria-label="Enable analytics cookies"
              />
              <div className="w-11 h-6 bg-black/40 peer-focus:outline-none rounded-full peer 
                peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full 
                after:h-5 after:w-5 after:transition-all peer-checked:bg-[#39FF14]/20"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[#00F3FF] font-medium">Functional Cookies</h3>
              <p className="text-[#00F3FF]/70 text-sm">Enable enhanced features</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.functional}
                onChange={(e) => setSettings(prev => ({ ...prev, functional: e.target.checked }))}
                aria-label="Enable functional cookies"
              />
              <div className="w-11 h-6 bg-black/40 peer-focus:outline-none rounded-full peer 
                peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full 
                after:h-5 after:w-5 after:transition-all peer-checked:bg-[#39FF14]/20"></div>
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            ref={firstFocusableRef}
            onClick={onClose}
            className="px-4 py-2 text-[#00F3FF] hover:text-[#39FF14] transition-colors duration-300"
            aria-label="Cancel cookie settings"
          >
            Cancel
          </button>
          <button
            ref={lastFocusableRef}
            onClick={handleSave}
            className="px-4 py-2 bg-black/40 text-[#00F3FF] border border-[#00F3FF] hover:border-[#39FF14] hover:text-[#39FF14] 
              rounded-md transition-all duration-300"
            aria-label="Save cookie settings"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsPanel;
