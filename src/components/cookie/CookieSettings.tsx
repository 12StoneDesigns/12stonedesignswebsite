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
    // Save cookie settings to localStorage
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-settings-title"
    >
      <div 
        ref={modalRef}
        className="bg-black border border-neon-green/20 rounded-lg p-6 max-w-md w-full mx-4"
        role="document"
        tabIndex={-1}
      >
        <h2 id="cookie-settings-title" className="text-2xl font-semibold text-white mb-4">Cookie Settings</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Essential Cookies</h3>
              <p className="text-gray-400 text-sm">Required for basic functionality</p>
            </div>
            <div className="bg-neon-green/10 text-neon-green px-2 py-1 rounded text-sm">Required</div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Analytics Cookies</h3>
              <p className="text-gray-400 text-sm">Help us improve our website</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.analytics}
                onChange={(e) => setSettings(prev => ({ ...prev, analytics: e.target.checked }))}
                aria-label="Enable analytics cookies"
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer 
                peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full 
                after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-green"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Functional Cookies</h3>
              <p className="text-gray-400 text-sm">Enable enhanced features</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={settings.functional}
                onChange={(e) => setSettings(prev => ({ ...prev, functional: e.target.checked }))}
                aria-label="Enable functional cookies"
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer 
                peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full 
                after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-green"></div>
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            ref={firstFocusableRef}
            onClick={onClose}
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Cancel cookie settings"
          >
            Cancel
          </button>
          <button
            ref={lastFocusableRef}
            onClick={handleSave}
            className="px-4 py-2 bg-neon-green/10 text-neon-green border border-neon-green/50 
              rounded-md hover:bg-neon-green/20 transition-all duration-300"
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
