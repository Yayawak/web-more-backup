import { ChangeEvent, Dispatch, FC, SetStateAction, useMemo } from 'react'
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
      console.log(e.target.value)
      setState(e.target.value);
  }
  return (
    // <div className='p-2'>
    <div className=''>
      <select
        // defaultValue={selected}
        value={state}
        onChange={e => handleChange(e, setState)}
        placeholder={placeholder}
          // w-full py-[12px] px-[8px]
        className={`
          w-full py-2 px-4
          // w-full
          outline-none
          border
          border-black
          border-[1px] rounded-[8px]
          border-opacity-90
          ${className}
          `
        }
        // style={{padding: '0.5rem'}}
      >
        {Object.keys(items).map((item) => (
          <option key={item} value={item}
            style={{ padding: '0.5rem'}}
          >
            {items[item]}
          </option>
        ))}
      </select>
    </div>
  )
}

export default InputSelect
