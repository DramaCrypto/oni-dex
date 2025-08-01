// @ts-nocheck
import ExportedImage from "next-image-export-optimizer";
import { Select, SelectItem, Avatar } from "@heroui/react";
import React from "react";

interface PropsType {
    className?: string,
    value?: any
    onChange?: any
    options?: any
    defaultSelectedKeys?: any
    label?: string
    placeholder?: string
    selectedKeys?:any
}
const MySelect = ({ className, value, onChange, options, label, defaultSelectedKeys = 0, selectedKeys, placeholder = '' }: PropsType) => {

    const handleChange = (event) => {
        onChange(event.target.value);
    };
    return (

        <Select
            className={`w-full rounded-[5px] ${className}`}
            classNames={{
                label: "group-data-[filled=true]:-translate-y-5",
                trigger: "min-h-16 flex items-center justify-between",
                listboxWrapper: "max-h-[400px] rounded-2xl w-full bg-[#0F1021] border border-[#272838]",
                selectorIcon : 'right-[6px]',
                value : ' p-5'
            }}
            value={value}
            label={label}
            aria-label = 'select'
            selectedKeys={[selectedKeys]}
            onChange = {handleChange}
            items={options}
            defaultSelectedKeys={[defaultSelectedKeys]}
            placeholder = {placeholder}
            listboxProps={{
                itemClasses: {
                    base: [
                        "rounded-md",
                        "text-default-500",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-default-100",
                        "dark:data-[hover=true]:bg-default-50",
                        "data-[selectable=true]:focus:bg-default-50",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500",
                    ],
                },
            }}
            popoverProps={{
                classNames: {
                    base: "before:bg-default-200",
                    content: "p-0 border-small border-divider bg-background",
                },
            }}
            renderValue={(items) => {
                return items.map((item) => (
                    <div key={item.key} className="flex items-center gap-2 ">
                        {item?.data?.icon && <ExportedImage
                            src={item?.data?.icon}
                            alt="background"
                            className="w-[22px] h-[22px]"
                            placeholder=""
                            width={22}
                            height={22}
                        />}
                        <span>{item.data?.label}</span>
                    </div>
                ));
            }}
            variant="bordered"
        >
            {(option) => (
                <SelectItem key={option?.key} textValue={option?.label} className="">
                    <div className="flex gap-2 items-center">
                        {option?.icon && <ExportedImage
                            src={option?.icon}
                            alt="background"
                            className="w-[22px] h-[22px]"
                            placeholder=""
                            width={22}
                            height={22}
                        />}
                        <span className="text-small">{option?.label}</span>
                    </div>
                </SelectItem>
            )}
        </Select>
    );
};

export default MySelect;
