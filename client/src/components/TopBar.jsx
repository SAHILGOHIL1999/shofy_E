import React, { useState } from 'react';

function TopBar() {
  // 1. State for Language Dropdown
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
  const languages = ['Spanish', 'Russian', 'Portuguese'];

  // 2. State for Currency Dropdown
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState('USD');
  const currencies = ['EUR', 'CHF', 'GBP', 'KWD'];

  // 3. State for Setting Dropdown
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  // Options precisely matching the dropdown list in image_8273a9.png
  const settingsOptions = ['My Profile', 'Wishlist', 'Cart', 'Logout'];

  // Helper function to close all dropdowns simultaneously
  const closeAllDropdowns = () => {
    setIsLangOpen(false);
    setIsCurrencyOpen(false);
    setIsSettingOpen(false);
  };

  return (
    <>
      {/* 
        Main Top Bar Container 
        - relative & z-[9999]: Safeguards the stacking layers so that dropdown menus 
          sit on top of the main header component and hero section elements below.
      */}
      <div className="bg-white border-b border-gray-100 py-3 px-6 text-sm text-gray-600 flex justify-between items-center select-none relative z-[9999]">
        
        {/* Left Side: Social Stats and Main Contact Number */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 hover:text-[#7a1533] cursor-pointer transition-colors duration-200">
            <i className="fab fa-facebook-f"></i> 7500k Followers
          </span>
          <span className="flex items-center gap-1">
            <i className="fas fa-phone"></i> +(402) 763 282 46
          </span>
        </div>

        {/* Right Side: Interactive Selection Menus */}
        <div className="flex items-center gap-6">
          
          {/* 1. Language Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setIsLangOpen(!isLangOpen);
                setIsCurrencyOpen(false);
                setIsSettingOpen(false);
              }}
              className="cursor-pointer flex items-center gap-1 hover:text-[#7a1533] transition-colors focus:outline-none font-medium"
            >
              {currentLang}{' '}
              <i className={`fas fa-chevron-down text-[10px] transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {isLangOpen && (
              <>
                <div className="fixed inset-0 z-[9998]" onClick={closeAllDropdowns} />
                <div className="absolute right-0 mt-2 w-25 rounded border border-gray-100 bg-white py-1 shadow-lg z-[9999]">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsLangOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#7a1533] transition-colors font-normal"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* 2. Currency Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setIsCurrencyOpen(!isCurrencyOpen);
                setIsLangOpen(false);
                setIsSettingOpen(false);
              }}
              className="cursor-pointer flex items-center gap-1 hover:text-[#7a1533] transition-colors focus:outline-none font-medium"
            >
              {currentCurrency}{' '}
              <i className={`fas fa-chevron-down text-[10px] transition-transform duration-200 ${isCurrencyOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {isCurrencyOpen && (
              <>
                <div className="fixed inset-0 z-[9998]" onClick={closeAllDropdowns} />
                <div className="absolute right-0 mt-2 w-20 rounded border border-gray-100 bg-white py-1 shadow-lg z-[9999]">
                  {currencies.map((currency) => (
                    <button
                      key={currency}
                      onClick={() => {
                        setCurrentCurrency(currency);
                        setIsCurrencyOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#7a1533] transition-colors font-normal"
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* 3. Setting Dropdown */}
          <div className="relative">
            <button 
              onClick={() => {
                setIsSettingOpen(!isSettingOpen);
                setIsLangOpen(false);
                setIsCurrencyOpen(false);
              }}
              className="cursor-pointer flex items-center gap-1 hover:text-[#7a1533] transition-colors focus:outline-none font-medium"
            >
              Setting <i className={`fas fa-chevron-down text-[10px] transition-transform duration-200 ${isSettingOpen ? 'rotate-180' : ''}`}></i>
            </button>

            {isSettingOpen && (
              <>
                {/* Global Backdrop overlay layer handles clicking outside to drop selections */}
                <div className="fixed inset-0 z-[9998]" onClick={closeAllDropdowns} />
                
                {/* Dropdown Menu Container */}
                <div className="absolute right-0 mt-2 w-25 rounded border border-gray-100 bg-white py-1 shadow-lg z-[9999]">
                  {settingsOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        // Handle your actions here (e.g., navigate to profile, execute logout, etc.)
                        console.log(`Selected setting option: ${option}`);
                        setIsSettingOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#7a1533] transition-colors font-normal"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </>
  );
}

export default TopBar;