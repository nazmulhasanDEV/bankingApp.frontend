import React, { useState } from "react";

export function TabsNew({ children }) {
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
      <div className="flex gap-2 justify-start mx-6 border-b-[1px] border-opacity-50 border-gray-light">
        {children.map((item, i) => {
          return (
            <>
              {tabValidator(item) && (
                <TabNew
                  key={"tab-{i}"}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </TabNew>
              )}
            </>
          );
        })}
      </div>
      <div className="p-5">
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

export function TabNew({ children, activeTab, currentTab, setActiveTab }) {
  return (
    <>
      <div
        className={`px-4 py-3 cursor-pointer 
      ${activeTab === currentTab ? "border-b-[1px] border-purple-secondary" : ""}`}
        role="button"
        tabIndex="0"
        onClick={() => setActiveTab(currentTab)}
      >
        <p className={`${activeTab === currentTab ? "text-purple-secondary" : "text-gray-secondary"} text-semibold-18 cursor-pointer hover:text-purple-secondary`}>{children}</p>
      </div>
    </>
  );
}

TabNew.displayName = "Tab";
