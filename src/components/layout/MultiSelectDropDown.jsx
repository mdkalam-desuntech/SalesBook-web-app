import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

function MultiSelectDropDown({
  options = [],
  selectedOptions = [],
  handleSelect,
}) {
  return (
    <div className="w-full relative ">
      <Listbox as="div" className="space-y-1">
        {({ open }) => (
          <>
            <div className="relative">
              <span className="inline-block w-full rounded-md shadow-sm">
                <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-2  py-2 text-left focus:outline-none  sm:text-sm">
                  <span className=" w-24  ">
                    {selectedOptions.length > 0 ? (
                      <>
                        <span className=" mr-4 bg-gray-200 py-1.5 text-sm px-3 rounded	">
                          {selectedOptions[0].name}
                        </span>
                        {selectedOptions.length > 1 && (
                          <span className=" mr-4 bg-gray-200 py-1.5 text-sm px-3 rounded">
                            + {selectedOptions.length}
                            {" ..."}
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="text-gray-500">Select options</span>
                    )}
                  </span>
                </Listbox.Button>
              </span>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaAngleDown />
              </div>
            </div>
            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  value={option}
                  className={({ active }) =>
                    `${
                      active ? "text-black bg-gray-200" : "text-gray-900"
                    } cursor-default select-none relative py-2 pl-3 pr-9`
                  }
                  onClick={() => handleSelect(option)}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-semibold" : "font-normal"
                        } block truncate`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-blue-900" : "text-indigo-600"
                          } absolute inset-y-0 right-0 flex items-center pr-4`}
                        >
                          <FaCheck />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
}

export default MultiSelectDropDown;
