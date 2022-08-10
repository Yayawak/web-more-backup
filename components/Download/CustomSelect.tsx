import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'
import vectorDown from '@/assets/icons/icon-vectorDown.svg'
import vectorUp from '@/assets/icons/icon-vectorUp.svg'

type Props = {
    optionsList: string[];
    placeHolder: string;
    selectedOption: number;
    setSelectedOption: Dispatch<SetStateAction<number>>;
}

const CustomSelect = ({ optionsList, placeHolder, selectedOption, setSelectedOption }: Props) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    const setSelectedThenCloseDropdown = (index) => {
        setSelectedOption(index);
        setIsOptionsOpen(false);
    };

    const handleKeyDown = (index) => (e) => {
        switch (e.key) {
            case " ":
            case "SpaceBar":
            case "Enter":
                e.preventDefault();
                setSelectedThenCloseDropdown(index);
                break;
            default:
                break;
        }
    };

    const handleListKeyDown = (e) => {
        switch (e.key) {
            case "Escape":
                e.preventDefault();
                setIsOptionsOpen(false);
                break;
            case "ArrowUp":
                e.preventDefault();
                setSelectedOption(
                    selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
                );
                break;
            case "ArrowDown":
                e.preventDefault();
                setSelectedOption(
                    selectedOption == optionsList.length - 1 ? 0 : selectedOption + 1
                );
                break;
            default:
                break;
        }
    };

    return (
        <div className="flex justify-start">
            <div className="w-full">
                <button
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={isOptionsOpen}
                    className={`${(selectedOption === -1) && "text-[#6A6A6A]"} flex justify-between items-center
                     border sm:border-2 border-[#212121] bg-white rounded-lg w-full text-left py-2 px-3 sm:py-4 sm:px-7
                     hover:cursor-pointer hover:border-[#F8560A] focus:border-[#F8560A] focus:outline-none  active:border-[#F8560A]`}
                    onClick={toggleOptions}
                    onKeyDown={handleListKeyDown}
                >
                    <div>
                        {(selectedOption > -1) ? optionsList[selectedOption] : placeHolder}
                    </div>
                    <div className='w-[20px] h-[10px] sm:w-[24px] sm:h-[14px] relative'>
                        {
                            isOptionsOpen ?
                                <Image src={vectorUp} alt="vector down" layout='fill' />
                                :
                                <Image src={vectorDown} alt="vector down" layout='fill' />
                        }
                    </div>
                </button>
                <ul
                    className={`list-none ${isOptionsOpen ? "block " : "hidden"} bg-white border sm:border-2 border-black mt-1 sm:mt-2 rounded-lg `}
                    role="listbox"
                    aria-activedescendant={optionsList[selectedOption]}
                    tabIndex={-1}
                    onKeyDown={handleListKeyDown}
                >
                    {optionsList.map((option, index) => (
                        <li
                            className={`border-black px-2 py-1 sm:py-2 sm:px-7 
                            ${(index == optionsList.length - 1) ? "border-b-0" : "border-b sm:border-b-2"}
                            ${(selectedOption == index) && "text-[#F8560A]"}`}
                            key={option}
                            id={option}
                            role="option"
                            aria-selected={selectedOption == index}
                            tabIndex={0}
                            onKeyDown={handleKeyDown(index)}
                            onClick={() => {
                                setSelectedThenCloseDropdown(index);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>

            <style jsx lang="scss">{`
                ul.options li:active,
                ul.options li:focus,
                ul.options li:hover,
                ul.options li[aria-selected="true"] {
                    background: #F8560A;
                    cursor: pointer;
                }
      `}</style>
        </div >
    );
};
export default CustomSelect;