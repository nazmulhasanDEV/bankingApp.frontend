import React, { useState } from "react";

export function Tabs({ children }) {
  function findActiveTab(a) {
    return a.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) return i;

      return accumulator;
    }, 0);
  }

  function tabValidator(tab) {
    return tab.type.displayName === "Tab" ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));
  return (
    <>
      <div className="flex gap-2 justify-start bg-blue-600">
        {children.map((item, i) => {
          return (
            <>
              {tabValidator(item) && (
                <Tab
                  key={"tab-{i}"}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </Tab>
              )}
            </>
          );
        })}
      </div>
      <div className="card">
        {children.map((item, i) => {
          return (
            <div key={i} className={` ${i === activeTab ? "visible" : "hidden"} text-gray-primary text-semi-12`}>
              {item.props.component}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tab({ children, activeTab, currentTab, setActiveTab }) {
  const clipPath = "polygon(50% 0%, 100% 0, 100% 35%, 100% 74%, 63% 74%, 50% 100%, 36% 74%, 0 74%, 0% 35%, 0 0)";
  return (
    <>
      <div
        className={`px-4 flex items-center cursor-pointer 
      ${activeTab === currentTab ? "clip--polygon pb-6" : ""}`}
        role="button"
        tabIndex="0"
        onClick={() => setActiveTab(currentTab)}
        style={{ clipPath: activeTab === currentTab ? clipPath : 'none' }}
      >
        <p className={`${activeTab === currentTab ? "text-purple-secondary" : "text-gray-secondary"} text-semibold-18 cursor-pointer hover:text-purple-secondary`}>{children}</p>
      </div>
    </>
  );
}

Tab.displayName = "Tab";
