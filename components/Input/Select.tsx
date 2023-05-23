import { ChangeEvent, Dispatch, FC, SetStateAction, useMemo } from 'react'
// import { Select, initTe } from
// import { Select, initTe } from "tw-elements"
// initTe({Select})
// import Select from 'react-select'

interface IInputSelectProps {
  items: { [key: string]: string }
  // items: { [key: string]: int }
  placeholder?: string
  className?: string
  state?: any
  setState?: Dispatch<SetStateAction<any>>
}

const InputSelect: FC<IInputSelectProps> = ({ items, placeholder, state, setState, className }) => {
  // const selected = useMemo(() => items[Object.keys(items)[0]], [items])
  const handleChange = (e: ChangeEvent<HTMLSelectElement>, setState: any) => {
    if (e)
      // console.log(e.target.value)
      setState(e.target.value);
  }
  return (
    // <div className='p-2'>
    <select
      // defaultValue={selected}
      value={state}
      onChange={e => handleChange(e, setState)}
      placeholder={placeholder}

      // data-te-select-init
      // multiple
      // data-te-
        // w-full py-[12px] px-[8px]
      // className={`
      //   w-full py-2 px-4
      //   // w-full
      //   outline-none
      //   border
      //   border-black
      //   border-[1px] rounded-[8px]
      //   border-opacity-90
      //   ${className}

      //   `
      // }
      // className='bg-gray-50 border border-gray-300 text-gray-900
      //   text-gray-900 text-sm rounded-lg focus:ring-blue-500
      //   block w-full p-2.5 dark:bg-gray700
      //   dark:border-gray-600 dark:placeholder-gray-400
      //   dark:text-white dark:focus:ring-blue-500
      //   // dark:focus:border-blue-500
      // '
      // style={{padding: '0.5rem'}}
      // className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
        {/* <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> */}

        {
        Object.keys(items).map((item) => (
          <option key={item} value={item}
            // style={{ padding: '0.5rem'}}
          >
            {items[item]}
          </option>
      ))}
    </select>
  )
}

export default InputSelect
