import { ChangeEvent, Dispatch, FC, SetStateAction, useMemo } from 'react'

interface IInputSelectProps {
  items: { [key: string]: string }
  placeholder?: string
  className?: string
  state?: any
  setState?: Dispatch<SetStateAction<any>>
}

const InputSelect: FC<IInputSelectProps> = ({ items, placeholder, state, setState }) => {
  // const selected = useMemo(() => items[Object.keys(items)[0]], [items])
  const handleChange = (e: ChangeEvent<HTMLSelectElement>, setState: any) => {
    if (e)
      setState(e.target.value);
  }
  return (
    <>
      <select
        // defaultValue={selected}
        value={state}
        onChange={e => handleChange(e, setState)}
        placeholder={placeholder}
        className={`w-full py-[8px] px-[8px] outline-none border-black border-[1px] rounded-[8px]`}
      >
        {Object.keys(items).map((item) => (
          <option key={item} value={item}>
            {items[item]}
          </option>
        ))}
      </select>
    </>
  )
}

export default InputSelect
