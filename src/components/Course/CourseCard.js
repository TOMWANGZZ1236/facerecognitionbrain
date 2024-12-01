// import React, { useState } from 'react';

// const CourseCard = ({CourseName, Time, Students, Attendence, Lectures}) => {
//     const [activeTab, setActiveTab] = useState('Main');
//     const [openAccordion, setOpenAccordion] = useState(null);

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
//         <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group relative">
//             <div className="sm:block">
//                 <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" role="tablist">
//                     <li className="w-full">
//                         <button onClick={() => handleTabClick('Main')} className={`inline-block w-full p-4 ${activeTab === 'Main' ? 'bg-gray-50 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-600'} focus:outline-none`} role="tab" aria-selected={activeTab === 'stats'}>Main</button>
//                     </li>
//                     <li className="w-full">
//                         <button onClick={() => handleTabClick('Edit')} className={`inline-block w-full p-4 ${activeTab === 'faq' ? 'bg-gray-50 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-600'} focus:outline-none`} role="tab" aria-selected={activeTab === 'faq'}>Edit</button>
//                     </li>
//                 </ul>
//             </div>
//             <div className="border-t border-gray-200 dark:border-gray-600">
//                 {activeTab === 'Main' && <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
//                     {/* Content for Statistics tab */}
//                  <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
//                         <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
//                             <div className="flex flex-col items-center justify-center">
//                                 <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
//                                 <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
//                             </div>
//                             <div className="flex flex-col items-center justify-center">
//                                 <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
//                                 <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
//                             </div>
//                             <div className="flex flex-col items-center justify-center">
//                                 <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
//                                 <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
//                             </div>
//                             <div className="flex flex-col items-center justify-center">
//                                 <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
//                                 <dd className="text-gray-500 dark:text-gray-400">Contributors</dd>
//                             </div>
//                             <div className="flex flex-col items-center justify-center">
//                                 <dt className="mb-2 text-3xl font-extrabold">90+</dt>
//                                 <dd className="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
//                             </div>
//                             <div className="flex flex-col items-center justify-center">
//                                 <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
//                                 <dd className="text-gray-500 dark:text-gray-400">Organizations</dd>
//                             </div>
//                         </dl>
//                     </div>

//                 </div>}
//                 {activeTab === 'Edit' && <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
//                     {/* Content for FAQ tab */}
//                     <div id="accordion-flush" data-accordion="collapse">
//                         {/* Repeat accordion items as needed */}
//                     </div>
//                 </div>}
//             </div>
//         </div>
//     );
// };

// export default CourseCard;



import React, { useState } from 'react';

const CourseCard = () => {
    const [activeTab, setActiveTab] = useState('Main'); // Default to the 'Statistics' tab

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" role="tablist">
                <li className="w-full">
                    <button onClick={() => handleTabClick('Main')} className={`inline-block w-full p-4 ${activeTab === 'Main' ? 'text-blue-600' : 'bg-gray-50 hover:bg-gray-100'} focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600`} role="tab" aria-selected={activeTab === 'Main'}>Main</button>
                </li>
                <li className="w-full">
                    <button onClick={() => handleTabClick('Edit')} className={`inline-block w-full p-4 ${activeTab === 'Edit' ? 'text-blue-600' : 'bg-gray-50 hover:bg-gray-100'} focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600`} role="Edit" aria-selected={activeTab === 'Edit'}>FAQ</button>
                </li>
            </ul>
            <div className="border-t border-gray-200 dark:border-gray-600">
                {activeTab === 'Main' && (
                    <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                        <dl className="grid grid-cols-1 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 dark:text-white sm:p-8">
                            {statsData.map((item, index) => (
                                <div key={index} className="flex flex-col items-center justify-center">
                                    <dt className="mb-2 text-3xl font-extrabold">{item.value}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">{item.label}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                )}
                {activeTab === 'Edit' && (
                    <div className="p-4 bg-white rounded-lg dark:bg-gray-800">
                        {/* FAQ content and accordions here */}
                    </div>
                )}
            </div>
        </div>
    );
};

const statsData = [
    { value: '60', label: 'Students' },
    { value: '98%', label: 'Attendence' },
    { value: '15', label: 'Lectures' },
];

export default CourseCard;
