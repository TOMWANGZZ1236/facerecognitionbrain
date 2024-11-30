import React, { useState } from 'react';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('stats');
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const toggleAccordion = (accordionId) => {
        setOpenAccordion(openAccordion === accordionId ? null : accordionId);
    };

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="hidden sm:block">
                <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" role="tablist">
                    <li className="w-full">
                        <button onClick={() => handleTabClick('stats')} className={`inline-block w-full p-4 ${activeTab === 'stats' ? 'bg-gray-50 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-600'} focus:outline-none`} role="tab" aria-selected={activeTab === 'stats'}>Statistics</button>
                    </li>
                    <li className="w-full">
                        <button onClick={() => handleTabClick('about')} className={`inline-block w-full p-4 ${activeTab === 'about' ? 'bg-gray-50 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-600'} focus:outline-none`} role="tab" aria-selected={activeTab === 'about'}>Services</button>
                    </li>
                    <li className="w-full">
                        <button onClick={() => handleTabClick('faq')} className={`inline-block w-full p-4 ${activeTab === 'faq' ? 'bg-gray-50 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-600'} focus:outline-none`} role="tab" aria-selected={activeTab === 'faq'}>FAQ</button>
                    </li>
                </ul>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-600">
                {activeTab === 'stats' && <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                    {/* Content for Statistics tab */}
                </div>}
                {activeTab === 'about' && <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                    {/* Content for Services tab */}
                </div>}
                {activeTab === 'faq' && <div className="p-4 bg-white rounded-lg dark:bg-gray-800">
                    {/* Content for FAQ tab */}
                    <div id="accordion-flush" data-accordion="collapse">
                        {/* Repeat accordion items as needed */}
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default TabComponent;
