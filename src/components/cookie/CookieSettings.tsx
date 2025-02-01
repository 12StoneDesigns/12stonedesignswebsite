import React, { useState } from 'react';

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

  const handleSave = () => {
    // Save cookie settings to localStorage
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-black border border-neon-green/20 rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-semibold text-white mb-4">Cookie Settings</h2>
        
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
            onClick={onClose}
            className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-neon-green/10 text-neon-green border border-neon-green/50 
              rounded-md hover:bg-neon-green/20 transition-all duration-300"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsPanel;
